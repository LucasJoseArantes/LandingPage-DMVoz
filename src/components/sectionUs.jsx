import React from 'react';
import Button from './button';

const SectionUs = () => {
    return (
        <section className='sectionUs'>
            <div>
                <h2>Title</h2>
                <h3>Subtitle</h3>
            </div>
            <div>
                <h4>Heading 1</h4>
                <p>Paragraph 1</p>
            </div>
            <div>
                <h4>Heading 2</h4>
                <p>Paragraph 2</p>
            </div>
            <Button />
        </section>
    );
}

export default SectionUs;