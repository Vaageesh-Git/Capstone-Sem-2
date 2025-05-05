import React from 'react'
import "./foot.css"
function Footer() {
  return (
    <div className='footer'>
        <button style={{color: "white"}}>Previous</button>
        <h3>Page Count</h3>
        <button style={{color: "white"}}>Next</button>
    </div>
  )
}

export default Footer