
import './App.css';
import React,{useEffect,useState } from "react";






//https://api.github.com/users/rangaraju29139



function App(props) {
 const [data,setData]=useState(null);
 useEffect(
    () => {fetch(`https://api.github.com/users/rangaraju29139`)
    .then((response)=> response.json())
    .then(setData);
    }
    ,[]
 );

 //https://api.github.com/users/rangaraju29139

  if(data){
    return (<div>
     <h1>{data.login}</h1>
     <p>{data.location}</p>
     <img alt={data.avatar_url} src={data.avatar_url} />
     
     
      </div>)
  }else{
    return <div>NO Data</div>
  }
  

    

}

export default App;
