import React from 'react'
import react from './assets/react.jpg'
import wd from './assets/wd.jpg'
import wd2 from './assets/wd2.jpg'
import wd3 from './assets/wd3.jpg'
import wd4 from './assets/wd4.jpg'
import nodeVSPHP from './assets/nodePHP.jpeg'
import './styles/Works.scss'


const Blogs = () => {
    return (
        <div className='works'>
            <div className="work__section">


                <div className="cards">
                    <img src={react} alt="" />
                    <a href='https://education.students-to-students.com/register.php' target="_blank">
                    <button>Frontend Tchnologies comparison</button>
                    </a>
                </div>

                <div className="cards">
                    <img src={nodeVSPHP} alt="" />
                    <a href='https://jigga.tikurwuha.com/index.php' target="_blank">
                    <button>Backend Tchnoloiges comparison</button>
                    </a>
                   
                </div>

                <div className="cards">
                   <img src={wd} alt="" />
                   <a href='Projects'>
                    <button>See family in law</button>
                    </a>
                </div>

                <div className="cards">
                   <img src={wd2} alt="" />
                   <a href='Projects'>
                    <button>Tech benfits in the school</button>
                    </a>
                </div>

                <div className="cards">
                   <img src={wd3} alt="" />
                   <a href='Projects'>
                    <button>See Work</button>
                    </a>
                </div>

                <div className="cards">
                   <img src={wd4} alt="" />
                   <a href='Projects'>
                    <button>See Work</button>
                    </a>
                </div>
               

            </div>
        </div>
    )
}

export default Blogs
