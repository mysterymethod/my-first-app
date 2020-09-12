import React, { useEffect } from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        setTimeout(() => {
            alert('Saved data to Cloud')
        },1000);

        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        }


    }, [props.persons]); //[props.persons] because of this it will only execute when persons get altered.
                         // [] only execute for the first time.
 

    useEffect( () => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        };
    });             

   

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
            <h1> {props.title} </h1>
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