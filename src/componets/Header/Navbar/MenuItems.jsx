import { useState, useEffect, useRef } from 'react';
import Dropdown from './Dropdown';

import { NavLink } from 'react-router-dom';

const MenuItems = ({ items, depthLevel, setToggleFreeAccountDemo }) => {
    const [dropdown, setDropdown] = useState(false);

    // console.log('setToggleFreeAccountDemo', setToggleFreeAccountDemo);

    let ref = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (
                dropdown &&
                ref.current &&
                !ref.current.contains(event.target)
            ) {
                setDropdown(false);
            }
        };
        document.addEventListener('mousedown', handler);
        document.addEventListener('touchstart', handler);
        return () => {
            // Cleanup the event listener
            document.removeEventListener('mousedown', handler);
            document.removeEventListener('touchstart', handler);
        };
    }, [dropdown]);

    const onMouseEnter = () => {
        window.innerWidth > 1199 && setDropdown(true);
    };

    const onMouseLeave = () => {
        window.innerWidth > 1199 && setDropdown(false);
    };

    const closeDropdown = () => {
        dropdown && setDropdown(false);
    };

    return (
        <li
            className='menu-items'
            ref={ref}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={closeDropdown}
        >
            {items.url && items.submenu ? (
                <>
                    <button
                        type='button'
                        aria-haspopup='menu'
                        aria-expanded={dropdown ? 'true' : 'false'}
                        onClick={() => setDropdown((prev) => !prev)}
                    >
                        {window.innerWidth < 1199 && depthLevel === 0 ? (
                            <span className='mainlink'>{items.title}</span>
                        ) : (
                            <span className='mainlink'>{items.title}</span>
                        )}

                        {depthLevel > 0 &&
                        window.innerWidth < 1199 ? null : depthLevel > 0 &&
                          window.innerWidth > 1199 ? (
                            <span>&raquo;</span>
                        ) : (
                            <span className='arrow' />
                        )}
                    </button>
                    <Dropdown
                        depthLevel={depthLevel}
                        submenus={items.submenu}
                        dropdown={dropdown}
                        setToggleFreeAccountDemo={setToggleFreeAccountDemo}
                    />
                </>
            ) : !items.url && items.submenu ? (
                <>
                    <button
                        type='button'
                        aria-haspopup='menu'
                        aria-expanded={dropdown ? 'true' : 'false'}
                        onClick={() => setDropdown((prev) => !prev)}
                    >
                        {items.title}{' '}
                        {depthLevel > 0 ? (
                            <span>&raquo;</span>
                        ) : (
                            <span className='arrow' />
                        )}
                    </button>
                    <Dropdown
                        depthLevel={depthLevel}
                        submenus={items.submenu}
                        dropdown={dropdown}
                        setToggleFreeAccountDemo={setToggleFreeAccountDemo}
                    />
                </>
            ) : (
                <NavLink
                    to={items.url}
                    onClick={
                        items.open_demo
                            ? (e) => {
                                  e.preventDefault();
                                  setToggleFreeAccountDemo(true);
                              }
                            : null
                    }
                    className='nav-link'
                >
                    {items.title}
                </NavLink>
            )}
        </li>
    );
};

export default MenuItems;
