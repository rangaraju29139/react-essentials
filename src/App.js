
import './App.css';
import galaxy from './galaxy.jpg';


const dishes = [
  "biryani",
  "noodles",
  "manchuria",
  "fried rice"
];

const dishesObjects=dishes.map((dish,i) => ({id: i,title: dish}));
console.log(dishesObjects);
//dishes.map((dish) => console.log(dish));


function Header(props){
  console.log(props);
  return (
    <header>
      <h1>{props.name}'s Restaurant</h1>
    </header>
  );
}

function Main(props){
  console.log(props);
  return (
    <section>
      <h2> where {props.adjective} food is being served. </h2>
      <img src={galaxy} height={200} alt=""></img>
      <ul style={{textAlign: "left"}}>
        {props.dishes.map((dish,i) => <li key={i}>{dish}</li>)}
      </ul>
    </section>
  );
}
function Footer(props){
  console.log(props);
  return (
    <footer>
    <p>{props.year}  thank you visit again....</p> 
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Header name="rangaraju"/>
      <Main adjective="amazing" dishes={dishes}/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
