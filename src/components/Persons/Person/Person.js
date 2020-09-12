import React, { Fragment } from 'react';
import styled from 'styled-components'
// import './Person.css';
import Aux from '../../../hoc/Auxiliary';


const StyledDiv = styled.div `
    width: 60%;
    margin: 16px auto; 
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    '@media (min-width: 500px)' {
        width: '450px'
    }
`; 


const person = (props) => {
    console.log('[Person.js] rendering...');
    let assignedClasses = [];
    return (
        <Fragment>
            <p key = 'i1' onClick = {props.click} > I am {props.name} and I am {props.age} years old. </p>
            <p key = 'i2'> {props.children} </p>
            <input 
                key = 'i3'
                type = "text" 
                onChange = {props.change}
                value = {props.name}
            /> 
        </Fragment>
    )
}

export default person;