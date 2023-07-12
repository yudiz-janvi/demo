import React, { useLayoutEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

// import Banner from './assets/images/banner-bg.png';
import Header from './componets/Header/Header';
import Footer from './componets/Footer/Footer';

// PAGES
import Home from './pages/home/Home';
import Forex from './pages/forex/Forex';
import Indices from './pages/indices/Indices';
import Digital from './pages/digital/Digital';
import Shares from './pages/shares/Shares';
import Commodities from './pages/commodities/Commodities';
import Etfs from './pages/etfs/Etfs';
import Education from './pages/education/Education';
import ForexEducation from './pages/forex-education/ForexEducation';
import DigitalEducation from './pages/digital-education/DigitalEducation';
import IndicesEducation from './pages/indices-education/IndicesEducation';
import CommoditiesEducation from './pages/commodities-education/CommoditiesEducation';
import SharesEducation from './pages/shares-education/SharesEducation';
import ETFsEducation from './pages/etfs-education/ETFsEducation';
import Mt5 from './pages/mt5/Mt5';
import AboutUs from './pages/about-us/AboutUs';
import Careers from './pages/careers/Careers';
import CareerDetail from './pages/career-detail/CareerDetail';
import WhyUs from './pages/why-us/WhyUs';
import FAQs from './pages/faqs/Faqs';
import ContactUs from './pages/contact-us/ContactUs';
import Regulation from './pages/regulation/Regulation';
import Spread from './pages/spread/Spread';
import Mt5Trade from './pages/mt5-trade/Mt5Trade';
import FreeAccountDemo from './componets/FreeAccountDemo/FreeAccountDemo';
import Account from './pages/account/Account';

function App() {
    const location = useLocation();

    // Scroll to top if path changes
    useLayoutEffect(() => window.scrollTo(0, 0), [location.pathname]);

    return (
        <div className='App'>
            <Header />
            {/* <Home /> */}
            <Routes>
                <Route path='/' Component={Home} />
                <Route path='/mt5' Component={Mt5} />
                <Route path='/forex' Component={Forex} />
                <Route path='/indices' Component={Indices} />
                <Route path='/digital' Component={Digital} />
                <Route path='/shares' Component={Shares} />
                <Route path='/commodities' Component={Commodities} />
                <Route path='/etfs' Component={Etfs} />
                <Route path='/education' Component={Education} />
                <Route path='/forex-education' Component={ForexEducation} />
                <Route path='/digital-education' Component={DigitalEducation} />
                <Route path='/indices-education' Component={IndicesEducation} />
                <Route
                    path='/commodities-education'
                    Component={CommoditiesEducation}
                />
                <Route path='/shares-education' Component={SharesEducation} />
                <Route path='/etfs-education' Component={ETFsEducation} />
                <Route path='/about-us' Component={AboutUs} />
                <Route path='/careers' Component={Careers} />
                <Route path='/career-detail' Component={CareerDetail} />
                <Route path='/why-us' Component={WhyUs} />
                <Route path='/faqs' Component={FAQs} />
                <Route path='/contact-us' Component={ContactUs} />
                <Route path='/regulation' Component={Regulation} />
                <Route path='/spread' Component={Spread} />
                <Route path='/mt5-trade' Component={Mt5Trade} />
                <Route path='/account' Component={Account} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
