import React from 'react';
import {FaGithub} from 'react-icons/fa';


const  ProjectBox = ({projectPhoto, projectName}) => {
    const desc = {
        'E-Farm Web AppDesc' : 'Angular,Eclipse IDE, HTML5, CSS3 ,Bootstrap,Firebase ',
        'Complaint AppGithub' : 'https://github.com/chowdrysai/ComplaintApp',
        'ComplaintAppWebsite' : '',

        'Job-PortalDesc' : 'Javascript, Node.js, Express, React, MySQL, HTML4,Bootstrap4',
        'AadviWebsiteGithub' : 'https://github.com/chowdrysai/FoodAppIn',
        'AadviWebsiteWebsite' : '',

        'Food AppDesc':'Javascript, Node.js, Express, React, Redux, MongoDB,JWt Authentication,',
        'FoodAppGithub':'https://github.com/chowdrysai/Aadvi',
        'FoodAppWebsite':''
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