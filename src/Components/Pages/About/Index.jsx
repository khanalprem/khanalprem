import React, { useEffect } from 'react';
import PmcvData from '../../PmcvData';
import ContactCard from '../../Common/ContactCard';
import Skills from '../../Common/Skills';

const Index = () => {
  const aboutElements = PmcvData.filter((items) => items.name === 'about')[0];

  useEffect(() => {
    document.title = 'About';
  }, []);

  return (
    <main className="about-page">
      <div className="about-page_title mb-30">
        <h3 className="is-capitalize">{aboutElements.title}</h3>
      </div>
      <div className="about-page_body">
        <div className="is-flex is-start is-align-start is-gap-30 about-content_wrap">
          <div className="about-figure">
            <img src={aboutElements.img} alt="" />
          </div>
          <div className="about-content">
            <h4 className="mb-20">{aboutElements.title}</h4>
            <div className="about-des">
              {aboutElements.desc.map((items) => (
                <p>{items.content}</p>
              ))}
            </div>

            <div className="contact-info mt-30">
              <h4 className="mb-20">{aboutElements.infoTitle}</h4>

              <ContactCard />
            </div>
            <div className="mt-30">
              <h4 className="mb-20">{aboutElements.skillsTitle}</h4>
              <Skills />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Index;
