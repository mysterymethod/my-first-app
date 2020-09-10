import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: "Max", age: 30 },
      { name: "Manu", age: 40 },
      { name: "Seema", age: 18 }
    ]
  }

  onClickHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 30 },
        { name: "Manu", age: 40 },
        { name: "Seema", age: 18 }
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "Max", age: 30 },
        { name: event.target.value, age: 40 },
        { name: "Seema", age: 18 }
      ]
    })
  }


  render() {
    return (
      <div className="App">
        <h1> Hi I am React App </h1>
        <button
          onClick = {this.onClickHandler.bind(this, "Max-Bhai")}
        > Switch Name </button>

        <Person 
          name = {this.state.persons[0].name} 
          age = {this.state.persons[0].age}
        />

        <Person 
          name = {this.state.persons[1].name} 
          age = {this.state.persons[1].age}
          change = {this.nameChangeHandler}
        />




        {/* {this.state.person.forEach((item, i)) => {
          <Person 
            name = item.name 
            age = item.age
          />
        }} */}



        {/* <Person name="Max" age="30"/>
        <Person name="Manu" age="40"> My hobbies: Racing and Gaming. </Person>
        <Person name="Sima" age="18"/> */}
      </div>
    )
  }
}

export default App;
