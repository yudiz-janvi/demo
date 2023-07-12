import React, { useLayoutEffect, useRef, useState } from 'react';
import { Button, Container, Navbar, Offcanvas } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Navigation from './Navbar/Navigation';
import FreeAccountDemo from '../FreeAccountDemo/FreeAccountDemo';

import Logo from '../../assets/images/logo.svg';

function Header() {
    const [riskWarningToggle, setRiskWarningToggle] = useState();
    const [toggleFreeAccountDemo, setToggleFreeAccountDemo] = useState(false);

    const stickyHeader = useRef();
    useLayoutEffect(() => {
        const mainHeader = document.getElementById('mainHeader');
        let fixedTop = stickyHeader.current.offsetTop + 50;
        const fixedHeader = () => {
            if (window.pageYOffset > fixedTop) {
                mainHeader.classList.add('fixedTop');
            } else {
                mainHeader.classList.remove('fixedTop');
            }
        };
        window.addEventListener('scroll', fixedHeader);
    }, []);

    function riskWarning() {
        setRiskWarningToggle(!riskWarningToggle);
        let elements = document.getElementById('content-wrap');
        elements.classList.toggle('togglerisk');
    }

    console.log('toggleFreeAccountDemo', toggleFreeAccountDemo);

    return (
        <>
            <header className='header' ref={stickyHeader} id='mainHeader'>
                <div
                    className={`risk-waring ${riskWarningToggle ? 'show' : ''}`}
                >
                    <Container>
                        <p>
                            <span className='bold'>Risk Warning:</span> Trading
                            CFDs and FX carries significant risk and is not
                            suitable for everyone. You have no ownership of the
                            underlying asset. Plus365 Financial Services (DIFC)
                            Limited is regulated by the DFSA. Arranging for
                            plus365 Group Limited, AFSL 414530, the product
                            issuer.
                        </p>
                    </Container>
                    <div
                        className='toggle-riskwarning'
                        onClick={() => riskWarning()}
                    >
                        <span></span>
                    </div>
                </div>
                <Navbar expand='xl'>
                    <Container>
                        <div className='logo'>
                            <NavLink to='/'>
                                <img src={Logo} alt='Plus365' />
                            </NavLink>
                        </div>

                        <Navbar.Offcanvas
                            id='offcanvasNavbar-expand-lg'
                            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                            placement='end'
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title
                                    id={`offcanvasNavbarLabel-expand-lg`}
                                ></Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Navigation
                                    setToggleFreeAccountDemo={
                                        setToggleFreeAccountDemo
                                    }
                                />
                                {/* <ul className='nav flex-grow-1 pe-3'>
                                <li>
                                    <NavLink to='/'>Markets</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/'>Trading</NavLink>
                                </li>

                                <li>
                                    <NavLink to='/'>Learn</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/'>Plus365</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/'>
                                        <img
                                            src={SearchIcon}
                                            alt='search icon'
                                        />
                                    </NavLink>
                                </li>
                            </ul> */}
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                        <div className='header-right'>
                            <Navbar.Toggle
                                aria-controls={`offcanvasNavbar-expand-lg`}
                            />
                            {/* <button className='search-icon'></button> */}
                            <Button href='#' variant='secondary' size='sm'>
                                Login / Signup
                            </Button>
                        </div>
                    </Container>
                </Navbar>
            </header>
            {toggleFreeAccountDemo && (
                <FreeAccountDemo
                    setToggleFreeAccountDemo={setToggleFreeAccountDemo}
                />
            )}
        </>
    );
}

export default Header;
