import React, { useState, useEffect } from 'react';

import Card from './components/Card';

import './App.css';

const cardImages = [
	{ "src": "/img/helmet-1.png" },
	{ "src": "/img/potion-1.png" },
	{ "src": "/img/ring-1.png" },
	{ "src": "/img/scroll-1.png" },
	{ "src": "/img/shield-1.png" },
	{ "src": "/img/sword-1.png" }
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
			}
			else {
				console.log("DOESN'T MATCH");
			}
			resetTurn();
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
					/>
				})}
			</div>
		</div>
  	);
}

export default App;
