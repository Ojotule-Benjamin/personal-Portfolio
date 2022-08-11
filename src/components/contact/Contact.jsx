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
          >
            <GitHub className="socialsIcons" />
          </a>
          <a
            href="https://github.com/Ojotule-Benjamin"
            className="socialsIcons"
          >
            <LinkedIn className="socialsIcons" />
          </a>
          <a
            href="https://github.com/Ojotule-Benjamin"
            className="socialsIcons"
          >
            <Twitter className="socialsIcons" />
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
