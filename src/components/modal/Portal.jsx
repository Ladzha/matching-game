import { useState } from 'react'
import Modal from './Modal'
import './Modal.css'
import ConfettiExplosion from 'react-confetti-explosion';
 

const Portal = () => {

  const [isModalOpen, setIsModalOpen]=useState(false)
  const [gameResult, setGameResult] = useState(false)

  const handleModalOpen =()=>{
    setIsModalOpen(true)
  }
  
  const handleModalClose =()=>{
    setIsModalOpen(false)
  }

  return (
    <div className='portal'>
      
      <button className='button' onClick={handleModalOpen}>Click to open Modal</button>
      {Boolean(isModalOpen) && <ConfettiExplosion />} 
      {isModalOpen && 
        <Modal 
        open={isModalOpen} 
        title={gameResult ? 'You Win!' : 'Game Over!'} 
        onCLose={handleModalClose}>

        {gameResult ? <div>
          <p className='win-info'><span className='bold'>Level:</span> {'level'}.</p> 
          <p className='win-info'><span className='bold'> Moves:</span> {'turns'}.</p>
          <p className='win-info'><span className='bold'> Time:</span> {'time'}.</p></div> 
          :
          <p>Good luck next time!</p>      
        }

        </Modal>     
      }

    </div>
  )
}

export default Portal