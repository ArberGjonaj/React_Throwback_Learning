import React from "react";
import classes from "./App.module.css";
import Persons from "../Components/Persons/Persons";
import Cockpit from "../Components/Cockpit/Cockpit";

class App extends React.Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor')
  }
  state = {
    person: [
      { id: "asfgvav", name: "Arber", age: 21 },
      { id: "vasdg", name: "Ulger", age: 21 },
      { id: "xcgasdga", name: "Elidor", age: 21 },
    ],
    otherState:"some other value",
    showPerson: false,
  };

  static getDerivedStateFromProps(props,state){
    console.log('[App.js] getDerivedStateFromProps',props)
    return state
  }
  componentDidMount() {
    console.log('[App.js] ComponentDidMount')
  }
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
    console.log('[App.js] render')
    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <Persons
          persons={this.state.person}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }
    return (
      <div className={classes.App}>
        <Cockpit
          title={this.props.appTitle}
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
