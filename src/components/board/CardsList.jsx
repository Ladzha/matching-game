import Card from './Card';

const CardsList = ({
  cards, 
  disabled, 
  flippedOne, flippedTwo, 
  setFlippedTwo, setFlippedOne }) => {

//handle choice of cards 
const handleChoice=(card)=>{
  flippedOne ? setFlippedTwo(card) : setFlippedOne(card)
}

  return (
    <>
        {cards.map((card) => (
          <Card 
          key={card.id} 
          card={card} 
          flipped = {card === flippedOne || card === flippedTwo || card.matched}
          disabled={disabled}
          onChoice={handleChoice}
          />
        ))}
    </>
  );
}


export default CardsList