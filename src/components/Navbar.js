import logo from "../images/seedly-logo-blue.webp";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav id="desktopNav" className="ui top fixed menu">
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
        <section className=" ui left icon input right menu">
          <i className="search icon"></i>
          <input
            type="text"
            placeholder="Find product review, questions or articles"
          ></input>
        </section>
        <button className="ui button item">Join</button>
      </nav>
      <nav id="mobileNav" className="ui top fixed menu">
        <Link to="/" className="item">
          <img src={logo}></img>
        </Link>
        <section className="right menu">
          <article className="item">
            <div className="ui mini left icon input">
              <i className="search icon"></i>
              <input
                type="text"
                placeholder="Find product review, questions or articles"
              ></input>
            </div>
          </article>
          <button className="ui left floated button item">Join</button>
        </section>
      </nav>
    </>
  );
};

export default Navbar;
