import React from 'react'
import ConfettiExplosion from 'react-confetti-explosion';


const WinWindow = ({turns, level, time, winWindow, setWinWindow, 
  // shuffleCard
}) => {

  const handleClose = ()=>{
    setWinWindow(false)
    // shuffleCard()
  }

  //ispolzovat portal

  console.log('Win Window', winWindow);
  
  return (
    <div className={winWindow ? 'win-window active' : 'win-window' } onClick={handleClose}>
      <div className= {winWindow ? 'win-container active' : 'win-container' }>
      {Boolean(winWindow) && <ConfettiExplosion />}
      <h3 className='bold'>You Win!</h3> 
        {/* <p><span className='bold'>Level:</span> {level}.</p> 
        <p><span className='bold'> Moves:</span> {turns}.</p>
        <p><span className='bold'> Time:</span> {time}.</p> */}
        <button className='button' onClick={handleClose}>Close</button>
      </div>
      <h1>I WIIIIIIIIN</h1>
    </div>
  )
}

export default WinWindow