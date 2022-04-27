import { ArrowBack } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import wd from './assets/wd.jpg'
import wd2 from './assets/wd2.jpg'
import wd3 from './assets/wd3.jpg'
import wd4 from './assets/wd4.jpg'
import students_support from './assets/school.png'
import school from './assets/StoS.png'
import './styles/Works.scss'


const Works = () => {
    return (
        <div>
        <div className='works'>
            
            <div className="work__section">


                <div className="cards">
                    <img src={students_support} alt="" />
                    <a href='https://education.students-to-students.com/register.php' target="_blank">
                    <button>See My Grduation project</button>
                    </a>
                </div>

                <div className="cards">
                    <img src={school} alt="" />
                    <a href='https://jigga.tikurwuha.com/index.php' target="_blank">
                    <button>See school system</button>
                    </a>
                   
                </div>

                <div className="cards">
                   <img src={wd} alt="" />
                   <a href='#'>
                    <button>See family in law</button>
                    </a>
                </div>

                <div className="cards">
                   <img src={wd2} alt="" />
                   <a href='#'>
                    <button>See ADAUK Charity project</button>
                    </a>
                </div>

                <div className="cards">
                   <img src={wd3} alt="" />
                   <a href='#'>
                    <button>See Work</button>
                    </a>
                </div>

                <div className="cards">
                   <img src={wd4} alt="" />
                   <a href='#'>
                    <button>See Work</button>
                    </a>
                </div>
            </div>
        </div>

        </div>
    )
}

export default Works
