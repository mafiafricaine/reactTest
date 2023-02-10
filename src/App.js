import image from './goku.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome chez Goku</h1>
      <img src={image} width="200" height={200} alt="image" />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
    </div>
  );
}

export default App;
