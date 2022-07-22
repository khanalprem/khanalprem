import React, { useEffect } from 'react';
import PmcvData from '../../PmcvData';
import EduCard from '../../Common/EduCard';
import Skills from '../../Common/Skills';
const Index = () => {
  const resumeElements = PmcvData.filter((items) => items.name === 'resume')[0];
  const aboutElements = PmcvData.filter((items) => items.name === 'about')[0];

  useEffect(() => {
    document.title = 'Resume';
  }, []);
  return (
    <main className="resume-page">
      <div className="page_title mb-30">
        <h3 className="is-capitalize">{resumeElements.resumeTitle}</h3>
      </div>
      <div className="resume-page_body">
        <div className="education ">
          <h4 className="mb-15">{resumeElements.eduTitle}</h4>
          <div className="grid-cols_3">
            {resumeElements.eduCards.map((items) => (
              <EduCard
                key={items.id}
                startTime={items.startTime}
                endTime={items.endTime}
                name={items.name}
                organization={items.organization}
              />
            ))}
          </div>
        </div>

        <div className="experience mt-40">
          <h4 className="mb-15">{resumeElements.exTitle}</h4>
          <div className="grid-cols_3">
            {resumeElements.exCards.map((items) => (
              <EduCard
                key={items.id}
                startTime={items.startTime}
                endTime={items.endTime}
                name={items.name}
                organization={items.organization}
              />
            ))}
          </div>
        </div>
        <div className="mt-40">
          <h4 className="mb-20">{aboutElements.skillsTitle}</h4>
          <Skills />
        </div>
      </div>
    </main>
  );
};

export default Index;
