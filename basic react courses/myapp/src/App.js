import React, { Component } from 'react';
import Ninjas from './Ninja'
// import logo from './logo.svg';
//  import './App.css';
// import { render } from '@testing-library/react';
import AddNinja from './AddNinja';



class App extends Component{

  state = {
    ninjas: [
      { name: 'Sayan', age: 22, belt: 'black', id: 1 },
      { name: 'Manik', age: 20, belt: 'green', id: 2 },
      { name: 'Middle', age: 21, belt: 'pink', id: 3 }
    ]
  }

  addNinjas = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas,ninja]
    this.setState({
      ninjas: ninjas
    })
  }

  deleteNinjas = (id) =>{
    let ninjas = this.state.ninjas.filter(ninja =>{
      return ninja.id !== id
    });
    this.setState({
      ninjas : ninjas
    })
  }

  componentDidMount(){
    console.log('component mounted')
  }

  componentDidUpdate(prevProps, prevState){
    console.log('component updated')
    console.log(prevProps, prevState)
  }

  render(){
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <p>Welcome :)</p>
        {/* <Ninjas name="Sayan" age="22" belt="black"/>
        <Ninjas name="Manik" age="20" belt="green"/> */}
        <Ninjas deleteNinjas={this.deleteNinjas} ninjas={this.state.ninjas}/>
        <AddNinja addNinjas={this.addNinjas}/>
      
      </div>
    );
  }
}

export default App;