import React from 'react';
import {FaGithub} from 'react-icons/fa';


const  ProjectBox = ({projectPhoto, projectName}) => {
    const desc = {
        'Library Web AppDesc' : 'Java, Spring Boot, React, HTML5, CSS, Bootstrap4',
        'Library AppGithub' : 'https://github.com/vinayvk31/Library-web-app',
        'Library AppWebsite' : '',

        'Job-PortalDesc' : 'Javascript, Node.js, Express, React, MySQL, HTML4, Bootstrap4',
        'Job-PortalWebsiteGithub' : 'https://github.com/vinayvk31/Job_Portal',
        'Job-PortalWebsiteWebsite' : '',

    };
    let show ='';
    if(desc[projectName + 'Github']===''){
        show='none';
    }
    return (
        <div className='projectBox'> 
            <img className='projectPhoto' src={projectPhoto} alt="Project display" />
            <hr/> 
            <div>
                <br />
                <h3>{projectName}</h3>
                <br />
                {desc[projectName + 'Desc']}
                <br />

                <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank' rel="noreferrer">
                    <button className='projectbtn'><FaGithub/> Github</button>
                </a>

                {/* <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a> */}
            </div>
        </div>
    );
};

export default  ProjectBox;