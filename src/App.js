import React from 'react'
import Person from './Person/Person'
import './App.css';
class App extends React.Component{
  render(){
  return (
    <div className="App">
     <h1>I am a React App!</h1>
     <p>This is Really Working!</p>
     <Person/>
     <Person/>
     <Person/>
    </div>
  );
}
}
export default App;
