import React, { useContext } from 'react';
import { UserContext } from '../../context/GameContext.js';
import './Reset.css';

export default function Reset() {
  const { resetGame } = useContext(UserContext);
  return (
    <>
      <button
        onClick={() => {
          resetGame();
        }}
      >
        Reset
      </button>
    </>
  );
}
