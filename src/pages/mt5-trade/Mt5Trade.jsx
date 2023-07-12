import React, { useEffect } from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AOS from 'aos';

import InnerBanner from '../../componets/InnerBanner/InnerBanner';
import LogoAnimation from '../../componets/LogoAnimation/LogoAnimation';

// IMAGES START
import BannerImage from '../../assets/images/spread-banner.jpg';

function Mt5Trade() {
    useEffect(() => {
        AOS.init({
            easing: 'ease-in-out-back',
            duration: 1000,
        });
        AOS.refresh();
    }, []);

    return (
        <div className='content-wrapper' id='content-wrap'>
            {/* FAQS SECTION START */}
            <section className='mt5-trade-page'>
                <iframe src='https://metatraderweb.app/trade?version=5&trade_server=PlusCapital-Server&servers=PlusCapital-Server&startup_mode=create_demo&demo_all_servers=1&lang=en&color_scheme=black_on_white'></iframe>
            </section>
        </div>
    );
}

export default Mt5Trade;
