import React from 'react';

import facebook from '../../assets/icons/facebook.svg';
import instagram from '../../assets/icons/instagram.svg';
import github from '../../assets/icons/github.svg';
import pin from '../../assets/icons/pin.svg';
import tie from '../../assets/icons/tie.svg';
import avatar_web from '../../assets/avatar_web.svg';
import resume from '../../assets/resume.pdf';

const Sidebar = ()=>{
    const handleEmailMe =()=>{
        //window.open("mailto:gcalcinac@unac.edu.pe")
        console.log('Realizo un click');
    }
    return (
        <div className="sidebar">
            <img src={avatar_web} alt="avatar" className="sidebar__avatar"/>
            <div className="sidebar__name">Productive <span>Day</span></div>
            <div className="sidebar__item sidebar__title">Web Developer</div>
            <a href={resume} download="resume.pdf">
                <div className="sidebar__item sidebar__resume">
                    <img src={tie} alt="resume" className="sidebar__icon"/>Download Resume
                </div>
            </a>
            <figure className="sidebar__social-icons my-2">
                <a href="##"><img src={facebook} alt="facebook" className="sidebar__icon mr-3"/></a>
                <a href="##"><img src={instagram} alt="instagram" className="sidebar__icon"/></a>
            </figure>
            <div className="sidebar__contact">
                <div className="sidebar__item sidebar__github">
                    <a href="https://github.com/gabriel-dev-96"><img src={github} alt="github" className="sidebar__icon mr-3"/>github</a>
                </div>
                <div className="sidebar__location">
                    <img src={pin} alt="location" className="sidebar__icon mr-3"/>
                    Callao, Callao
                </div>
                <div className="sidebar__item">gabriel-dev-96@gmail.com</div>
                <div className="sidebar__item">785412/987654321</div>
            </div>
            <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>email me</div>
        </div>
    );
}

export default Sidebar;