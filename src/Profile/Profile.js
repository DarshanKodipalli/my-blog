import React from 'react';
import "./Profile.css"
const person = (props) => {
return (
        <div className="Profile">
<p onClick={props.click}>Name: {props.name}, Age: {props.age}</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.nameChange}/>
        </div>
        )
};

export default person;