import { Close, FiberManualRecordOutlined, MenuOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles/Header.scss'

const Header = () => {

    const [active,setActive] = useState(false);


    const showMenu = () => {
            setActive(!active)
    }

    return (
        <div className='header'>

                    <div className="header__logo">
                        <h1>AFE</h1>
                    </div>

            <nav className={active ? 'navbar active' : 'navbar'}>

                <ul>
                    <div className="closed">
                        <Close className='close' onClick={showMenu}/>
                    </div>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/About'>About</Link>
                    </li>
                    <li>
                        <Link to='/Portifolio'>Portfolio</Link>
                    </li>
                    <li>
                        <Link to='/Blog'>Blog</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>

                    <div className="changer">
                        <MenuOutlined className='menu' onClick={showMenu}/>
                    </div>
                    </div>

    )
}

export default Header
