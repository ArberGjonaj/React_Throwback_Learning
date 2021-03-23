import React from 'react';
import Person from './Person/Person';

class persons extends React.Component {
  shouldComponentUpdate(nextProps, nextState){
    console.log('[Persons.js] shouldComponentUpdate');
    if(nextProps.persons !== this.props.persons){
      return true;
    }else return false;
  }
  render(){
  return this.props.persons.map((person, index) =>{
    return (
      <Person
        name={person.name}
        key={person.id}
        age={person.age}
        withClick={this.props.clicked.bind(this, index)}
        changed={(event) => this.props.changed(event, person.id)}
      />
    );
  });
};
};
export default persons;
