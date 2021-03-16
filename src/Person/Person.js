import "./Person.css"
const person = (props) => {
  return(
    <div className="Person">
      <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old!</p>
      <p>{props.children}</p>
      <input  type="text" onChange={props.onChange} value={props.name} />
      </div>
  
  )
};

export default person;
