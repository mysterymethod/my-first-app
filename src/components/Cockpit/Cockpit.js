import React from 'react';

const cockpit = (props) => {
    return (
        <div>
            <h1>Hey I am an React App.</h1>
            <button onClick={props.clicked} >Click Me</button>
        </div>
    );
}

export default cockpit;