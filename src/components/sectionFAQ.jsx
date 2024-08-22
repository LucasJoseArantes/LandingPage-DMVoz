import React, { useState } from 'react';
import '../styles/sectionFAQ.css';
import TitleSubtitle from './titleSubtitle';

const SectionFAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: 'Vocês têm políticas de privacidade para proteger meus dados?',
            answer: 'Sim, levamos a privacidade de nossos clientes muito a sério. Todas as informações fornecidas são mantidas em sigilo e usadas exclusivamente para a execução dos serviços contratados. Para mais detalhes, consulte nossa política de privacidade.',
        },
        {
            question: 'Como posso contratar os serviços da produtora?',
            answer: 'Você pode contratar nossos serviços entrando em contato diretamente pelo nosso site ou telefone. Estamos disponíveis para esclarecer dúvidas e fornecer todas as informações necessárias.',
        },
        {
            question: 'Qual é o prazo de entrega para os serviços de locução?',
            answer: 'O prazo de entrega varia conforme o projeto e o serviço contratado. Entre em contato para uma estimativa mais precisa.',
        },
        {
            question: 'Qual é o prazo de entrega para os serviços de locução?',
            answer: 'O prazo de entrega varia conforme o projeto e o serviço contratado. Entre em contato para uma estimativa mais precisa.',
        },
        {
            question: 'Qual é o prazo de entrega para os serviços de locução?',
            answer: 'O prazo de entrega varia conforme o projeto e o serviço contratado. Entre em contato para uma estimativa mais precisa.',
        },
        {
            question: 'Qual é o prazo de entrega para os serviços de locução?',
            answer: 'O prazo de entrega varia conforme o projeto e o serviço contratado. Entre em contato para uma estimativa mais precisa.',
        },
       
    ];

    const toggleAnswer = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null); // Fecha a pergunta se estiver aberta
        } else {
            setActiveIndex(index); // Abre a pergunta clicada
        }
    };

    return (
        <section className="faqSection">
            <TitleSubtitle title="Perguntas Frequentes" subtitle="Respostas para as dúvidas mais comuns sobre nossos serviços"/>
            <div className="faqList">
                {faqs.map((faq, index) => (
                    <div key={index} className="faqItem">
                        <div 
                            className="faqQuestion" 
                            onClick={() => toggleAnswer(index)}
                        >
                            <span>{index + 1}. {faq.question}</span>
                            <span className={`faqIcon ${activeIndex === index ? 'open' : ''}`}>
                                {activeIndex === index ? '▲' : '▼'}
                            </span>
                        </div>
                        {activeIndex === index && (
                            <div className="faqAnswer">
                                <p>{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SectionFAQ;
