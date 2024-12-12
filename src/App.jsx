
import './App.css';
import Board from './components/Board';
import "./components/css/Board.scss"
import { useState } from 'react';
import {calculateWinner} from './winner';
import Statusmessage from './components/StatusMessage';

function App() {
  const [squares, setsquares] = useState(Array(9).fill(null));
  const [isNextX, SetNextX] = useState(false);
  const winner = calculateWinner(squares);
  const nextplayer=  isNextX ? "X" : "O" ;
  const statusmessage = winner ? `winner is ${winner}` : `winner is ${nextplayer}`;


  
  const handlesquareclick = clickedposition => {
    if (squares[clickedposition] || winner) {
      return
    }
    setsquares(currentsquare => {
      return currentsquare.map((squareValue, position) => {
        if (clickedposition === position) {
          return isNextX ? "X" : "O";
        }
        return squareValue;
      });
    });

    SetNextX(currentIsNext => !currentIsNext);

  }
  return (
    <>
      <div className='card'>
        <h2>Next player  is {nextplayer}</h2>
        <Board  squares ={squares} handlesquareclick={handlesquareclick}/>
          <Statusmessage winner={winner} isNextX={isNextX} squares={squares}/>
        {statusmessage}
      </div>

    </>
  )
}

export default App
