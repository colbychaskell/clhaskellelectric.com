import './Home.css';
import heroImg from './hero-img.png';

function Home() {
  return (
    <div className="Home">
      {/* <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div className="hero">
        <img src={heroImg} className="hero-bg" alt="company truck" />
        
      </div>
    </div>
  );
}

export default Home;
