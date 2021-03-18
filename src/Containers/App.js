import React from "react";
import Person from "../Components/Persons/Person/Person";
import classes from "./App.module.css";
import Persons from "../Components/Persons/Persons"
import Cockpit from "../Components/Cockpit/Cockpit"

class App extends React.Component {
  state = {
    person: [
      { id: "asfgvav", name: "Arber", age: 21 },
      { id: "vasdg", name: "Ulger", age: 21 },
      { id: "xcgasdga", name: "Elidor", age: 21 },
    ],
    showPerson: false,
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.person.findIndex((p) => {
      return p.id === id;
    });
    const person = {
      ...this.state.person[personIndex],
    };

    person.name = event.target.value;

    const persons = [...this.state.person];

    persons[personIndex] = person;
    this.setState({ person: persons });
  };

  deletePersonHandler = (personIndex) => {
    const person = [...this.state.person];
    person.splice(personIndex, 1);
    this.setState({ person: person });
  };
 
  togglePersonHandler = () => {
    let doesShow = this.state.showPerson;
    this.setState({
      showPerson: !doesShow,
    });

  };
  render() {

  
    let persons = null;
   
    if (this.state.showPerson) {
      persons = 
          <Persons persons={this.state.person} clicked={this.deletePersonHandler} changed={this.nameChangedHandler} />

    }

    
    
    return (
      <div className={classes.App}>

        <Cockpit
         showPerson={this.state.showPerson}
         person={this.state.person}
         clicked={this.togglePersonHandler}
        />
        {persons}
      </div>
    );
  }
}
export default App;
