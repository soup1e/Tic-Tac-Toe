import React, { useContext } from 'react';

import { UserContext } from '../../context/GameContext.js';

export default function Stats() {
  const { total, knotWins, crossWins } = useContext(UserContext);

  return (
    <>
      <h1 className="header">STATS</h1>
      <div className="outline">
        <div className="stats-container">
          <ul>
            <li>Total Games Played: {total}</li>
            <li>O wins: {knotWins}</li>
            <li>X wins: {crossWins}</li>
            <li>Ties: {total - crossWins}</li>
          </ul>
        </div>
      </div>
    </>
  );
}
