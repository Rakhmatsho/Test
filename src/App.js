import './App.css';
import {useState} from "react";
import Chart from './Chart'

function App() {
  const  [state, setState] = useState('')
  return (
    <div className="App">
        <Chart/>
    </div>
  );
}

export default App;
