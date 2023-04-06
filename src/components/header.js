import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <div className="app-name">
      <h1><Link to="/">Math Magician</Link></h1>
    </div>
    <div className="menu">
      <ul>
        <li className="menu-item"><Link to="/">Home</Link></li>
        <li className="menu-item"><Link to="/calculator">Calculator</Link></li>
        <li className="menu-item"><Link to="/quote">Quote</Link></li>
      </ul>
    </div>
  </div>
);

export default Header;
