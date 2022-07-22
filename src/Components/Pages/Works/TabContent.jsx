import React from 'react';

const TabContent = ({ tabData }) => {
  return (
    <div className="tab-item is-active tab-item_all">
      <div className="grid-cols_3">
        {tabData.map((items) => (
          <div className="pm-card works-card">
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
    </div>
  );
};

export default TabContent;
