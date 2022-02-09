import logo from './logo.svg';
import './App.css';
import Main from "./components/Main/Main"
import beers from './data/beer';

console.log(beers)

const beerImagesArr = [
  beers.image_url
]

console.log(beerImagesArr)


function App() {
  return (
    <div className="App">
      <Main 
      beersArr={beers}
      imgArr={beerImagesArr}
      />
    </div>
  );
}

export default App;
