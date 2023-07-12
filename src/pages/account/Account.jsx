import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import LogoAnimation from '../../componets/LogoAnimation/LogoAnimation';
import standard_ic from '../../assets/images/standard_ic.svg';
import elite_ic from '../../assets/images/elite_ic.svg';
import platinum_ic from '../../assets/images/platinum_ic.svg';
import white_logo from '../../assets/images/white-logo.svg';
import AOS from 'aos';

function Account() {
    useEffect(() => {
        AOS.init({
            easing: 'ease-in-out-back',
            duration: 1000,
            // disable: 'mobile',
        });
        AOS.refresh();
        // new WOW.WOW({
        //     live: false,
        // }).init();
    }, []);
    return (
        <div className='content-wrapper' id='content-wrap'>
            <section className='account-page'>
                <div className='page-header'>
                    <LogoAnimation rightAlign={true} />
                    <div className='account-header'>
                        <h6>Account</h6>
                        <h1>
                            Flexible Pricing Plans Tailored to Your Trading
                            Goals
                        </h1>
                        <p>
                            Plus Capital is a trading name of Plus Capital
                            Limited - ADGM, a member of Plus Group, which is
                            authoPlus Capital is a trading name of Plus Capital
                            Limited.
                        </p>
                    </div>
                </div>
                <Container>
                    <div className='row'>
                        <div
                            data-aos-delay='100'
                            data-aos='fade-up'
                            className='col-md-6 col-xl-4'
                        >
                            <div className='pricing-card'>
                                <div className='card-heading'>
                                    <img src={standard_ic} alt='' />
                                    <h2>Standard</h2>
                                </div>
                                <p>Market Spreads</p>
                                <ul>
                                    <li>As low as zero commission</li>
                                    <li>No min deposit</li>
                                    <li>1:30 retail leverage</li>
                                </ul>
                                <div className='action'>
                                    <button className='btn btn-primary'>
                                        Open Account
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div
                            data-aos-delay='200'
                            data-aos='fade-up'
                            className='col-md-6 col-xl-4'
                        >
                            <div className='pricing-card'>
                                <div className='card-heading'>
                                    <img src={elite_ic} alt='' />
                                    <h2>Elite</h2>
                                </div>
                                <p>25% Lower Market Spread</p>
                                <ul>
                                    <li>As low as zero commission</li>
                                    <li>$10000 deposit</li>
                                    <li>1:30 retail leverage</li>
                                </ul>
                                <div className='action'>
                                    <button className='btn btn-primary'>
                                        Open Account
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div
                            data-aos-delay='300'
                            data-aos='fade-up'
                            className='col-md-6 col-xl-4'
                        >
                            <div className='pricing-card'>
                                <div className='card-heading'>
                                    <img src={elite_ic} alt='' />
                                    <h2>Platinum</h2>
                                </div>
                                <p>Ultra - Low Spread</p>
                                <ul>
                                    <li>As low as zero commission</li>
                                    <li>$50000 deposit</li>
                                    <li>1:100 professional leverage</li>
                                </ul>
                                <div className='action'>
                                    <button className='btn btn-primary'>
                                        Open Account
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div
                            data-aos-delay='300'
                            data-aos='fade-up'
                            className='col-md-6 col-xl-12'
                        >
                            <div className='pricing-card'>
                                <div className='card-heading'>
                                    <img src={white_logo} alt='' />
                                </div>
                                <div className='create-account'>
                                    <h3>Create your own account with us</h3>
                                    <p>
                                        One of the best forex trading platforms
                                        available is widely regarded as being
                                        the MetaTrader 5 platform. When trading
                                        on MT5, anticipate quicker processing
                                        times.
                                    </p>
                                </div>
                                <div className='action'>
                                    <button className='btn btn-primary'>
                                        Contact Us
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}

export default Account;
