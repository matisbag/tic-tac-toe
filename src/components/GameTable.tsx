import '../styles/GameTable.css';
import { useState, useEffect } from 'react';
import { Board, initialBoard, play, getWinner, getNextPlayer, Player } from '../utils/tictactoe'
import Cellule from './Cellule';
import GameInfo from './GameInfo';
import ResetBtn from './ResetBtn';
import Score from './Score';

function GameTable() {
  const [myBoard, setMyBoard] = useState<Board>([...initialBoard])
  const [winner, setWinner] = useState<Player | null>(null)
  const [nextPlayer, setNextPlayer] = useState<Player | null>(null)

  useEffect(() => {
    setWinner(getWinner(myBoard))
    setNextPlayer(getNextPlayer(myBoard))
  }, [myBoard]) // N’exécute l’effet que si myBoard a été update

  return (
    <>
      <table>
        <tbody>
          { myBoard.map((row, y) =>
            <tr key={`row-${y}`}>
              { row.map((cel, x) =>
                <Cellule cellule={cel} nextPlayer={nextPlayer && !winner} onCellClick={() => setMyBoard(play(myBoard, x, y))} key={`cel-${x}-row-${y}`} />
              ) }
            </tr>
          ) }
        </tbody>
      </table>
      <GameInfo winner={winner} nextPlayer={nextPlayer} />
      <ResetBtn nextPlayer={nextPlayer && !winner} setMyBoard={setMyBoard} />
      <Score winner={winner} />
    </>
  )
}

export default GameTable