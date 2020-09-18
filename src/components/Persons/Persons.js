import React from 'react';

import Person from './Person/Person';

const persons = (props) => {
    return (
        props.persons.map((person,i) => {
            return (
                <Person
                    name={person.name}
                    clicked={() => props.clicked(i)}
                    key={person.id}
                    nameChange={(event) => props.nameChange(event, person.id)}
                />
            )
        })
    );
}

export default persons;
















