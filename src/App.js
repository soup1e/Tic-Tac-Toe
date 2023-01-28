import './App.css';
import Board from './Components/Board/Board.js';
import { Route, Switch } from 'react-router-dom';

import Stats from './Components/Stats/Stats.js';
import Header from './Components/Header/Header.js';
function App() {
  return (
    <>
      <div>
        <Header />

        <Switch>
          <Route exact path="/">
            <Board />
          </Route>

          <Route path="/stats">
            <Stats />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
