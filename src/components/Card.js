import React from 'react';

import './Card.css';

const Card = (props) => {
    return (
        <div className="card">
            <div>
                <img className="front" src={props.card.src} />
                <img className="back" src="/img/cover.png" />
            </div>
        </div>
    );
}

export default Card;