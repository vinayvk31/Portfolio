import React from 'react';

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBriefcase,
    // faSchool,
    faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';

const workIcon = {
    icon: <FontAwesomeIcon icon={faBriefcase} />,
    iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
};
// const schoolIcon = {
//     icon: <FontAwesomeIcon icon={faSchool} />,
//     iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
// };
const starIcon = {
    icon: <FontAwesomeIcon icon={faGraduationCap} />,
    iconStyle: { background: 'rgb(16, 204, 82)', color: '#fff' },
};

function Experience() {
    const timeline = [
        {
            icon: starIcon,
            date: 'Aug 2022 - Dec 2023',
            title: 'Master of Science (M.S) ',
            subtitle: 'Information Technology',
            desc: 'University of Cincinnati, OHIO, USA',
        },
        {
            icon: starIcon,
            date: 'Aug 2016 - Aug 2020',
            title: 'Bachelor of Technology (B.Tech) ',
            subtitle: 'Information Technology',
            desc: 'C.V.R College of Engineering, India',
        },
        {
            icon: workIcon,
            date: 'Jun 2014 - July 2016',
            title: 'High School - Intermediate',
            subtitle: 'Telangana State Board of Intermediate Education ',
            desc: ' Vishra Junior College,India',
        },
        // {
        //     icon: schoolIcon,
        //     date: '2008 - 2017',
        //     title: 'Secondary Schoool',
        //     subtitle: 'State board ',
        //     desc: 'T.R.R HIGH SCHOOL ,HYDERABAD',
        // },
    ];

    return (
        <>
            <h1 className='SkillsHeading' style={{marginTop:'100px'}}> My <b> Education </b> </h1>

            <div className="App" style={{marginTop:'60px',minHeight:'70vh'}}>
                <VerticalTimeline>
                    {timeline.map((t, i) => {
                        const contentStyle =
            i === 0
                ? { background: 'rgb(33, 150, 243)', color: '#fff' }
                : undefined;
                        const arrowStyle =
            i === 0
                ? { borderRight: '7px solid  rgb(33, 150, 243)' }
                : undefined;

                        return (
                            <VerticalTimelineElement
                                key={i}
                                className="vertical-timeline-element--work"
                                contentStyle={contentStyle}
                                contentArrowStyle={arrowStyle}
                                date={t.date}
                                {...t.icon}
                            >
                                {t.title ? (
                                    <React.Fragment>
                                        <h3 className="vertical-timeline-element-title">{t.title}</h3>
                                        {t.subtitle && (
                                            <h4 className="vertical-timeline-element-subtitle">
                                                {t.subtitle}
                                            </h4>
                                        )}
                                        {t.desc && <p>{t.desc}</p>}
                                    </React.Fragment>
                                ) : undefined}
                            </VerticalTimelineElement>
                        );
                    })}
                </VerticalTimeline>
            </div>
        </>
    );
}

export default Experience;
