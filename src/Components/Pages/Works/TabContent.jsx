import React, { useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
const TabContent = ({ tabData }) => {
  const [visible, setVisible] = useState(6);
  const [state, setState] = useState(null);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 6);
  };
  const tabItemLength = tabData.length;

  const tabDataContent = tabData.find((items) => items.id === state);
  return (
    <div className="tab-item is-active tab-item_all">
      <div className="grid-cols_3">
        {tabData.slice(0, visible).map((items) => (
          <div
            className="pm-card works-card"
            onClick={() => {
              setState(items.id);
            }}
          >
            <div className="pm-body pd-15">
              <figure>
                <img src={items.img} alt="" />
              </figure>
              <div className="works-card-details">
                <h5>{items.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className={
          state === tabDataContent?.id ? 'pm-modal pm-modal_show' : 'pm-modal '
        }
      >
        <div className="pm-modal_cntr">
          <span
            className="pm-modal_close"
            onClick={() => {
              setState('');
            }}
          >
            <IoCloseOutline />
          </span>
          <div className="pm-modal_header">
            <h5>{tabDataContent?.name}</h5>
          </div>
          <div className="pm-modal_body">
            <img src={tabDataContent?.img} alt="" />
          </div>
        </div>
      </div>
      <div className="is-flex is-center is-align-center mt-30">
        <button className="is-btn is-btn_secondary" onClick={showMoreItems}>
          <span>
            {visible === 0 || tabItemLength <= visible
              ? `no more content`
              : `load more`}
          </span>
        </button>
      </div>
    </div>
  );
};

export default TabContent;
