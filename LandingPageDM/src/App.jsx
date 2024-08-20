import React from 'react';
import SectionOne from './SectionOne';
import Footer from './Footer';
import Header from './Header';
import './App.css';

function App() {
    return (
        <div className='MainContainer'>
            <div className='image-container'>
                <header>
                    <Header />
                </header>
                <section className='SectionOne, SectionImage'>
                    <SectionOne />
                </section>
            </div>

            <Footer>

            </Footer>
        </div>
    );
}

export default App;