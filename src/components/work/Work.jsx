import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { React, useState } from "react";
import "./work.scss";

const Work = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./asset/userAnalyticsDashBoard.png",
      title: "Web Design",
      description:
        "An admin dashboard that shows number of sales and analytic chart of active users per month.",
      img: "./asset/userAnalyticsDashBoard.png",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Mobile Application",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Featured",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <div className="work" id="work">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d, index) => (
          <div className="container" key={index}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="mobile here" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.description}</p>
                  <a
                    href="https://lnkd.in/dwhSSjuQ"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Projects
                  </a>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <ArrowBackIos
        className="arrow left"
        onClick={() => handleClick("left")}
      />
      <ArrowForwardIos
        className="arrow right"
        onClick={() => handleClick("left")}
      />
    </div>
  );
};

export default Work;
