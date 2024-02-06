import React from 'react';
import Skills from './Skills';

const Skillset = () => {
    return (
        <>
            <h1 className='SkillsHeading' style={{marginTop:'100px'}}> <b>Professional </b> Skillset</h1>
            <div className='skills'>
        
                <Skills skill='React' />
                <Skills skill='Node' />
                <Skills skill='Express' />
                <Skills skill='MongoDb' />
                <Skills skill='Github' />
                <Skills skill='Javascript' />
                <Skills skill='Html' />
                <Skills skill='Postman' />
                <Skills skill='Docker' />
                <Skills skill='CSS' />
                <Skills skill='Bootstrap'/>
                <Skills skill='AWS' />
                <Skills skill='Java' />
                <Skills skill='Angular' />
                <Skills skill='Typescript' />
                <Skills skill='MySQL' />
                <Skills skill='Springboot' />
                <Skills skill='Protractor' />
            </div>
        </>
    );
};

export default Skillset;