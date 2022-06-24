import "./intro.scss";

const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/Picture2.png" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, i'm</h2>
          <h1>Ojotule Benjamin Ajodo</h1>
          <h3>
            Freelance<span></span>
          </h3>
        </div>
        <a href="#portfolio">down icon from material ui</a>
      </div>
    </div>
  );
};

export default Intro;
