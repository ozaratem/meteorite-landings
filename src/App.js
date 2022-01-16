import Header from "./components/Header";
import Card from "./components/Card";
import meteoriteData from "./data/Meteorite_Landings_dataset.json";
import Map from "./components/Map";
import './App.css';
import {min, max} from "d3-array";

const minMass = min(meteoriteData, function(node){return +node.mass});
const maxMass = max(meteoriteData, function(node){return +node.mass});

function App() {
  const cardsData = meteoriteData.splice(0, 100);
	const mapData = meteoriteData.splice(0, 1000);
  return (
    <div className="App">
      <Header/>
      <Map data={mapData} minMax={[minMass, maxMass]} />
      <div className="cards-container">
        {
          cardsData.map(element => {
            return <Card key={element.id} data={element} />
          }) 
        }
      </div>
    </div>
  );
}

export default App;
