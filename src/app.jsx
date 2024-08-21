import React from 'react';
import './styles/app.css';
import Footer from './components/footer';
import Header from './components/header';
import SectionOne from './components/sectionOne';
import SectionFAQ from './components/sectionFAQ';

function App() {
    return (
        <div className='mainContainer'>
            <div className='image-container'>
                <header>
                    <Header />
                </header>
                <SectionOne/>    
            </div>
            <SectionFAQ />
        </div>
    );
}

export default App;
