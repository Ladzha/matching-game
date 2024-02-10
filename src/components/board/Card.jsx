function Card({card, flipped, disabled, onChoice}) {

const handleClick = () => {
  if(!disabled){
    onChoice(card)
  }
}

  return (
    <div className='card'>
    <div className={flipped ? 'flipped' : ''}>

      <img className='front' src={card.src} 
      alt="card's front" title="card's front"/>   

      <img className='back' src="./img/cover_1.svg" 
      alt="card's back" title="card's back" 
      onClick={handleClick}/>

    </div>
  </div>
  )
}

export default Card