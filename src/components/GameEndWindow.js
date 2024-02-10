import React, { useState } from 'react'
import WinWindow from './WinWindow'
import LostWindow from './LostWindow'

const GameEndWindow = ({gameWin, gameLost}) => {

  //Game status windows: win, lost
  const [winWindow, setWinWindow] = useState(false);
  const [lostWindow, setLostWindow] = useState(false);

  const window = null;

console.log('GameEndWindow');


  // if(gameLost){
  //   // setLostWindow(true)
  //   console.log("Lost Window");
  //   return <LostWindow
  //   lostWindow={lostWindow} 
  //   setLostWindow={setLostWindow}
  //   // shuffleCard={shuffleCard}
  //   />

  // }

  return (
    <div className='test'>
      <h1>GAME OVER</h1>
      {gameWin && <WinWindow 
    // turns={turns} 
    // level ={level} 
    // time={time}
    winWindow={winWindow}
    setWinWindow={setWinWindow}
    // shuffleCard={shuffleCard} 
    />}
      {/* {window} */}
    </div>
  )
}

export default GameEndWindow