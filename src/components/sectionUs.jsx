import React from 'react';
import Button from './button';
import Pictures from './pictures';
import '../styles/sectionUs.css';

const SectionUs = () => {

    const imagesJson = {
        mainPath: 'https://github.com/LucasJoseArantes/LandingPage-DMVoz/blob/main/src/assets/images/mainPic.jpg?raw=true',
        side1Path: 'https://github.com/LucasJoseArantes/LandingPage-DMVoz/blob/main/src/assets/images/sidePic1.jpg?raw=true',
        side2Path: 'https://github.com/LucasJoseArantes/LandingPage-DMVoz/blob/main/src/assets/images/sidePic2.png?raw=true',
        bottom1Path: 'https://github.com/LucasJoseArantes/LandingPage-DMVoz/blob/main/src/assets/images/bottomPic1.jpg?raw=true',
        bottom2Path: 'https://github.com/LucasJoseArantes/LandingPage-DMVoz/blob/main/src/assets/images/bottomPic2.jpg?raw=true',
        bottom3Path: 'https://github.com/LucasJoseArantes/LandingPage-DMVoz/blob/main/src/assets/images/bottomPic3.jpg?raw=true'
    }

    return (
        <section className='sectionUs'>
            <div>
                <h2>Sobre nós</h2>
                <h3>Denys é a voz e a alma da DMVoz! Com vasta experiência no mercado publicitário, atua como locutor, produtor e diretor, oferecendo serviços de alta qualidade diretamente de seu Home Studio. Com um compromisso inabalável com a excelência, Denys busca sempre entregar projetos que não apenas atendem, mas superam as expectativas dos clientes.</h3>
            </div>
            <div>
                <h4>Missão </h4>
                <p>Nossa missão é fornecer serviços de locução, produção e direção que agreguem valor ao mercado publicitário. Com dedicação e profissionalismo, buscamos criar conteúdos que envolvam e impactem o público, ajudando nossos clientes a alcançarem seus objetivos de comunicação. 1</p>
            </div>
            <div>
                <h4>Visão</h4>
                <p>Ser reconhecido como uma referência no mercado publicitário, destacando-se pela qualidade, inovação e comprometimento em todos os projetos. Almejamos expandir nosso alcance, consolidando parcerias duradouras e inspirando confiança em todos os segmentos em que atuamos.</p>
            </div>
            <Pictures 
                mainPath={imagesJson.mainPath}
                side1Path={imagesJson.side1Path}
                side2Path={imagesJson.side2Path}
                bottom1Path={imagesJson.bottom1Path}
                bottom2Path={imagesJson.bottom2Path}
                bottom3Path={imagesJson.bottom3Path}
            />


            <Button />
        </section>
    );
}

export default SectionUs;