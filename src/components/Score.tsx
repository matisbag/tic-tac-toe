import { Player } from '../utils/tictactoe'
import CrossImage from '../assets/cross.png'
import RoundImage from '../assets/round.png'
import '../styles/Score.css'
import { useEffect, useState } from 'react';

type Props = {
  winner: Player | null
};

function Score({ winner }: Props) {
  const [crossPlayer, setCrossPlayer] = useState<number>(0)
  const [roundPlayer, setRoundPlayer] = useState<number>(0)

  useEffect(() => {
    if (winner) {
      if (winner === 1) {
        setCrossPlayer(crossPlayer => crossPlayer + 1)
      } else {
        setRoundPlayer(roundPlayer => roundPlayer + 1)
      }
    }
  }, [winner]) // N’exécute l’effet que si winner a été update

  return (
    <div className='score'>
      <div>
        <img src={CrossImage} alt="cross icon" />
        {crossPlayer}
      </div>
      <span>
        -
      </span>
      <div>
        <img src={RoundImage} alt="round icon" />
        {roundPlayer}
      </div>
    </div>
  )
}

export default Score