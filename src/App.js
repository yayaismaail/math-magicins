import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Api from './components/Api';
import Quote from './components/Quote';

function App() {
  return (
    <>
      <nav className="nav">
        <h1 className="head">Math Magicians</h1>
        <ul className="navbar">
          <li className="navItem">
            <NavLink to="/" className="nav-link">Home</NavLink>
          </li>
          <span />
          <li className="navItem">
            <NavLink to="/calculator" className="nav-link">Calculator</NavLink>
          </li>
          <span />
          <li className="navItem">
            <NavLink to="/quote" className="nav-link">Quote</NavLink>
          </li>
          <span />
          <li className="navItem">
            <NavLink to="/api" className="nav-link">Random Quotes</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/Api" element={<Api />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </>
  );
}

export default App;
