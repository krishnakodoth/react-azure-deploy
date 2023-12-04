import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Sample web application</p>
      </header>
      <div className='App-content'>
        App Content
      </div>
      <footer>
        Footer
      </footer>
    </div>
  );
}

export default App;
