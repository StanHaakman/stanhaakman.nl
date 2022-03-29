import React from 'react';
import '../styles/_Header.sass';
import {useEffect, useState} from "react";

import {ReactComponent as Buildings} from '../images/Skyline.svg';

const Header = () => {    
    const [offsetY, setOffsetY] = useState(0);

    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <header className="relative h-75vh flex align-middle justify-center dark:bg-darkBg transition-all duration-300 overflow-hidden">
            <div className="buildings-container absolute bottom-0 w-screen text-center max-h-50vh flex justify-center"
            style={{transform: `translateY(${offsetY * 0.1}px)`}}>
                {/* <img src={buildings} alt="" className="m-auto" /> */}
                <Buildings  className="min-w-max"/>
            </div>
        </header>
    );
}

export default Header;
