import React from 'react';
import Tilt from 'react-parallax-tilt';
import Lottie from 'lottie-react';
import Coder from '../LottieFiles/coder.json';

const About = () => {
    return (                                                                                                                            
        <div className='AboutPage'>
            <div className='AboutText'>
                <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
                <p>
            Hi, my name is <b>Chowdry Vinay Kumar</b> and I am from Cincinnati, Ohio.
            I'm a <b>Full stack developer</b> expertised in Java, Spring Boot, Node.js, Angular and React. <br/><br/>
            I have completed my master's in <b>Information Technology</b> from <b>University of Cincinnati</b>. <br/><br/>
            I love creating projects that explore new things and have better functionalities, you can check out some of my work in the projects section.<br/><br/>
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br/>
            Apart from coding, I love to do <b>travelling, gaming and watching Anime</b> </p>
            </div>

            <div>
                <Tilt>
                    <Lottie
                        className="illustration" 
                        animationData={Coder} 
                        loop={true} 
                    />
                </Tilt>
            </div>

        </div>      

    );
};

export default About;