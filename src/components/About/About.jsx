import React from 'react';
import api from '../../assets/icons/api.svg';
import Skillcard from '../Skillcard/Skillcard';

const skills = [
    {
        icon: api,
        title: "Minim id sit ipsum.",
        about: "Nostrud officia aliqua sunt cupidatat cillum tempor consectetur.",
    },
    {
        icon: api,
        title: "Minim id sit ipsum.",
        about: "Nostrud officia aliqua sunt cupidatat cillum tempor consectetur.",
    },
    {
        icon: api,
        title: "Minim id sit ipsum.",
        about: "Nostrud officia aliqua sunt cupidatat cillum tempor consectetur.",
    },
    {
        icon: api,
        title: "Minim id sit ipsum.",
        about: "Nostrud officia aliqua sunt cupidatat cillum tempor consectetur.",
    },
    {
        icon: api,
        title: "Minim id sit ipsum.",
        about: "Nostrud officia aliqua sunt cupidatat cillum tempor consectetur.",
    },
    {
        icon: api,
        title: "Minim id sit ipsum.",
        about: "Nostrud officia aliqua sunt cupidatat cillum tempor consectetur.",
    }
]
const About = () => {
    return (
        <div className="about">
            <h6 className="about__intro">
                Lorem ipsum dolor, sit amet consetur apdigingte alit. anam error cutor.
            </h6>
            <div className="container about__container">
                <h6 className="about__heading">What I offer</h6>
                <div className="row">
                    {
                        skills.map((skill, index) =>
                            <div className="col-lg-6" key={index}>
                                <Skillcard skill={skill} />
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default About;