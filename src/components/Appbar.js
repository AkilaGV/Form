import React, { Fragment, useState } from 'react'
import Modal from '../Modal'

const Appbar = () => {
  const [open,setOpen]=useState(false)
  const menubutton= ()=>{
    console.log("menubutton")
    setOpen(!open)
  }
const [inputname,setinputnamevalue]=useState("")
const [inputlastname,setinputlastnamevalue]=useState("")
const [inputphonenumber,setinputphonenumbervalue]=useState("")
const [inputemail,setinputemailvalue]=useState("")
const [inputpassword,setpasswordvalue]=useState("")
const [inputconfrimpassword,setconfrimpasswordvalue]=useState("")



function inputnamevalue(event){
    console.log(event.target.value)
    setinputnamevalue(event.target.value)

}
function inputlastnamevalue(event){
    console.log(event.target.value)
    setinputlastnamevalue(event.target.value)

}
function inputphonenumbervalue(event){
    console.log(event.target.value)
    setinputphonenumbervalue(event.target.value)

}
function inputemailvalue(event){
    console.log(event.target.value)
    setinputemailvalue(event.target.value)

}
function inputpasswordvalue(event){
    console.log(event.target.value)
    setpasswordvalue(event.target.value)

}
function inputconfrimpasswordvalue(event){
    console.log(event.target.value)
    setconfrimpasswordvalue(event.target.value)

}

  const [showModal,setshowModal]=useState(false)
  return (
    <Fragment>

    <nav className='pt-2 '>
    
    
    <div  className="md:flex justify-between  w-5/6 md:max-w-7xl mx-auto ">
        <div className="flex justify-between">
        <div className="mt-2 text-md">
        <img src='./image/logo.jpg'/>

       
        </div>
        <div className="md:hidden mt-2 ">
            <button onClick={menubutton}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>


            </button>
        </div>
        </div>
       
        <div className={`flex md:block justify-end ${open ? "block" : "hidden"}`} >
        <ul className="md:flex md:space-x-8 space-y-8 md:space-y-0 text-md ">
            <li className="text-black-300 text-md hover:bg-blue-500 px-4 py-2 hover:rounded-full hover:text-white transform ease-in-out duration-200 border-b-4 border-blue-500">
                <a href='#' className='font-body'>Home</a>
            </li>
            <li  className="text-black-300 text-md hover:bg-blue-500 px-4 py-2 rounded-full hover:text-white transform ease-in-out duration-200">
                <a href='#' className='font-body' >About Us</a>
            </li>
            <li  className="text-black-300 text-md hover:bg-blue-500 px-4 py-2 rounded-full hover:text-white transform ease-in-out duration-200">
                <a href='#' className='font-body'>Contact Us</a>
            </li>
            <li className="px-4 py-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-500">
           <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
           </svg>

            </li>
        </ul>
        </div>
    </div>
    

   <div className="flex mx-2 ">
    <div className="w-1/2 font-body mt-12 ">
       <h1 className="px-2 py-2 text-lg">Create your account</h1>
       <div className='grid  md:grid-cols-2 px-2 py-2  text-sm'> 
       
        <div >
        <p>First name</p>
        <input type="text" onChange={inputnamevalue} className=" border-grey-300 border-2 px-2 py-2 rounded-lg shadow-sm focus:outline-none focus:border-r-cyan-600 focus:ring-1 focus:ring-cyan-500 " ></input>
        </div>
        
        <div className='md:mx-5'>
        <p>Last name</p>
        <input type="text" onChange={inputlastnamevalue} className= "border-grey-300 border-2 px-2 py-2 rounded-lg shadow-sm focus:outline-none focus:border-r-cyan-600 focus:ring-1 focus:ring-cyan-500 "></input>
        </div>
       
        
      </div>
      <div className='grid  md:grid-cols-2 px-2 py-2 text-sm'>
       <div>
        <p>Phone number</p>
        <input type="text" onChange={inputphonenumbervalue} className="border-grey-300 border-2 px-2 py-2 rounded-lg shadow-sm focus:outline-none focus:border-r-cyan-600 focus:ring-1 focus:ring-cyan-500 "></input>
       </div>
        
       <div className='md:mx-5'>
        <p>Email address</p>
        <input type="text"  onChange={inputemailvalue} className="border-grey-300 border-2 px-2 py-2 rounded-lg shadow-sm focus:outline-none focus:border-r-cyan-600 focus:ring-1 focus:ring-cyan-500 "></input>
        </div>
        
      </div>
      <div className='grid  md:grid-cols-2 px-2 py-2 text-sm'>
        <div>
        <p>Password</p>
        <input type="password" onChange={inputpasswordvalue} className="border-grey-300 border-2 px-2 py-2 rounded-lg shadow-sm focus:outline-none focus:border-r-cyan-600 focus:ring-1 focus:ring-cyan-500 "></input></div>
        <div className='md:mx-5'>
        <p>Confrim password</p>
        <input type="password" onChange={inputconfrimpasswordvalue} className="border-grey-300 border-2 px-2 py-2 rounded-lg shadow-sm focus:outline-none focus:border-r-cyan-600 focus:ring-1 focus:ring-cyan-500 "></input>
        </div>
       
       
        
       
    
    </div>
    <button className='bg-blue-500  text-white font-body  rounded-full mt-2  md:px-12  px-5 py-2 ml-1 ' onClick={()=> setshowModal(true)} >Create account</button>
        <div className='text-sm px-2 py-2 flex'>
           
            <p className="">Already a member?</p>
            <p className='px-2 text-blue-500'>Login in</p>

        </div>
    
    </div>
    <div className="w-1/2 ">
       <img src="./image/img2.jpg "/>
    </div>
   
   </div>
  
   </nav>
  <Modal isvisible={showModal} onClose={()=> setshowModal(false)}/> 
</Fragment>
    
  
  )
}

export default Appbar