import Header from "./components/Header";
import Card from "./components/Card";
import meteoriteData from "./data/Meteorite_Landings_dataset.json";
import Map from "./components/Map";
import './App.css';
import { min, max } from "d3-array";
import { useState } from "react";

const maxMass = max(meteoriteData, function(node){return +node.mass});
const minMass = min(meteoriteData, function(node){return +node.mass});
const sortedData = meteoriteData.sort(function (a, b){
  return parseInt(b.mass) - parseInt(a.mass);
});

const countElements = 100;

function App() {

  const pageState = useState(0)
  const page = pageState[0];
  const setPage = pageState[1];
  const start = page * countElements;
  const end = (page * countElements) + countElements;

  const cardsData = sortedData.slice(start, end);
	const mapData = sortedData.slice(start, end);

  function handleClickBack(e) {
    if (page !== 0) {
      const nextValue = page - 1;
      setPage(nextValue);
    }
  }

  function handleClickNext(e) {
    // TODO: fix handle end of array 
    const nextValue = page + 1;
    setPage(nextValue);
  }

  return (
    <div className="App">
      <Header/>
      <Map data={mapData} minMax={[minMass, maxMass]} />
      <div className="controls">
        <button onClick={handleClickBack}>Back</button>
        <button onClick={handleClickNext}>Next</button>
      </div>
      <div className="cardLegend">
        <p>Showing 100 recorsd ordered by descending mass (g)</p>
      </div>
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
