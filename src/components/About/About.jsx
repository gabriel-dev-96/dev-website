import React from 'react';
import api from '../../assets/icons/api.svg';
import backend from '../../assets/icons/backend.svg';
import Skillcard from '../Skillcard/Skillcard';

const skills = [
    {
        icon: api,
        title: "Minim id sit ipsum.",
        about: "Nostrud officia aliqua sunt cupidatat cillum tempor consectetur.",
    },
    {
        icon: backend,
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
                Hola! Mi nombre Gabriel, este es mi sitio web esta construido en Reactjs, subido en mi servidor free de heroku, se utilizo rutas, comunicacion de componentes y el uso de hooks, en este sitio web, el modulo de about como el de resume, tiene datos de relleno sacados, de lorem ipsum, pero el modulo de projects, tiene mis proyectos enlazados a su repositorio de github
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