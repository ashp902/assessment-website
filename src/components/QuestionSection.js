import React from 'react';
import './css/QuestionSection.css';

function QuestionSection({title, content}) {
    return (
        <div className='section'>
            <h1 className='section-title'>{title}</h1>
            <hr className='section-break'/>
            <p className='section-content'>
                {
                    content.replace('\\n', '<br/>')
                }
            </p>
        </div>
    );
}

export default QuestionSection;
