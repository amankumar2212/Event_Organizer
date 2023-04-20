import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
//import { IoIosArrowDropdownCircle } from 'react-icons/io'
import Dropdown from './DropdownMenu'
import LoginDropdown from './LoginDropdown'
import SignupDropdown from './SignupDropdown'


const Navbar = () => {
    return (
        <nav>
            <div className='navbar'>
                <div className='sub-nav'>
                    <ul className='main-menu'>

                        <li>
                            <Link to='/home'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to='/about'>
                                About
                            </Link>
                        </li>
                        <li>
                            <Dropdown />
                        </li>
                    </ul>
                    <div className='button'>
                        <button className='logindropdown'>
                            <LoginDropdown />
                        </button>
                        
                        <button className='signup'>
                            <SignupDropdown />
                        </button>

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar