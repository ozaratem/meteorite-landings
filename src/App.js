import Header from "./components/Header";
import Card from "./components/Card";
import meteoriteData from "./data/Meteorite_Landings_dataset.json";
import Map from "./components/Map";
import './App.css';
import {min, max} from "d3-array";

const minMass = min(meteoriteData, function(node){return +node.mass});
const maxMass = max(meteoriteData, function(node){return +node.mass});

function App() {
	const sortedData = meteoriteData.sort(function (a, b){
		return parseInt(b.mass) - parseInt(a.mass);
	});
  const cardsData = sortedData.slice(0, 100);
	const mapData = sortedData.slice(0, 300);
  return (
    <div className="App">
      <Header/>
      <Map data={mapData} minMax={[mapData[mapData.length-1].mass, maxMass]} />
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
