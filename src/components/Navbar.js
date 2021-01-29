import logo from "../images/seedly-logo-blue.webp";

const Navbar = () => {
  return (
    <div className="ui top fixed menu">
      <img src={logo}></img>
      <a className="item">Community</a>
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
