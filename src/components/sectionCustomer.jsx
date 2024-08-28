import React from 'react';
import TitleSubtitle from './titleSubtitle';
import '../styles/sectionCustomer.css';
import Button from './button';

const Customer = () => {
    return (
        <section className='sectionImage sectionCustomer'>
            <TitleSubtitle title="Depoimentos" subtitle="Saiba quem são nossos parceiros, e o que tem a dizer sobre nós"/>
            <Button text="Estou Interessado" />
        </section>
    );
};

export default Customer;