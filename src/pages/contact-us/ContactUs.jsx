import React, { useEffect } from 'react';
import { Button, Col, Form, Container, Row } from 'react-bootstrap';
import AOS from 'aos';
import { Link } from 'react-router-dom';

import InnerBanner from '../../componets/InnerBanner/InnerBanner';
import LogoAnimation from '../../componets/LogoAnimation/LogoAnimation';

// IMAGES START
import BannerImage from '../../assets/images/why-us-banner.jpg';
import CallIcon from '../../assets/images/call-icon.svg';
import EmailIcon from '../../assets/images/email-icon.svg';
import LocationIcon from '../../assets/images/address-icon.svg';
import GoogleIcon from '../../assets/images/google-icon.svg';
import FacebookIcon from '../../assets/images/facebook-icon.svg';
import InstagramIcon from '../../assets/images/instagram-icon.svg';
import LinkdinIcon from '../../assets/images/linkdin-icon.svg';
import YoutubeIcon from '../../assets/images/youtube-icon.svg';
import TwitterIcon from '../../assets/images/twitter-icon.svg';

function ContactUs() {
    const bannerData = {
        title: `Reach out to us for any questions, feedback, or assistance. We're ready to help!`,
        banner_image: BannerImage,
        page_title: 'Contact us',
        description:
            'We value your feedback and strive to provide exceptional customer service.',
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
            <section className='contact-page-section'>
                <Container>
                    <Row>
                        <Col md='6' lg='5'>
                            <div
                                className='contact-block'
                                data-aos='slide-right'
                            >
                                <div className='contact-block-inside'>
                                    <h6>Get in touch</h6>
                                    <p>
                                        We’ love to hear from you. Our friendly
                                        team is always here to chat.
                                    </p>
                                    <div className='contact-detail'>
                                        <div className='con-icon'>
                                            <img
                                                src={CallIcon}
                                                alt='CallIcon'
                                            />
                                        </div>
                                        <div>
                                            <p>Phone</p>
                                            <Link to='tel:+441234567878951'>
                                                +44 1234567878951
                                            </Link>
                                        </div>
                                    </div>
                                    <div className='contact-detail'>
                                        <div className='con-icon'>
                                            <img
                                                src={EmailIcon}
                                                alt='EmailIcon'
                                            />
                                        </div>
                                        <div>
                                            <p>Email</p>
                                            <Link to='mailto:support@plus365.com'>
                                                support@plus365.com
                                            </Link>
                                        </div>
                                    </div>
                                    <div className='contact-detail'>
                                        <div className='con-icon'>
                                            <img
                                                src={LocationIcon}
                                                alt='LocationIcon'
                                            />
                                        </div>
                                        <div>
                                            <p>Location</p>
                                            <span>
                                                3274 Doe Meadow Drive, Annapolis
                                                Junction, MD 20701.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <LogoAnimation
                                    lightMode={true}
                                    rightAlign={true}
                                />
                                <div className='social-icon'>
                                    <ul>
                                        <li>
                                            <Link to='#'>
                                                <img
                                                    src={GoogleIcon}
                                                    alt='GoogleIcon'
                                                />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='#'>
                                                <img
                                                    src={FacebookIcon}
                                                    alt='FacebookIcon'
                                                />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='#'>
                                                <img
                                                    src={InstagramIcon}
                                                    alt='InstagramIcon'
                                                />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='#'>
                                                <img
                                                    src={LinkdinIcon}
                                                    alt='LinkdinIcon'
                                                />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='#'>
                                                <img
                                                    src={YoutubeIcon}
                                                    alt='YoutubeIcon'
                                                />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='#'>
                                                <img
                                                    src={TwitterIcon}
                                                    alt='TwitterIcon'
                                                />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col md='6' lg='7'>
                            <div className='form-card' data-aos='slide-left'>
                                <h6>Level up our bond</h6>
                                <Form>
                                    <Row>
                                        <Col>
                                            <Form.Group className='form-group'>
                                                <Form.Control
                                                    type='text'
                                                    placeholder='Full Name *'
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group className='form-group'>
                                                <Form.Control
                                                    type='text'
                                                    placeholder='Email Address *'
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group className='form-group'>
                                                <Form.Control
                                                    type='text'
                                                    placeholder='Phone number*'
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group className='form-group'>
                                                <Form.Select defaultValue='Country of radiance'>
                                                    <option>
                                                        Country of radiance
                                                    </option>
                                                    <option>Option 1</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group className='form-group'>
                                                <Form.Select defaultValue='Reason'>
                                                    <option>Reason</option>
                                                    <option>Liquidity</option>
                                                    <option>Marketing</option>
                                                    <option>Complain</option>
                                                    <option>
                                                        Product enquiry
                                                    </option>
                                                    <option>Support</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group className='form-group'>
                                                <Form.Control
                                                    type='text'
                                                    as='textarea'
                                                    rows={3}
                                                    placeholder='Message'
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <div className='form-btn'>
                                                <Button variant='secondary'>
                                                    Submit
                                                </Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
}

export default ContactUs;
