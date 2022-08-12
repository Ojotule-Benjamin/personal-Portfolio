import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import { useState } from "react";
import handShake from "../../assets/handShake.svg";
import "./contact.scss";

const Contact = () => {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src={handShake} alt="" />
        <div className="socials">
          <a
            href="https://github.com/Ojotule-Benjamin"
            className="socialsIcons"
            target={"_blank"}
            rel="noreferrer"
          >
            <GitHub className="socialsIcons" />
          </a>
          <a
            href="linkedin.com/in/ojotule-benjamin-ajodo-70a99773"
            className="socialsIcons"
            target={"_blank"}
            rel="noreferrer"
          >
            <LinkedIn className="socialsIcons" />
          </a>
          <a href="https://twitter.com/Rockefellerjr1" className="socialsIcons">
            <Twitter
              className="socialsIcons"
              target={"_blank"}
              rel="noreferrer"
            />
          </a>
        </div>
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply shortly</span>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
