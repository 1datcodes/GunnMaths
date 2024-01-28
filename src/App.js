import logo from './images/logo.svg';
import atps from './images/atps.png';
import probability from './images/probability.png';
import polar3d from './images/polar-3d.png';
import vector from './images/vector.png';
import growth from './images/growth.png';
import matrices from './images/matrices.png';
import gatm from './images/gatm.jpg';
import limit from './images/limit.png';
import calculus from './images/calculus.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button className="Menu-button">
          <text className="Menu-text">MENU</text>
        </button>
        <h1 className="Title">ANALYSIS</h1>
        <button className="Search-button">
          <text className="Search-text">SEARCH</text>
        </button>
      </header>

      <div className="Content">
        <div className="icon-grid">
          <a href="http://www.gunnmaths.org/analysis/atps">
            <img src={atps} alt="AtPS"/>
            <p className="icon-description">AtPS</p>
          </a>
          <a href="http://www.gunnmaths.org/analysis/probability">
            <img src={probability} alt="Probability"/>
            <p className="icon-description">Probability</p>
          </a>
          <a href="http://www.gunnmaths.org/analysis/polar">
            <img src={polar3d} alt="Polar and 3D"/>
            <p className="icon-description">Polar and 3D</p>
          </a>
          <a href="http://www.gunnmaths.org/analysis/vectors">
            <img src={vector} alt="Vectors and Parametrics"/>
            <p className="icon-description">Vectors and Parametrics</p>
          </a>
          <a href="http://www.gunnmaths.org/analysis/growth">
            <img src={growth} alt="Growth"/>
            <p className="icon-description">Growth</p>
          </a>
          <a href="http://www.gunnmaths.org/analysis/matrices">
            <img src={matrices} alt="Matrices"/>
            <p className="icon-description">Matrices</p>
          </a>
          <a href="http://www.gunnmaths.org/analysis/gatm">
            <img src={gatm} alt="GaTM"/>
            <p className="icon-description">GaTM</p>
          </a>
          <a href="http://www.gunnmaths.org/analysis/limits">
            <img src={limit} alt="Limits"/>
            <p className="icon-description">Limits</p>
          </a>
          <a href="http://www.gunnmaths.org/analysis/calculus">
            <img src={calculus} alt="Calculus"/>
            <p className="icon-description">Calculus</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
