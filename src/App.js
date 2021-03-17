import React  from 'react'
import Person from './Person/Person'
import './App.css';
class App extends React.Component{
  state={
    person:[
      {name:'Arber',age:21},
      {name:'Ulger',age:21},
      {name:'Elidor',age:21}
    ],
    showPerson: false
  }
  nameSwitchHandler=(newName)=>{
    console.log("was clicked!")
    this.setState({person:[
      {name:newName,age:25},
      {name:'Ulger Boja',age:25},
      {name:'Gejsi Llani',age:24},
      {name:'Elidor Varosi',age:25}
    ]}
    )
  }
  nameChangedHandler = (event) =>{
    this.setState({person:[
      {name:event.target.value,age:25},
      {name:'Ulger Boja',age:25},
      {name:'Gejsi Llani',age:24},
      {name:'Elidor Varosi',age:25}
    ]}
    )
  }

  togglePersonHandler=()=>{
    let doesShow = this.state.showPerson
   this.setState({
     showPerson:!doesShow
   })
  }
  render(){
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    let persons = null;
    if(this.state.showPerson){
      persons = (
        <div>
          {
          this.state.person.map((person)=>{
            return <Person name={person.name} age={person.age} />
          })
          }
        
        </div>
      )
    }
  return (
    <div className="App" >
     <h1>I am a React App!</h1>
     <p>This is Really Working!</p>
     <button style={style}  onClick={this.togglePersonHandler}>Toggle Person!</button>

      {persons}

     
    </div>
  );
}
}
export default App;
