import React, { Component } from 'react'
import './App.css'
import MonsterList from './component/card-list/MonsterList';
import SearchMonster from './component/search-box/SearchMonster';


class App extends Component {
  constructor(){
    super()

    this.state={
      monstres:[],
      searchField:'',
  };
}

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) =>response.json())
    .then((users)=>
    this.setState(
      () => {
      return { monstres:users }  }))
  }

  changeFunc=(e)=>{
    const searchField=e.target.value.toLowerCase();
    
    this.setState(()=>{
      return {searchField};
    })
  }


  render() {
    
    const {monstres,searchField} =this.state;
    const {changeFunc}=this;

    const filtredMonsters = monstres.filter((monster)=>{
      return monster.name.toLowerCase().includes(searchField);})
    return (
      
      <div className='App'>
      <h1 className='home-titel'>Monsters Rolodex</h1>
     

      
      <SearchMonster changeFunc={changeFunc}/>
     <MonsterList monstres={filtredMonsters}/>
      </div>
    )
  }
}

export default App
