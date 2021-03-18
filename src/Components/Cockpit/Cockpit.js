import classes from "./Cockpit.module.css";

const cockpit = (props) => {
  let buttonClasses = [classes.Button];
  let joinClasses = [];
  if (props.showPerson) {
    buttonClasses = [...buttonClasses, classes.Red];
  }
  if (props.person.length <= 2) {
    joinClasses.push(classes.Red); //classes = ['red'];
  }
  if (props.person.length <= 1) {
    joinClasses.push(classes.Bold); //classes = ['red'], ['bold'];
  }

  buttonClasses = buttonClasses.join(" ");
  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={joinClasses.join(" ")}>This is Really Working!</p>
      <button className={buttonClasses} onClick={props.clicked}>
        Toggle Person!
      </button>
    </div>
  );
};

export default cockpit;
