import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AOS from 'aos';
import {
    MouseParallaxChild,
    MouseParallaxContainer,
} from 'react-parallax-mouse';
import {
    createVerticalLinearGradient,
    hexToRGBA,
} from 'react-stockcharts/lib/utils';
import { TypeChooser } from 'react-stockcharts/lib/helper';

import InnerBanner from '../../componets/InnerBanner/InnerBanner';
import Faqs from '../../componets/Faqs/Faqs';
import TradingStep from '../../componets/TradingStep/TradingStep';
import StockChart from '../../componets/LiveMarketChart/LiveMarketChart';
import { getData } from '../../componets/LiveMarketChart/utils';
import LogoAnimation from '../../componets/LogoAnimation/LogoAnimation';

// IMAGES START
import BannerVideo from '../../assets/video/shares-banner.mp4';
import Pattern from '../../assets/images/pattern-1.svg';
import EurUsdLogo from '../../assets/images/eur-usd-logo.png';
import GbpUsdLogo from '../../assets/images/gbp-usd-logo.png';
import UsdJpyLogo from '../../assets/images/usd-jpy-logo.png';
import NsdJpyLogo from '../../assets/images/nsd-jpy-logo.png';
import SekJpyLogo from '../../assets/images/sek-jpy-logo.png';
import StepCover from '../../assets/images/shares-cover.jpg';
import LivemarketPattern from '../../assets/images/livemarket-pattern-1.svg';
import LiveMarketTable from '../../componets/LiveMarketTable/LiveMarketTable';

import MicrosoftIcon from '../../assets/images/microsoft-icon.png';
import tslaIcon from '../../assets/images/tsla-icon.svg';
import AppleStockIcon from '../../assets/images/apple-stock-icon.svg';

import AmazoneIcon from '../../assets/images/amazone2-icon.png';
import Meta2Icon from '../../assets/images/meta2-icon.png';
import NvdaIcon from '../../assets/images/nvda-icon.png';
import AmdIcon from '../../assets/images/amd-icon.png';
import NetflixIcon from '../../assets/images/netflix-icon.png';
import AlibabaIcon from '../../assets/images/alibaba-icon.png';
import MarketSaturn from '../../assets/video/market-saturn.mp4';

function Shares() {
    const [chartData, setChartData] = useState();

    const ForexData = [
        {
            instrument: { text: 'Tesla', url: tslaIcon },
            sell: '1.082',
            buy: '0.16%',
            change: '0.006',
        },
        {
            instrument: { text: 'Apple', url: AppleStockIcon },
            sell: '1.082',
            buy: '0.16%',
            change: '0.006',
        },
        {
            instrument: { text: 'Microsoft', url: MicrosoftIcon },
            sell: '1.082',
            buy: '0.16%',
            change: '0.006',
        },
        {
            instrument: { text: 'Amazon', url: AmazoneIcon },
            sell: '1.082',
            buy: '0.16%',
            change: '0.006',
        },
        {
            instrument: { text: 'Meta', url: Meta2Icon },
            sell: '1.082',
            buy: '0.16%',
            change: '0.006',
        },
        {
            instrument: { text: 'GBP/USD', url: GbpUsdLogo },
            sell: '1.082',
            buy: '0.16%',
            change: '0.006',
        },
        {
            instrument: { text: 'USD/JPY', url: UsdJpyLogo },
            sell: '1.082',
            buy: '0.16%',
            change: '0.006',
        },
        {
            instrument: { text: 'NSD/JPY', url: NsdJpyLogo },
            sell: '1.082',
            buy: '0.16%',
            change: '0.006',
        },
        {
            instrument: { text: 'SEK/JPY', url: SekJpyLogo },
            sell: '1.082',
            buy: '0.16%',
            change: '0.006',
        },
        {
            instrument: { text: 'EUR/USD', url: EurUsdLogo },
            sell: '1.082',
            buy: '0.16%',
            change: '0.006',
        },
        {
            instrument: { text: 'GBP/USD', url: GbpUsdLogo },
            sell: '1.082',
            buy: '0.16%',
            change: '0.006',
        },
        {
            instrument: { text: 'USD/JPY', url: UsdJpyLogo },
            sell: '1.082',
            buy: '0.16%',
            change: '0.006',
        },
        {
            instrument: { text: 'NSD/JPY', url: NsdJpyLogo },
            sell: '1.082',
            buy: '0.16%',
            change: '0.006',
        },
        {
            instrument: { text: 'SEK/JPY', url: SekJpyLogo },
            sell: '1.082',
            buy: '0.16%',
            change: '0.006',
        },
        {
            instrument: { text: 'EUR/USD', url: EurUsdLogo },
            sell: '1.082',
            buy: '0.16%',
            change: '0.006',
        },
        {
            instrument: { text: 'GBP/USD', url: GbpUsdLogo },
            sell: '1.082',
            buy: '0.16%',
            change: '0.006',
        },
        {
            instrument: { text: 'USD/JPY', url: UsdJpyLogo },
            sell: '1.082',
            buy: '0.16%',
            change: '0.006',
        },
        {
            instrument: { text: 'NSD/JPY', url: NsdJpyLogo },
            sell: '1.082',
            buy: '0.16%',
            change: '0.006',
        },
        {
            instrument: { text: 'SEK/JPY', url: SekJpyLogo },
            sell: '1.082',
            buy: '0.16%',
            change: '0.006',
        },
    ];

    const StockLiveData = {
        item_1: {
            logo: NvdaIcon,
            short_name: 'Nvda',
            full_name: 'nvidia',
            price: '244.40',
            change: '+9.54 (+4.06%)',
        },
        item_2: {
            logo: AmdIcon,
            short_name: 'Amd',
            full_name: 'Silver',
            price: '180.96',
            change: '+0.39 (+0.22%)',
        },
        item_3: {
            logo: AlibabaIcon,
        },
        item_4: {
            logo: NetflixIcon,
        },
        item_5: {
            image: StepCover,
        },
    };

    const bannerData = {
        title: 'Grow your Finance and Trade with trastrad provider',
        banner_video: BannerVideo,
        isSubNav: true,
    };

    useEffect(() => {
        AOS.init({
            easing: 'ease-in-out-back',
            duration: 1000,
        });
        AOS.refresh();
    }, []);

    useEffect(() => {
        getData().then((data) => {
            // console.log('data', data);
            setChartData(data);
        });
        // console.log('chartData', chartData);
    }, []);

    const canvasGradient = createVerticalLinearGradient([
        { stop: 0, color: hexToRGBA('#ffdddd', 0.2) },
        { stop: 0.7, color: hexToRGBA('#EB4E4E', 0.4) },
        { stop: 1, color: hexToRGBA('#EB4E4E', 0.8) },
    ]);

    const canvasGradient2 = createVerticalLinearGradient([
        { stop: 0, color: hexToRGBA('#d5ffd5', 0.2) },
        { stop: 0.7, color: hexToRGBA('#70E270', 0.4) },
        { stop: 1, color: hexToRGBA('#70E270', 0.8) },
    ]);

    return (
        <div className='content-wrapper' id='content-wrap'>
            <InnerBanner bannerData={bannerData} active_page='Shares' />
            {/* Forex Trade START */}
            <section className='twocolumn-section'>
                <LogoAnimation active_page='Shares' />
                <div className='twocolumn-inner'>
                    <div
                        className='pattern-animation pattern-right'
                        data-aos='slide-left'
                        data-aos-offset='150'
                        data-aos-easing='ease-in-out'
                    >
                        <img src={Pattern} alt='Pattern' />
                    </div>
                    <Container>
                        <Row className='justify-content-between align-items-center'>
                            <Col
                                lg={5}
                                className='twocolumn-left'
                                data-aos='fade-right'
                            >
                                <h2>Shares</h2>
                                <p>
                                    One of the best forex trading platforms
                                    available is widely regarded as being the
                                    MetaTrader 5 platform. When trading on MT5,
                                    anticipate quicker processing times,
                                    advanced order entry capabilities, and the
                                    most recent tools.
                                </p>
                            </Col>
                            <Col lg={7} xxl={7}>
                                <div className='market-trade'>
                                    <div className='market-trade-row'>
                                        <div
                                            className='trade-block'
                                            data-aos='zoom-in'
                                            data-aos-delay='350'
                                            data-aos-offset='150'
                                        >
                                            <div className='company-logo'>
                                                <img
                                                    src={MicrosoftIcon}
                                                    alt=''
                                                />
                                            </div>
                                            <div>
                                                <p>Microsoft</p>
                                                <p className='stock-per'>
                                                    05<sub>%</sub>
                                                    <span className='arrow down'></span>
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className='chart-block'
                                            data-aos='zoom-in'
                                            data-aos-delay='300'
                                            data-aos-offset='50'
                                        >
                                            <div className='chart-header'>
                                                <div className='icon'>
                                                    <img
                                                        src={AppleStockIcon}
                                                        alt=''
                                                    />
                                                </div>
                                                <p>
                                                    US Crude
                                                    <span>US crud</span>
                                                </p>
                                            </div>
                                            <div className='chart-price'>
                                                <h5>1.14121212</h5>
                                                <p className='text-red'>
                                                    +0.27% <span>0.0023</span>
                                                </p>
                                            </div>
                                            {chartData && (
                                                <TypeChooser>
                                                    {(type) => (
                                                        <StockChart
                                                            type={type}
                                                            data={chartData}
                                                            canvasGradient={
                                                                canvasGradient
                                                            }
                                                            strokeColor='#EB4E4E'
                                                        />
                                                    )}
                                                </TypeChooser>
                                            )}
                                        </div>
                                    </div>
                                    <div className='market-trade-row traderow-2'>
                                        <div
                                            className='chart-block'
                                            data-aos='zoom-in'
                                            data-aos-delay='380'
                                            data-aos-offset='100'
                                        >
                                            <div className='chart-header'>
                                                <div className='icon'>
                                                    <img
                                                        src={AmazoneIcon}
                                                        alt=''
                                                    />
                                                </div>
                                                <p>
                                                    Amazon
                                                    <span>amazon</span>
                                                </p>
                                            </div>
                                            <div className='chart-price'>
                                                <h5>1.14121212</h5>
                                                <p className='text-green'>
                                                    +0.27% <span>0.0023</span>
                                                </p>
                                            </div>
                                            {chartData && (
                                                <TypeChooser>
                                                    {(type) => (
                                                        <StockChart
                                                            type={type}
                                                            data={chartData}
                                                            canvasGradient={
                                                                canvasGradient2
                                                            }
                                                            strokeColor='#28C328'
                                                        />
                                                    )}
                                                </TypeChooser>
                                            )}
                                        </div>
                                        <div
                                            className='trade-block'
                                            data-aos='zoom-in'
                                            data-aos-delay='400'
                                            data-aos-offset='100'
                                        >
                                            <div className='company-logo'>
                                                <img src={tslaIcon} alt='' />
                                            </div>
                                            <div>
                                                <p>Tesla</p>
                                                <p className='stock-per'>
                                                    120<sub>%</sub>
                                                    <span className='arrow up'></span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <img src={tableImg} alt='' /> */}
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
            {/* LIVE MARKET SECTION */}
            <section className='live-market-section '>
                {/* <div className='glow-bg'>
                    <img src={MarketGlow} alt='' />
                </div> */}
                <div className='text-center table-title'>
                    <h2>Live markets and live pricing</h2>
                </div>
                <MouseParallaxContainer
                    className='parallax'
                    globalFactorX={0.3}
                    globalFactorY={0.3}
                    resetOnLeave
                >
                    <Container className='position-relative'>
                        <div className='saturn-video'>
                            <video
                                width='100%'
                                height='100%'
                                autoPlay
                                muted
                                loop
                            >
                                <source src={MarketSaturn} type='video/mp4' />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className='saturn-video'>
                            <video
                                width='100%'
                                height='100%'
                                autoPlay
                                muted
                                loop
                            >
                                <source src={MarketSaturn} type='video/mp4' />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        {/* <div className='livemarket-line'>
                            <img src={LivemarketPattern} alt='' />
                        </div> */}
                        <MouseParallaxChild
                            className='parallax-inside'
                            factorX={0.02}
                            factorY={0.02}
                        >
                            <div
                                className='livemarket-animation'
                                data-aos='fade-in'
                                data-aos-delay='800'
                            >
                                <div className='currency-icon icon-1'>
                                    <div className='currency-icon-inner'>
                                        <img src={tslaIcon} alt='tslaIcon' />
                                    </div>
                                </div>
                                <div className='currency-icon icon-2'>
                                    <div className='currency-icon-inner'>
                                        <img
                                            src={MicrosoftIcon}
                                            alt='MicrosoftIcon'
                                        />
                                    </div>
                                </div>
                                <div className='currency-icon icon-3'>
                                    <div className='currency-icon-inner'>
                                        <img src={Meta2Icon} alt='Meta2Icon' />
                                    </div>
                                </div>
                                <div className='currency-icon icon-4'>
                                    <div className='currency-icon-inner'>
                                        <img
                                            src={AppleStockIcon}
                                            alt='AppleStockIcon'
                                        />
                                    </div>
                                </div>
                                <div className='animation-balls balls-1'></div>
                                <div className='animation-balls balls-2'></div>
                                <div className='animation-balls balls-3'></div>
                                <div className='animation-balls balls-4'></div>
                            </div>
                        </MouseParallaxChild>

                        <div className='live-market-inside' data-aos='zoom-in'>
                            <LiveMarketTable data={ForexData} />
                        </div>
                    </Container>
                </MouseParallaxContainer>
            </section>
            {/* STEP SECTION START */}
            <TradingStep StockLiveData={StockLiveData} />
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

export default Shares;
