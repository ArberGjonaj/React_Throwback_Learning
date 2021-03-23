import Aux from "../../../hoc/Auxilliary"
import classes from "./Person.module.css"; 


const person = (props) => {
  

  return (
    <Aux>
    <div className={classes.Person}>
      <p onClick={props.withClick}>
        I'm a {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
  </Aux>
};

export default person;
