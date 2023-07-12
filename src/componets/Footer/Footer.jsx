import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/logo.svg';
import QrCode from '../../assets/images/qr-code.png';
import CallIcon from '../../assets/images/call-icon.svg';
import EmailIcon from '../../assets/images/email-icon.svg';
import AddressIcon from '../../assets/images/address-icon.svg';
import GoogleIcon from '../../assets/images/google-icon.svg';
import FacebookIcon from '../../assets/images/facebook-icon.svg';
import InstagramIcon from '../../assets/images/instagram-icon.svg';
import LinkdinIcon from '../../assets/images/linkdin-icon.svg';
import YoutubeIcon from '../../assets/images/youtube-icon.svg';
import TwitterIcon from '../../assets/images/twitter-icon.svg';

function Footer() {
    return (
        <footer>
            <div className='footer-inside'>
                <Container>
                    <Row>
                        <Col sm={6} md={4} lg>
                            <Link className='footer-logo'>
                                <img src={Logo} alt='' />
                            </Link>
                            <div className='download-app'>
                                <h6>Download Our App</h6>
                                <img src={QrCode} width='100px' alt='' />
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg>
                            <h6>Markets</h6>
                            <ul>
                                <li>
                                    <Link to='/forex'>Forex</Link>
                                </li>
                                <li>
                                    <Link to='/indices'>Indices</Link>
                                </li>
                                <li>
                                    <Link to='/digital'>Digital</Link>
                                </li>
                                <li>
                                    <Link to='/shares'>Commodities</Link>
                                </li>
                                <li>
                                    <Link to='/commodities'>Shares</Link>
                                </li>
                                <li>
                                    <Link to='/etfs'>ETFS</Link>
                                </li>
                            </ul>
                        </Col>
                        {/* <Col sm={6} md={4} lg={2}> */}
                        <Col sm={6} md={4} lg>
                            <h6>Trading</h6>
                            <ul>
                                <li>
                                    <Link to='/mt5'>MT5</Link>
                                </li>
                                <li>
                                    <Link to='/spread'>spread</Link>
                                </li>
                                <li>
                                    <Link to='/account'>Account</Link>
                                </li>
                                <li>
                                    <Link to=''>Free account demo</Link>
                                </li>
                            </ul>
                        </Col>
                        {/* <Col sm={6} md={4} lg={2}>
                            <h6>Tools</h6>
                            <ul>
                                <li>
                                    <Link to=''>Analysis</Link>
                                </li>
                                <li>
                                    <Link to=''>economic calendar</Link>
                                </li>
                                <li>
                                    <Link to='/account'>Account</Link>
                                </li>
                                <li>
                                    <Link to=''>Market alerts</Link>
                                </li>
                            </ul>
                        </Col> */}
                        <Col sm={6} md={6} lg>
                            <h6>Learn</h6>
                            <ul>
                                <li>
                                    <Link to='/education'>Education</Link>
                                </li>
                                {/* <li>
                                        <Link to=''>Library</Link>
                                    </li>
                                    <li>
                                        <Link to=''>video</Link>
                                    </li> */}
                            </ul>
                        </Col>
                        <Col sm={6} md={6} lg>
                            <h6>Plus 365</h6>
                            <ul>
                                <li>
                                    <Link to='/about-us'>About </Link>
                                </li>
                                <li>
                                    <Link to='/careers'>Career</Link>
                                </li>
                                <li>
                                    <Link to='/why-us'>Why us</Link>
                                </li>
                                <li>
                                    <Link to='/contact-us'>Contact us</Link>
                                </li>
                                <li>
                                    <Link to='/faqs'>FAQs</Link>
                                </li>
                                <li>
                                    <Link to='/regulation'>Regulation</Link>
                                </li>
                                {/* <li>
                                    <Link to=''>Brochure</Link>
                                </li> */}
                            </ul>
                        </Col>
                    </Row>
                    <div className='footer-contact'>
                        <div className='phone d-flex align-items-center'>
                            <img src={CallIcon} alt='CallIcon' />
                            <Link to='tel:+441234567878951'>
                                +44 1234567878951
                            </Link>
                        </div>
                        <div className='email d-flex align-items-center'>
                            <img src={EmailIcon} alt='CallIcon' />
                            <Link to='mailto:support@plus365.com'>
                                support@plus365.com
                            </Link>
                        </div>
                        <div className='address d-flex align-items-center'>
                            <img src={AddressIcon} alt='CallIcon' />
                            <span>137 Market St Singapore 048943</span>
                        </div>
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
                    <div className='declaration'>
                        <p>
                            CFDs are complex instruments and come with a high
                            risk of losing money rapidly due to leverage.{' '}
                            <span>
                                84% of retail investor accounts lose money when
                                trading CFDs with this provider.
                            </span>{' '}
                            You should consider whether you understand how CFDs
                            work and whether you can afford to take the high
                            risk of losing your money. Please refer to our{' '}
                            <u>Risk Disclosure Statement</u>
                        </p>

                        <p>
                            The value of shares and ETFs bought through a share
                            dealing account can fall as well as rise, which
                            could mean getting back less than you originally put
                            in. Past performance is no guarantee of future
                            results.
                        </p>

                        <p>
                            Risk warning: Concluding operations with
                            non-deliverable over-the-counter instruments are a
                            risky activity and can bring not only profit but
                            also losses. The size of the potential loss is
                            limited to the funds held by us for and on your
                            behalf, in relation to your trading account. Past
                            profits do not guarantee future profits. Use the
                            training services of our company to understand the
                            risks before you start operations.
                        </p>
                    </div>
                </Container>
                <div className='copyright-section'>
                    <Container>
                        <Row className='justify-content-center justify-content-md-between align-items-center'>
                            <Col md='auto'>
                                <p>© 2023 plus365. All rights reserved.</p>
                            </Col>
                            <Col md='auto'>
                                <Link to='#'>Terms and Conditions</Link>
                                <Link to='#'>Privacy and Policy</Link>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
