import './App.scss';
import NarBar from "./components/NarBar";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className="App">
        <div className="sideBar">
            <NarBar/>
        </div>
        <div className="main-content">
            <div className="content">
                <HomePage/>
            </div>

        </div>
    </div>
  );
}


export default App;
