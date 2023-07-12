import React, { useState, useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import AOS from 'aos';
import { Link } from 'react-router-dom';

import InnerBanner from '../../componets/InnerBanner/InnerBanner';
import LogoAnimation from '../../componets/LogoAnimation/LogoAnimation';

// IMAGES START
import BannerImage from '../../assets/images/career-detail-banner.jpg';

import JobType from '../../assets/images/job-type-icon.svg';
import JobLocation from '../../assets/images/job-location-icon.svg';
import JobExperience from '../../assets/images/experience-icon.svg';
import JobExperience2 from '../../assets/images/experience-icon2.svg';
import CareerForm from '../../componets/CareerForm/CareerForm';

function CareerDetail() {
    const [toggleApplyForm, setToggleApplyForm] = useState(false);

    const bannerData = {
        title: 'Grow with us',
        banner_image: BannerImage,
        page_title: 'Career',
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
            <section className='career-page-section'>
                <LogoAnimation lightMode={true} rightAlign={true} />
                <Container>
                    <Row className='justify-content-between'>
                        <Col lg='6'>
                            <div className='career-title'>
                                <p>Posted on 12 Dec, 2022</p>
                                <h1>Product Designer</h1>
                                <div className='d-flex'>
                                    <h6>
                                        <img
                                            src={JobExperience2}
                                            alt='JobExperience2'
                                            className='me-2'
                                        />
                                        Product Designer
                                    </h6>
                                </div>
                            </div>
                            <div className='career-detail'>
                                <h6>Job Description</h6>
                                <ul className='bullet-list'>
                                    <li>
                                        2+ years of experience in Phasor.io /
                                        Pixi.Js / Three.js (any one or more)
                                    </li>
                                    <li>
                                        Proven working experience in full
                                        lifecycle game development
                                    </li>
                                    <li>
                                        Good knowledge of HTML5, CSS3,
                                        JavaScript, AJAX, SVG, XML and OOPs.
                                    </li>
                                    <li>
                                        Ability to make responsive game for
                                        different resolutions.
                                    </li>
                                    <li>
                                        Ability to develop and deploy HTML5 on
                                        Web.
                                    </li>
                                    <li>
                                        Expert in one or more programming
                                        specialties (Physics, WebGL,
                                        Performance- optimisation across
                                        different mobile browsers, 2D or 3D
                                        Games)
                                    </li>
                                    <li>
                                        Strong attention to detail and knowledge
                                        of robust quality assurance practices.
                                    </li>
                                    <li>
                                        Strong testing, debugging, and
                                        analytical skills
                                    </li>
                                    <li>
                                        Handled team of more than 1 is an add
                                        on.
                                    </li>
                                    <li>
                                        Ability to solve problems creatively and
                                        effectively.
                                    </li>
                                    <li>
                                        Up-to-date with the latest gaming
                                        trends, techniques, best practices and
                                        technologies.
                                    </li>
                                </ul>
                                <Button
                                    variant='secondary'
                                    onClick={() =>
                                        setToggleApplyForm(!toggleApplyForm)
                                    }
                                >
                                    Apply
                                </Button>
                            </div>
                        </Col>
                        <Col lg='6' xl='5'>
                            <div className='other-opening'>
                                <ul>
                                    <li>
                                        <Link to='#'>
                                            <h6>Product Designer</h6>
                                            <div className='job-info'>
                                                <div className='d-flex align-items-center'>
                                                    <img
                                                        src={JobType}
                                                        alt='JobType'
                                                    />
                                                    Full-time
                                                </div>
                                                <div className='d-flex align-items-center'>
                                                    <img
                                                        src={JobLocation}
                                                        alt='JobLocation'
                                                    />
                                                    Dubai
                                                </div>
                                                <div className='d-flex align-items-center'>
                                                    <img
                                                        src={JobExperience}
                                                        alt='JobExperience'
                                                    />
                                                    2-5 Year Exp.
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='#'>
                                            <h6>Product Designer</h6>
                                            <div className='job-info'>
                                                <div className='d-flex align-items-center'>
                                                    <img
                                                        src={JobType}
                                                        alt='JobType'
                                                    />
                                                    Full-time
                                                </div>
                                                <div className='d-flex align-items-center'>
                                                    <img
                                                        src={JobLocation}
                                                        alt='JobLocation'
                                                    />
                                                    Dubai
                                                </div>
                                                <div className='d-flex align-items-center'>
                                                    <img
                                                        src={JobExperience}
                                                        alt='JobExperience'
                                                    />
                                                    2-5 Year Exp.
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='#'>
                                            <h6>Product Designer</h6>
                                            <div className='job-info'>
                                                <div className='d-flex align-items-center'>
                                                    <img
                                                        src={JobType}
                                                        alt='JobType'
                                                    />
                                                    Full-time
                                                </div>
                                                <div className='d-flex align-items-center'>
                                                    <img
                                                        src={JobLocation}
                                                        alt='JobLocation'
                                                    />
                                                    Dubai
                                                </div>
                                                <div className='d-flex align-items-center'>
                                                    <img
                                                        src={JobExperience}
                                                        alt='JobExperience'
                                                    />
                                                    2-5 Year Exp.
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='#'>
                                            <h6>Product Designer</h6>
                                            <div className='job-info'>
                                                <div className='d-flex align-items-center'>
                                                    <img
                                                        src={JobType}
                                                        alt='JobType'
                                                    />
                                                    Full-time
                                                </div>
                                                <div className='d-flex align-items-center'>
                                                    <img
                                                        src={JobLocation}
                                                        alt='JobLocation'
                                                    />
                                                    Dubai
                                                </div>
                                                <div className='d-flex align-items-center'>
                                                    <img
                                                        src={JobExperience}
                                                        alt='JobExperience'
                                                    />
                                                    2-5 Year Exp.
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {toggleApplyForm && (
                <section className='application-form-section'>
                    <Container>
                        <CareerForm />
                    </Container>
                </section>
            )}
        </div>
    );
}

export default CareerDetail;
