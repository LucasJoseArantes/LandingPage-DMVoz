import React from 'react';
import './styles/app.css';
import Footer from './components/footer';
import Header from './components/header';
import SectionOne from './components/sectionOne';
import SectionFAQ from './components/sectionFAQ';
import SectionContact from './components/sectionContact';

function App() {
    return (
        <div className='mainContainer'>
            <div className='image-container'>
                <Header />
                <SectionOne />    
            </div>
            <SectionFAQ />
            <SectionContact />
            <Footer />
        </div>
    );
}

export default App;
