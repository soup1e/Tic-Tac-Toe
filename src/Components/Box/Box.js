import React, { useContext } from 'react';
import './Box.css';

import { UserContext } from '../../context/GameContext.js';

export default function Box({ space, content }) {
  const { setSpace } = useContext(UserContext);
  return (
    <div
      className="space"
      onClick={() => {
        setSpace(space, content);
      }}
    >
      {content}
    </div>
  );
}
