import { Cell } from '../utils/tictactoe'
import CrossImage from '../assets/cross.png'
import RoundImage from '../assets/round.png'
import '../styles/Cellule.css'

type Props = {
  cellule: Cell,
  nextPlayer: boolean | null,
  onCellClick: () => void
};

function Cellule({ cellule, nextPlayer, onCellClick }: Props) {
  return (
    <td className={nextPlayer ? '' : 'disabled'} onClick={onCellClick}>
      { cellule === 1 &&
        <img src={CrossImage} alt="cross icon" />
      }
      { cellule === 2 &&
        <img src={RoundImage} alt="round icon" />
      }
    </td>
  )
}

export default Cellule