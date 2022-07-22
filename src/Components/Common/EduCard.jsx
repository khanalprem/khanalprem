import React from 'react';

const EduCard = ({ startTime, endTime, name, organization }) => {
  return (
    <div className="pm-card ">
      <div className="pm-body pd-15">
        <p className="fs-md">
          <time className="start">{startTime}</time>-
          <time className="end">{endTime}</time>
        </p>
        <h5 className="mt-10 mb-05">{name}</h5>
        <p className="clr-body-900 fw-500">{organization}</p>
      </div>
    </div>
  );
};

export default EduCard;
