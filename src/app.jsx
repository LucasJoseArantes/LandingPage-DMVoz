import React from 'react';
import './styles/app.css';
import Footer from './components/footer';
import Header from './components/header';
import SectionOne from './components/sectionOne';
import SectionFAQ from './components/sectionFAQ';
import SectionContact from './components/sectionContact';
import SectionCustomer from './components/sectionCustomer';
import SectionAudio from './components/sectionAudio';
import SectionUs from './components/sectionUs';
import SectionCampaign from './components/sectionCampaign';
import Whatsapp from './components/whatsAppIcon';


function App() {
    return (
        <div className='mainContainer'>
            <div className='image-container imageOne'>
                <Header />
                <SectionOne />    
            </div>
                <SectionCampaign />
            <div className='image-container imageCostumer'>
                <SectionCustomer />
            </div>
                <SectionUs />
            <div className='image-container imageAudio'>
                <SectionAudio />
            </div>
                <SectionFAQ />
            <div className='image-container imageContact'>
                <SectionContact />
            </div>
            <Footer />
            <Whatsapp />
        </div>
    );
}

export default App;
