
import './App.css';
import React,{useEffect,useState } from "react";






//https://api.github.com/users/rangaraju29139



function App({login}) {
  
 const [data,setData]=useState(null);
 const [loading, setLoading]=useState(false);
 const [error,setError]=useState(null);
 useEffect(
    () => {
      
      if(!login){
        return ;
      }
      setLoading(true);
      fetch(`https://api.github.com/users/rangaraju29139`)
    .then((response)=> response.json())
    .then(setData).then(() => setLoading(false)).catch(setError);
    }
    ,[login]
 );

 //https://api.github.com/users/rangaraju29139

 if(loading){
   return <div>Loading......</div>;
 }
 if(error){
   return <pre>{JSON.stringify(error,null,2)}</pre>
 }
 if(!data) return null;

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
