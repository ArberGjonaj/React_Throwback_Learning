import React  from 'react'
import Person from './Person/Person'
import './App.css';
class App extends React.Component{
  state={
    person:[
      {name:'Arber',age:21},
      {name:'Ulger',age:21},
      {name:'Elidor',age:21}
    ]
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
  render(){
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
  return (
    <div className="App" >
     <h1>I am a React App!</h1>
     <p>This is Really Working!</p>
     <button style={style}  onClick={()=>this.nameSwitchHandler("Arbri")}>Name Switcher!</button>
     <Person
      click={this.nameSwitchHandler.bind(this,"Arbrer Gjonaj")}
      onChange={this.nameChangedHandler}
      name={this.state.person[0].name}
      age={this.state.person[0].age}
     />
     <Person
     
      name={this.state.person[1].name}
      age={this.state.person[1].age}
     >
       I work at FedEx
     </Person>
     <Person
      name={this.state.person[2].name}
      age={this.state.person[2].age}
     />
    </div>
  );
}
}
export default App;
