import logo from './logo.svg';
import './App.css';
import Main from "./components/Main/Main"
import beers from './data/beer';
import Nav from './components/Nav/Nav'

console.log(beers)

function App() {
  return (
    <div className="App">
      <Nav />
      <Main 
      beersArr={beers}
      />
    </div>
  );
}

export default App;
