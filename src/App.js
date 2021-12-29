import React, { useState } from 'react';
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
	return (
		<div className="App">
			<h1>Magic Match</h1>
			<button onClick={shuffleCards}>New Game</button>
		</div>
  	);
}

export default App;
