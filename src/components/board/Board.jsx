import {useState, useEffect} from 'react';
import CardsList from './CardsList.jsx';

const Board = ({cardImages, gridSizeClass, moves, setMoves, setGameOn, setGameResult}) => {

  const [cards, setCards] = useState([]);
  const [flippedOne, setFlippedOne] = useState(null);
  const [flippedTwo, setFlippedTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);


  console.log('cardImages', cardImages)

  const shuffleCard = () => {
    const shuffleCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card, index) => {
      return{...card, id: index};
    });
    setFlippedOne(null)
    setFlippedTwo(null)
    setMoves(0)
    setGameOn(false)
    setGameResult('')
    setCards(shuffleCards) 
  }

  const compareCards=()=>{
    if(flippedOne && flippedTwo){
      setDisabled(true)
      if(flippedOne.src === flippedTwo.src){
        setCards(prevCards=>{
          return prevCards.map(card=>{
            if(card.src === flippedOne.src){
              return {...card, matched: true}
            }else{
              return card
            }})})
        resetMoves()
      }
      else {
        setTimeout(()=>resetMoves(), 1000)
      }
    }
  }

  const resetMoves =()=>{
    setFlippedOne(null)
    setFlippedTwo(null)
    setDisabled(false)
  }

  const checkWin =(cardArray)=>{
    const allMatched =cardArray.every(card => card.matched)
    if(cards.length > 0 && allMatched){
      setGameOn(false)
      setGameResult('win')
    }
  }

  useEffect(() => {
    compareCards()
    checkWin(cards)
  }, [flippedOne, flippedTwo])

  useEffect(()=>{
    resetMoves()
    if(moves>0) {
      setTimeout(()=>shuffleCard(), 1000)
      console.log('if shuffle')
    }else{
      console.log('else shuffle')
      shuffleCard()
    }
  }, [cardImages])

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
        setMoves={setMoves}
        setGameOn={setGameOn}
        />

      </div>
    </div>
  );
}


export default Board