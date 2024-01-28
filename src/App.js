//import logo from './images/logo.svg';
import atps from './images/atps.png';
import probability from './images/probability.jpg';
import polar3d from './images/polar-3d.png';
import vector from './images/vector.png';
import growth from './images/growth.png';
import matrices from './images/matrices.png';
import gatm from './images/gatm.jpg';
import limit from './images/limit.png';
import calculus from './images/calculus.jpg';
import './App.css';

const units = [
  {url: "http://www.gunnmaths.org/analysis/atps", img: atps, alt: "AtPS", text: "AtPS"},
  {url: "http://www.gunnmaths.org/analysis/probability", img: probability, alt: "Probability", text: "Probability"},
  {url: "http://www.gunnmaths.org/analysis/polar", img: polar3d, alt: "Polar and 3D", text: "Polar and 3D"},
  {url: "http://www.gunnmaths.org/analysis/vectors", img: vector, alt: "Vectors and Parametrics", text: "Vectors and Parametrics"},
  {url: "http://www.gunnmaths.org/analysis/growth", img: growth, alt: "Growth", text: "Growth"},
  {url: "http://www.gunnmaths.org/analysis/matrices", img: matrices, alt: "Matrices", text: "Matrices"},
  {url: "http://www.gunnmaths.org/analysis/gatm", img: gatm, alt: "GaTM", text: "GaTM"},
  {url: "http://www.gunnmaths.org/analysis/limits", img: limit, alt: "Limits", text: "Limits"},
  {url: "http://www.gunnmaths.org/analysis/calculus", img: calculus, alt: "Calculus", text: "Calculus"}
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button className="Menu-button">
          <div className="hamburger-menu">
            <div></div>
            <div></div>
            <div></div>
          </div>
          {/* <text className="Menu-text">MENU</text> */}
        </button>
        <h1 className="Title">ANALYSIS</h1>
        <button className="Search-button">
          <div className="magnifying-glass"></div>
          {/* <text className="Search-text">SEARCH</text> */}
        </button>
      </header>

      <div className="Content">
        <div className="icon-grid">
          {units.map((unit, index) => (
            <div className="units" key={index}>
              <a href={unit.url}>
                <img src={unit.img} alt={unit.alt}/>
              </a>
              <button onClick={() => window.location.href=unit.url}>{unit.text}</button>
            </div>
          ))}
          {/* <div className="units">
            <a href="http://www.gunnmaths.org/analysis/atps">
              <img src={atps} alt="AtPS"/>
            </a>
            <button onClick={() => window.location.href="http://www.gunnmaths.org/analysis/atps"}>AtPS</button>
          </div>
          <div className="units">
            <a href="http://www.gunnmaths.org/analysis/probability">
              <img src={probability} alt="Probability"/>
            </a>
            <button onClick={() => window.location.href="http://www.gunnmaths.org/analysis/probability"}>Probability</button>
          </div>
          <div className="units">
            <a href="http://www.gunnmaths.org/analysis/polar">
              <img src={polar3d} alt="Polar and 3D"/>
            </a>
            <button onClick={() => window.location.href="http://www.gunnmaths.org/analysis/polar"}>Polar and 3D</button>
          </div>
          <div className="units">
            <a href="http://www.gunnmaths.org/analysis/vectors">
              <img src={vector} alt="Vectors and Parametrics"/>
            </a>
            <button onClick={() => window.location.href="http://www.gunnmaths.org/analysis/vectors"}>Vectors and Parametrics</button>
          </div>
          <div className="units">
              <a href="http://www.gunnmaths.org/analysis/growth">
                <img src={growth} alt="Growth"/>
              </a>
              <button onClick={() => window.location.href="http://www.gunnmaths.org/analysis/growth"}>Growth</button>
          </div>
          <div className="units">
            <a href="http://www.gunnmaths.org/analysis/matrices">
              <img src={matrices} alt="Matrices"/>
            </a>
            <button onClick={() => window.location.href="http://www.gunnmaths.org/analysis/matrices"}>Matrices</button>
          </div>
          <div className="units">
            <a href="http://www.gunnmaths.org/analysis/gatm">
              <img src={gatm} alt="GaTM"/>
            </a>
            <button onClick={() => window.location.href="http://www.gunnmaths.org/analysis/gatm"}>GaTM</button>
          </div>
          <div className="units">
            <a href="http://www.gunnmaths.org/analysis/limits">
              <img src={limit} alt="Limits"/>
            </a>
            <button onClick={() => window.location.href="http://www.gunnmaths.org/analysis/limits"}>Limits</button>
          </div>
          <div className="units">
            <a href="http://www.gunnmaths.org/analysis/calculus">
              <img src={calculus} alt="Calculus"/>
            </a>
            <button onClick={() => window.location.href="http://www.gunnmaths.org/analysis/calculus"}>Calculus</button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
