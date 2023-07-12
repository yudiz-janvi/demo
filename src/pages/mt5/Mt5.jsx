import React, { useState, useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AOS from 'aos';

import Faqs from '../../componets/Faqs/Faqs';

import LogoAnimation from '../../componets/LogoAnimation/LogoAnimation';

// IMAGES START
import Pattern from '../../assets/images/pattern-1.svg';

import Mt5Screen from '../../assets/images/mt5-screen.png';
import Windows from '../../assets/images/microsoft-cion.png';
import MacOs from '../../assets/images/apple-icon.png';
import Webapp from '../../assets/images/webapp-icon.svg';
import Mt5Dashboard from '../../assets/images/mt-5-dashboard.png';
import Mt5ScreenVideo from '../../assets/video/mt5-screen.webm';
import Qrcode from '../../assets/images/qr-code.png';
import Mt5AppScreen from '../../assets/images/mt5-app-screen.png';

function Mt5() {
    useEffect(() => {
        AOS.init({
            easing: 'ease-in-out-back',
            duration: 1000,
        });
        AOS.refresh();
    }, []);

    return (
        <div className='content-wrapper' id='content-wrap'>
            <section className='mt5-wrapper'>
                <Container>
                    <div className='text-center' data-aos='fade-up'>
                        <h1>
                            Grow your Finance and Trade with trastrad providfer
                        </h1>
                        <Link to='/mt5-trade' className='btn btn-primary'>
                            Trade Now
                        </Link>
                    </div>
                    <div
                        className='mt-inside'
                        data-aos='fade-up'
                        data-aos-delay='200'
                    >
                        <div className='mt5-screen'>
                            {/* <img src={Mt5Screen} alt='Mt5Screen' /> */}
                            <div className='mt5-video'>
                                <video
                                    width='100%'
                                    height='100%'
                                    autoPlay
                                    muted
                                    loop
                                >
                                    <source
                                        src={Mt5ScreenVideo}
                                        type='video/webm'
                                    />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className='animation-balls balls-1'></div>
                            <div className='animation-balls balls-2'></div>
                            <div className='animation-balls balls-3'></div>
                        </div>
                    </div>
                </Container>
            </section>
            {/* Forex Trade START */}
            <section className='twocolumn-section mt-0 mt5-desktopapp'>
                <LogoAnimation />
                <div className='twocolumn-inner'>
                    <div
                        className='pattern-animation pattern-right'
                        data-aos='slide-left'
                        data-aos-offset='50'
                        data-aos-easing='ease-in-out'
                    >
                        <img src={Pattern} alt='Pattern' />
                    </div>
                    <Container>
                        <Row className='justify-content-between align-items-end'>
                            <Col
                                lg={6}
                                data-aos='fade-right'
                                className='twocolumn-left'
                            >
                                <h2>Meta Trader 5 Desktop app</h2>
                                <p>
                                    One of the best forex trading platforms
                                    available is widely regarded as being the
                                    MetaTrader 5 platform. When trading on MT5,
                                    anticipate quicker processing times.
                                </p>
                                <ul className='download-list'>
                                    <li>
                                        <Link to=''>
                                            <span className='download-icon'>
                                                <span className='download-inside'>
                                                    <img
                                                        src={Windows}
                                                        alt='Windows'
                                                        width='17px'
                                                    />
                                                </span>
                                            </span>
                                            <span>Download for windows</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to=''>
                                            <span className='download-icon'>
                                                <span className='download-inside'>
                                                    <img
                                                        src={MacOs}
                                                        alt='Windows'
                                                        width='17px'
                                                    />
                                                </span>
                                            </span>
                                            <span>Download for MacOS</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to=''>
                                            <span className='download-icon'>
                                                <span className='download-inside'>
                                                    <img
                                                        src={Webapp}
                                                        alt='Windows'
                                                        width='18px'
                                                    />
                                                </span>
                                            </span>
                                            <span>Start on Web</span>
                                        </Link>
                                    </li>
                                </ul>
                            </Col>
                            <Col lg={6} xxl={6}>
                                <div
                                    className='mt5-dashboard'
                                    data-aos='zoom-in'
                                    data-aos-offset='150'
                                >
                                    <img
                                        src={Mt5Dashboard}
                                        alt='Mt5Dashboard'
                                    />
                                    <div className='animation-balls balls-1'></div>
                                    <div className='animation-balls balls-2'></div>
                                    <div className='animation-balls balls-3'></div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>

            <section className='twocolumn-section mt-0 mt5mobileapp'>
                <LogoAnimation rightAlign={true} />
                <div className='twocolumn-inner'>
                    <div
                        className='pattern-animation'
                        data-aos='slide-right'
                        data-aos-offset='50'
                        data-aos-easing='ease-in-out'
                    >
                        <img src={Pattern} alt='Pattern' />
                    </div>
                    <Container>
                        <Row className='justify-content-between align-items-center'>
                            <Col
                                lg={7}
                                data-aos='fade-right'
                                className='twocolumn-left'
                            >
                                <div className='mt5app-screen'>
                                    <img
                                        src={Mt5AppScreen}
                                        alt='Mt5AppScreen'
                                    />
                                    <div className='animation-balls balls-1'></div>
                                    <div className='animation-balls balls-2'></div>
                                    <div className='animation-balls balls-3'></div>
                                </div>
                            </Col>
                            <Col lg={5} data-aos='fade-left'>
                                <h2>Meta Trader 5 Desktop app</h2>
                                <p>
                                    One of the best forex trading platforms
                                    available is widely regarded as being the
                                    MetaTrader 5 platform. When trading on MT5,
                                    anticipate quicker processing times.
                                </p>
                                <h6>Download Our App</h6>
                                <div className='mt-4'>
                                    <img src={Qrcode} alt='Qrcode' />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>

            <section className='ready-to-join-section' data-aos='fade-up'>
                <Container>
                    <div className='ready-to-join-inside'>
                        <div>
                            <h4 className='mb-3'>Ready to join us ?</h4>
                            <p className='mb-0'>
                                One of the best forex trading platforms
                                available is widely regarded as being the
                                MetaTrader 5 platform. When trading on MT5,
                                anticipate quicker processing times.
                            </p>
                        </div>
                        <div className='btn-wrap'>
                            <Button href='#' variant='primary'>
                                Ger Started
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>

            {/* FAQS SECTION START */}
            <section className='faqs-section-wrap '>
                <Container>
                    <div className='text-center' data-aos='fade-up'>
                        <h2>Most frequently ask questions</h2>
                    </div>
                    <Faqs />
                </Container>
            </section>
        </div>
    );
}

export default Mt5;
