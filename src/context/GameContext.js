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
    // Check if game is active
    if (!active) {
      return;
    }
    // Check if space are same than sets content to currentPlayer
    setBoxes((board) => {
      return board.map((newBox) => {
        return newBox.space === space ? { ...newBox, content: currentPlayer } : newBox;
      });
    });
    // Ternary to change currentPlayer
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };

  const checkGame = () => {
    if (!active) return;
    const winner = checkWinner();
    if (winner) {
      setActive(false);
      setGameMessage(`${winner} wins`);
    } else {
      const checkCatsGame = boxes.every((box) => box.content);
      if (checkCatsGame) {
        setActive(false);
        setGameMessage('Cats game!');
      }
    }
  };

  const checkWinner = () => {
    // horizontal x
    if (boxes[0].content === 'X' && boxes[1].content === 'X' && boxes[2].content === 'X') {
      return 'X';
    }
    if (boxes[3].content === 'X' && boxes[4].content === 'X' && boxes[5].content === 'X') {
      return 'X';
    }
    if (boxes[6].content === 'X' && boxes[7].content === 'X' && boxes[8].content === 'X') {
      return 'X';
    }
    // vertical x
    if (boxes[0].content === 'X' && boxes[3].content === 'X' && boxes[6].content === 'X') {
      return 'X';
    }
    if (boxes[1].content === 'X' && boxes[4].content === 'X' && boxes[7].content === 'X') {
      return 'X';
    }
    if (boxes[2].content === 'X' && boxes[5].content === 'X' && boxes[8].content === 'X') {
      return 'X';
    }
    // diagonal  x
    if (boxes[0].content === 'X' && boxes[4].content === 'X' && boxes[8].content === 'X') {
      return 'X';
    }
    if (boxes[2].content === 'X' && boxes[4].content === 'X' && boxes[6].content === 'X') {
      return 'X';
    }

    // horizontal o
    if (boxes[0].content === 'O' && boxes[1].content === 'O' && boxes[2].content === 'O') {
      return 'O';
    }
    if (boxes[3].content === 'O' && boxes[4].content === 'O' && boxes[5].content === 'O') {
      return 'O';
    }
    if (boxes[6].content === 'O' && boxes[7].content === 'O' && boxes[8].content === 'O') {
      return 'O';
    }
    // vertical o
    if (boxes[0].content === 'O' && boxes[3].content === 'O' && boxes[6].content === 'O') {
      return 'O';
    }
    if (boxes[1].content === 'O' && boxes[4].content === 'O' && boxes[7].content === 'O') {
      return 'O';
    }
    if (boxes[2].content === 'O' && boxes[5].content === 'O' && boxes[8].content === 'O') {
      return 'O';
    }
    // diagonal  o
    if (boxes[0].content === 'O' && boxes[4].content === 'O' && boxes[8].content === 'O') {
      return 'O';
    }
    if (boxes[2].content === 'O' && boxes[4].content === 'O' && boxes[6].content === 'O') {
      return 'O';
    }

    return;
  };

  checkGame();

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
        checkGame,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
