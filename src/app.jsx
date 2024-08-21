import React from 'react';
import SectionOne from './components/sectionOne';
import Footer from './components/footer';
import Header from './components/header';
import './styles/app.css';

function App() {
    return (
        <div className='mainContainer'>
            <div className='image-container'>
                <header>
                    <Header />
                </header>
                <SectionOne/>    
            </div>

            <Footer>

            </Footer>
        </div>
    );
}

export default App;
