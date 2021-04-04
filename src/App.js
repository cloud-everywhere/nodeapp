import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Just add Git Deployment Option to App Service........
          Edit <code>src/App.js</code>, Save, Commit & Push to Git Repo to re-deploy
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn to Deploy Node, Express & React App to Azure App Service
        </a>
      </header>
    </div>
  );
}

export default App;
