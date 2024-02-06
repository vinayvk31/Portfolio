import React from 'react';
import { FaReact, FaCss3Alt,FaDocker, FaGitAlt,FaAngular, FaGithub,FaAws,FaJava, FaHtml5, FaBootstrap } from 'react-icons/fa';
import { DiNodejs, DiJavascript1,DiMysql } from 'react-icons/di';
import { SiExpress, SiMongodb,SiPostman,SiTypescript,SiSpringboot,SiProtractor } from 'react-icons/si';
const Skills = ({ skill }) => {
    const icon = {
        Javascript: <DiJavascript1 />,
        React: <FaReact />,
        Node: <DiNodejs />,
        Express: <SiExpress />,
        MongoDb: <SiMongodb />,
        Git: <FaGitAlt />,
        MySQL: <DiMysql />,
        Postman:<SiPostman/>,
        Github: <FaGithub/>,
        CSS:<FaCss3Alt/>,
        Bootstrap: <FaBootstrap />,
        Docker:<FaDocker />,
        Html:<FaHtml5 />,
        AWS:<FaAws/>,
        Java:<FaJava/>,
        Angular:<FaAngular/>,
        Typescript:<SiTypescript/>,
        Springboot:<SiSpringboot/>,
        Protractor:<SiProtractor/>
    };

    return (
        <div title={skill} className='SkillBox'>
            {icon[skill]}
        </div>
    );
};

export default Skills;
