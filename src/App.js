import "./App.css";
import { data } from "./data/data";
import HiveForm from "./pages/forms/hiveForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HiveForm data={data} />
      </header>
    </div>
  );
}

export default App;
