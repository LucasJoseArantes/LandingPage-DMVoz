import React from 'react';
import './styles/app.css';
import Footer from './components/footer';
import Header from './components/header';
import SectionOne from './components/sectionOne';
import SectionFAQ from './components/sectionFAQ';
import SectionContact from './components/sectionContact';
import SectionCustomer from './components/sectionCustomer';


function App() {
    return (
        <div className='mainContainer'>
            <div className='image-container imageOne'>
                <Header />
                <SectionOne />    
            </div>
            <div className='image-container imageCostumer'>
                <SectionCustomer />
            </div>
            <SectionFAQ />
                <SectionContact />
            <Footer />
        </div>
    );
}

export default App;
