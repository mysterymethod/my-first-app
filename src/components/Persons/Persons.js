import React from 'react';
import Person from './Person/Person'

const persons = (props) => {
    console.log('[Persons.js] rendering...');
    return props.persons.map((item, index) => {
        return <Person 
            name = {item.name}
            age = {item.age}
            key = {item.id}
            click = {() => props.clicked(index)}
            change = {(event) => props.changed(event, item.id)}
        />
    });
};
export default persons;







