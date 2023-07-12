import React, { useEffect } from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AOS from 'aos';

import InnerBanner from '../../componets/InnerBanner/InnerBanner';
import Faqs from '../../componets/Faqs/Faqs';
import LogoAnimation from '../../componets/LogoAnimation/LogoAnimation';

// IMAGES START
import BannerImage from '../../assets/images/faqs-banner.jpg';

function FAQs() {
    const bannerData = {
        title: 'Education refers to the discipline that is concerned with methods of teaching.',
        banner_image: BannerImage,
        page_title: 'Faqs',
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
        <div className='content-wrapper' id='content-wrap'>
            <InnerBanner bannerData={bannerData} active_page='Forex' />

            {/* FAQS SECTION START */}
            <section className='faqs-section-wrap faqs-section-page'>
                <LogoAnimation rightAlign={true} />
                <LogoAnimation />
                <Container>
                    <div className='text-center' data-aos='fade-up'>
                        <h2>Most frequently ask questions</h2>
                    </div>
                    <div
                        className='faqs-section'
                        data-aos='fade-up'
                        data-aos-offset='100'
                    >
                        <Accordion defaultActiveKey='0' flush>
                            <Accordion.Item eventKey='0'>
                                <Accordion.Header>
                                    What is Forex?
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type
                                        and scrambled it to make a type specimen
                                        book. It has survived not only five
                                        centuries, but also the leap into
                                        electronic typesetting, remaining
                                        essentially unchanged
                                    </p>
                                    <Link
                                        className='more-link'
                                        to='/forex-education'
                                    >
                                        View More
                                    </Link>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='1'>
                                <Accordion.Header>
                                    What is Digitial?
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type
                                        and scrambled it to make a type specimen
                                        book. It has survived not only five
                                        centuries, but also the leap into
                                        electronic typesetting, remaining
                                        essentially unchanged
                                    </p>
                                    <Link
                                        className='more-link'
                                        to='/digital-education'
                                    >
                                        View More
                                    </Link>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='2'>
                                <Accordion.Header>
                                    What is Indices?
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type
                                        and scrambled it to make a type specimen
                                        book. It has survived not only five
                                        centuries, but also the leap into
                                        electronic typesetting, remaining
                                        essentially unchanged
                                    </p>
                                    <Link
                                        className='more-link'
                                        to='/indices-education'
                                    >
                                        View More
                                    </Link>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='3'>
                                <Accordion.Header>
                                    What is Commodities?
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type
                                        and scrambled it to make a type specimen
                                        book. It has survived not only five
                                        centuries, but also the leap into
                                        electronic typesetting, remaining
                                        essentially unchanged
                                    </p>
                                    <Link
                                        className='more-link'
                                        to='/commodities-education'
                                    >
                                        View More
                                    </Link>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='4'>
                                <Accordion.Header>
                                    What is Shares?
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type
                                        and scrambled it to make a type specimen
                                        book. It has survived not only five
                                        centuries, but also the leap into
                                        electronic typesetting, remaining
                                        essentially unchanged
                                    </p>
                                    <Link
                                        className='more-link'
                                        to='/shares-education'
                                    >
                                        View More
                                    </Link>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='5'>
                                <Accordion.Header>
                                    What is ETFs?
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type
                                        and scrambled it to make a type specimen
                                        book. It has survived not only five
                                        centuries, but also the leap into
                                        electronic typesetting, remaining
                                        essentially unchanged
                                    </p>
                                    <Link
                                        className='more-link'
                                        to='/etfs-education'
                                    >
                                        View More
                                    </Link>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </Container>
            </section>
        </div>
    );
}

export default FAQs;
