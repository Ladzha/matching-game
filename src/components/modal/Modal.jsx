import { useMemo, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

const Modal = ({children, title, onCLose, open}) => {

  const containerElement = useMemo(
    ()=> document.getElementById('modal'),
    []
  );

  const dialog = useRef()

  useEffect(()=>{
    if(open){
      dialog.current.showModal()
    }
    else{
      dialog.current.close()
    }
  }, [open])



  return  createPortal(     
    <dialog className='modal' ref={dialog} onClick={onCLose}>
      <h2 className='bold'>{title}</h2>
      <div>{children}</div>
      <button className='button' onClick={onCLose}>Close</button>
    </dialog>, containerElement)
}

export default Modal