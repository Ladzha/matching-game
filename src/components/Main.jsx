import {useState} from 'react';
import Board from './board/Board.jsx'
import Level from './level/Level.jsx'
import Timer from './timer/Timer.jsx'
import imgSet from './imgSet.js';
import Portal from './modal/Portal.jsx';



const Main = () => {

  const [level, setLevel] = useState('super-easy');
  const [cardImages, setCardImages] = useState(imgSet(4)) 

  const [moves, setMoves] = useState(0); //how many moves user did
  const [gameOn, setGameOn] = useState(false)
  const [gameResult, setGameResult] = useState('')

  console.log('Moves', moves)
  console.log('Game status', gameOn)
  console.log('Game result status', gameResult)

  const onLevelChange =(cardsAmount)=>{
    setCardImages(imgSet(cardsAmount))
    console.log('cardImages', cardImages);
  }

  const handleRestart=(restart)=>{
    restart()
  }

  return (
    <div className='main'>
      <p className='main-title'>MEMORY GAME</p>
      <div className='button-container'>
      <Level 
      level={level}
      setLevel={setLevel}
      onLevelChange={onLevelChange}
      /> 

      <Timer 
      seconds={7}
      gameOn={gameOn}
      setGameOn={setGameOn}
      setGameResult={setGameResult}
      />
      </div>

      <Board 
      cardImages={cardImages} 
      gridSizeClass={level}
      moves={moves}
      setMoves={setMoves}
      setGameOn={setGameOn}
      setGameResult={setGameResult}
      />

      <Portal 
      gameOn={gameOn}
      gameResult={gameResult}
      level={level}
      moves={moves}
      onLevelChange={onLevelChange}/>

    </div>
  )
}

export default Main