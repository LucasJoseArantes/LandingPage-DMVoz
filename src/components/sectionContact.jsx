import React from 'react';
import '../styles/sectionContact.css'; // Certifique-se de que este caminho corresponde ao seu projeto

const SectionContact = () => {
    return (
        <section className="sectionContact">
            <div className='contactContent'>

            <div className='contactTitle'>
                <h2>Fale Conosco</h2>
                <p className='sectionSubtitle'>Agora nós queremos ouvir a sua voz. Deixe sua mensagem e entraremos em contato!</p>
            </div>
            

            <form className='contactForm'>
                <div className="formGroup">
                    <label htmlFor="name">Nome</label>
                    <input type="text" id="name" name="name" placeholder="Preencha com seu nome" />
                </div>
                <div className="formGroup">
                    <label htmlFor="phone">Telefone</label>
                    <input type="text" id="phone" name="phone" placeholder="(yy) xxxxx-xxxx" />
                </div>
                <div className="formGroup">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="exemplo@gmail.com" />
                </div>
                <div className="formGroup">
                    <label htmlFor="message">Mensagem</label>
                    <textarea className='messageForm' id="message" name="message" rows="4" placeholder="Você tem alguma dúvida? Quer saber um pouco mais sobre nós?"></textarea>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
        </section>
    );
};

export default SectionContact;
