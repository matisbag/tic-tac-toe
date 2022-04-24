import { Player } from '../utils/tictactoe'
import '../styles/GameInfo.css'

type Props = {
  winner: Player | null,
  nextPlayer: Player | null
};

function GameInfo({ winner, nextPlayer }: Props) {
  if (winner) {
    return winner === 1
      ? <span className='game_info'><span className='red'>Red</span> player victory!</span>
      : <span className='game_info'><span className='blue'>Blue</span> player victory!</span>
  } else {
    if (nextPlayer) {
      return nextPlayer === 1
        ? <span className='game_info'>It's up to the <span className='red'>Red</span> player to play</span>
        : <span className='game_info'>It's up to the <span className='blue'>Blue</span> player to play</span>
    } else {
      return <span className='game_info'>No winner !</span>
    }
  }
}

export default GameInfo