// import { init } from "ityped";
// import { useEffect, useRef } from "react";
import TypeWriterEffect from "react-typewriter-effect";
import down from "../../assets/down.png";
import welcome3 from "../../assets/welcome3.svg";
import "./intro.scss";

const Intro = () => {
  // const wordsRef = useRef();
  // useEffect(() => {});
  // const textRef = useRef();

  // useEffect(() => {
  //   init(textRef.current, {
  //     showCursor: true,
  //     backDelay: 1500,
  //     backSpeed: 60,
  //     strings: ["Developer", "Writer"],
  //   });
  // }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={welcome3} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Ojotule Benjamin Ajodo</h1>
          <h3>
            Freelance
            <span>
              <TypeWriterEffect
                textStyle={{
                  fontSize: "30px",
                  color: "crimson",
                }}
                startDelay={100}
                cursorColor="crimson"
                multiText={["Developer", "Technical Writer", "Developer"]}
                multiTextDelay={1000}
                hideCursorAfterText={true}
                typeSpeed={100}
              />
            </span>
          </h3>
          {/* <h3>
            Freelance <span ref={textRef}></span>
          </h3> */}
        </div>
        <a href="#portfolio">
          <img src={down} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
