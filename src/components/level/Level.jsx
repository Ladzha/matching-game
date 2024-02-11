const Level = ({level, setLevel, onLevelChange }) => {

  const handleSuperEasy =()=>{
    setLevel('super-easy') //set level 
    onLevelChange(4)
    console.log('super-easy');
  }

  const handleEasy =()=>{
    setLevel('easy')
    onLevelChange(6)
  }

  const handleMedium =()=>{
    setLevel('medium')
    onLevelChange(8)
  }

  const handleHard =()=>{
    setLevel('hard')
    onLevelChange(10)
  }

  return (
    <div className='level-button-container'>
      <button 
      className={level === 'super-easy' ? 'level-button button selected' : 'level-button button'} 
      onClick={handleSuperEasy}>Super Easy</button>
      <button 
      className={level === 'easy' ? 'level-button button selected' : 'level-button button'} 
      onClick={handleEasy}>Easy</button>
      <button 
      className={level === 'medium' ? 'level-button button selected' : 'level-button button'} 
      onClick={handleMedium}>Medium</button>
      <button 
      className={level === 'hard' ? 'level-button button selected' : 'level-button button'} 
      onClick={handleHard}>Hard</button>
    </div>
  )
}

export default Level