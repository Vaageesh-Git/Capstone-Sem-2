import React from 'react'
import "./login.css"
const Login = () => {
  return (
    <div className='login-main'>
        <h1 style={{color:'white', display:'flex', flexDirection:'column', justifyContent:'center', alignContent:'center', marginBottom: "9px"}}>Login..</h1>
        <div className='input-fields'>
          <input type='text' placeholder='Enter Username'/>
          <input type='text' placeholder='Enter Password'/>
          <button>Submit</button>
        </div>
    </div>
  )
}

export default Login