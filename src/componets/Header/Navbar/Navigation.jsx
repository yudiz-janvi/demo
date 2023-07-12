import { NavLink } from 'react-bootstrap';
import MenuItems from './MenuItems';
import SearchIcon from '../../../assets/images/search-icon.svg';

const Navigation = (props) => {
    const menuItems = [
        {
            title: 'Markets',
            url: '/',
            submenu: [
                {
                    title: 'Forex',
                    url: '/forex',
                },
                {
                    title: 'Indices',
                    url: '/indices',
                },
                {
                    title: 'Digital',
                    url: '/digital',
                },
                {
                    title: 'Shares',
                    url: '/shares',
                },
                {
                    title: 'Commodities',
                    url: '/commodities',
                },
                {
                    title: 'ETFS',
                    url: '/etfs',
                },
            ],
        },
        {
            title: 'Trading',
            url: '/',
            submenu: [
                {
                    title: 'MT5',
                    url: '/mt5',
                },
                {
                    title: 'Spread',
                    url: '/spread',
                },
                {
                    title: 'Account',
                    url: '/account',
                },
                {
                    title: 'Free account demo',
                    url: '/',
                    open_demo: true,
                },
            ],
        },
        {
            title: 'Learn',
            url: '/',
            submenu: [
                {
                    title: 'Education',
                    url: '/education',
                },
            ],
        },
        {
            title: 'Plus365',
            url: '/',
            submenu: [
                {
                    title: 'About',
                    url: '/about-us',
                },
                {
                    title: 'Career',
                    url: '/careers',
                },
                {
                    title: 'Why us',
                    url: '/why-us',
                },
                {
                    title: 'Contact us',
                    url: '/contact-us',
                },
                {
                    title: 'FAQs',
                    url: '/faqs',
                },
                {
                    title: 'Regulation',
                    url: '/regulation',
                },
            ],
        },
    ];

    return (
        <ul className='nav topnav'>
            {menuItems.map((menu, index) => {
                const depthLevel = 0;
                return (
                    <MenuItems
                        items={menu}
                        key={index}
                        depthLevel={depthLevel}
                        setToggleFreeAccountDemo={
                            props.setToggleFreeAccountDemo
                        }
                    />
                );
            })}
            <li className='search-icon'>
                <NavLink to='/'>
                    <img src={SearchIcon} alt='search icon' />
                </NavLink>
            </li>
        </ul>
    );
};

export default Navigation;
