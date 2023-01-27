import React, { useContext } from 'react';
import './Board.css';
import Box from '../Box/Box.js';

import { UserContext } from '../../context/GameContext.js';

export default function Board() {
  const { boxes } = useContext(UserContext);
  return (
    <>
      <h1 className="header">REACT TIC-TAC-TOE</h1>
      <div className="outline">
        <h1 className="turn">It&apos;s (Player) Turn</h1>
        <h2 className="winner">(PLAYER) WINS</h2>
        <div className="board-container">
          {boxes.map((box) => (
            <Box key={box.space} space={box.space} content={box.content} />
          ))}
        </div>
      </div>
    </>
  );
}
