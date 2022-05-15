
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


function App(props) {
  
    if(props.authorised){
     return  <SecretContent />;
    }else{
     return  <NormalContent />
    }
    

}

export default App;
