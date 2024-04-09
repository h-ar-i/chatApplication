import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Join() {

  const navigate = useNavigate()
  const [userName,setUserName] = useState("")
  console.log(userName);


  const goToChat = () =>{
    if(userName){
      navigate('/chat',{state:userName})
    }
    else{
      toast.warning(" please Enter a vaild  Username")
    }
  }

  return (
    <>
        <div style={{backgroundColor:"black",height:"650px",width:"100%"}}>
        <div style={{width:"600px",height:'650px',backgroundColor:"black",marginLeft:"400px"}} className='d-flex mt-4 justify-content-center align-items-center border border-white border-1'>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <img style={{height:"400px"}} width={'500px'} className='img-fluid' src="https://www.creativefabrica.com/wp-content/uploads/2023/03/10/Letter-c-chat-icon-logo-design-Graphics-63830498-1.jpg" alt="" />
                <h1 className='hh1'>HIKE</h1>
                <div>
                    <input type="text" onChange={(e)=>setUserName(e.target.value)} className='form-control' placeholder='Enter Username'/>
                    <button onClick={goToChat} className="btn btn-success mt-2 w-100">Start Chat</button>
                </div>
            </div>
        </div>
        <ToastContainer position='top-center' theme='colored' autoClose={3000}/>
        </div>
    </>
  )
}

export default Join