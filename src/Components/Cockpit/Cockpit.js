import React, { useEffect, useRef } from "react";
import classes from "./Cockpit.module.css";

const Cockpit = (props) => {
  const toggleBtnRef = useRef(null);

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
      <button  className={buttonClasses} onClick={props.login}>Log in</button>
    </div>
  );
};

export default React.memo(Cockpit);
