import React from 'react';
import {FaGithub, FaLinkedin,} from 'react-icons/fa';
import {GrMail} from 'react-icons/gr';
import { BsTwitterX } from 'react-icons/bs';




const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer>
            <h4>Developed by <b>Vinay Kumar</b></h4>
            <h4><b>Copyright</b> &copy; {year} CV </h4>
            <div className='footerLinks'>
                <a href="#" target='_blank' rel="noreferrer"><FaGithub/></a>
                <a href="https://www.linkedin.com/in/vinay-kumar-chowdry/" target='_blank' rel="noreferrer"><FaLinkedin/></a>
                <a href='mailTo:c.vinnu6c@gmail.com' target='_blank' rel="noreferrer"><GrMail/></a>
                <a href="#" target="_blank" rel="noreferrer"><BsTwitterX/></a>
            </div>
        </footer>
    );
};

export default Footer;