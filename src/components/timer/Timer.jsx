import { useCountdownTimer } from '../../hooks/useCountdownTimer';
import './Timer.css';

const Timer = ({seconds, gameOn, setGameOn}) => {

  let {secondsLeft, start, pause, reset } = useCountdownTimer(seconds)

  if(gameOn){
    // start()
  }
  if(secondsLeft===0){
    setGameOn(false)
  }

  return (
    <div className='timer-container'>

    <h1>Timer: {secondsLeft} </h1>
      <input type ='range' max={seconds} min='0' value={secondsLeft} onChange={start}/>
   
    <div className='timer-container'>  

      <button className='button' onClick={start}>Start timer</button>
      <button className='button' onClick={pause}>Pause timer</button>
      <button className='button' onClick={reset}>Reset timer</button>
      
    </div>

    </div>
  )
}

export default Timer