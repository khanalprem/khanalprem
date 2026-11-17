import type { Shot as ShotData } from '@/content/site';

type Props = {
  shot: ShotData;
  /** The width the image is shown at, as a `sizes` value, so the browser can pick a file. */
  sizes: string;
  alt: string;
  className?: string;
};

/**
 * A screenshot with two files to choose from: the full capture and an 800px
 * copy. The site is a static export, so the copies are made ahead of time
 * (see the README) instead of by an image server.
 */
export default function Shot({ shot, sizes, alt, className }: Props) {
  return (
    <img
      src={shot.src}
      srcSet={`${shot.small} 800w, ${shot.src} ${shot.width}w`}
      sizes={sizes}
      alt={alt}
      width={shot.width}
      height={shot.height}
      loading="lazy"
      decoding="async"
      className={className}
    />
  );
}
