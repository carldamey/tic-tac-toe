import { useState, useEffect, useRef } from 'react';
import './App.css';
import Messages from '../Messages/Messages';
import GameBoard from '../GameBoard/GameBoard';
import Reset from '../Reset/Reset';

export default function App() {
  return (
    <main className="App">
      <Messages />
      <GameBoard />
      <Reset />
    </main>
  );
}