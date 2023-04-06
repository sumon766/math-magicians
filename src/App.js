import {
  BrowserRouter, Routes, Route, Outlet,
} from 'react-router-dom';
import Header from './components/header';
import Home from './components/Home';
import Display from './components/Calculator';
import Quote from './components/quote';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Outlet />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="calculator" element={<Display />} />
        <Route path="quote" element={<Quote />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
