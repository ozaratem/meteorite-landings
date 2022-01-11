import Layout from "./components/Layout";
import Header from "./components/Header";
import Card from "./components/Card";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="cards-container">
        <Card/>
      </div>
    </div>
  );
}

export default App;
