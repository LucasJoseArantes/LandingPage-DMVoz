import React from 'react';
import '../styles/header.css';

const Header = () => {
    return (
        <header>
            <div>
                <img src='https://github.com/LucasJoseArantes/LandingPage-DMVoz/blob/main/src/assets/images/logos/colorHeader.png?raw=true' alt='DM Voz Produções' />
            </div>
            <nav className='navbar'>
                <ul>
                    <li><a href='#about'>Sobre nós</a></li>
                    <li><a href='#partners'>Nossos Parceiros</a></li>
                    <li><a href='#faq'>FAQ</a></li>
                    <li><a href='#contact'>Fale Conosco</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
