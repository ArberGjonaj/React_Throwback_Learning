import React, { useEffect, useRef, useContext } from "react";
import classes from "./Cockpit.module.css";
import AuthContext from '../../context/auth-context'
const Cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);
  console.log(authContext.authenticated)
  useEffect(() => {
    // console.log("[Cockpit.js] useEffect ");
    // setTimeout(() => {
    //   alert("Saved data to cloud");
    // }, 1000);
    toggleBtnRef.current.click();
    return () => {
      console.log("[Cockpit.js] Cleanup work in useEffect");
    };
  }, []);
  
  useEffect(() => {
    console.log("[Cockpit.js] useEffect second");
    return () => {
      console.log("[Cockpit.js] Cleanup work in useEffect");
    };
  });
  let buttonClasses = [classes.Button];
  const joinClasses = [];
  if (props.showPerson) {
    buttonClasses = [...buttonClasses, classes.Red];
  }
  if (props.personLength <= 2) {
    joinClasses.push(classes.Red); // classes = ['red'];
  }
  if (props.personLength <= 1) {
    joinClasses.push(classes.Bold); //  classes = ['red'], ['bold'];
  }

  buttonClasses = buttonClasses.join(" ");
  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={joinClasses.join(" ")}>This is Really Working!</p>
      <button
        ref={toggleBtnRef}
        className={buttonClasses}
        onClick={props.clicked}
      >
        Toggle Person!
      </button>

      <button  className={buttonClasses} onClick={authContext.login}>Log in</button>

    </div>
  );
};

export default React.memo(Cockpit);
