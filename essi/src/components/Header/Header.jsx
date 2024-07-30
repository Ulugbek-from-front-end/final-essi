import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    const [hover, setHover] = useState(false);
    const [showSecondImage, setShowSecondImage] = useState(true);
    const [selectedSite, setSelectedSite] = useState("/");
   
    const handleHover = () => {
      setHover(!hover);
      setShowSecondImage(!showSecondImage);
    };
    const handleSiteChange = (event) => {
        setSelectedSite(event.target.value);
        
    };

    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="header__wrapper">
                        <div className="header__flex">
                            <Link to={"/#"}>
                                <img src="logo.png" alt="" className="Logo" />
                            </Link>
                            <nav>
                                <ul className='header__nav'>
                                    <li className='header__text'><Link to={"/"} className='header__text2' id='header__text3'>Главная</Link></li>
                                    <li className='header__text'><Link to={"*"} className='header__text2'>О Компании</Link></li>
                                    <li className='header__text'><Link to={"*"} className='header__text2'>Продукты</Link></li>
                                    <li className='header__text'><Link to={"*"} className='header__text2'>Рецепты</Link></li>
                                    <li className='header__text'><Link to={"*"} className='header__text2'>Наши Партнеры</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <button
                            className='header__btn'
                            onMouseEnter={handleHover}
                            onMouseLeave={handleHover}
                            style={{ backgroundColor: hover ? 'white' : 'rgb(252, 73, 73)' }}
                        >
                            {hover && <img src="call_red.png" className='img111' alt="" />}

                            {showSecondImage ? <img src="call.svg" className='img112' alt="" /> : null}

                            <a href="tel:+998881020">+998(88)179-10-20</a>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
