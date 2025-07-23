import React from 'react'
import "./register.css"
const Register = () => {
  return (
    <div className='register-main'>
        <h1 style={{color:'white', display:'flex', flexDirection:'column', justifyContent:'center', alignContent:'center', marginBottom: "9px"}}>Sign Up..</h1>
        <div className='input-fields'>
          <input type='text' placeholder='Enter Username'/>
          <input type='text' placeholder='Enter Password'/>
          <button>Submit</button>

        </div>
    </div>
  )
}

export default Register