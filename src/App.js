import React from "react";
import Person from "./Person/Person";
import styled from "styled-components";
import "./App.css";

const StyledButton=styled.button`

  background-color: ${props=>props.alt? 'red':'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color:${props=>props.alt? 'salmon':'lightgreen'};
    color: black;
`

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
      persons = (
        <div>
          {this.state.person.map((person, index) => {
            return (
              <Person
                name={person.name}
                key={person.id}
                age={person.age}
                withClick={this.deletePersonHandler.bind(this, index)}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );

    }
    let classes = [];
    if(this.state.person.length<=2){
      classes.push('red');//classes = ['red'];
    }
    if(this.state.person.length<=1){
      classes.push('bold');//classes = ['red'], ['bold'];
    }

    return (
      <div className="App">
        <h1>I am a React App!</h1>
        <p className={classes.join(' ')}>This is Really Working!</p>
        <StyledButton alt={this.state.showPerson} onClick={this.togglePersonHandler}>
          Toggle Person!
        </StyledButton>

        {persons}
      </div>
    );
  }
}
export default App;
