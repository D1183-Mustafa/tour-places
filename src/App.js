import "./index.css";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Card from "./components/cards/Card";
import {data} from "./helper/data";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      {data.map((city) => (
        <Card title={city.title} image={city.image} desc={city.desc} />
      ))}
    </div>
  );
}

export default App;
