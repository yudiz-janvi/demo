import React, { useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AOS from 'aos';

import InnerBanner from '../../componets/InnerBanner/InnerBanner';
import Faqs from '../../componets/Faqs/Faqs';
import LogoAnimation from '../../componets/LogoAnimation/LogoAnimation';

// IMAGES START
import BannerImage from '../../assets/images/etfs-education-banner.jpg';
import FbShare from '../../assets/images/fb-share-icon.svg';
import LinkdinShare from '../../assets/images/linkdin-share-icon.svg';
import TwitterShare from '../../assets/images/twitter-share-icon.svg';

function ETFsEducation() {
    const sustainableInvesting = useRef(null);
    const strategiesOfSustainable = useRef(null);
    const investingLead = useRef(null);
    const esgSustainable = useRef(null);

    const bannerData = {
        title: 'Education refers to the discipline that is concerned with methods of teaching.',
        banner_image: BannerImage,
        page_title: 'ETFs Education ',
        description:
            'Plus Capital is a trading name of Plus Capital Limited - ADGM, a member of Plus Group, which is authoPlus Capital is a trading name of Plus Capital Limited.',
    };

    const scrollToId = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop - 110,
            behavior: 'smooth',
        });
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
            <section className='education-section education-bottom-logo'>
                <LogoAnimation rightAlign={true} />
                <LogoAnimation />
                <Container>
                    <h2>Top topics for ETFs Education</h2>
                    <ul className='education-topic'>
                        <li>
                            <Link
                                onClick={() => scrollToId(sustainableInvesting)}
                            >
                                1. What is sustainable investing?
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={() =>
                                    scrollToId(strategiesOfSustainable)
                                }
                            >
                                2. What are the 4 strategies of sustainable
                                investing?
                            </Link>
                        </li>
                        <li>
                            <Link onClick={() => scrollToId(investingLead)}>
                                3. Does sustainable investing lead to better
                                returns?
                            </Link>
                        </li>
                        <li>
                            <Link onClick={() => scrollToId(esgSustainable)}>
                                4. Is ESG the same as sustainable investing?
                            </Link>
                        </li>
                    </ul>
                </Container>
            </section>
            <section
                className='education-detail-section'
                ref={sustainableInvesting}
            >
                <LogoAnimation rightAlign={true} />
                <Container>
                    <div className='education-detail-inner'>
                        <h3>What is sustainable investing?</h3>
                        <p>
                            One of the best forex trading platforms available is
                            widely regarded as being the MetaTrader 5 platform.
                            When trading on MT5, anticipate quicker processing
                            times, advanced order entry capabilities, and the
                            most recent tools. One of the best forex trading
                            platforms available is widely regarded as being the
                            MetaTrader 5 platform. When trading on MT5,
                            anticipate quicker processing times, advanced order
                            entry capabilities, and the most recent tools.
                        </p>
                        <p>
                            One of the best forex trading platforms available is
                            widely regarded as being the MetaTrader 5 platform.
                            When trading on MT5, anticipate quicker processing
                            times, advanced order entry capabilities, and the
                            most recent tools. One of the best forex trading
                            platforms available is widely regarded as being the
                            MetaTrader 5 platform. When trading on MT5,
                            anticipate quicker processing times, advanced order
                            entry capabilities, and the most recent tools.
                        </p>
                        <p>
                            One of the best forex trading platforms available is
                            widely regarded as being the MetaTrader 5 platform.
                            When trading on MT5, anticipate quicker processing
                            times, advanced order entry capabilities, and the
                            most recent tools. One of the best forex trading
                            platforms available is widely regarded as being the
                            MetaTrader 5 platform. When trading on MT5,
                            anticipate quicker processing times, advanced order
                            entry capabilities, and the most recent tools.
                        </p>
                    </div>
                </Container>
            </section>
            <section
                className='education-detail-section'
                ref={strategiesOfSustainable}
            >
                <LogoAnimation />
                <Container>
                    <div className='education-detail-inner'>
                        <h3>
                            What are the 4 strategies of sustainable investing?
                        </h3>
                        <p>
                            One of the best forex trading platforms available is
                            widely regarded as being the MetaTrader 5 platform.
                            When trading on MT5, anticipate quicker processing
                            times, advanced order entry capabilities, and the
                            most recent tools. One of the best forex trading
                            platforms available is widely regarded as being the
                            MetaTrader 5 platform. When trading on MT5,
                            anticipate quicker processing times, advanced order
                            entry capabilities, and the most recent tools.
                        </p>
                        <p>
                            One of the best forex trading platforms available is
                            widely regarded as being the MetaTrader 5 platform.
                            When trading on MT5, anticipate quicker processing
                            times, advanced order entry capabilities, and the
                            most recent tools. One of the best forex trading
                            platforms available is widely regarded as being the
                            MetaTrader 5 platform. When trading on MT5,
                            anticipate quicker processing times, advanced order
                            entry capabilities, and the most recent tools.
                        </p>
                        <p>
                            One of the best forex trading platforms available is
                            widely regarded as being the MetaTrader 5 platform.
                            When trading on MT5, anticipate quicker processing
                            times, advanced order entry capabilities, and the
                            most recent tools. One of the best forex trading
                            platforms available is widely regarded as being the
                            MetaTrader 5 platform. When trading on MT5,
                            anticipate quicker processing times, advanced order
                            entry capabilities, and the most recent tools.
                        </p>
                    </div>
                </Container>
            </section>
            <section className='education-detail-section' ref={investingLead}>
                <LogoAnimation rightAlign={true} />
                <Container>
                    <div className='education-detail-inner'>
                        <h3>
                            Does sustainable investing lead to better returns?
                        </h3>
                        <p>
                            One of the best forex trading platforms available is
                            widely regarded as being the MetaTrader 5 platform.
                            When trading on MT5, anticipate quicker processing
                            times, advanced order entry capabilities, and the
                            most recent tools. One of the best forex trading
                            platforms available is widely regarded as being the
                            MetaTrader 5 platform. When trading on MT5,
                            anticipate quicker processing times, advanced order
                            entry capabilities, and the most recent tools.
                        </p>
                        <p>
                            One of the best forex trading platforms available is
                            widely regarded as being the MetaTrader 5 platform.
                            When trading on MT5, anticipate quicker processing
                            times, advanced order entry capabilities, and the
                            most recent tools. One of the best forex trading
                            platforms available is widely regarded as being the
                            MetaTrader 5 platform. When trading on MT5,
                            anticipate quicker processing times, advanced order
                            entry capabilities, and the most recent tools.
                        </p>
                        <p>
                            One of the best forex trading platforms available is
                            widely regarded as being the MetaTrader 5 platform.
                            When trading on MT5, anticipate quicker processing
                            times, advanced order entry capabilities, and the
                            most recent tools. One of the best forex trading
                            platforms available is widely regarded as being the
                            MetaTrader 5 platform. When trading on MT5,
                            anticipate quicker processing times, advanced order
                            entry capabilities, and the most recent tools.
                        </p>
                    </div>
                </Container>
            </section>
            <section className='education-detail-section' ref={esgSustainable}>
                <LogoAnimation />
                <Container>
                    <div className='education-detail-inner'>
                        <h3>
                            Does sustainable investing lead to better returns?
                        </h3>
                        <p>
                            One of the best forex trading platforms available is
                            widely regarded as being the MetaTrader 5 platform.
                            When trading on MT5, anticipate quicker processing
                            times, advanced order entry capabilities, and the
                            most recent tools. One of the best forex trading
                            platforms available is widely regarded as being the
                            MetaTrader 5 platform. When trading on MT5,
                            anticipate quicker processing times, advanced order
                            entry capabilities, and the most recent tools.
                        </p>
                        <p>
                            One of the best forex trading platforms available is
                            widely regarded as being the MetaTrader 5 platform.
                            When trading on MT5, anticipate quicker processing
                            times, advanced order entry capabilities, and the
                            most recent tools. One of the best forex trading
                            platforms available is widely regarded as being the
                            MetaTrader 5 platform. When trading on MT5,
                            anticipate quicker processing times, advanced order
                            entry capabilities, and the most recent tools.
                        </p>
                        <p>
                            One of the best forex trading platforms available is
                            widely regarded as being the MetaTrader 5 platform.
                            When trading on MT5, anticipate quicker processing
                            times, advanced order entry capabilities, and the
                            most recent tools. One of the best forex trading
                            platforms available is widely regarded as being the
                            MetaTrader 5 platform. When trading on MT5,
                            anticipate quicker processing times, advanced order
                            entry capabilities, and the most recent tools.
                        </p>
                    </div>
                </Container>
            </section>

            <section className='social-share-section'>
                <Container className='text-center'>
                    <div className='d-sm-flex align-items-center justify-content-center'>
                        <h5>Share article on</h5>
                        <ul className='d-flex align-items-center  justify-content-center'>
                            <li>
                                <Link to=''>
                                    <img src={FbShare} alt='' />
                                </Link>
                            </li>
                            <li>
                                <Link to=''>
                                    <img src={LinkdinShare} alt='' />
                                </Link>
                            </li>
                            <li>
                                <Link to=''>
                                    <img src={TwitterShare} alt='' />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </Container>
            </section>

            {/* FAQS SECTION START */}
            <section className='faqs-section-wrap' id='investing-lead'>
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

export default ETFsEducation;
