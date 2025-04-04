import React from "react";
import PropTypes from "prop-types";
import Aux from "../../../hoc/Auxilliary";
import classes from "./Person.module.css";
import withClass from "../../../hoc/withClass";
import AuthContext from "../../../context/auth-context";
class Person extends React.Component{
  constructor(props){
    super(props);
    this.inputElementRef = React.createRef();
  }
  static contextType = AuthContext;
  componentDidMount(){
    
    this.inputElementRef.current.focus()
    console.log(this.context.authenticated)
  }
  render(){
    return (
      <Aux>
       
      { this.context.authenticated ? <p>Authenticated</p> :<p>Not Authenticated!</p>} 
        
        <p onClick={this.props.withClick}>
          I'm a {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input ref={ this.inputElementRef} type="text" onChange={this.props.changed} value={this.props.name} />
   
      </Aux>
    );
  }

}

Person.propTypes = {
  withClick: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
}

export default withClass(Person, classes.Person);
