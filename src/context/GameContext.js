import { useState, createContext } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [active, setActive] = useState(true);
  const [gameMessage, setGameMessage] = useState('');
  const [boxes, setBoxes] = useState([
    {
      space: 1,
      content: '',
    },
    {
      space: 2,
      content: '',
    },
    {
      space: 3,
      content: '',
    },
    {
      space: 4,
      content: '',
    },
    {
      space: 5,
      content: '',
    },
    {
      space: 6,
      content: '',
    },
    {
      space: 7,
      content: '',
    },
    {
      space: 8,
      content: '',
    },
    {
      space: 9,
      content: '',
    },
  ]);

  const setSpace = (space, content) => {
    // Check if the space already contains an 'X' or 'O'
    if (content === 'X' || content === 'O') {
      return;
    }

    setBoxes((board) => {
      return board.map((newBox) => {
        return newBox.space === space ? { ...newBox, content: currentPlayer } : newBox;
      });
    });

    switchTurn();
  };

  function switchTurn() {
    if (currentPlayer === 'O') {
      setCurrentPlayer('X');
    } else {
      setCurrentPlayer('O');
    }
  }

  return (
    <UserContext.Provider
      value={{
        boxes,
        setBoxes,
        currentPlayer,
        setCurrentPlayer,
        active,
        setActive,
        gameMessage,
        setGameMessage,
        setSpace,
        switchTurn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
