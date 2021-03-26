import React from "react";
import classes from "./App.module.css";
import Persons from "../Components/Persons/Persons";
import Cockpit from "../Components/Cockpit/Cockpit";
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxilliary';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: [
        { id: "asfgvav", name: "Arber", age: 21 },
        { id: "vasdg", name: "Ulger", age: 21 },
        { id: "xcgasdga", name: "Elidor", age: 21 },
      ],
      otherState: "some other value",
      showPerson: false,
      showCockpit: true,
      changedCounter:0,
      authenticated:false
    };
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
    this.setState((prevState,props)=>{ 
     return {
       person: persons,
       changedCounter:prevState.changedCounter+1
      }
     });
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
  loginHandler=()=>{
    this.setState({authenticated:true})
  }
  render() {
    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <Persons
          persons={this.state.person}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated}
        />
      );
    }
    return (
      <Aux>
        <button
          onClick={() => {
            this.setState({ showCockpit: !this.state.showCockpit });
          }}
        >
          Remove Cockpit
        </button>
        {this.state.showCockpit ? (
          <Cockpit
            title={this.props.appTitle}
            showPerson={this.state.showPerson}
            personLength={this.state.person.length}
            clicked={this.togglePersonHandler}
            login={this.loginHandler}
          />
        ) : null}
        {persons}
      </Aux>
    );
  }
}
export default withClass(App,classes.App);
