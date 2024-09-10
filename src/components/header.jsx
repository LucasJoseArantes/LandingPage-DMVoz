import React, { useState } from 'react';
import '../styles/header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleClick = (props) => {
        const section = document.querySelector(props);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error("Element with ID 'navbar' not found.");
        }
    };

    return (
        <header>
            <div className='logo-container'>
                <img src='https://github.com/LucasJoseArantes/LandingPage-DMVoz/blob/main/src/assets/images/logos/colorHeader.png?raw=true' alt='DM Voz Produções' />
            </div>
            <div className='hamburger' onClick={toggleMenu}>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </div>
            <nav className={`navbar ${isOpen ? 'active' : ''}`}>
                <ul>
                    <li><a onClick={() => handleClick('#sectionCampaign')}>Campanhas</a></li>
                    <li><a onClick={() => handleClick('#sectionUs')}>Sobre nós</a></li>
                    <li><a onClick={() => handleClick('#sectionCustomer')}>Nossos Parceiros</a></li>
                    <li><a onClick={() => handleClick('#faqSection')}>FAQ</a></li>
                    <li><a onClick={() => handleClick('#contact')}>Fale Conosco</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
