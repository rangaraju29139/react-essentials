
import './App.css';
import React,{useReducer } from "react";










function App(props) {
 const [checked,toggle]=useReducer(
  (checked => !checked),
  false
  ); 

 

  return (
    <>
    <input type="checkbox" value={checked} onChange={toggle}></input>
    <p>the checkBox is {checked ? "checked": "unChecked"} </p>
    </>
  );
  

    

}

export default App;
