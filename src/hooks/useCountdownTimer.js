import { useState, useEffect, useRef } from 'react'

export function useCountdownTimer(seconds) {

  const [secondsLeft, setSecondLeft]=useState(seconds)

  let timerRef = useRef()

  function start(){
    timerRef.current = setInterval(()=>{
      setSecondLeft((currentSecond) => {
        if (currentSecond <= 0) {
          clearInterval(timerRef.current);
          return 0;
        }
        return currentSecond - 1;      
      })
    }, 1000)
  }

  function pause(){
    clearInterval(timerRef.current)
  }

  function reset(){
    clearInterval(timerRef.current)
    setSecondLeft(seconds)
  }

  useEffect(()=>{
    return ()=>{
      clearInterval(timerRef.current)
    }
  }, [])

  return { secondsLeft, start, pause, reset }
}