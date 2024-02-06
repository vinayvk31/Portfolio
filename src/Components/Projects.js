import React from 'react';
import ProjectBox from './ProjectBox';
import AadviImage from '../images/aadvi.png';
import ComplaintApp from '../images/ComplainApp.png';

const Projects = () => {
    return (
        <div style={{  }}>
            <h1 className='projectHeading'>My <b>Projects</b></h1>
            <div className='project'>
                <ProjectBox projectPhoto={ComplaintApp} projectName="Library Web App" />
                <ProjectBox projectPhoto={AadviImage} projectName="Job-Portal" />
            </div>
        </div>
    );
};

export default Projects;
