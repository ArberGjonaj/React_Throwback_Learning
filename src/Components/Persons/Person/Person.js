import React from 'react'
import Aux from "../../../hoc/Auxilliary"
import classes from "./Person.module.css"; 
import withClass from '../../../hoc/withClass';

const person = (props) => {
  

  return (
    <React.Fragment>
      <p onClick={props.withClick}>
        I'm a {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </React.Fragment>
  );
  
};

export default withClass(person,classes.Person);
