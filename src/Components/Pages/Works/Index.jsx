import React, { useState, useEffect } from 'react';
import PmcvData from '../../PmcvData';
import Tab from '../../Common/Tab';
import TabContent from './TabContent';

const Index = () => {
  const [state, setState] = useState({ hidden: false, active: 'all' });
  const tabElements = PmcvData.filter((items) => items.name === 'tab')[0];
  const resumeElements = PmcvData.filter((items) => items.name === 'resume')[0];

  const tabContentAll = tabElements.tabContent.filter(
    (items) =>
      items.type === 'web' ||
      items.type === 'web react' ||
      items.type === 'react' ||
      items.type === 'wordpress' ||
      items.type === 'web wordpress'
  );

  const tabContentWeb = tabElements.tabContent.filter(
    (items) => items.type === 'web react' || items.type === 'web'
  );
  const tabContentReact = tabElements.tabContent.filter(
    (items) => items.type === 'web react' || items.type === 'react'
  );
  const tabContentWordpress = tabElements.tabContent.filter(
    (items) => items.type === 'wordpress' || items.type === 'web wordpress'
  );

  useEffect(() => {
    document.title = 'Works';
  }, []);

  return (
    <main className="works-page">
      <div className="page_title mb-30">
        <h3 className="is-capitalize">{resumeElements.resumeTitle}</h3>
      </div>
      <div className="works-page_body">
        <ul className="pm-tab pm-tab_border  is-end fw-600">
          {tabElements.tabNav.map((items) => (
            <Tab
              key={items.id}
              state={state}
              setState={setState}
              name={items.name}
            ></Tab>
          ))}
        </ul>
        <div className="pm-tab-content mt-30">
          {state.active === 'all' && <TabContent tabData={tabContentAll} />}

          {state.active === 'web design' && (
            <TabContent tabData={tabContentWeb} />
          )}
          {state.active === 'react' && <TabContent tabData={tabContentReact} />}
          {state.active === 'wordpress' && (
            <TabContent tabData={tabContentWordpress} />
          )}
        </div>
      </div>
    </main>
  );
};

export default Index;
