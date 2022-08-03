import React,  { useState, useEffect }  from 'react'
import logo from '../images/ineuron-logo.png'

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';



const Header = () => {





    return (
        <>
            <header>

                {/* ==================  Upper navber ======================== */}
                <div className="upper_nav d-flex justify-content-between align-items-center">
                    <img src={logo} alt="Logo" className='img-fluid' />

                    <div className="search_input d-flex align-items-center">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="text" className='mx-3 ' placeholder='Waht do you want to learn ?' />
                    </div>

                    <div className="auth_buttons">
                        <button className="btn-bg mx-4"> Sign Up </button>
                        <button className="btn-nbg"> Sign In </button>
                    </div>

                    <i class="fa-solid fa-bars hamberger"></i>


                </div>


                {/* ============== Crouces Section =========== */}


                <div className="crouse_list mx-4 my-4">

                    <ul className='d-flex justify-content-between align-items-center a_style'>
                        <ul>
                            <a className="nav-link dropdown-toggle a_style" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </ul>

                        <li className='a_style'><a href="#"></a> One Neuron </li>
                        <li className='a_style'><a href="#"></a> One Neuron </li>
                        <li className='a_style'><a href="#"></a> One Neuron </li>
                        <li className='a_style'><a href="#"></a> One Neuron </li>
                        <li className='a_style'><a href="#"></a> One Neuron </li>
                        <li className='a_style'><a href="#"></a> One Neuron </li>
                        <li className='a_style'><a href="#"></a> One Neuron </li>
                    </ul>
                </div>
            </header>


        </>
    )
}

export default Header