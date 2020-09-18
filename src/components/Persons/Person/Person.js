import React from 'react';

import classes from './Person.module.css';

const persons = (props) => {
    return (
        <div className={classes.Person}>
            <p onClick={props.clicked}>I am {props.name}.</p>
            <input type="text" onChange={props.nameChange}/>
        </div>
        
    );
}

export default persons;