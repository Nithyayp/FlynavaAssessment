import "./App.css";
import { Movies } from "./components/Movies";

function App() {
  return (
    <div className="mainBlock">
      <div className="nav">
        <div>
          <h1>WOOKIE MOVIES</h1>
        </div>
        <div></div>
      </div>

      <Movies />
    </div>
  );
}

export default App;
