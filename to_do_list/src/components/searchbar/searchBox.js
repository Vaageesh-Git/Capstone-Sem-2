import React from 'react'
import "./searchBox.css"
export default function SearchBox() {
  return (
    <div className="searchbar">
        <input placeholder='Add New Task....' required/>
        <button>Add</button>
    </div>
  )
}
