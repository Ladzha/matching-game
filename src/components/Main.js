import React, {useState, useEffect, useCallback} from 'react';
import CardsList from './board/CardsList'
import Level from './level/Level';
import Timer from './timer/Timer';

import ImgSet from './imgSet';
import GameEndWindow from './GameEndWindow';
import Modal from './Modal';
import { createPortal } from 'react-dom';


const mountElement2 = document.getElementById("modal")
const mountElement = document.body



const Main = () => {

  const randomImgArr = ImgSet()

  console.log('MAIN');

  const [cardImages, setCardImages] =useState(()=>randomImgArr(4)) //set of imgs

  //Grid view depends of game level
  const [gridSizeClass, setGridSizeClass ] =useState('card-grid-super-easy')


  //Game status
  const [gameStart, setGameStart]=useState(false); //check if game started 
  const [gameEnd, setGameEnd] = useState(false);//check if game ended


  const [gameWin, setGameWin] = useState(false);
  const [gameLost, setGameLost] = useState(false);


  //Timer
  const [maxTime, setMaxTime]=useState(100);
  // const [timeLeft, setTimeLeft]=useState(maxTime);


  function ChooseLevel(level){
    setCardImages(randomImgArr(level))
  }

// function StartTimer(seconds){
//   setMaxTime(seconds)
//   console.log('setMaxTime', maxTime);
// }

//checking if game start
// const checkGameStart=(cardArray)=>{

//   if(cardArray){
//     setGameStart(true)
//   }
//   console.log(gameStart)
// }

//CHECK LOST - checking if game time out
// const checkLost =(time)=>{
//   if(time===0){
//     setGameLost(true)
//     setGameEnd(true)
//     if(gameLost){
//       showLostWindow()
//     }  
//   }
// }

//show win and game over windows
// function showWinWindow(){
  // setTimeout(() => {
  //   setWinWindow(true);
  // }, 900);
// };

// function showLostWindow(){
  // setTimeout(() => {
  //   setLostWindow(true);
  // }, 500);
// };

// function showGameEndWindow(setWindowType){
//   setGameEnd(true)
//   setTimeout(() => {
//     setWindowType(true);
//   }, 2500);
// };


  return (
    <div className='main'>
      <p className='main-title'>MEMORY GAME</p>
      <div className='button-container'>
      <Level 
      setGridSizeClass={setGridSizeClass}
      onChooseLevel={ChooseLevel}/> 
      </div>

      <CardsList 
      cardImages={cardImages} 
      gridSizeClass={gridSizeClass}
      />
    </div>
  );
}


export default Main