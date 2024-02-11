import { useState, useEffect } from 'react'
import Modal from './Modal'
import './Modal.css'
import ConfettiExplosion from 'react-confetti-explosion';


const Portal = ({gameOn, gameResult, level, moves, onLevelChange}) => {

  const [isModalOpen, setIsModalOpen]=useState(false)

  const handleModalClose =()=>{
    setIsModalOpen(false)
    // onLevelChange(level)
  }

  useEffect(()=>{
    if(!gameOn && gameResult !==''){
      setIsModalOpen(true)
    }
  }, [gameResult])

  return (
    <div className='portal'>
      {isModalOpen && 
        <Modal 
        open={isModalOpen} 
        title={gameResult==='win' ? 'You Win!' : 'Game Over!'} 
        onCLose={handleModalClose}>

        {gameResult === 'win' ? 
        <>
          <p className='modal-text'><span className='bold'>Level:</span> {level}.</p> 
          <p className='modal-text'><span className='bold'> Moves:</span> {moves}.</p>
          <p className='modal-text'><span className='bold'> Time:</span> {'time'}.</p>
        </> 
          :
          <p className='modal-text'>Good luck next time!</p>      
        }
        </Modal> }
      {gameResult==='win' && <ConfettiExplosion />} 
    </div>
  )
}

export default Portal