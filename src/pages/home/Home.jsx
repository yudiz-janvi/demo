import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import {
    Accordion,
    Button,
    Col,
    Container,
    Nav,
    Row,
    Tab,
    Table,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import {
    MouseParallaxChild,
    MouseParallaxContainer,
} from 'react-parallax-mouse';

import HomeBanner from '../../componets/HomeBanner/HomeBanner';
import LogoAnimation from '../../componets/LogoAnimation/LogoAnimation';

import EuroIcon from '../../assets/images/euro-icon.png';
import AmazoneIcon from '../../assets/images/amazone-icon.png';
import AppleIcon from '../../assets/images/apple-icon.png';
import GoldIcon from '../../assets/images/gold-icon.png';
import MetaIcon from '../../assets/images/meta-icon.png';
import MicrosoftIcon from '../../assets/images/microsoft-cion.png';
import TeslaIcon from '../../assets/images/tesla-icon.png';
import DollerIcon from '../../assets/images/doller-icon.png';
import Pattern from '../../assets/images/pattern-1.svg';
import MostPopularIcon from '../../assets/images/most-popular-icon.svg';
import SharesIcon from '../../assets/images/shares-icon.svg';
import CommoditiesIcon from '../../assets/images/commodities-icon.svg';
import IndicesIcon from '../../assets/images/indices-icon.svg';
import ForexIcon from '../../assets/images/forex-icon.svg';
import OptionsIcon from '../../assets/images/options-icon.svg';
import ETFsIcon from '../../assets/images/ETFs-icon.svg';
import RisersFallersIcon from '../../assets/images/risers-fallers-icon.svg';

// import Mt5Animation from '../../assets/images/mt-5-flow.svg';

import tslaIcon from '../../assets/images/tsla-icon.svg';
import AppleStockIcon from '../../assets/images/apple-stock-icon.svg';
import StepCover from '../../assets/images/step-cover-1.jpg';
import StockIcon from '../../assets/images/stock-icon-1.png';
import StockIcon1 from '../../assets/images/stock-icon-2.png';
import RegulatedBroker from '../../assets/images/regulated-broker.jpg';
import SharpSpread from '../../assets/images/sharp-spread.jpg';
import CfdsTrade from '../../assets/images/cfds-trade.jpg';
import Reliable from '../../assets/images/reliable.jpg';
// import Mt5Animation from '../../assets/images/meta-5-animation.gif';
import GlowImage from '../../assets/images/glow-image.svg';
import mt5Trader from '../../assets/images/mt-5-trader.png';
import Mt5Animation from '../../assets/images/meta-5-animation.json';
import TradingStep from '../../componets/TradingStep/TradingStep';

function Home() {
    const [currentTools, setCurrentTools] = useState('regulated');
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

    function handleAccordion(activeState) {
        setCurrentTools(activeState);
    }

    const defaultRotateOptions = {
        loop: true,
        autoplay: true,
        animationData: Mt5Animation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    const StockLiveData = {
        item_1: {
            logo: tslaIcon,
            short_name: 'TSLA',
            full_name: 'Tesla',
            price: '244.40',
            change: '+9.54 (+4.06%)',
        },
        item_2: {
            logo: AppleStockIcon,
            short_name: 'AAPL',
            full_name: 'Apple',
            price: '180.96',
            change: '+0.39 (+0.22%)',
        },
        item_3: {
            logo: StockIcon,
        },
        item_4: {
            logo: StockIcon1,
        },
        item_5: {
            image: StepCover,
        },
    };

    return (
        <div className='content-wrapper' id='content-wrap'>
            {/* HOME BANNER START */}
            <HomeBanner />
            {/* AWARD SECTION START */}
            <section className='award-winning-section'>
                <Container>
                    <h2 className='text-center'>
                        Execute your trades on our award-winning platform.
                    </h2>
                </Container>
                <div className='award-winning-inner'>
                    <div
                        className='pattern-animation pattern-right'
                        data-aos='slide-left'
                        data-aos-offset='300'
                        data-aos-easing='ease-in-out'
                    >
                        <img src={Pattern} alt='Pattern' />
                    </div>
                    <Container>
                        <Row className='justify-content-between align-items-center'>
                            <Col lg={5}>
                                <div className='platform-logo'>
                                    <div
                                        className='platform-icon icon-1 mobile-animation-disable'
                                        data-aos='fade-down'
                                        data-aos-delay='300'
                                    >
                                        <div className='platform-icon-inside '>
                                            <img
                                                src={EuroIcon}
                                                alt='EuroIcon'
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className='platform-icon icon-2 mobile-animation-disable'
                                        data-aos='fade-down'
                                        data-aos-delay='300'
                                    >
                                        <div className='platform-icon-inside '>
                                            <img
                                                src={GoldIcon}
                                                alt='GoldIcon'
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className='platform-icon icon-3 mobile-animation-disable'
                                        data-aos='fade-down'
                                        // data-aos-duration='3000'
                                        // data-aos-anchor-placement='top-bottom'
                                    >
                                        <div className='platform-icon-inside '>
                                            <img
                                                src={AmazoneIcon}
                                                alt='AmazoneIcon'
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className='platform-icon icon-4 mobile-animation-disable'
                                        data-aos='fade-down'
                                        data-aos-delay='350'
                                    >
                                        <div className='platform-icon-inside '>
                                            <img
                                                src={MetaIcon}
                                                alt='MetaIcon'
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className='platform-icon icon-5 mobile-animation-disable'
                                        data-aos='fade-down'
                                        data-aos-delay='200'
                                    >
                                        <div className='platform-icon-inside '>
                                            <img
                                                src={AppleIcon}
                                                alt='AppleIcon'
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className='platform-icon icon-6 mobile-animation-disable'
                                        data-aos='fade-down'
                                        data-aos-delay='350'
                                    >
                                        <div className='platform-icon-inside '>
                                            <img
                                                src={MicrosoftIcon}
                                                alt='MicrosoftIcon'
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className='platform-icon icon-7 mobile-animation-disable'
                                        data-aos='fade-down'
                                        data-aos-delay='300'
                                    >
                                        <div className='platform-icon-inside '>
                                            <img
                                                src={TeslaIcon}
                                                alt='TeslaIcon'
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className='platform-icon icon-8 mobile-animation-disable'
                                        data-aos='fade-down'
                                        data-aos-delay='350'
                                    >
                                        <div className='platform-icon-inside '>
                                            <img
                                                src={DollerIcon}
                                                alt='DollerIcon'
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className='animation-balls balls-1 mobile-animation-disable'
                                        data-aos='fade-down'
                                    ></div>
                                    <div
                                        className='animation-balls balls-2 mobile-animation-disable'
                                        data-aos='fade-down'
                                        data-aos-delay='300'
                                    ></div>
                                    <div
                                        className='animation-balls balls-3 mobile-animation-disable'
                                        data-aos='fade-down'
                                        data-aos-delay='300'
                                    ></div>
                                    <div
                                        className='animation-balls balls-4 mobile-animation-disable'
                                        data-aos='fade-down'
                                        data-aos-delay='300'
                                    ></div>
                                </div>
                            </Col>
                            <Col lg={7} xxl={6}>
                                <div
                                    className='global-market-section'
                                    // data-aos-duration='3000'
                                    data-aos='zoom-in'
                                    data-aos-offset='350'
                                >
                                    <div className='tabs-wrap'>
                                        <Tab.Container
                                            id='left-tabs-example'
                                            defaultActiveKey='MostPopular'
                                        >
                                            <Nav
                                                variant='pills'
                                                className='flex-column'
                                            >
                                                <Nav.Item>
                                                    <Nav.Link eventKey='MostPopular'>
                                                        <img
                                                            src={
                                                                MostPopularIcon
                                                            }
                                                            alt='MostPopularIcon'
                                                        />
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey='Shares'>
                                                        <img
                                                            src={SharesIcon}
                                                            alt='SharesIcon'
                                                        />
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey='Commodities'>
                                                        <img
                                                            src={
                                                                CommoditiesIcon
                                                            }
                                                            alt='CommoditiesIcon'
                                                        />
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey='Indices'>
                                                        <img
                                                            src={IndicesIcon}
                                                            alt='IndicesIcon'
                                                        />
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey='Forex'>
                                                        <img
                                                            src={ForexIcon}
                                                            alt='ForexIcon'
                                                        />
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey='Options'>
                                                        <img
                                                            src={OptionsIcon}
                                                            alt='OptionsIcon'
                                                        />
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey='ETFs'>
                                                        <img
                                                            src={ETFsIcon}
                                                            alt='ETFsIcon'
                                                        />
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey='RisersFallers'>
                                                        <img
                                                            src={
                                                                RisersFallersIcon
                                                            }
                                                            alt='RisersFallersIcon'
                                                        />
                                                    </Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                            <Tab.Content>
                                                <Tab.Pane eventKey='MostPopular'>
                                                    <h5>Most Popular</h5>
                                                    <div className='table-wrap'>
                                                        <Table>
                                                            <thead>
                                                                <tr>
                                                                    <th>
                                                                        Instrument
                                                                    </th>
                                                                    <th>Bid</th>
                                                                    <th>Ask</th>
                                                                    <th>
                                                                        Spread
                                                                    </th>
                                                                    <th></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <div className='d-flex align-items-center'>
                                                                            <div className='platform-icon'>
                                                                                <img
                                                                                    src={
                                                                                        MicrosoftIcon
                                                                                    }
                                                                                    alt='MicrosoftIcon'
                                                                                />
                                                                            </div>
                                                                            <h6>
                                                                                Microsoft
                                                                            </h6>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        1.0782199
                                                                    </td>
                                                                    <td>
                                                                        <span className='text-green'>
                                                                            1.0782199
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        30.00
                                                                    </td>
                                                                    <td>
                                                                        <Button
                                                                            size='sm'
                                                                            variant='outline-primary'
                                                                            href='#'
                                                                        >
                                                                            Trade
                                                                        </Button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className='d-flex align-items-center'>
                                                                            <div className='platform-icon'>
                                                                                <img
                                                                                    src={
                                                                                        AppleIcon
                                                                                    }
                                                                                    alt='MicrosoftIcon'
                                                                                />
                                                                            </div>
                                                                            <h6>
                                                                                Apple
                                                                            </h6>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        1.0782199
                                                                    </td>
                                                                    <td>
                                                                        <span className='text-danger'>
                                                                            1.0782199
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        30.00
                                                                    </td>
                                                                    <td>
                                                                        <Button
                                                                            size='sm'
                                                                            variant='outline-primary'
                                                                            href='#'
                                                                        >
                                                                            Trade
                                                                        </Button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className='d-flex align-items-center'>
                                                                            <div className='platform-icon'>
                                                                                <img
                                                                                    src={
                                                                                        MetaIcon
                                                                                    }
                                                                                    alt='MicrosoftIcon'
                                                                                />
                                                                            </div>
                                                                            <h6>
                                                                                Meta
                                                                            </h6>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        1.0782199
                                                                    </td>
                                                                    <td>
                                                                        <span className='text-green'>
                                                                            1.0782199
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        30.00
                                                                    </td>
                                                                    <td>
                                                                        <Button
                                                                            size='sm'
                                                                            variant='outline-primary'
                                                                            href='#'
                                                                        >
                                                                            Trade
                                                                        </Button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className='d-flex align-items-center'>
                                                                            <div className='platform-icon'>
                                                                                <img
                                                                                    src={
                                                                                        GoldIcon
                                                                                    }
                                                                                    alt='MicrosoftIcon'
                                                                                />
                                                                            </div>
                                                                            <h6>
                                                                                Gold
                                                                            </h6>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        1.0782199
                                                                    </td>
                                                                    <td>
                                                                        <span className='text-danger'>
                                                                            1.0782199
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        30.00
                                                                    </td>
                                                                    <td>
                                                                        <Button
                                                                            size='sm'
                                                                            variant='outline-primary'
                                                                            href='#'
                                                                        >
                                                                            Trade
                                                                        </Button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className='d-flex align-items-center'>
                                                                            <div className='platform-icon'>
                                                                                <img
                                                                                    src={
                                                                                        TeslaIcon
                                                                                    }
                                                                                    alt='MicrosoftIcon'
                                                                                />
                                                                            </div>
                                                                            <h6>
                                                                                Tesla
                                                                            </h6>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        1.0782199
                                                                    </td>
                                                                    <td>
                                                                        <span className='text-green'>
                                                                            1.0782199
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        30.00
                                                                    </td>
                                                                    <td>
                                                                        <Button
                                                                            size='sm'
                                                                            variant='outline-primary'
                                                                            href='#'
                                                                        >
                                                                            Trade
                                                                        </Button>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </Table>
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey='Shares'>
                                                    <h5>Shares</h5>
                                                    <div className='table-wrap'>
                                                        <Table>
                                                            <thead>
                                                                <tr>
                                                                    <th>
                                                                        Instrument
                                                                    </th>
                                                                    <th>Bid</th>
                                                                    <th>Ask</th>
                                                                    <th>
                                                                        Spread
                                                                    </th>
                                                                    <th></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <div className='d-flex align-items-center'>
                                                                            <div className='platform-icon'>
                                                                                <img
                                                                                    src={
                                                                                        MicrosoftIcon
                                                                                    }
                                                                                    alt='MicrosoftIcon'
                                                                                />
                                                                            </div>
                                                                            <h6>
                                                                                Microsoft
                                                                            </h6>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        1.0782199
                                                                    </td>
                                                                    <td>
                                                                        <span className='text-green'>
                                                                            1.0782199
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        30.00
                                                                    </td>
                                                                    <td>
                                                                        <Button
                                                                            size='sm'
                                                                            variant='outline-primary'
                                                                            href='#'
                                                                        >
                                                                            Trade
                                                                        </Button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className='d-flex align-items-center'>
                                                                            <div className='platform-icon'>
                                                                                <img
                                                                                    src={
                                                                                        AppleIcon
                                                                                    }
                                                                                    alt='MicrosoftIcon'
                                                                                />
                                                                            </div>
                                                                            <h6>
                                                                                Apple
                                                                            </h6>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        1.0782199
                                                                    </td>
                                                                    <td>
                                                                        <span className='text-danger'>
                                                                            1.0782199
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        30.00
                                                                    </td>
                                                                    <td>
                                                                        <Button
                                                                            size='sm'
                                                                            variant='outline-primary'
                                                                            href='#'
                                                                        >
                                                                            Trade
                                                                        </Button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className='d-flex align-items-center'>
                                                                            <div className='platform-icon'>
                                                                                <img
                                                                                    src={
                                                                                        MetaIcon
                                                                                    }
                                                                                    alt='MicrosoftIcon'
                                                                                />
                                                                            </div>
                                                                            <h6>
                                                                                Meta
                                                                            </h6>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        1.0782199
                                                                    </td>
                                                                    <td>
                                                                        <span className='text-green'>
                                                                            1.0782199
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        30.00
                                                                    </td>
                                                                    <td>
                                                                        <Button
                                                                            size='sm'
                                                                            variant='outline-primary'
                                                                            href='#'
                                                                        >
                                                                            Trade
                                                                        </Button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className='d-flex align-items-center'>
                                                                            <div className='platform-icon'>
                                                                                <img
                                                                                    src={
                                                                                        GoldIcon
                                                                                    }
                                                                                    alt='MicrosoftIcon'
                                                                                />
                                                                            </div>
                                                                            <h6>
                                                                                Gold
                                                                            </h6>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        1.0782199
                                                                    </td>
                                                                    <td>
                                                                        <span className='text-danger'>
                                                                            1.0782199
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        30.00
                                                                    </td>
                                                                    <td>
                                                                        <Button
                                                                            size='sm'
                                                                            variant='outline-primary'
                                                                            href='#'
                                                                        >
                                                                            Trade
                                                                        </Button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className='d-flex align-items-center'>
                                                                            <div className='platform-icon'>
                                                                                <img
                                                                                    src={
                                                                                        TeslaIcon
                                                                                    }
                                                                                    alt='MicrosoftIcon'
                                                                                />
                                                                            </div>
                                                                            <h6>
                                                                                Tesla
                                                                            </h6>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        1.0782199
                                                                    </td>
                                                                    <td>
                                                                        <span className='text-green'>
                                                                            1.0782199
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        30.00
                                                                    </td>
                                                                    <td>
                                                                        <Button
                                                                            size='sm'
                                                                            variant='outline-primary'
                                                                            href='#'
                                                                        >
                                                                            Trade
                                                                        </Button>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </Table>
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey='Commodities'>
                                                    <h5>Commodities</h5>
                                                    <div className='table-wrap'>
                                                        <Table>
                                                            <thead>
                                                                <tr>
                                                                    <th>
                                                                        Instrument
                                                                    </th>
                                                                    <th>Bid</th>
                                                                    <th>Ask</th>
                                                                    <th>
                                                                        Spread
                                                                    </th>
                                                                    <th></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <div className='d-flex align-items-center'>
                                                                            <div className='platform-icon'>
                                                                                <img
                                                                                    src={
                                                                                        MicrosoftIcon
                                                                                    }
                                                                                    alt='MicrosoftIcon'
                                                                                />
                                                                            </div>
                                                                            <h6>
                                                                                Microsoft
                                                                            </h6>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        1.0782199
                                                                    </td>
                                                                    <td>
                                                                        <span className='text-green'>
                                                                            1.0782199
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        30.00
                                                                    </td>
                                                                    <td>
                                                                        <Button
                                                                            size='sm'
                                                                            variant='outline-primary'
                                                                            href='#'
                                                                        >
                                                                            Trade
                                                                        </Button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className='d-flex align-items-center'>
                                                                            <div className='platform-icon'>
                                                                                <img
                                                                                    src={
                                                                                        AppleIcon
                                                                                    }
                                                                                    alt='MicrosoftIcon'
                                                                                />
                                                                            </div>
                                                                            <h6>
                                                                                Apple
                                                                            </h6>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        1.0782199
                                                                    </td>
                                                                    <td>
                                                                        <span className='text-danger'>
                                                                            1.0782199
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        30.00
                                                                    </td>
                                                                    <td>
                                                                        <Button
                                                                            size='sm'
                                                                            variant='outline-primary'
                                                                            href='#'
                                                                        >
                                                                            Trade
                                                                        </Button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className='d-flex align-items-center'>
                                                                            <div className='platform-icon'>
                                                                                <img
                                                                                    src={
                                                                                        MetaIcon
                                                                                    }
                                                                                    alt='MicrosoftIcon'
                                                                                />
                                                                            </div>
                                                                            <h6>
                                                                                Meta
                                                                            </h6>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        1.0782199
                                                                    </td>
                                                                    <td>
                                                                        <span className='text-green'>
                                                                            1.0782199
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        30.00
                                                                    </td>
                                                                    <td>
                                                                        <Button
                                                                            size='sm'
                                                                            variant='outline-primary'
                                                                            href='#'
                                                                        >
                                                                            Trade
                                                                        </Button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className='d-flex align-items-center'>
                                                                            <div className='platform-icon'>
                                                                                <img
                                                                                    src={
                                                                                        GoldIcon
                                                                                    }
                                                                                    alt='MicrosoftIcon'
                                                                                />
                                                                            </div>
                                                                            <h6>
                                                                                Gold
                                                                            </h6>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        1.0782199
                                                                    </td>
                                                                    <td>
                                                                        <span className='text-danger'>
                                                                            1.0782199
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        30.00
                                                                    </td>
                                                                    <td>
                                                                        <Button
                                                                            size='sm'
                                                                            variant='outline-primary'
                                                                            href='#'
                                                                        >
                                                                            Trade
                                                                        </Button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className='d-flex align-items-center'>
                                                                            <div className='platform-icon'>
                                                                                <img
                                                                                    src={
                                                                                        TeslaIcon
                                                                                    }
                                                                                    alt='MicrosoftIcon'
                                                                                />
                                                                            </div>
                                                                            <h6>
                                                                                Tesla
                                                                            </h6>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        1.0782199
                                                                    </td>
                                                                    <td>
                                                                        <span className='text-green'>
                                                                            1.0782199
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        30.00
                                                                    </td>
                                                                    <td>
                                                                        <Button
                                                                            size='sm'
                                                                            variant='outline-primary'
                                                                            href='#'
                                                                        >
                                                                            Trade
                                                                        </Button>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </Table>
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey='Indices'>
                                                    <h5>Indices</h5>
                                                    <div className='table-wrap'>
                                                        <Table>
                                                            <thead>
                                                                <tr>
                                                                    <th>
                                                                        Instrument
                                                                    </th>
                                                                    <th>Bid</th>
                                                                    <th>Ask</th>
                                                                    <th>
                                                                        Spread
                                                                    </th>
                                                                    <th></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <div className='d-flex align-items-center'>
                                                                            <div className='platform-icon'>
                                                                                <img
                                                                                    src={
                                                                                        MicrosoftIcon
                                                                                    }
                                                                                    alt='MicrosoftIcon'
                                                                                />
                                                                            </div>
                                                                            <h6>
                                                                                Microsoft
                                                                            </h6>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        1.0782199
                                                                    </td>
                                                                    <td>
                                                                        <span className='text-green'>
                                                                            1.0782199
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        30.00
                                                                    </td>
                                                                    <td>
                                                                        <Button
                                                                            size='sm'
                                                                            variant='outline-primary'
                                                                            href='#'
                                                                        >
                                                                            Trade
                                                                        </Button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className='d-flex align-items-center'>
                                                                            <div className='platform-icon'>
                                                                                <img
                                                                                    src={
                                                                                        AppleIcon
                                                                                    }
                                                                                    alt='MicrosoftIcon'
                                                                                />
                                                                            </div>
                                                                            <h6>
                                                                                Apple
                                                                            </h6>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        1.0782199
                                                                    </td>
                                                                    <td>
                                                                        <span className='text-danger'>
                                                                            1.0782199
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        30.00
                                                                    </td>
                                                                    <td>
                                                                        <Button
                                                                            size='sm'
                                                                            variant='outline-primary'
                                                                            href='#'
                                                                        >
                                                                            Trade
                                                                        </Button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className='d-flex align-items-center'>
                                                                            <div className='platform-icon'>
                                                                                <img
                                                                                    src={
                                                                                        MetaIcon
                                                                                    }
                                                                                    alt='MicrosoftIcon'
                                                                                />
                                                                            </div>
                                                                            <h6>
                                                                                Meta
                                                                            </h6>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        1.0782199
                                                                    </td>
                                                                    <td>
                                                                        <span className='text-green'>
                                                                            1.0782199
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        30.00
                                                                    </td>
                                                                    <td>
                                                                        <Button
                                                                            size='sm'
                                                                            variant='outline-primary'
                                                                            href='#'
                                                                        >
                                                                            Trade
                                                                        </Button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className='d-flex align-items-center'>
                                                                            <div className='platform-icon'>
                                                                                <img
                                                                                    src={
                                                                                        GoldIcon
                                                                                    }
                                                                                    alt='MicrosoftIcon'
                                                                                />
                                                                            </div>
                                                                            <h6>
                                                                                Gold
                                                                            </h6>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        1.0782199
                                                                    </td>
                                                                    <td>
                                                                        <span className='text-danger'>
                                                                            1.0782199
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        30.00
                                                                    </td>
                                                                    <td>
                                                                        <Button
                                                                            size='sm'
                                                                            variant='outline-primary'
                                                                            href='#'
                                                                        >
                                                                            Trade
                                                                        </Button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className='d-flex align-items-center'>
                                                                            <div className='platform-icon'>
                                                                                <img
                                                                                    src={
                                                                                        TeslaIcon
                                                                                    }
                                                                                    alt='MicrosoftIcon'
                                                                                />
                                                                            </div>
                                                                            <h6>
                                                                                Tesla
                                                                            </h6>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        1.0782199
                                                                    </td>
                                                                    <td>
                                                                        <span className='text-green'>
                                                                            1.0782199
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        30.00
                                                                    </td>
                                                                    <td>
                                                                        <Button
                                                                            size='sm'
                                                                            variant='outline-primary'
                                                                            href='#'
                                                                        >
                                                                            Trade
                                                                        </Button>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </Table>
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey='Forex'>
                                                    <h5>Forex</h5>
                                                    <div className='table-wrap'>
                                                        <Table>
                                                            <thead>
                                                                <tr>
                                                                    <th>
                                                                        Instrument
                                                                    </th>
                                                                    <th>Bid</th>
                                                                    <th>Ask</th>
                                                                    <th>
                                                                        Spread
                                                                    </th>
                                                                    <th></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <div className='d-flex align-items-center'>
                                                                            <div className='platform-icon'>
                                                                                <img
                                                                                    src={
                                                                                        MicrosoftIcon
                                                                                    }
                                                                                    alt='MicrosoftIcon'
                                                                                />
                                                                            </div>
                                                                            <h6>
                                                                                Microsoft
                                                                            </h6>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        1.0782199
                                                                    </td>
                                                                    <td>
                                                                        <span className='text-green'>
                                                                            1.0782199
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        30.00
                                                                    </td>
                                                                    <td>
                                                                        <Button
                                                                            size='sm'
                                                                            variant='outline-primary'
                                                                            href='#'
                                                                        >
                                                                            Trade
                                                                        </Button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className='d-flex align-items-center'>
                                                                            <div className='platform-icon'>
                                                                                <img
                                                                                    src={
                                                                                        AppleIcon
                                                                                    }
                                                                                    alt='MicrosoftIcon'
                                                                                />
                                                                            </div>
                                                                            <h6>
                                                                                Apple
                                                                            </h6>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        1.0782199
                                                                    </td>
                                                                    <td>
                                                                        <span className='text-danger'>
                                                                            1.0782199
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        30.00
                                                                    </td>
                                                                    <td>
                                                                        <Button
                                                                            size='sm'
                                                                            variant='outline-primary'
                                                                            href='#'
                                                                        >
                                                                            Trade
                                                                        </Button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className='d-flex align-items-center'>
                                                                            <div className='platform-icon'>
                                                                                <img
                                                                                    src={
                                                                                        MetaIcon
                                                                                    }
                                                                                    alt='MicrosoftIcon'
                                                                                />
                                                                            </div>
                                                                            <h6>
                                                                                Meta
                                                                            </h6>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        1.0782199
                                                                    </td>
                                                                    <td>
                                                                        <span className='text-green'>
                                                                            1.0782199
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        30.00
                                                                    </td>
                                                                    <td>
                                                                        <Button
                                                                            size='sm'
                                                                            variant='outline-primary'
                                                                            href='#'
                                                                        >
                                                                            Trade
                                                                        </Button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className='d-flex align-items-center'>
                                                                            <div className='platform-icon'>
                                                                                <img
                                                                                    src={
                                                                                        GoldIcon
                                                                                    }
                                                                                    alt='MicrosoftIcon'
                                                                                />
                                                                            </div>
                                                                            <h6>
                                                                                Gold
                                                                            </h6>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        1.0782199
                                                                    </td>
                                                                    <td>
                                                                        <span className='text-danger'>
                                                                            1.0782199
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        30.00
                                                                    </td>
                                                                    <td>
                                                                        <Button
                                                                            size='sm'
                                                                            variant='outline-primary'
                                                                            href='#'
                                                                        >
                                                                            Trade
                                                                        </Button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className='d-flex align-items-center'>
                                                                            <div className='platform-icon'>
                                                                                <img
                                                                                    src={
                                                                                        TeslaIcon
                                                                                    }
                                                                                    alt='MicrosoftIcon'
                                                                                />
                                                                            </div>
                                                                            <h6>
                                                                                Tesla
                                                                            </h6>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        1.0782199
                                                                    </td>
                                                                    <td>
                                                                        <span className='text-green'>
                                                                            1.0782199
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        30.00
                                                                    </td>
                                                                    <td>
                                                                        <Button
                                                                            size='sm'
                                                                            variant='outline-primary'
                                                                            href='#'
                                                                        >
                                                                            Trade
                                                                        </Button>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </Table>
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey='Options'>
                                                    <h5>Options</h5>
                                                    <div className='table-wrap'>
                                                        <Table>
                                                            <thead>
                                                                <tr>
                                                                    <th>
                                                                        Instrument
                                                                    </th>
                                                                    <th>Bid</th>
                                                                    <th>Ask</th>
                                                                    <th>
                                                                        Spread
                                                                    </th>
                                                                    <th></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <div className='d-flex align-items-center'>
                                                                            <div className='platform-icon'>
                                                                                <img
                                                                                    src={
                                                                                        MicrosoftIcon
                                                                                    }
                                                                                    alt='MicrosoftIcon'
                                                                                />
                                                                            </div>
                                                                            <h6>
                                                                                Microsoft
                                                                            </h6>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        1.0782199
                                                                    </td>
                                                                    <td>
                                                                        <span className='text-green'>
                                                                            1.0782199
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        30.00
                                                                    </td>
                                                                    <td>
                                                                        <Button
                                                                            size='sm'
                                                                            variant='outline-primary'
                                                                            href='#'
                                                                        >
                                                                            Trade
                                                                        </Button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className='d-flex align-items-center'>
                                                                            <div className='platform-icon'>
                                                                                <img
                                                                                    src={
                                                                                        AppleIcon
                                                                                    }
                                                                                    alt='MicrosoftIcon'
                                                                                />
                                                                            </div>
                                                                            <h6>
                                                                                Apple
                                                                            </h6>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        1.0782199
                                                                    </td>
                                                                    <td>
                                                                        <span className='text-danger'>
                                                                            1.0782199
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        30.00
                                                                    </td>
                                                                    <td>
                                                                        <Button
                                                                            size='sm'
                                                                            variant='outline-primary'
                                                                            href='#'
                                                                        >
                                                                            Trade
                                                                        </Button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className='d-flex align-items-center'>
                                                                            <div className='platform-icon'>
                                                                                <img
                                                                                    src={
                                                                                        MetaIcon
                                                                                    }
                                                                                    alt='MicrosoftIcon'
                                                                                />
                                                                            </div>
                                                                            <h6>
                                                                                Meta
                                                                            </h6>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        1.0782199
                                                                    </td>
                                                                    <td>
                                                                        <span className='text-green'>
                                                                            1.0782199
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        30.00
                                                                    </td>
                                                                    <td>
                                                                        <Button
                                                                            size='sm'
                                                                            variant='outline-primary'
                                                                            href='#'
                                                                        >
                                                                            Trade
                                                                        </Button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className='d-flex align-items-center'>
                                                                            <div className='platform-icon'>
                                                                                <img
                                                                                    src={
                                                                                        GoldIcon
                                                                                    }
                                                                                    alt='MicrosoftIcon'
                                                                                />
                                                                            </div>
                                                                            <h6>
                                                                                Gold
                                                                            </h6>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        1.0782199
                                                                    </td>
                                                                    <td>
                                                                        <span className='text-danger'>
                                                                            1.0782199
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        30.00
                                                                    </td>
                                                                    <td>
                                                                        <Button
                                                                            size='sm'
                                                                            variant='outline-primary'
                                                                            href='#'
                                                                        >
                                                                            Trade
                                                                        </Button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className='d-flex align-items-center'>
                                                                            <div className='platform-icon'>
                                                                                <img
                                                                                    src={
                                                                                        TeslaIcon
                                                                                    }
                                                                                    alt='MicrosoftIcon'
                                                                                />
                                                                            </div>
                                                                            <h6>
                                                                                Tesla
                                                                            </h6>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        1.0782199
                                                                    </td>
                                                                    <td>
                                                                        <span className='text-green'>
                                                                            1.0782199
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        30.00
                                                                    </td>
                                                                    <td>
                                                                        <Button
                                                                            size='sm'
                                                                            variant='outline-primary'
                                                                            href='#'
                                                                        >
                                                                            Trade
                                                                        </Button>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </Table>
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey='ETFs'>
                                                    <h5>ETFs</h5>
                                                    <div className='table-wrap'>
                                                        <Table>
                                                            <thead>
                                                                <tr>
                                                                    <th>
                                                                        Instrument
                                                                    </th>
                                                                    <th>Bid</th>
                                                                    <th>Ask</th>
                                                                    <th>
                                                                        Spread
                                                                    </th>
                                                                    <th></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <div className='d-flex align-items-center'>
                                                                            <div className='platform-icon'>
                                                                                <img
                                                                                    src={
                                                                                        MicrosoftIcon
                                                                                    }
                                                                                    alt='MicrosoftIcon'
                                                                                />
                                                                            </div>
                                                                            <h6>
                                                                                Microsoft
                                                                            </h6>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        1.0782199
                                                                    </td>
                                                                    <td>
                                                                        <span className='text-green'>
                                                                            1.0782199
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        30.00
                                                                    </td>
                                                                    <td>
                                                                        <Button
                                                                            size='sm'
                                                                            variant='outline-primary'
                                                                            href='#'
                                                                        >
                                                                            Trade
                                                                        </Button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className='d-flex align-items-center'>
                                                                            <div className='platform-icon'>
                                                                                <img
                                                                                    src={
                                                                                        AppleIcon
                                                                                    }
                                                                                    alt='MicrosoftIcon'
                                                                                />
                                                                            </div>
                                                                            <h6>
                                                                                Apple
                                                                            </h6>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        1.0782199
                                                                    </td>
                                                                    <td>
                                                                        <span className='text-danger'>
                                                                            1.0782199
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        30.00
                                                                    </td>
                                                                    <td>
                                                                        <Button
                                                                            size='sm'
                                                                            variant='outline-primary'
                                                                            href='#'
                                                                        >
                                                                            Trade
                                                                        </Button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className='d-flex align-items-center'>
                                                                            <div className='platform-icon'>
                                                                                <img
                                                                                    src={
                                                                                        MetaIcon
                                                                                    }
                                                                                    alt='MicrosoftIcon'
                                                                                />
                                                                            </div>
                                                                            <h6>
                                                                                Meta
                                                                            </h6>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        1.0782199
                                                                    </td>
                                                                    <td>
                                                                        <span className='text-green'>
                                                                            1.0782199
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        30.00
                                                                    </td>
                                                                    <td>
                                                                        <Button
                                                                            size='sm'
                                                                            variant='outline-primary'
                                                                            href='#'
                                                                        >
                                                                            Trade
                                                                        </Button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className='d-flex align-items-center'>
                                                                            <div className='platform-icon'>
                                                                                <img
                                                                                    src={
                                                                                        GoldIcon
                                                                                    }
                                                                                    alt='MicrosoftIcon'
                                                                                />
                                                                            </div>
                                                                            <h6>
                                                                                Gold
                                                                            </h6>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        1.0782199
                                                                    </td>
                                                                    <td>
                                                                        <span className='text-danger'>
                                                                            1.0782199
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        30.00
                                                                    </td>
                                                                    <td>
                                                                        <Button
                                                                            size='sm'
                                                                            variant='outline-primary'
                                                                            href='#'
                                                                        >
                                                                            Trade
                                                                        </Button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className='d-flex align-items-center'>
                                                                            <div className='platform-icon'>
                                                                                <img
                                                                                    src={
                                                                                        TeslaIcon
                                                                                    }
                                                                                    alt='MicrosoftIcon'
                                                                                />
                                                                            </div>
                                                                            <h6>
                                                                                Tesla
                                                                            </h6>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        1.0782199
                                                                    </td>
                                                                    <td>
                                                                        <span className='text-green'>
                                                                            1.0782199
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        30.00
                                                                    </td>
                                                                    <td>
                                                                        <Button
                                                                            size='sm'
                                                                            variant='outline-primary'
                                                                            href='#'
                                                                        >
                                                                            Trade
                                                                        </Button>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </Table>
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey='RisersFallers'>
                                                    <h5>Risers & Fallers</h5>
                                                    <div className='table-wrap'>
                                                        <Table>
                                                            <thead>
                                                                <tr>
                                                                    <th>
                                                                        Instrument
                                                                    </th>
                                                                    <th>Bid</th>
                                                                    <th>Ask</th>
                                                                    <th>
                                                                        Spread
                                                                    </th>
                                                                    <th></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <div className='d-flex align-items-center'>
                                                                            <div className='platform-icon'>
                                                                                <img
                                                                                    src={
                                                                                        MicrosoftIcon
                                                                                    }
                                                                                    alt='MicrosoftIcon'
                                                                                />
                                                                            </div>
                                                                            <h6>
                                                                                Microsoft
                                                                            </h6>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        1.0782199
                                                                    </td>
                                                                    <td>
                                                                        <span className='text-green'>
                                                                            1.0782199
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        30.00
                                                                    </td>
                                                                    <td>
                                                                        <Button
                                                                            size='sm'
                                                                            variant='outline-primary'
                                                                            href='#'
                                                                        >
                                                                            Trade
                                                                        </Button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className='d-flex align-items-center'>
                                                                            <div className='platform-icon'>
                                                                                <img
                                                                                    src={
                                                                                        AppleIcon
                                                                                    }
                                                                                    alt='MicrosoftIcon'
                                                                                />
                                                                            </div>
                                                                            <h6>
                                                                                Apple
                                                                            </h6>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        1.0782199
                                                                    </td>
                                                                    <td>
                                                                        <span className='text-danger'>
                                                                            1.0782199
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        30.00
                                                                    </td>
                                                                    <td>
                                                                        <Button
                                                                            size='sm'
                                                                            variant='outline-primary'
                                                                            href='#'
                                                                        >
                                                                            Trade
                                                                        </Button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className='d-flex align-items-center'>
                                                                            <div className='platform-icon'>
                                                                                <img
                                                                                    src={
                                                                                        MetaIcon
                                                                                    }
                                                                                    alt='MicrosoftIcon'
                                                                                />
                                                                            </div>
                                                                            <h6>
                                                                                Meta
                                                                            </h6>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        1.0782199
                                                                    </td>
                                                                    <td>
                                                                        <span className='text-green'>
                                                                            1.0782199
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        30.00
                                                                    </td>
                                                                    <td>
                                                                        <Button
                                                                            size='sm'
                                                                            variant='outline-primary'
                                                                            href='#'
                                                                        >
                                                                            Trade
                                                                        </Button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className='d-flex align-items-center'>
                                                                            <div className='platform-icon'>
                                                                                <img
                                                                                    src={
                                                                                        GoldIcon
                                                                                    }
                                                                                    alt='MicrosoftIcon'
                                                                                />
                                                                            </div>
                                                                            <h6>
                                                                                Gold
                                                                            </h6>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        1.0782199
                                                                    </td>
                                                                    <td>
                                                                        <span className='text-danger'>
                                                                            1.0782199
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        30.00
                                                                    </td>
                                                                    <td>
                                                                        <Button
                                                                            size='sm'
                                                                            variant='outline-primary'
                                                                            href='#'
                                                                        >
                                                                            Trade
                                                                        </Button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className='d-flex align-items-center'>
                                                                            <div className='platform-icon'>
                                                                                <img
                                                                                    src={
                                                                                        TeslaIcon
                                                                                    }
                                                                                    alt='MicrosoftIcon'
                                                                                />
                                                                            </div>
                                                                            <h6>
                                                                                Tesla
                                                                            </h6>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        1.0782199
                                                                    </td>
                                                                    <td>
                                                                        <span className='text-green'>
                                                                            1.0782199
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        30.00
                                                                    </td>
                                                                    <td>
                                                                        <Button
                                                                            size='sm'
                                                                            variant='outline-primary'
                                                                            href='#'
                                                                        >
                                                                            Trade
                                                                        </Button>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </Table>
                                                    </div>
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Tab.Container>
                                    </div>
                                </div>
                                {/* <img src={tableImg} alt='' /> */}
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
            {/* MT5 SECTION START */}
            <section className='mt5-section'>
                <LogoAnimation />
                <MouseParallaxContainer
                    className='parallax'
                    globalFactorX={0.3}
                    globalFactorY={0.3}
                    resetOnLeave
                >
                    <Container>
                        <Row className='align-items-center'>
                            <Col
                                lg='5'
                                data-aos='fade-right'
                                // data-aos-offset='300'
                            >
                                <h2>Meta Trader 5</h2>
                                <p>
                                    One of the best forex trading platforms
                                    available is widely regarded as being the
                                    MetaTrader 5 platform. When trading on MT5,
                                    anticipate quicker processing times,
                                    advanced order entry capabilities, and the
                                    most recent tools.
                                </p>
                                <Link to='/mt5' className='btn btn-primary'>
                                    Browse all markets
                                </Link>
                            </Col>
                            <Col
                                lg='7'
                                data-aos='fade-left'
                                data-aos-offset='300'
                            >
                                <div className='mt5-animation'>
                                    <div className='rotate-animation'>
                                        <Lottie
                                            options={defaultRotateOptions}
                                        />
                                        <div className='glow-image'>
                                            <img src={GlowImage} alt='' />
                                        </div>
                                    </div>

                                    <div className='device-image'>
                                        <MouseParallaxChild
                                            factorX={0.05}
                                            factorY={0.05}
                                        >
                                            <img src={mt5Trader} alt='' />
                                        </MouseParallaxChild>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </MouseParallaxContainer>
            </section>
            {/* STEP SECTION START */}

            <TradingStep StockLiveData={StockLiveData} />
            {/* TOOLS SECTION START */}
            <section className='tools-section'>
                <LogoAnimation />
                <Container>
                    <div className='text-center' data-aos='fade-up'>
                        <h2>We have powerful tools</h2>
                    </div>
                    <Row
                        className='justify-content-between tools-section-inside'
                        data-aos='fade-up'
                        data-aos-delay='200'
                    >
                        <Col lg='6'>
                            <div className='faqs-section'>
                                <Accordion defaultActiveKey='0' flush>
                                    <Accordion.Item eventKey='0'>
                                        <Accordion.Header
                                            onClick={() =>
                                                handleAccordion('regulated')
                                            }
                                        >
                                            Regulated Broker
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <p>
                                                One of the best forex trading
                                                platforms available is widely
                                                regarded as being the MetaTrader
                                                5 platform. When trading on MT5
                                                One of the best forex trading
                                                platforms available is widely
                                                regarded as being the MetaTrader
                                                5 platform. When trading on
                                                MT5....
                                            </p>
                                            <Link
                                                className='more-link'
                                                to='/regulation'
                                            >
                                                View More
                                            </Link>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey='1'>
                                        <Accordion.Header
                                            onClick={() =>
                                                handleAccordion('sharp-spread')
                                            }
                                        >
                                            Razor Sharp Spread
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <p>
                                                One of the best forex trading
                                                platforms available is widely
                                                regarded as being the MetaTrader
                                                5 platform. When trading on MT5
                                                One of the best forex trading
                                                platforms available is widely
                                                regarded as being the MetaTrader
                                                5 platform. When trading on
                                                MT5....
                                            </p>
                                            <Link
                                                className='more-link'
                                                to='/spread'
                                            >
                                                View More
                                            </Link>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey='2'>
                                        <Accordion.Header
                                            onClick={() =>
                                                handleAccordion('cfds-trade')
                                            }
                                        >
                                            1200 + CFDs to trade
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <p>
                                                One of the best forex trading
                                                platforms available is widely
                                                regarded as being the MetaTrader
                                                5 platform. When trading on MT5
                                                One of the best forex trading
                                                platforms available is widely
                                                regarded as being the MetaTrader
                                                5 platform. When trading on
                                                MT5....
                                            </p>
                                            <Link
                                                className='more-link'
                                                to='/forex'
                                            >
                                                View More
                                            </Link>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey='3'>
                                        <Accordion.Header
                                            onClick={() =>
                                                handleAccordion('reliable')
                                            }
                                        >
                                            Fast and Reliable
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <p>
                                                One of the best forex trading
                                                platforms available is widely
                                                regarded as being the MetaTrader
                                                5 platform. When trading on MT5
                                                One of the best forex trading
                                                platforms available is widely
                                                regarded as being the MetaTrader
                                                5 platform. When trading on
                                                MT5....
                                            </p>
                                            <Link
                                                className='more-link'
                                                to='/mt5'
                                            >
                                                View More
                                            </Link>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </Col>
                        <Col lg='6' xl={5}>
                            <div className='tools-animation'>
                                <div className='tools-animation-row'>
                                    <div
                                        className={`tools-img ${
                                            currentTools === 'regulated' &&
                                            'active'
                                        }`}
                                    >
                                        <img src={RegulatedBroker} alt='' />
                                    </div>
                                    <div
                                        className={`tools-img ${
                                            currentTools === 'sharp-spread' &&
                                            'active'
                                        }`}
                                    >
                                        <img src={SharpSpread} alt='' />
                                    </div>
                                </div>
                                <div className='tools-animation-row'>
                                    <div
                                        className={`tools-img ${
                                            currentTools === 'cfds-trade' &&
                                            'active'
                                        }`}
                                    >
                                        <img src={CfdsTrade} alt='' />
                                    </div>
                                    <div
                                        className={`tools-img ${
                                            currentTools === 'reliable' &&
                                            'active'
                                        }`}
                                    >
                                        <img src={Reliable} alt='' />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
}

export default Home;
