import {useState, useEffect} from 'react';
import CardsList from './CardsList.jsx';
import imgSet from '../imgSet.js'

const Board = ({
  cardImages, 
  gridSizeClass, 
  // setGameStart,
  // setGameEnd,
  // setGameWin,
  // showGameEndWindow
 }) => {

  console.log('CARDS LIST', cardImages);

  //Card parameters
  const [cards, setCards] = useState([]); //set of cards 
  const [turns, setTurns] = useState(0); //how many turns user does
  const [flippedOne, setFlippedOne] = useState(null);
  const [flippedTwo, setFlippedTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);


//shuffle cards 
const shuffleCard = () => {
  const shuffleCards = [...cardImages, ...cardImages]
  .sort(() => Math.random() - 0.5)
  .map((card, index) => {
    return{...card, id: index};
  });

  setFlippedOne(null)
  setFlippedTwo(null)
  setCards(shuffleCards)
  setTurns(0) //reset number of turns

  // console.log('shuffleCards ', shuffleCards, 'cards ', cards, 'cardImages ', cardImages);

}

//handle choice of cards 
// const handleChoice=(card)=>{
//   flippedOne ? setFlippedTwo(card) : setFlippedOne(card)
// }

useEffect(()=>{
  console.log('useEffect depend of gridSizeClass');

  shuffleCard()
}, [gridSizeClass]) //dubliruet render

//compare two selected cards
useEffect(() => {
  if(flippedOne && flippedTwo){
    setDisabled(true)
    if(flippedOne.src === flippedTwo.src){
      setCards(prevCards=>{
        return prevCards.map(card=>{
          if(card.src === flippedOne.src){
            return {...card, matched: true}
          }else{
            return card
          }
        })
      })
      resetTurn()
    }
    else {
      setTimeout(()=>resetTurn(), 1000)
    } 
  }

  // checkWin(cards)
  console.log('useEffect flipped');

}, [flippedOne, flippedTwo])


//reset choices and increase turn 
const resetTurn =()=>{
  setFlippedOne(null)
  setFlippedTwo(null)
  setTurns(prevTurns => prevTurns +1)
  setDisabled(false)
}


//CHECK WIN - checking if all cards matched
const checkWin =(cardArray)=>{
  const allMatched =cardArray.every(card => card.matched)
  if(cards.length > 0 && allMatched){
    // showGameEndWindow(setGameWin)
    // setGameEnd(true)
    // setGameWin(true)
    console.log('ALL MATCH SO I WIN');
  }
}

  return (
    <div className="container">
      <div className={`card-grid card-grid-${gridSizeClass}`}>

          <CardsList
          cards={cards} 
          disabled={disabled}
          flippedOne={flippedOne}
          flippedTwo={flippedTwo}
          setFlippedTwo={setFlippedTwo}
          setFlippedOne={setFlippedOne}
          />

      </div>
    </div>
  );
}


export default Board