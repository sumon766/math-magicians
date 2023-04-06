import Header from './components/header';
import Home from './components/Home';
import Display from './components/Calculator';
import Quote from './components/Quote';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Display />
      <Quote />
    </div>
  );
}

export default App;
