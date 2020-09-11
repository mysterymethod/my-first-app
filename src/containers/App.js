import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import { logDOM } from '@testing-library/react';
import Cockpit from '../components/Cockpit/Cockpit';

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


  if(this.state.showPerons) {
    persons = (
        <Persons 
          persons = {this.state.persons}
          clicked = {this.deletePerson}
          changed = {this.nameChangeHandler}
        />
    );
  }

    return (
      <div className={classes.App}>
        
        <Cockpit 
          showPerons = {this.state.showPerons}
          persons = {this.state.persons}
          clicked = {this.onClickHandler}
        />
        
        {persons}

      </div>
    )
  }
}
    
export default App;


