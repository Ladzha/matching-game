import {useState, useEffect, useCallback} from 'react';
import Board from './board/Board.jsx'
import Level from './level/Level.jsx'
import Timer from './timer/Timer.jsx'
import CardsList from './board/CardsList.jsx'
import imgSet from './imgSet.js';
import Portal from './modal/Portal.jsx';



const Main = () => {

  const [level, setLevel] = useState('super-easy');
  const [cardImages, setCardImages] = useState(4) 

  const onLevelChange =(cardsAmount)=>{
    
    return cardsAmount;
  }
const set = imgSet(cardImages)
  console.log('cardImages', cardImages);
  console.log('level', level);


  return (
    <div className='main'>
      <p className='main-title'>MEMORY GAME</p>
      <div className='button-container'>
      <Level 
      level={level}
      setLevel={setLevel}
      setCardImages={setCardImages}
      onLevelChange={onLevelChange}
      /> 

      <Timer seconds={7}/>

      </div>

      <Board 
      cardImages={set} 
      gridSizeClass={level}
      />

      <Portal/>

    </div>
  )
}

export default Main