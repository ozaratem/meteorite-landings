import Header from "./components/Header";
import Card from "./components/Card";
import meteoriteData from "./data/Meteorite_Landings_dataset.json";
import Map from "./components/Map";
import './App.css';

function App() {
  const cardsData = meteoriteData.slice(0,100);
  return (
    <div className="App">
      <Header/>
      <Map/>
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
