import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}
    ]
  }

  switchNameHandler = (newName) => {
    // console.log("Was clicked!");
    // dont do this this.state.persons[0].name = "Gerald";
    this.setState({
      persons: [
        {name: newName, age: 28},
        {name: 'Manu', age: 29},
        {name: 'Stephanie', age: 30}
      ]
    })
  }

  nameChangedHandler = (event) => {
    // console.log("Was clicked!");
    // dont do this this.state.persons[0].name = "Gerald";
    this.setState({
      persons: [
        {name: 'Max', age: 28},
        {name: event.target.value, age: 29},
        {name: 'Stephanie', age: 26}
      ]
    })
  }


  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue', 
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App"> 
        <h1>Hello, World</h1>
        <button 
          style={style}
          onClick={this.switchNameHandler.bind(this, 'Gerald!')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          click={this.switchNameHandler.bind(this, 'G!')}
          changed = {this.nameChangedHandler}
          >Mr Hobbies: Racing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
