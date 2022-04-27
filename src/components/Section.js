import React from 'react'
import './styles/Section.scss'
import man2 from './assets/good_view.jpg'

const Section = () => {
    return (
        <div className='section'>
            <div className="section__container">
                <div className="section__img">
                    <img src={man2} alt="" />
                </div>
                <div className="section__content">
                    <h1>Who is Afwerki</h1>
                    <p>Graduated in November 2021 from LSBU in Computer Science Degree</p>
                    <p>Juniour Software Developer</p>
                    <p>3 years experience in Software Development</p>
                    <p>Professional UI & UX Designer</p>
                    <p>Located in London</p>
                    <p>Developed A number of projects</p>
                    <p>Skilled in | HTML,CSS,Reactjs,JS, Django, PHP, Python, MySQL </p>
                </div>
            </div>
        </div>
    )
}

export default Section
