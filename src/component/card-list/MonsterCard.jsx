import React from 'react'
import './Search-box.css'

function MonsterCard({monster}) {

  const {id,name,email}=monster
  return (
    <div className='card-container' key={Math.random()} >
    <img 
    alt={`monster ${name}`} 
    src={`https://robohash.org/${id}?set=set2&size=180x180`}
    />
    <h1 >{name}</h1>
    <p>{email}</p>
    </div>
  )
}

export default MonsterCard
