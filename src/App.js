import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id: 1, name: "Max", age: 30 },
      { id: 2, name: "Manu", age: 40 },
      { id: 3, name: "Seema", age: 18 }
    ],
    showPerons: false
  }

  onClickHandler = () => {
    const doesShow = this.state.showPerons;
    this.setState({showPerons: !doesShow})
  }

  
  nameChangeHandler = ( event, id ) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }

  deletePerson = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index,1);
    this.setState({persons: persons});
  }

  render() {

  let persons = null;

  let assignedClasses = []

  if (this.state.persons.length <= 2) {
    assignedClasses.push(classes.red)
  }

  if (this.state.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  if(this.state.showPerons) {
    persons = (
      <div>
        {this.state.persons.map((item,i) => {
          return (
            <Person 
              name = {item.name}
              age = {item.age}
              key = {item.id}
              click = {this.deletePerson.bind(this,i)}
              change = {(event) => this.nameChangeHandler(event, item.id)}
            />
          )
        })} 
      </div>
    );
  }

    return (
      <div className={classes.App}>
        <h1> Hi I am React App </h1>
        <p className = {assignedClasses.join(' ')}> This App is really working. </p>

        <button
            className = {classes.Button}
            onClick = {this.onClickHandler}
            alt = {this.state.showPerons}
          > Toggle Persons
        </button>
        

        {persons}
        
      </div>
    )
  }
}
    
export default App;


