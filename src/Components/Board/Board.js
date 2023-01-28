import React, { useContext } from 'react';
import './Board.css';
import Box from '../Box/Box.js';
import Reset from '../Reset/Reset.js';

import { UserContext } from '../../context/GameContext.js';

export default function Board() {
  const { boxes, gameMessage, currentPlayer } = useContext(UserContext);
  return (
    <>
      <h1 className="header">REACT TIC-TAC-TOE</h1>
      <div className="outline">
        <h1 className="turn">It&apos;s {currentPlayer}&apos;s Turn</h1>
        <h2 className="winner">{gameMessage}</h2>
        <div className="board-container">
          {boxes.map((box) => (
            <Box key={box.space} space={box.space} content={box.content} />
          ))}
        </div>

        <Reset />
      </div>
    </>
  );
}
