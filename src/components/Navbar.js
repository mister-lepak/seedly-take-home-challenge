import logo from "../images/seedly-logo-blue.webp";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div id="desktopNav" className="ui top fixed menu">
        <Link to="/" className="item">
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
        <div className=" ui left icon input right menu">
          <i className="search icon"></i>
          <input
            type="text"
            placeholder="Find product review, questions or articles"
          ></input>
        </div>
        <button className="ui button item">Join</button>
      </div>
      <div id="mobileNav" className="ui top fixed menu">
        <Link to="/" className="item">
          <img src={logo}></img>
        </Link>
        <div className="right menu">
          <div className="item">
            <div className="ui mini left icon input">
              <i className="search icon"></i>
              <input
                type="text"
                placeholder="Find product review, questions or articles"
              ></input>
            </div>
          </div>
          <button className="ui left floated button item">Join</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
