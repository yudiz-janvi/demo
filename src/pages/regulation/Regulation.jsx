import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import AOS from 'aos';

import InnerBanner from '../../componets/InnerBanner/InnerBanner';

// IMAGES START
import BannerImage from '../../assets/images/regulation-banner.jpg';
import AdgmLogo from '../../assets/images/adgm-logo.jpg';

function Regulation() {
    const bannerData = {
        title: 'Regulation with data and find out the top trade with trust rules',
        banner_image: BannerImage,
        page_title: 'Regulation',
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
            <section className='regulation-adgm-section'>
                <Container className='text-center'>
                    <div className='adgm-logo'>
                        <img src={AdgmLogo} alt='AdgmLogo' />
                    </div>
                </Container>
            </section>
            <section className='regulation-page-section'>
                <Container>
                    <div className='text-center pb-4'>
                        <h3>Regulation of Forex</h3>
                        <p>
                            With a shared passion for trading, we set out to
                            empower individuals by providing comprehensive
                            education, cutting-edge tools, and personalised
                            support, enabling them to navigate the dynamic
                            financial markets with confidence and achieve their
                            investment goals.
                        </p>
                        <p>
                            With a shared passion for trading, we set out to
                            empower individuals by providing comprehensive
                            education, cutting-edge tools, and personalised
                            support, enabling them to navigate the dynamic
                            financial markets with confidence and achieve their
                            investment goals.
                        </p>
                        <p>With a shared passion for trading,</p>
                    </div>
                    <div className='text-center pb-4'>
                        <h3>Regulation of Forex</h3>
                        <p>
                            With a shared passion for trading, we set out to
                            empower individuals by providing comprehensive
                            education, cutting-edge tools, and personalised
                            support, enabling them to navigate the dynamic
                            financial markets with confidence and achieve their
                            investment goals.
                        </p>
                        <p>
                            With a shared passion for trading, we set out to
                            empower individuals by providing comprehensive
                            education, cutting-edge tools, and personalised
                            support, enabling them to navigate the dynamic
                            financial markets with confidence and achieve their
                            investment goals.
                        </p>
                        <p>With a shared passion for trading,</p>
                    </div>
                    <div className='text-center pb-4'>
                        <h3>Regulation of Forex</h3>
                        <p>
                            With a shared passion for trading, we set out to
                            empower individuals by providing comprehensive
                            education, cutting-edge tools, and personalised
                            support, enabling them to navigate the dynamic
                            financial markets with confidence and achieve their
                            investment goals.
                        </p>
                        <p>
                            With a shared passion for trading, we set out to
                            empower individuals by providing comprehensive
                            education, cutting-edge tools, and personalised
                            support, enabling them to navigate the dynamic
                            financial markets with confidence and achieve their
                            investment goals.
                        </p>
                        <p>With a shared passion for trading,</p>
                    </div>
                </Container>
            </section>
        </div>
    );
}

export default Regulation;
