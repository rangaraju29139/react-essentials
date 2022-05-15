
import './App.css';






function SecretContent(){
  return (
    <h1>This is the secret content....</h1>
  );
}


function NormalContent(){
  return (
    <h1>This is the normal content available to everyone....</h1>
  );
}

const [first , , third]= ["first","second","third"];
console.log(first);
console.log(third);

function App(props) {

  return (
    <>
    {props.authorised ? <SecretContent /> : <NormalContent /> }
    </>
  );
  

    

}

export default App;
