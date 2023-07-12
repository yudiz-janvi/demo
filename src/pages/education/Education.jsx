import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AOS from 'aos';

import InnerBanner from '../../componets/InnerBanner/InnerBanner';
import Faqs from '../../componets/Faqs/Faqs';
import LogoAnimation from '../../componets/LogoAnimation/LogoAnimation';

// IMAGES START
import BannerImage from '../../assets/images/education-banner.jpg';
import ForexThumb from '../../assets/images/forex-trading-thumb.jpg';
import IndicesThumb from '../../assets/images/indices-trading-thumb.jpg';
import SharesThumb from '../../assets/images/shares-trading-thumb.jpg';
import CommoditiesThumb from '../../assets/images/commodities-trading-thumb.jpg';
import DigitalThumb from '../../assets/images/digital-trading-thumb.jpg';
import EtfsThumb from '../../assets/images/etfs-fonds-thumb.jpg';

function Education() {
    const bannerData = {
        title: 'Education refers to the discipline that is concerned with methods of teaching.',
        banner_image: BannerImage,
        page_title: 'Education',
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

            {/* Education List START */}
            <section className='education-section'>
                <LogoAnimation rightAlign={true} />
                <LogoAnimation />
                <Container>
                    <div className='text-center'>
                        <h2>World’s best trading and investment course</h2>
                    </div>
                    <Row>
                        <Col lg={6} data-aos='fade-up'>
                            <div className='education-block'>
                                <div className='education-img'>
                                    <img src={ForexThumb} alt='ForexThumb' />
                                </div>
                                <div className='education-detail'>
                                    <h5>Forex trading</h5>
                                    <p>
                                        One of the best forex trading platforms
                                        available is widely regarded as being
                                        the MetaTrader 5 platform. When trading
                                        on MT5, anticipate{' '}
                                    </p>
                                    <Link to='/forex-education'>View More</Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} data-aos='fade-up'>
                            <div className='education-block'>
                                <div className='education-img'>
                                    <img
                                        src={IndicesThumb}
                                        alt='IndicesThumb'
                                    />
                                </div>
                                <div className='education-detail'>
                                    <h5>Indices trading</h5>
                                    <p>
                                        One of the best forex trading platforms
                                        available is widely regarded as being
                                        the MetaTrader 5 platform. When trading
                                        on MT5, anticipate{' '}
                                    </p>
                                    <Link to='/indices-education'>
                                        View More
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} data-aos='fade-up'>
                            <div className='education-block'>
                                <div className='education-img'>
                                    <img src={SharesThumb} alt='SharesThumb' />
                                </div>
                                <div className='education-detail'>
                                    <h5>Shares trading</h5>
                                    <p>
                                        One of the best forex trading platforms
                                        available is widely regarded as being
                                        the MetaTrader 5 platform. When trading
                                        on MT5, anticipate{' '}
                                    </p>
                                    <Link to='/shares-education'>
                                        View More
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} data-aos='fade-up'>
                            <div className='education-block'>
                                <div className='education-img'>
                                    <img
                                        src={CommoditiesThumb}
                                        alt='CommoditiesThumb'
                                    />
                                </div>
                                <div className='education-detail'>
                                    <h5>Commodities trading</h5>
                                    <p>
                                        One of the best forex trading platforms
                                        available is widely regarded as being
                                        the MetaTrader 5 platform. When trading
                                        on MT5, anticipate{' '}
                                    </p>
                                    <Link to='/commodities-education'>
                                        View More
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} data-aos='fade-up'>
                            <div className='education-block'>
                                <div className='education-img'>
                                    <img
                                        src={DigitalThumb}
                                        alt='DigitalThumb'
                                    />
                                </div>
                                <div className='education-detail'>
                                    <h5>Digital trading</h5>
                                    <p>
                                        One of the best forex trading platforms
                                        available is widely regarded as being
                                        the MetaTrader 5 platform. When trading
                                        on MT5, anticipate{' '}
                                    </p>
                                    <Link to='/digital-education'>
                                        View More
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} data-aos='fade-up'>
                            <div className='education-block'>
                                <div className='education-img'>
                                    <img src={EtfsThumb} alt='EtfsThumb' />
                                </div>
                                <div className='education-detail'>
                                    <h5>ETFS Fonds</h5>
                                    <p>
                                        One of the best forex trading platforms
                                        available is widely regarded as being
                                        the MetaTrader 5 platform. When trading
                                        on MT5, anticipate{' '}
                                    </p>
                                    <Link to='/etfs-education'>View More</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* FAQS SECTION START */}
            <section className='faqs-section-wrap'>
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

export default Education;
