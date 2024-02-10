import imgSet from '../imgSet'

const Level = ({level, setLevel, setCardImages, onLevelChange }) => {

  const handleSuperEasy =()=>{
    setLevel('super-easy'); //set level 
    setCardImages(4)
    onLevelChange(4)
  }

  const handleEasy =()=>{
    setLevel('easy');
    setCardImages(6)
    onLevelChange(6)
  }

  const handleMedium =()=>{
    setLevel('medium');
    setCardImages(8)
  }

  const handleHard =()=>{
    setLevel('hard');
    setCardImages(10)
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