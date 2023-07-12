import React from 'react';
import Lottie from 'react-lottie';

import LogoAnimationImg from '../../assets/images/logo-animation.json';
import LogoAnimationLight from '../../assets/images/logo-animation-light.json';

function LogoAnimation(props) {
    const defaultLogoOptions = {
        loop: true,
        autoplay: true,
        animationData: props.lightMode ? LogoAnimationLight : LogoAnimationImg,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <div
            className={`plus-logo-animation ${
                props.rightAlign ? 'right-align' : ''
            }`}
        >
            <Lottie options={defaultLogoOptions} />
        </div>
    );
}

export default LogoAnimation;
