import { Facebook, Instagram, LinkedIn, MenuBook, Pinterest, SettingsPowerRounded, Twitter } from '@material-ui/icons'
import React, { useState } from 'react'
import './styles/Main.scss'
import man from './assets/drunk_me_crope.jpg'
import Portifolio from './Portfolio';

const Main = () => {
    return (
        <div className='main'>
            <div className='main__container'>


                <div className="main__content">

                    <div className="text">
                            <p>Hey There !</p>
                            <h1>I am  Afwerki Ghirmay</h1>
                            <p>Software engineering</p>


                            <div className="icons">
                            <a href="https://twitter.com/afex093041511" target="_blank">
                                <Twitter className='icon'/>
                                </a>
                                <a href='https://www.instagram.com/afwork_grumnhe/' target="_blank">
                                <Instagram className='icon'/>
                                </a>

                                <a href='https://www.facebook.com/afework.grumnhe.1/' target="_blank">
                                <Facebook className='icon'/>
                                </a>

                                <a href='https://www.linkedin.com/in/afwerki-ghirmay-b56766171/' target="_blank">
                                <LinkedIn className='icon'/>
                                </a>
                            </div>

                    {/* <div className="buttons">
                        <a href='Portfolio'>
                        <button>See Projects</button>
                        </a>
                        <a href='contact'>
                        <button>Contact me</button>
                        </a>
                    </div> */}
                    </div>
                </div>


                <div className="main__img">
                    <img src={man} alt="" />
                </div>


            </div>



        </div>
    )
}


export default Main
