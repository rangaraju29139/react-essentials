
import './App.css';
import React,{useState, useEffect } from "react";






function EmotionState(){
  const [Emotion,setEmotion] = useState("Happy");
  console.log(Emotion);
  useEffect(()=> {
    console.log(`its ${Emotion} around here`);
  },[Emotion]
  );
  return (
    <>
    <h1>The current Emotion is {Emotion} </h1>
    <button on onClick={() => setEmotion("Frustrate")}> Frustrate </button>
    <button on onClick={() => setEmotion("Happy")}> Happy </button>
    <button on onClick={() => setEmotion("sad")}> sad </button>
    </>
    
  );
}




function App(props) {
 

  return (
    <>
    <EmotionState />
    </>
  );
  

    

}

export default App;
