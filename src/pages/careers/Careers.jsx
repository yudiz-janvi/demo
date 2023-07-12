import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import AOS from 'aos';
import { Link } from 'react-router-dom';

import InnerBanner from '../../componets/InnerBanner/InnerBanner';
import LogoAnimation from '../../componets/LogoAnimation/LogoAnimation';

// IMAGES START
import BannerImage from '../../assets/images/career-detail-banner.jpg';

import JobType from '../../assets/images/job-type-icon.svg';
import JobLocation from '../../assets/images/job-location-icon.svg';
import JobExperience from '../../assets/images/experience-icon.svg';
import CareerForm from '../../componets/CareerForm/CareerForm';

function Career() {
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
                    <div className='text-center'>
                        <h3>Current Openings: Join Our Trading Team</h3>
                        <p>
                            Explore Exciting Opportunities in the Financial
                            Markets and Ignite Your Career in Trading
                        </p>
                    </div>
                    <div className='career-list'>
                        <div className='career-block' data-aos='fade-up'>
                            <Link
                                to='/career-detail'
                                className='career-block-inside'
                            >
                                <h6>Product Designer</h6>
                                <p>
                                    We’re looking for a mid-level product
                                    designer to join our team.
                                </p>
                                <div className='job-info'>
                                    <div className='d-flex align-items-center'>
                                        <img src={JobType} alt='JobType' />
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
                        </div>
                        <div className='career-block' data-aos='fade-up'>
                            <Link
                                to='/career-detail'
                                className='career-block-inside'
                            >
                                <h6>Product Designer</h6>
                                <p>
                                    We’re looking for a mid-level product
                                    designer to join our team.
                                </p>
                                <div className='job-info'>
                                    <div className='d-flex align-items-center'>
                                        <img src={JobType} alt='JobType' />
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
                        </div>
                        <div className='career-block' data-aos='fade-up'>
                            <Link
                                to='/career-detail'
                                className='career-block-inside'
                            >
                                <h6>Product Designer</h6>
                                <p>
                                    We’re looking for a mid-level product
                                    designer to join our team.
                                </p>
                                <div className='job-info'>
                                    <div className='d-flex align-items-center'>
                                        <img src={JobType} alt='JobType' />
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
                        </div>
                        <div className='career-block' data-aos='fade-up'>
                            <Link
                                to='/career-detail'
                                className='career-block-inside'
                            >
                                <h6>Product Designer</h6>
                                <p>
                                    We’re looking for a mid-level product
                                    designer to join our team.
                                </p>
                                <div className='job-info'>
                                    <div className='d-flex align-items-center'>
                                        <img src={JobType} alt='JobType' />
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
                        </div>
                        <div className='career-block' data-aos='fade-up'>
                            <Link
                                to='/career-detail'
                                className='career-block-inside'
                            >
                                <h6>Product Designer</h6>
                                <p>
                                    We’re looking for a mid-level product
                                    designer to join our team.
                                </p>
                                <div className='job-info'>
                                    <div className='d-flex align-items-center'>
                                        <img src={JobType} alt='JobType' />
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
                        </div>
                        <div className='career-block' data-aos='fade-up'>
                            <Link
                                to='/career-detail'
                                className='career-block-inside'
                            >
                                <h6>Product Designer</h6>
                                <p>
                                    We’re looking for a mid-level product
                                    designer to join our team.
                                </p>
                                <div className='job-info'>
                                    <div className='d-flex align-items-center'>
                                        <img src={JobType} alt='JobType' />
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
                        </div>
                        <div className='career-block' data-aos='fade-up'>
                            <Link
                                to='/career-detail'
                                className='career-block-inside'
                            >
                                <h6>Product Designer</h6>
                                <p>
                                    We’re looking for a mid-level product
                                    designer to join our team.
                                </p>
                                <div className='job-info'>
                                    <div className='d-flex align-items-center'>
                                        <img src={JobType} alt='JobType' />
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
                        </div>
                        <div className='career-block' data-aos='fade-up'>
                            <Link
                                to='/career-detail'
                                className='career-block-inside'
                            >
                                <h6>Product Designer</h6>
                                <p>
                                    We’re looking for a mid-level product
                                    designer to join our team.
                                </p>
                                <div className='job-info'>
                                    <div className='d-flex align-items-center'>
                                        <img src={JobType} alt='JobType' />
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
                        </div>
                        <div className='career-block' data-aos='fade-up'>
                            <Link
                                to='/career-detail'
                                className='career-block-inside'
                            >
                                <h6>Product Designer</h6>
                                <p>
                                    We’re looking for a mid-level product
                                    designer to join our team.
                                </p>
                                <div className='job-info'>
                                    <div className='d-flex align-items-center'>
                                        <img src={JobType} alt='JobType' />
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
                        </div>
                    </div>
                </Container>
            </section>
            <section className='application-form-section'>
                <Container>
                    <CareerForm />
                </Container>
            </section>
        </div>
    );
}

export default Career;
