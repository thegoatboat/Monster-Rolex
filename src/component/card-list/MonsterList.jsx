import React from 'react'
import MonsterCard from './MonsterCard';
import './Search-box.css'

function MonsterList({monstres}) {
  console.log(monstres)
  return (
    <div className='card-list'>
    {
      monstres.map((monster)=>{
        
        return (
          <MonsterCard monster={monster} />
      )})
    }
    </div>
  )
}

export default MonsterList
