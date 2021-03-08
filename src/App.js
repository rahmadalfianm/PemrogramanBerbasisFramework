import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h6>
          Perkenalkan : <code></code>
        </h6>
        <h4>
        Nama : Rahmad Alfian Maskuri
        <br></br>
        NIM : 1841720048
        </h4>
        <a
          className="App-link"
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Google
        </a>
      </header>
    </div>
  );
}

export default App;
