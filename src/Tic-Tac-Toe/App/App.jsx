import { useState, useEffect, useRef } from 'react';
import './App.css';
import Messages from '../Messages/Messages';
import GameBoard from '../GameBoard/GameBoard';
import Reset from '../Reset/Reset';

export default function App() {

  const [currentPlayer, setCurrentPlayer] = useState(1)
	const [boardState, setBoardState] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0])
  const [gameOver, setGameOver] = useState(false)
  const resetButton = !gameOver ? null : <Reset boardState={boardState} setBoardState={setBoardState} currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer}/>

  console.log(gameOver)

  return (
    <main className="App">
      <Messages />
      <GameBoard boardState={boardState} setBoardState={setBoardState} currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} gameOver={gameOver} setGameOver={setGameOver}/>
      {resetButton}
    </main>
  );
}