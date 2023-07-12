import React, { useState, useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import AOS from 'aos';

import InnerBanner from '../../componets/InnerBanner/InnerBanner';
import LogoAnimation from '../../componets/LogoAnimation/LogoAnimation';

// IMAGES START
import BannerImage from '../../assets/images/why-us-banner.jpg';
import AboutImage1 from '../../assets/images/whyus-img-1.jpg';
import AboutImage2 from '../../assets/images/whyus-img-2.jpg';
import AboutImage3 from '../../assets/images/whyus-img-3.jpg';
import AboutImage4 from '../../assets/images/whyus-img-4.jpg';
import WhyTradeIcon1 from '../../assets/images/why-trade-icon1.svg';
import WhyTradeIcon2 from '../../assets/images/why-trade-icon2.svg';
import WhyTradeIcon3 from '../../assets/images/why-trade-icon3.svg';
import WhyTradeIcon4 from '../../assets/images/why-trade-icon4.svg';
import WhyTradeIcon5 from '../../assets/images/why-trade-icon5.svg';
import WhyTradeIcon6 from '../../assets/images/why-trade-icon6.svg';

function WhyUs() {
    const bannerData = {
        title: `Explore what sets us apart from the competition and why we're the preferred trading platform.`,
        banner_image: BannerImage,
        page_title: 'Why Plus365?',
        description:
            'Learn why our platform offers an unrivaled trading experience for both beginners and seasoned traders.',
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
                <Container>
                    <Row className='align-items-center'>
                        <Col lg='6' data-aos='fade-right'>
                            <div className='about-img-block why-us-block'>
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
                            <h3>Who we are</h3>
                            <p>
                                At Plus365, a trusted destination for traders
                                worldwide. We are driven by a passion for
                                empowering individuals to thrive in the dynamic
                                realm of trading. Our mission is to provide
                                comprehensive resources, cutting-edge
                                technology, and expert guidance to equip traders
                                with the tools they need to navigate the
                                financial markets with confidence. With a
                                customer-centric approach, we foster a
                                supportive community and deliver unparalleled
                                trading experiences. Whether you are a seasoned
                                professional or just starting your trading
                                journey, we are here to help you unlock your
                                full potential and achieve your financial goals.
                                Join us and embark on an exciting trading
                                adventure today.
                            </p>
                            <Button
                                href='#'
                                className='mt-3'
                                variant='secondary'
                                size='sm'
                            >
                                Our story
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='why-trade-section'>
                <LogoAnimation lightMode={true} rightAlign={true} />
                <LogoAnimation lightMode={true} />
                <Container>
                    <Row
                        className='justify-content-center'
                        data-aos='fade-up'
                        data-aos-offset='50'
                    >
                        <Col lg='10' className='text-center'>
                            <h2 className='text-blue'>
                                Why trade with Plus 365?
                            </h2>
                            <p>
                                Trade with us for a superior trading experience
                                backed by expertise, cutting-edge technology,
                                personalized support, and a proven track record
                                of success.
                            </p>
                        </Col>
                    </Row>
                    <div className='career-list why-trade-list'>
                        <div
                            className='career-block'
                            data-aos='fade-up'
                            data-aos-offset='100'
                        >
                            <div className='career-block-inside'>
                                <h6 className='d-flex align-items-center'>
                                    <img
                                        src={WhyTradeIcon1}
                                        alt='WhyTradeIcon1'
                                        className='me-1'
                                    />
                                    Expertise and Experience
                                </h6>
                                <p className='mb-1'>
                                    Benefit from our team's extensive expertise
                                    and years of experience in the trading
                                    industry, providing you with valuable
                                    insights, strategies, and guidance.
                                </p>
                            </div>
                        </div>
                        <div
                            className='career-block'
                            data-aos='fade-up'
                            data-aos-offset='100'
                        >
                            <div className='career-block-inside'>
                                <h6 className='d-flex align-items-center'>
                                    <img
                                        src={WhyTradeIcon2}
                                        alt='WhyTradeIcon2'
                                        className='me-1'
                                    />
                                    Wide Range of Tradable Assets
                                </h6>
                                <p className='mb-1'>
                                    Trade with us and gain access to a diverse
                                    range of tradable assets, including stocks,
                                    currencies, commodities, and indices,
                                    allowing you to diversify your portfolio and
                                    seize various market opportunities.
                                </p>
                            </div>
                        </div>
                        <div
                            className='career-block'
                            data-aos='fade-up'
                            data-aos-offset='100'
                        >
                            <div className='career-block-inside'>
                                <h6 className='d-flex align-items-center'>
                                    <img
                                        src={WhyTradeIcon3}
                                        alt='WhyTradeIcon3'
                                        className='me-1'
                                    />
                                    Community and Networking
                                </h6>
                                <p className='mb-1'>
                                    Join a vibrant trading community, where you
                                    can network with like-minded traders, share
                                    insights, and engage in discussions. Our
                                    platform fosters a supportive environment
                                    that encourages knowledge-sharing and
                                    collaboration.
                                </p>
                            </div>
                        </div>
                        <div
                            className='career-block'
                            data-aos='fade-up'
                            data-aos-offset='100'
                        >
                            <div className='career-block-inside'>
                                <h6 className='d-flex align-items-center'>
                                    <img
                                        src={WhyTradeIcon4}
                                        alt='WhyTradeIcon4'
                                        className='me-1'
                                    />
                                    Security and Trustworthiness
                                </h6>
                                <p className='mb-1'>
                                    Rest assured knowing that we prioritize the
                                    security of your funds and personal
                                    information. We adhere to strict security
                                    protocols, including encrypted transactions
                                    and robust measures to safeguard your
                                    trading activities.
                                </p>
                            </div>
                        </div>
                        <div
                            className='career-block'
                            data-aos='fade-up'
                            data-aos-offset='100'
                        >
                            <div className='career-block-inside'>
                                <h6 className='d-flex align-items-center'>
                                    <img
                                        src={WhyTradeIcon5}
                                        alt='WhyTradeIcon5'
                                        className='me-1'
                                    />
                                    Comprehensive Research and Analysis
                                </h6>
                                <p className='mb-1'>
                                    Stay ahead of market trends with our
                                    comprehensive research and analysis,
                                    providing you with valuable market insights,
                                    trade recommendations, and the latest
                                    industry news.
                                </p>
                            </div>
                        </div>
                        <div
                            className='career-block'
                            data-aos='fade-up'
                            data-aos-offset='100'
                        >
                            <div className='career-block-inside'>
                                <h6 className='d-flex align-items-center'>
                                    <img
                                        src={WhyTradeIcon6}
                                        alt='WhyTradeIcon6'
                                        className='me-1'
                                    />
                                    Competitive Pricing and Transparency
                                </h6>
                                <p className='mb-1'>
                                    Enjoy competitive pricing and transparent
                                    fee structures, ensuring that you can
                                    optimize your trading performance without
                                    unnecessary costs or hidden charges.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}

export default WhyUs;
