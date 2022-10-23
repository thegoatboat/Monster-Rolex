import React from 'react'
import './Search-box.css'

function SearchMonster({changeFunc}) {
  return (
    <div>
    <input className='input-search'  type='search' placeholder='search by name'
    onChange={(e)=>changeFunc(e)}/>
    </div>
  )
  }
export default SearchMonster
