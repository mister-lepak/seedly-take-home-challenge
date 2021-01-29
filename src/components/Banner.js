import bannerPicture from "../images/banner_default.svg";

const Banner = () => {
  return (
    <>
      <img src={bannerPicture}></img>
      <header>
        <h1>Let's Talk Finance</h1>
        <h3>Ask for opinions and get answers from other Singaporeans.</h3>
        <button>Ask Question</button>
      </header>
    </>
  );
};

export default Banner;
