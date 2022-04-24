import '../styles/ResetBtn.css'
import { initialBoard, Board } from '../utils/tictactoe'

type Props = {
  nextPlayer: boolean | null,
  setMyBoard: (board: Board) => void
};

function ResetBtn({ nextPlayer, setMyBoard }: Props) {
  return (
    <button onClick={() => setMyBoard(initialBoard)} className={nextPlayer ? 'hidden' : ''}>Replay</button>
  )
}

export default ResetBtn