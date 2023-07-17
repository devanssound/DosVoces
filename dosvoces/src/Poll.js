import React from 'react';

function Poll({ question, options }) {
    return (
        <div className="poll">
            <h2>{question}</h2>
            <ul>
                {options.map((option, index) => (
                      <p key={index}>{option.text} - {option.votes} votes</p>
                ))}
            </ul>
        </div>
    );
}

export default Poll;
