import React, { useEffect } from 'react';
// import useWindowDimensions from '../../Common/WindowDimension';
import { Link } from 'react-router-dom';
import PmcvData from '../../PmcvData';
import SocialIcons from '../../Common/SocialIcons';
import {
  IoArrowDownCircleOutline,
  IoChatbubbleEllipsesOutline,
} from 'react-icons/io5';

const Index = () => {
  // const { height } = useWindowDimensions();

  const homeElements = PmcvData.filter(
    (items) => items.name === 'home info'
  )[0];

  useEffect(() => {
    document.title = 'Home';
  }, []);
  return (
    <main className="home is-flex is-column is-align-center is-center">
      <div className="home-profile ">
        <figure>
          <img src={homeElements.img} alt="profile" />
        </figure>
        <div className="home-profile_info">
          <h2 className="mt-15 mb-05 clr-body">{homeElements.heading}</h2>
          <p className="fw-500">{homeElements.desination}</p>
          <SocialIcons />
          <div className="is-flex is-center is-align-center mt-15 is-gap-15">
            <button className="is-btn is-btn_primary is-gap-10 ">
              <IoArrowDownCircleOutline />
              <span>Download CV</span>
            </button>
            <Link to="/contact" className="is-btn is-btn_secondary is-gap-10">
              <IoChatbubbleEllipsesOutline />
              <span>Let's Chat</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Index;
