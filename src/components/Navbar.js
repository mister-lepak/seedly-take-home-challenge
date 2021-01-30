import logo from "../images/seedly-logo-blue.webp";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="ui top fixed menu">
      <Link to="/">
        <img src={logo}></img>
      </Link>
      <Link to="/" className="item">
        Community
      </Link>
      <a className="item">Content</a>
      <a className="item">Banking</a>
      <a className="item">Cards</a>
      <a className="item">Investments</a>
      <a className="item">Utilities & Bills</a>
      <a className="item">Insurance</a>
      <a className="item">...</a>
      <input className="item"></input>
      <button className="ui button item">Join</button>
    </div>
  );
};

export default Navbar;
