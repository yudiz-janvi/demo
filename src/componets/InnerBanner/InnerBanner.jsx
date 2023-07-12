import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';

function InnerBanner(props) {
    const { bannerData, active_page } = props;
    return (
        <div
            className={`banner-wrap ${
                bannerData.isSubNav ? 'inner-banner' : 'inner-banner-small'
            }`}
        >
            <div className='banner-item'>
                <div className='banner-content-wrap'>
                    <div className='container'>
                        <div className='banner-content'>
                            {bannerData.isSubNav && (
                                <div className='page-navigation'>
                                    <ul className='d-none d-md-flex'>
                                        <li>
                                            <NavLink to='/forex'>Forex</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/indices'>
                                                Indices
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/digital'>
                                                Digital
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/shares'>
                                                Shares
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/commodities'>
                                                Commodities
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/etfs'>ETFS</NavLink>
                                        </li>
                                    </ul>
                                    <Dropdown className='d-block d-md-none'>
                                        <Dropdown.Toggle
                                            variant='custom'
                                            id='submenu-dropdown'
                                        >
                                            {active_page && active_page}
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <NavLink
                                                eventKey='1'
                                                to='/forex'
                                                active
                                            >
                                                Forex
                                            </NavLink>
                                            <NavLink eventKey='2' to='/indices'>
                                                Indices
                                            </NavLink>
                                            <NavLink eventKey='3' to='/digital'>
                                                Digital
                                            </NavLink>
                                            <NavLink to='/shares'>
                                                Shares
                                            </NavLink>
                                            <NavLink to='/commodities'>
                                                Commodities
                                            </NavLink>
                                            <NavLink to='/etfs'>ETFS</NavLink>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            )}
                            {bannerData.page_title && (
                                <h6>{bannerData.page_title}</h6>
                            )}
                            <h1>{bannerData.title}</h1>
                            {bannerData.description && (
                                <p>{bannerData.description}</p>
                            )}
                            {bannerData.isSubNav && (
                                <Link to='#' className='btn btn-primary'>
                                    Trade With Us
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
                <div className='banner-img'>
                    {bannerData.banner_video && (
                        <video
                            width='100%'
                            height='100%'
                            autoPlay
                            muted
                            playsinline
                            loop
                        >
                            <source
                                src={bannerData.banner_video}
                                type='video/mp4'
                            />
                            Your browser does not support the video tag.
                        </video>
                    )}
                    {bannerData.banner_image && (
                        <img src={bannerData.banner_image} alt='' />
                    )}
                </div>
            </div>
        </div>
    );
}

export default InnerBanner;
