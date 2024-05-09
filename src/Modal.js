import React from 'react'
 
const Modal = ({ isvisible ,onClose}) => {
  if ( !isvisible ) return null;
  
  return (
    <div className='fixed inset-0 bg-blue-500 bg-opacity-25 backdrop-blur-sm flex justify-center items-center '>
       <div className='w-[600px] flex flex-col justify-center'>
        <button className='text-black-500 text-xl place-self-end' onClick={()=> onClose()}>x</button>
         <div className='bg-blue-500 p-2 rounded-lg p-5 '>
              <h1 className='font-body text-white text-md'>Successfully Register</h1>
         </div>
       </div>
    </div>
 
 
  )
}

export default Modal