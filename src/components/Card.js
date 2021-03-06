import React from 'react';

import './Card.css';

const Card = (props) => {
    const handleChoice = () => {
        if(!props.isDisabled) {
            props.onChoice();
        }
    }
    
    return (
        <div className="card">
            <div className={props.flipped ? 'flipped' : ''}>
                <img className="front" src={props.card.src} />
                {/* For production */}
                <img className="back" onClick={handleChoice} src="/memory-game/img/cover.png" />
                
                {/* For development */}
                {/* <img className="back" onClick={handleChoice} src="/img/cover.png" /> */}
            </div>
        </div>
    );
}

export default Card;