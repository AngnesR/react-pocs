import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <p>
          site do renan
        </p>
      </header >

      <div className="app-content">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>

      <footer className="App-footer">

        <p>
          esse site foi feito no react
        </p>
      </footer>
    </div >
  );
}

export default App;
