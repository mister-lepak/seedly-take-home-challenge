import apple from "../images/app-store.webp";
import google from "../images/google-play.webp";
import indexCSS from "../css/index.css";

const Footer = () => {
  return (
    <footer id="footer">
      <section className="ui equal width stackable grid">
        <article className="column">
          <div>
            <h4>Company</h4>
          </div>
          <div>
            <a href="">About</a>
          </div>
          <div>
            <a href="">Contact</a>
          </div>
          <div>
            <a href="">Careers</a>
          </div>
          <div>
            <a href="">Privacy</a>
          </div>
          <div>
            <a href="">Terms</a>
          </div>
        </article>

        <article className="column">
          <div>
            <h4>Product Reviews</h4>
          </div>
          <div>
            <a href="">Credit Cards</a>
          </div>
          <div>
            <a href="">Electricity Retailers</a>
          </div>
          <div>
            <a href="">Mobile Plans</a>
          </div>
          <div>
            <a href="">Online Brokerages</a>
          </div>
          <div>
            <a href="">P2P Lending</a>
          </div>
          <div>
            <a href="">Robo-Advisors</a>
          </div>
          <div>
            <a href="">Savings Accounts</a>
          </div>
          <div>
            <a href="">Travel Insurance</a>
          </div>
        </article>

        <article className="column">
          <div>
            <h4>Quick Tools</h4>
          </div>
          <div>
            <a href="">Savings Account Calculator</a>
          </div>
          <div>
            <a href="">Levels and Badges</a>
          </div>
        </article>

        <article className="column">
          <div>
            <h4>Seedly App</h4>
          </div>
          <div>
            <a href="">App Reviews</a>
          </div>
          <div>
            <a href="">FAQ</a>
          </div>
          <div>
            <a href="">Security</a>
          </div>
        </article>

        <article className="column">
          <div>
            <h4>Download the app</h4>
          </div>
          <div>
            <img src={apple}></img>
          </div>
          <div>
            <img src={google}></img>
          </div>
        </article>
      </section>
      <section id="subFooter">
        <i className="extra large twitter icon"></i>
        <i className="extra large instagram icon"></i>
        <i className="extra large facebook icon"></i>
        <i className="extra large telegram icon"></i>
      </section>
    </footer>
  );
};

export default Footer;
