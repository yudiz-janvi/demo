import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

import BannerItem1 from '../../assets/images/home-banner-1.jpg';
import BannerItem2 from '../../assets/images/home-banner-2.jpg';

function HomeBanner() {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        fade: true,
        // cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        speed: 1000,
        autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 4000,
    };

    return (
        <div className='banner-wrap home-banner'>
            <Slider {...settings}>
                <div className='banner-item'>
                    <div className='banner-content-wrap'>
                        <div className='container'>
                            <div className='banner-content'>
                                <h2>
                                    Grow your Finance and Trade with trastrad
                                    provider
                                </h2>
                                <p>
                                    Plus Capital is a trading name of Plus
                                    Capital Limited - ADGM, a member of Plus
                                    Group, which is authoPlus Capital is a
                                    trading name of Plus Capital Limited.
                                </p>
                                <Link to='#' className='btn btn-primary'>
                                    Trade With Us
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='banner-img'>
                        <img src={BannerItem1} alt='' />
                    </div>
                </div>
                <div className='banner-item'>
                    <div className='banner-content-wrap'>
                        <div className='container'>
                            <div className='banner-content'>
                                <h2>
                                    Grow your Finance and Trade with trastrad
                                </h2>
                                <p>
                                    Plus Capital is a trading name of Plus
                                    Capital Limited - ADGM, a member of Plus
                                    Group, which is authoPlus Capital is a
                                    trading name of Plus Capital Limited.
                                </p>
                                <Link to='#' className='btn btn-primary'>
                                    Trade With Us
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='banner-img'>
                        <img src={BannerItem2} alt='' />
                    </div>
                </div>
                {/* <div className='banner-item'>
                    <div className='banner-content-wrap'>
                        <div className='container'>
                            <div className='banner-content'>
                                <h2>
                                    Plus Capital is a trading name of Plus
                                    Capital Limited
                                </h2>
                                <p>
                                    Plus Capital is a trading name of Plus
                                    Capital Limited - ADGM, a member of Plus
                                    Group, which is authoPlus Capital is a
                                    trading name of Plus Capital Limited.
                                </p>
                                <Link to='#' className='btn btn-primary'>
                                    Trade With Us
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='banner-img'>
                        <img src={BannerItem1} alt='' />
                    </div>
                </div> */}
            </Slider>
        </div>
    );
}

export default HomeBanner;
