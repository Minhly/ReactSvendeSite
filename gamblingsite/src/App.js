import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          David Sucks!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Free Hentai Click Here!
        </a>
        <Button variant="contained">Hello world!</Button>
      </header>
    </div>
  );
}

export default App;
