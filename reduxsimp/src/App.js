import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App() {
  return (
<div className="App">
      <h1>Exercício React-Redux (Simples)</h1>
      <div className="linha">
        <Card title="Card 1 " red>
          x
        </Card>
   
      <Card title="Card 2" purple>
          y
        </Card>
        
      </div>
      <div className="linha" >
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
