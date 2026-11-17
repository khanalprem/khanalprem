import type { CSSProperties } from 'react';

/*
  The hero's landscape, generated once at build time from a fixed seed so it
  is the same on every build: the snow-capped high range far off, the
  mid-hills in front of it, and nearest of all a jagged series that reads as
  a market chart. Nothing here is real data, and nothing is labelled as such.
*/

const WIDTH = 1600;
const HEIGHT = 520;
const TERRAIN_LAYERS = 7;
/** The farthest layers are the high range and carry snow. */
const SNOW_LAYERS = 2;
/** Where along the front series the accent line stops and the marker sits, as a share of the width. */
const NOW = 0.82;
const TAU = Math.PI * 2;

function seeded(seed: number) {
  let state = seed;
  return () => {
    state = (state + 0x6d2b79f5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Point = [x: number, y: number];
type Wave = { weight: number; length: number; phase: number };

const lerp = (from: number, to: number, t: number) => from + (to - from) * t;
const smoothstep = (edge0: number, edge1: number, x: number) => {
  const t = Math.min(1, Math.max(0, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
};

const path = (points: Point[]) =>
  points.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${Math.round(x)} ${Math.round(y)}`).join('');

/** Closes a ridge below the view, so one path can carry both its fill and its stroke. */
const closed = (d: string) => `${d}L${WIDTH + 40} ${HEIGHT + 40}L-40 ${HEIGHT + 40}Z`;

/** The land rises toward the right, leaving the left of the hero to the text. */
const massif = (x: number) => 0.1 + 0.9 * smoothstep(0.42, 0.8, x / WIDTH) - 0.12 * smoothstep(0.86, 1.05, x / WIDTH);

/** Rolling ground, between 0 and 1. */
const rolling = (x: number, waves: Wave[]) =>
  0.5 + 0.5 * waves.reduce((sum, w) => sum + w.weight * Math.sin((x / w.length) * TAU + w.phase), 0);

/** Sharp crests, between 0 and 1. */
const ridged = (x: number, waves: Wave[]) =>
  waves.reduce((sum, w) => sum + w.weight * (1 - Math.abs(Math.sin((x / w.length) * Math.PI + w.phase))), 0);

function buildLayers() {
  const random = seeded(2013);
  const waves = (lengths: number[]): Wave[] =>
    lengths.map((length, i) => ({ weight: [0.56, 0.28, 0.16][i], length, phase: random() * TAU }));

  const terrain = Array.from({ length: TERRAIN_LAYERS }, (_, i) => {
    const depth = i / (TERRAIN_LAYERS - 1);
    const base = lerp(396, 470, depth);
    const height = lerp(340, 96, depth);
    // The far range is all sharp crests; the hills nearer the viewer soften but never go smooth.
    const sharpness = lerp(1, 0.3, smoothstep(0.1, 0.9, depth));
    const roughness = lerp(7, 2, depth);
    const peaks = waves([lerp(610, 720, depth), lerp(270, 320, depth), lerp(118, 140, depth)]);
    const ground = waves([lerp(820, 640, depth), lerp(360, 300, depth), lerp(170, 140, depth)]);
    const points: Point[] = [];
    for (let x = -40; x <= WIDTH + 40; x += 10) {
      const crest = Math.pow(ridged(x, peaks), 1.2);
      const shape = lerp(rolling(x, ground), crest, sharpness);
      const rock = (random() - 0.5) * roughness * massif(x);
      points.push([x, base - height * massif(x) * shape + rock]);
    }

    // Snow lies above a ragged line partway up the range.
    let snow: { edge: string; level: number } | undefined;
    if (i < SNOW_LAYERS) {
      const level = base - height * 0.36;
      const edge: Point[] = [];
      for (let x = WIDTH + 40; x >= -40; x -= 12) edge.push([x, level + (random() - 0.5) * 24]);
      snow = { edge: `M-40 -40L${WIDTH + 40} -40${path(edge).replace('M', 'L')}Z`, level };
    }

    return { d: closed(path(points)), top: base - height, snow };
  });

  // The front series follows a low hill but wanders like a price.
  const base = 486;
  const hill = waves([700, 250, 120]);
  const series: Point[] = [];
  let wander = 0;
  for (let x = -40; x <= WIDTH + 40; x += 8) {
    wander = wander * 0.9 + (random() - 0.5) * 16;
    series.push([x, base - 62 * massif(x) * rolling(x, hill) + wander]);
  }
  const split = series.findIndex(([x]) => x >= WIDTH * NOW);

  return {
    terrain,
    front: {
      d: path(series),
      top: base - 80,
      marker: series[split],
    },
  };
}

const layers = buildLayers();

/** How strongly a layer is tinted at its crest, by day and after dark. */
const layerStyle = (index: number, light: number, dark: number) =>
  ({
    '--i': index,
    '--lag': (TERRAIN_LAYERS - index) * 14,
    '--haze-light': `${light}%`,
    '--haze-dark': `${dark}%`,
  }) as CSSProperties;

function Haze({ id, top }: { id: string; top: number }) {
  return (
    <linearGradient id={id} gradientUnits="userSpaceOnUse" x1="0" y1={top} x2="0" y2={HEIGHT}>
      <stop offset="0" style={{ stopColor: 'color-mix(in srgb, var(--ridge) var(--haze), var(--bg))' }} />
      <stop offset="1" style={{ stopColor: 'var(--bg)' }} />
    </linearGradient>
  );
}

export default function Ridgelines() {
  const svg = { viewBox: `0 0 ${WIDTH} ${HEIGHT}`, preserveAspectRatio: 'none' as const };
  const [markerX, markerY] = layers.front.marker;

  return (
    <div className="ridges" aria-hidden="true">
      {layers.terrain.map((layer, i) => (
        <div key={i} className="ridge-layer is-terrain" style={layerStyle(i, 20 + i * 2, 22 + i * 4.5)}>
          <svg {...svg}>
            <defs>
              <Haze id={`haze-${i}`} top={layer.top} />
              <path id={`ridge-${i}`} d={layer.d} strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
              {layer.snow && (
                <>
                  <clipPath id={`snowline-${i}`}>
                    <path d={layer.snow.edge} />
                  </clipPath>
                  {/* Brightest at the summits, thinning toward the snow line. */}
                  <linearGradient id={`snow-${i}`} gradientUnits="userSpaceOnUse" x1="0" y1={layer.top} x2="0" y2={layer.snow.level}>
                    <stop offset="0" style={{ stopColor: 'var(--snow)' }} />
                    <stop offset="1" style={{ stopColor: 'var(--snow)', stopOpacity: 0.35 }} />
                  </linearGradient>
                </>
              )}
            </defs>
            <use href={`#ridge-${i}`} fill={`url(#haze-${i})`} />
            {layer.snow && <use href={`#ridge-${i}`} fill={`url(#snow-${i})`} clipPath={`url(#snowline-${i})`} />}
            <use
              href={`#ridge-${i}`}
              fill="none"
              stroke="var(--ridge)"
              strokeOpacity={0.55 + i * 0.05}
              strokeWidth={layer.snow ? 1.25 : 1}
            />
          </svg>
        </div>
      ))}

      <div className="ridge-layer" style={layerStyle(TERRAIN_LAYERS, 34, 52)}>
        <svg {...svg}>
          <defs>
            <Haze id="haze-front" top={layers.front.top} />
            <path
              id="ridge-front"
              d={layers.front.d}
              pathLength={1}
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
            />
            {/* The accent line stops at the marker; the rest of the series is still to come. */}
            <clipPath id="ridge-so-far">
              <rect x="0" y="0" width={markerX} height={HEIGHT} />
            </clipPath>
          </defs>
          <path d={closed(layers.front.d)} fill="url(#haze-front)" />
          <use href="#ridge-front" fill="none" stroke="var(--ridge)" strokeOpacity="0.6" strokeWidth="1" />
          <g clipPath="url(#ridge-so-far)">
            <use className="ridge-signal" href="#ridge-front" fill="none" stroke="var(--accent)" strokeWidth="1.5" />
          </g>
        </svg>
        <span
          className="ridge-marker"
          style={{ left: `${(markerX / WIDTH) * 100}%`, top: `${(markerY / HEIGHT) * 100}%` }}
        />
      </div>
    </div>
  );
}
