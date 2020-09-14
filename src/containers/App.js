import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import { logDOM } from '@testing-library/react';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';
import AuthContext from '../context/auth-context';
   
class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: 1, name: "Max", age: 30 },
      { id: 2, name: "Manu", age: 40 },
      { id: 3, name: "Seema", age: 18 }
    ],
    showPerons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    //Return Updated State
    return state;
  }
      
  componentDidMount() {
    console.log('[App.js] componentDidMount');
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

    this.setState((prevState, props) => {
      return {
        persons: persons, 
        changeCounter: prevState.changeCounter + 1
      };
    });
  };

  deletePerson = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index,1);
    this.setState({persons: persons});
  }



  loginHandler = () => {
    this.setState({authenticated: true});
  };
   
  render() {

  console.log('[App.js] render');

  let persons = null;

  if(this.state.showPerons) {
    persons = (
        <Persons 
          persons = {this.state.persons}
          clicked = {this.deletePerson}
          changed = {this.nameChangeHandler}
          isAuthenticated = {this.state.authenticated}
        />
    );
  }

    return ( 
      <WithClass classes={classes.App}>
        
        <button onClick = {() => { this.setState({ showCockpit: false })}}> Remove Cockpit </button>

        <AuthContext.Provider 
          value = {{
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }} 
        >
        
        { this.state.showCockpit && <Cockpit 
          title = {this.props.appTitle}
          showPerons = {this.state.showPerons}
          persons = {this.state.persons}
          clicked = {this.onClickHandler}
          

        /> }
            
        {persons}
       </AuthContext.Provider>
      </WithClass>
    )
  }
}
    
export default App;
 
 
