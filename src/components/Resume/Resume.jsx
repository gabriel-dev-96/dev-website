import React from 'react';
import react from '../../assets/icons/react.svg';
import python from '../../assets/icons/python.svg';
import Bar from '../Bar/Bar';

const languages = [
    {
        icon: python,
        name: 'Python',
        level: '45'
    },
    {
        icon: react,
        name: 'Java',
        level: '60'
    },
    {
        icon: react,
        name: 'HTML',
        level: '80'
    },
    {
        icon: react,
        name: 'react',
        level: '60'
    },
    {
        icon: react,
        name: 'Django',
        level: '80'
    },
    {
        icon: react,
        name: 'Bootstrap',
        level: '55'
    }
];

const tools = [
    {
        icon: python,
        name: 'Figma',
        level: '85'
    },
    {
        icon: react,
        name: 'Higma',
        level: '45'
    },
    {
        icon: react,
        name: 'Jama',
        level: '60'
    }
]
const Resume = () => {
    return (
        <div className="container resume">
            <div className="row">
                <div className="col-lg-6 resume-card">
                    <h4 className="resume-card__heading">
                        Education
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Computer Science Enginnering
                        </h5>
                        <p className="resume-card__name">
                            Academy of Technology
                        </p>
                        <p className="resume-card__details">Excepteur mollit nostrud proident anim sit anim proident fugiat quis ut.</p>
                    </div>
                </div>
                <div className="col-lg-6 resume-card">
                    <h4 className="resume-card__heading">
                        Experience
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Excepteur sit exercitaton.
                        </h5>
                        <p className="resume-card__name">
                            Aliquip consectetur.
                        </p>
                        <p className="resume-card__details">Excepteur mollit nostrud proident anim sit anim proident fugiat quis ut.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 resume-languages">
                    <h5 className="resume-language__heading">
                        Language and Framework
                    </h5>
                    <div className="resume-language__body mt-3">
                        {languages.map((language, index) => <div className="bar" key={index}><Bar value={language} /></div>)}
                    </div>
                </div>
                <div className="col-lg-6 resume-languages">
                    <h5 className="resume-language__heading">
                        Tools and Softwares
                    </h5>
                    <div className="resume-language__body mt-3">
                        {tools.map((tool, index) => <div className="bar" key={index}><Bar value={tool} /></div>)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;