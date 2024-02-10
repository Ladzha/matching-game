import React, { useState } from 'react'
import { createPortal } from 'react-dom'

const Modal = () => {
  const [isModal, setIsModal] = useState(true)
  return (
    <div>
      {isModal && createPortal(<div>TEST MODAL</div>, document.body)}
    </div>
  )
}

export default Modal