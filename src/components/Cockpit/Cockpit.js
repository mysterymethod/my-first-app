import React from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {

    const assignedClasses = [];
    let btnClass = '';

    if(props.showPerons) {
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }


    return (
        <div className = {classes.Cockpit}> 
            <h1> Hi I am React App </h1>
            <p className = {assignedClasses.join(' ')}> This App is really working. </p>
            <button
                className = {classes.Button}
                onClick = {props.clicked}
                alt = {props.showPerons}
            > Toggle Persons
            </button>
        </div>
    );
}

export default cockpit;