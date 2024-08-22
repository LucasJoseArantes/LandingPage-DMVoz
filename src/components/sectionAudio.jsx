import React from 'react';
import TitleSubtitle from './titleSubtitle';
import '../styles/sectionAudio.css';
import Button from './button';

const SectionAudio = () => {
    return (
        <section className='sectionImage sectionAudio'>
            <TitleSubtitle title="Especialidades" subtitle="Confira algum de nossos trabalhos mais recentes" />
            <Button text="Estou Interessado" nextSection=".faqSection"/>
        </section>
    );
};

export default SectionAudio;