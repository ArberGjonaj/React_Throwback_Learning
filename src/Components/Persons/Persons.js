import React from 'react';
import Person from './Person/Person';

const persons = (props) => {
  return props.persons.map((person, index) =>{
    return (
      <Person
        name={person.name}
        key={person.id}
        age={person.age}
        withClick={props.clicked.bind(this, index)}
        changed={(event) => props.changed(event, person.id)}
      />
    );
  });
};
export default persons;
