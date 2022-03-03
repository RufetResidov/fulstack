import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { BsCart3 } from 'react-icons/bs';
import "./header.scss"

const Header = () => {
    return (
        <div>
            <div className="Announcement">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 d-flex align-items-center display-none ">
                            <p> +1234556778</p>
                            <p>lala@punet.com</p>
                        </div>
                        <div className="col-12 col-lg-3 justify-content-center justify-content-lg-end d-flex">
                            <Link to="">
                                <FaFacebookF />
                            </Link>
                            <Link to="">
                                <BsTwitter />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header">
                <div className="container">
                    <div className="mobile-header">
                        <div className="container">
                            <div className="row">
                                <div className="col-6 d-flex align-items-center">
                                    <Link className='navbar-brand' to="/">
                                        <img src="/images/logo.png" alt="" />
                                    </Link>
                                </div>
                                <div className="col-6 d-flex align-items-center justify-content-end Login-Register ">
                                    <div className="btn-group">
                                        <button
                                            type='button'
                                            className='name-button dropdown-toggle'
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            <AiOutlineUser />
                                        </button>
                                        <div className="dropdown-menu">
                                            <Link className='dropdown-item' to="/profile">
                                                Profile
                                            </Link>
                                            <Link className='dropdown-item' to="#">
                                                Logout
                                            </Link>
                                        </div>
                                    </div>
                                    <Link to="/cart" className='cart-mobile-icon'>
                                        <BsCart3 />
                                        <span className="badge">4</span>
                                    </Link>
                                </div>
                                <div className="col-12 d-flex align-items-center">
                                    <form className='input-group'>
                                        <input
                                            type="search"
                                            className='form-control rounded search '
                                            placeholder='search'
                                        />
                                        <button type='submit' className='search-button'>
                                            search
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pc-header">
                        <div className="row">
                            <div className="col-md-3 col-4 d-flex align-items-center">
                                <Link className="navbar-brand" to="/">
                                    <img alt="logo" src="/images/logo.png" />
                                </Link>
                            </div>
                            <div className="col-md-6 col-8 d-flex align-items-center">
                                <form className="input-group">
                                    <input
                                        type="search"
                                        className="form-control rounded search"
                                        placeholder="Search"
                                    />
                                    <button type="submit" className="search-button">
                                        search
                                    </button>
                                </form>
                            </div>
                            <div className="col-md-3 d-flex align-items-center justify-content-end Login-Register">
                                <div className="btn-group">
                                    <button
                                        type="button"
                                        className="name-button dropdown-toggle"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        Hi, Admin Doe
                                    </button>
                                    <div className="dropdown-menu">
                                        <Link className="dropdown-item" to="/profile">
                                            Profile
                                        </Link>

                                        <Link className="dropdown-item" to="#">
                                            Logout
                                        </Link>
                                    </div>
                                </div>

                                <Link to="/cart">
                                    <i className="fas fa-shopping-bag"></i>
                                    <span className="badge">4</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header