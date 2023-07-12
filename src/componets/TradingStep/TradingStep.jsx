import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import CreateAccountIcon from '../../assets/images/create-account-icon.svg';
import DepositeIcon from '../../assets/images/deposite-icon.svg';
import TradingIcon from '../../assets/images/trading-icon.svg';
import Pattern from '../../assets/images/pattern-1.svg';
import LogoAnimation from '../LogoAnimation/LogoAnimation';

function TradingStep(props) {
    const StockLiveData = props.StockLiveData;

    return (
        <section className='step-section'>
            <div
                className='pattern-animation'
                data-aos='slide-right'
                data-aos-offset='50'
                data-aos-easing='ease-in-out'
            >
                <img src={Pattern} alt='Pattern' />
            </div>
            <LogoAnimation rightAlign={true} />
            <Container>
                <Row className='justify-content-between align-items-center'>
                    <Col lg='6' className='text-center'>
                        <div className='popular-market-stock'>
                            {StockLiveData && (
                                <>
                                    <div
                                        data-aos='fade-up'
                                        data-aos-offset='10'
                                    >
                                        <div className='st-card stock-card lg-card'>
                                            <div className='company-logo'>
                                                <img
                                                    src={
                                                        StockLiveData.item_1
                                                            .logo
                                                    }
                                                    alt=''
                                                />
                                            </div>
                                            <div>
                                                <p>
                                                    <span className='stock-name'>
                                                        {
                                                            StockLiveData.item_1
                                                                .short_name
                                                        }
                                                    </span>
                                                    <span className='price'>
                                                        {
                                                            StockLiveData.item_1
                                                                .price
                                                        }
                                                    </span>
                                                </p>
                                                <p>
                                                    <span className='stock-name full-name'>
                                                        {
                                                            StockLiveData.item_1
                                                                .full_name
                                                        }
                                                    </span>
                                                    <span className='price text-dark-green'>
                                                        {
                                                            StockLiveData.item_1
                                                                .change
                                                        }
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        data-aos='fade-up'
                                        data-aos-delay='250'
                                        data-aos-offset='10'
                                    >
                                        <div className='st-card stock-card sm-card'>
                                            <div className='company-logo'>
                                                <img
                                                    src={
                                                        StockLiveData.item_2
                                                            .logo
                                                    }
                                                    alt='AppleStockIcon'
                                                />
                                            </div>
                                            <div>
                                                <p>
                                                    <span className='stock-name'>
                                                        {
                                                            StockLiveData.item_2
                                                                .short_name
                                                        }
                                                    </span>
                                                    <span className='price'>
                                                        {
                                                            StockLiveData.item_2
                                                                .price
                                                        }
                                                    </span>
                                                </p>
                                                <p>
                                                    <span className='stock-name full-name'>
                                                        {
                                                            StockLiveData.item_2
                                                                .full_name
                                                        }
                                                    </span>
                                                    <span className='price text-dark-green'>
                                                        {
                                                            StockLiveData.item_2
                                                                .change
                                                        }
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        data-aos='fade-up'
                                        data-aos-delay='300'
                                        data-aos-offset='10'
                                    >
                                        <div className='st-card stock-card onlyStocklogo'>
                                            <img
                                                src={StockLiveData.item_3.logo}
                                                alt='StockIcon'
                                            />
                                        </div>
                                    </div>
                                    <div
                                        data-aos='fade-up'
                                        data-aos-delay='400'
                                        data-aos-offset='10'
                                    >
                                        <div className='st-card stock-card onlyStocklogo2'>
                                            <img
                                                src={StockLiveData.item_4.logo}
                                                alt='StockIcon'
                                            />
                                        </div>
                                    </div>
                                    <div
                                        data-aos='fade-up'
                                        data-aos-delay='500'
                                        data-aos-offset='10'
                                    >
                                        <div className='st-card step-cover-img'>
                                            <img
                                                src={StockLiveData.item_5.image}
                                                alt='StepCover'
                                            />
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </Col>
                    <Col lg='5'>
                        <div className='step-wrap'>
                            <h2 data-aos='fade-up'>
                                Still searching for a reliable
                            </h2>
                            <ul>
                                <li data-aos='fade-up'>
                                    <div className='step-icon'>
                                        <img
                                            src={CreateAccountIcon}
                                            alt='CreateAccountIcon'
                                        />
                                    </div>
                                    <div>
                                        <p>Step 01</p>
                                        <h6>Create & verify your account</h6>
                                    </div>
                                </li>
                                <li data-aos='fade-up'>
                                    <div className='step-icon'>
                                        <img
                                            src={DepositeIcon}
                                            alt='DepositeIcon'
                                        />
                                    </div>
                                    <div>
                                        <p>Step 02</p>
                                        <h6>Make your first deposit</h6>
                                    </div>
                                </li>
                                <li data-aos='fade-up' data-aos-offset='50'>
                                    <div className='step-icon'>
                                        <img
                                            src={TradingIcon}
                                            alt='TradingIcon'
                                        />
                                    </div>
                                    <div>
                                        <p>Step 03</p>
                                        <h6>You’re all set. start trading</h6>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default TradingStep;
