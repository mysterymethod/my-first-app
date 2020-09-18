import React, { Component } from 'react'; 

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {

    state = {
        persons: [
            {id: 1, name: 'Pranoy', age: 20},
            {id: 2, name: 'David', age: 99},
            {id: 3, name: 'Raquel', age: 0}
        ],
        showPersons: false
    };

    clickHandler = () => {
        const showPerson = this.state.showPersons;
        this.setState({showPersons: !showPerson});
    }

    deletePerson = (index) => {
        let persons = [...this.state.persons];
        persons.splice(index,1);
        this.setState({persons: persons});
    }

    nameChangeHandler = (event, id) => {
        const index = this.state.persons.findIndex(item => {
            return item.id == id;
        });

        let newName = event.target.value;

        let persons = [...this.state.persons];
        persons[index].name = newName;
        
        this.setState({persons: persons})

    }

    render() {

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    <Persons 
                        persons={this.state.persons}
                        clicked={this.deletePerson}
                        nameChange={this.nameChangeHandler}
                    />
                </div>
            )
        }

        return (
            <div>
                <Cockpit 
                    clicked={this.clickHandler}
                />

                {persons}
            </div>
            
        );
    }
}

export default App;