import MenuItems from './MenuItems';
const Dropdown = ({
    submenus,
    dropdown,
    depthLevel,
    setToggleFreeAccountDemo,
}) => {
    depthLevel = depthLevel + 1;
    const dropdownClass = depthLevel > 1 ? 'dropdown-submenu' : '';
    return (
        <ul className={`submenu ${dropdownClass} ${dropdown ? 'show' : ''}`}>
            {submenus.map((submenu, index) => (
                <MenuItems
                    items={submenu}
                    key={index}
                    depthLevel={depthLevel}
                    setToggleFreeAccountDemo={setToggleFreeAccountDemo}
                />
            ))}
        </ul>
    );
};

export default Dropdown;
