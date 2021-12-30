import React, { useState, useEffect } from 'react';

import Card from './components/Card';

import './App.css';

const cardImages = [
	{ "src": "/img/helmet-1.png", matched: false },
	{ "src": "/img/potion-1.png", matched: false },
	{ "src": "/img/ring-1.png", matched: false },
	{ "src": "/img/scroll-1.png", matched: false },
	{ "src": "/img/shield-1.png", matched: false },
	{ "src": "/img/sword-1.png", matched: false }
];

function App() {
	const [cards, setCards] = useState([]);
	const [turns, setTurns] = useState(0);
	const [choiceOne, setChoiceOne] = useState(null);
	const [choiceTwo, setChoiceTwo] = useState(null);
	
	// Compare 2 card choices
	useEffect(() => {
		// To prevent checking when the component first mounts
		if(choiceOne && choiceTwo) {
			if(choiceOne.src === choiceTwo.src) {
				console.log("MATCH");
				// Chnaging matched to true for the matched cards
				setCards((prevCards) => {
					return prevCards.map((card) => {
						// The cards which matched
						if(card.src === choiceOne.src) {
							return {...card, matched: true};
						}
						// Other cards
						else {
							return card;
						}
					});
				});
				resetTurn();
			}
			else {
				console.log("DOESN'T MATCH");
				// Wait 1s before resetting and flipping back if not matched
				setTimeout(()=> resetTurn(), 1000);
			}
			console.log("reset")
		}
	}, [choiceTwo]);
	
	
	const shuffleCards = () => {
		// Doubling and shuffling the cards
		const shuffledCards = [...cardImages, ...cardImages]
			.sort(() => Math.random() - 0.5)
			.map((card) => {
				return { ...card, id: Math.random()};
			})
			
			// Setting the newly shuffled cards to state 
			setCards(shuffledCards);
			// Setting number of turns to 0
			setTurns(0);
	}
	
	// Setting a choice
	const handleChoice = (card) => {
		choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
	}
	
	// Reset choices and increase turn
	const resetTurn = () => {
		setChoiceOne(null);
		setChoiceTwo(null);
		setTurns(prevTurns => {
			return prevTurns + 1;
		});
	}
	
	return (
		<div className="App">
			<h1>Magic Match</h1>
			<button onClick={shuffleCards}>New Game</button>
			<div className="card-grid">
				{cards.map((card) => {
					return <Card
						key={card.id}
						card={card}
						onChoice={handleChoice.bind(null, card)}
						flipped={card === choiceOne || card === choiceTwo || card.matched}
					/>
				})}
			</div>
		</div>
  	);
}

export default App;
