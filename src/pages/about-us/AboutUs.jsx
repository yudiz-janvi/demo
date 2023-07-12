import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AOS from 'aos';

import InnerBanner from '../../componets/InnerBanner/InnerBanner';
import LogoAnimation from '../../componets/LogoAnimation/LogoAnimation';

// IMAGES START
import BannerImage from '../../assets/images/about-us-banner.jpg';
import AboutImage1 from '../../assets/images/about-img-1.jpg';
import AboutImage2 from '../../assets/images/about-img-2.jpg';
import AboutImage3 from '../../assets/images/about-img-3.jpg';
import AboutImage4 from '../../assets/images/about-img-4.jpg';
import OurVision from '../../assets/video/our-vision.mp4';
import OurVisionIcon from '../../assets/images/our-vision-icon.svg';
import OurMissionIcon from '../../assets/images/our-mission-icon.svg';
import OurValueIcon from '../../assets/images/our-value-icon.svg';
import AboutImage5 from '../../assets/images/about-img.jpg';

function AboutUs() {
    const bannerData = {
        title: 'Empowering Traders Worldwide: Unleashing the Potential of Financial Markets',
        banner_image: BannerImage,
        page_title: 'About us',
        description:
            'Plus Capital is a trading name of Plus Capital Limited - ADGM, a member of Plus Group, which is authoPlus Capital is a trading name of Plus Capital Limited.',
    };

    useEffect(() => {
        AOS.init({
            easing: 'ease-in-out-back',
            duration: 1000,
        });
        AOS.refresh();
    }, []);

    return (
        <div className='content-wrapper white-bg' id='content-wrap'>
            <InnerBanner bannerData={bannerData} active_page='Digital' />
            {/* Forex Trade START */}
            <section className='about-section'>
                <LogoAnimation lightMode={true} rightAlign={true} />
                <Container>
                    <Row className='align-items-center'>
                        <Col lg='6' data-aos='fade-right'>
                            <div className='about-img-block'>
                                <div className='about-img'>
                                    <img src={AboutImage1} alt='AboutImage1' />
                                </div>
                                <div className='about-img'>
                                    <img src={AboutImage2} alt='AboutImage1' />
                                </div>
                                <div className='about-img'>
                                    <img src={AboutImage3} alt='AboutImage1' />
                                </div>
                                <div className='about-img'>
                                    <img src={AboutImage4} alt='AboutImage1' />
                                </div>
                            </div>
                        </Col>
                        <Col lg='6' data-aos='fade-left'>
                            <h3>About us</h3>
                            <p>
                                With a shared passion for trading, we set out to
                                empower individuals by providing comprehensive
                                education, cutting-edge tools, and personalised
                                support, enabling them to navigate the dynamic
                                financial markets with confidence and achieve
                                their investment goals.
                            </p>
                            <p>
                                With a shared passion for trading, we set out to
                                empower individuals by providing comprehensive
                                education, cutting-edge tools, and personalised
                                support, enabling them to navigate the dynamic
                                financial markets with confidence and achieve
                                their investment goals.
                            </p>
                            <p>With a shared passion for trading,</p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='our-vision-section' data-aos='fade-up'>
                <div className='our-vision-video'>
                    <video width='100%' height='100%' autoPlay muted loop>
                        <source src={OurVision} type='video/mp4' />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <Container>
                    <Row className='align-items-center justify-content-end'>
                        <Col lg='6'>
                            <h3 className='d-flex align-items-center'>
                                <span>
                                    <img
                                        src={OurVisionIcon}
                                        alt='OurVisionIcon'
                                    />
                                </span>
                                Our Vision
                            </h3>
                            <p>
                                With a shared passion for trading, we set out to
                                empower individuals by providing comprehensive
                                education, cutting-edge tools, and personalised
                                support, enabling them to navigate the dynamic
                                financial markets with confidence and achieve
                                their investment goals.
                            </p>
                            <p>
                                With a shared passion for trading, we set out to
                                empower individuals by providing comprehensive
                                education, cutting-edge tools, and personalised
                                support, enabling them to navigate the dynamic
                                financial markets with confidence and achieve
                                their investment goals.
                            </p>
                            <p>With a shared passion for trading,</p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='our-mission-section'>
                <LogoAnimation lightMode={true} />
                <Container>
                    <Row className='align-items-center'>
                        <Col lg='7' data-aos='fade-right'>
                            <div className='our-mission-block'>
                                <div className='icon'>
                                    <img
                                        src={OurMissionIcon}
                                        alt='OurMissionIcon'
                                    />
                                </div>
                                <div>
                                    <h4>Our Mission</h4>
                                    <p>
                                        With a shared passion for trading, we
                                        set out to empower individuals by
                                        providing comprehensive education,
                                        cutting-edge tools, and personalised
                                        support, enabling them to navigate.
                                    </p>
                                </div>
                            </div>
                            <div className='our-mission-block'>
                                <div className='icon'>
                                    <img
                                        src={OurValueIcon}
                                        alt='OurValueIcon'
                                    />
                                </div>
                                <div>
                                    <h4>Our Value</h4>
                                    <p>
                                        With a shared passion for trading, we
                                        set out to empower individuals by
                                        providing comprehensive education,
                                        cutting-edge tools, and personalised
                                        support, enabling them to navigate.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg='5' data-aos='fade-left'>
                            <div className='about-img'>
                                <img src={AboutImage5} alt='AboutImage5' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
}

export default AboutUs;
