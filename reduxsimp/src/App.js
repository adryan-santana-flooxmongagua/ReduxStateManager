import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import Intervalo from "./components/Intervalo";

function App() {
  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>
      <div className="linha">
        <Intervalo> </Intervalo>
      </div>
      <div className="linha">
        <Card title="Card 3" green>
          y
        </Card>

        <Card title="Card 4" blue>
          y
        </Card>
      </div>
    </div>
  );
}

export default App;
