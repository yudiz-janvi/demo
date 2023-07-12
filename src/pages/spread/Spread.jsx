import React, { useEffect } from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AOS from 'aos';

import InnerBanner from '../../componets/InnerBanner/InnerBanner';
import LogoAnimation from '../../componets/LogoAnimation/LogoAnimation';

// IMAGES START
import BannerImage from '../../assets/images/spread-banner.jpg';

function Spread() {
    const bannerData = {
        title: 'Equip yourself for more informed trading. Find out about each of our competitive, ',
        banner_image: BannerImage,
        page_title: 'Spread',
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
            <section className='spread-page-section'>
                <LogoAnimation />
                <div className='spread-section-1'>
                    <LogoAnimation rightAlign={true} />
                    <Container data-aos='fade-up'>
                        <h2 className='text-center'>What you won’t pay for</h2>
                        <div className='spread-section-inner'>
                            <div className='spread-section-block-wrap'>
                                <div className='spread-section-block'>
                                    <h5>Opening an account</h5>
                                    <p>
                                        Opening a trading account with us is
                                        100% free. There are no sign-up or
                                        account opening fees
                                    </p>
                                </div>
                            </div>
                            <div className='spread-section-block-wrap'>
                                <div className='spread-section-block'>
                                    <h5>Inactvity fees</h5>
                                    <p>
                                        Even if you don’t trade on your account
                                        for a while, you won’t pay anything for
                                        it to stay open.
                                    </p>
                                </div>
                            </div>
                            <div className='spread-section-block-wrap'>
                                <div className='spread-section-block'>
                                    <h5>Commission</h5>
                                    <p>
                                        We don’t charge you commission on your
                                        trades – our charges for executing
                                        orders or holding your trade.
                                    </p>
                                </div>
                            </div>
                            <div className='spread-section-block-wrap'>
                                <div className='spread-section-block'>
                                    <h5>The spread</h5>
                                    <p>
                                        On every trade you make, you’ll pay the
                                        spread – the difference between the bid
                                        and ask price.
                                    </p>
                                </div>
                            </div>
                            <div className='spread-section-block-wrap'>
                                <div className='spread-section-block'>
                                    <h5>Overnight funding</h5>
                                    <p>
                                        Hold a trade overnight, and you’ll pay a
                                        fee to keep the trade open out of market
                                        hours.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
                <div className='spread-block-wrap'>
                    <LogoAnimation />
                    <Container data-aos='fade-up'>
                        <h2>Spread Example</h2>
                        <div className='spread-block-2'>
                            <h3>CFD example</h3>
                            <p>
                                You have a position of 1 contract on the US Tech
                                100, with a bid/offer quote at 12475/76.The
                                spread on this market is therefore 1 point.To
                                open your position you will pay half this spread
                                and likewise to close it. The total cost of the
                                spread is therefore $1 x 1 = $1
                            </p>
                        </div>
                    </Container>
                </div>
                <div className='spread-block-wrap'>
                    <LogoAnimation rightAlign={true} />
                    <Container data-aos='fade-up'>
                        <h2>Overnight funding</h2>
                        <div className='spread-block-2'>
                            <p>
                                Every time you hold a trade open overnight, your
                                position will be subject to an interest fee. How
                                the fee is calculated – and whether you pay or
                                receive it – depends on a range of factors. You
                                can take a look at some specifics in the
                                examples below.
                            </p>
                            <p>
                                Our fee for trades on shares is calculated using
                                your margin rather than the full value of your
                                position – meaning you’ll pay less for holding
                                overnight than with some other providers
                            </p>
                        </div>
                    </Container>
                </div>
                <div className='spread-block-wrap'>
                    <LogoAnimation />
                    <Container data-aos='fade-up'>
                        <h2>How is overnight funding calculated?</h2>
                        <div className='spread-block-2'>
                            <h6>Formula</h6>
                            <p>
                                Relevant interest rate benchmark (eg SONIA for
                                underlyings denominated in sterling) +/- our
                                daily fee (0.01096%)
                            </p>
                            <h6>CFD example</h6>
                            <ul className='bullet-list'>
                                <li>
                                    You have a position of one contract on the
                                    US Tech 100, currently priced at 12475. Your
                                    position’s full exposure is therefore
                                    $12,475.
                                </li>
                                <li>
                                    The US Tech 100 underlying market is
                                    denominated in USD. Therefore the applicable
                                    interest rate benchmark is the secured
                                    overnight financing rate (SOFR) – which is
                                    currently 4.66448% annually, or 0.01278%
                                    daily.
                                </li>
                                <li>Our daily fee is 0.01096%. </li>
                                <li>
                                    So to hold a long position overnight you
                                    would pay 0.02374% – SOFR plus our fee – of
                                    your exposure, which is $2.96.
                                </li>
                                <li>
                                    To hold a short position, you would receive
                                    0.00182% – SOFR minus our fee – of your
                                    exposure, which is $0.23.
                                </li>
                            </ul>
                        </div>
                    </Container>
                </div>
                <div className='spread-block-wrap'>
                    <LogoAnimation rightAlign={true} />
                    <Container data-aos='fade-up'>
                        <h2>Forex and Precious Metals</h2>
                        <div className='spread-block-2'>
                            <h6>Formula</h6>
                            <p>
                                Underlying market adjustment (TomNext) +/- our
                                daily fee (0.00411%)
                            </p>
                            <h6>CFD example</h6>
                            <ul className='bullet-list'>
                                <li>
                                    You have a position of $10,000 on USD/JPY.
                                </li>
                                <li>
                                    The overnight swap (or TomNext) rate for
                                    USD/JPY is currently -0.0182. At the
                                    prevailing spot price of 132.80 that equates
                                    to -0.0137% daily.
                                </li>
                                <li>Our daily fee is 0.00411%.</li>
                                <li>
                                    So to hold a long position overnight you
                                    would receive 0.00959% – the negative
                                    USD/JPY swap rate plus our fee – of your
                                    exposure, which is $0.96.
                                </li>
                                <li>
                                    To hold a short position, you would pay
                                    0.01781% – the positive swap rate plus our
                                    fee – of your exposure, which is $1.78.
                                </li>
                            </ul>
                        </div>
                    </Container>
                </div>
                <div className='spread-block-wrap'>
                    <Container data-aos='fade-up'>
                        <h2>Forex and Precious Metals</h2>
                        <h6>Formula</h6>
                        <div className='formula-list'>
                            <ul>
                                <li>ECD - 0.01% (if triggered)</li>
                                <li>GBP/USD - 0.01% (if triggered)</li>
                                <li>USD/JPY - 0.01% (if triggered)</li>
                                <li>USD/JPY - 0.01% (if triggered)</li>
                            </ul>
                        </div>
                    </Container>
                </div>
            </section>
        </div>
    );
}

export default Spread;
