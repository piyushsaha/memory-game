import './Card.css';

const Card = ({ card, handleChoice, flipped, disabled }) => {

    const handleClick = () => {
        if (!disabled) {
            handleChoice(card)
        }
    }

    return (
        <div className="card">
            <div className={`card-img-container ${flipped ? "flipped" : ""}`}>
                <img className="front" src={card.src} alt="card front" />
                <img className="back" src="/img/cover.png" onClick={handleClick} alt="cover" />
            </div>
        </div>
    )
}

export default Card;