import React from 'react';

const TitleSubtitle = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <p className='sectionSubtitle'>{props.subtitle}</p>
        </div>
    );
};

export default TitleSubtitle;