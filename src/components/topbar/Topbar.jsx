import { Email, Person } from "@mui/icons-material";
import "./topbar.scss";

const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Ojotule...
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <a href={"tel:+234 07063650901"}> +234 07063650901</a>
          </div>

          <div className="itemContainer">
            <Email className="icon" />
            <a href={"mailto:benjamin.ojotule.ajodo@gmail.com"}>
              benjamin.ojotule.ajodo@gmail.com
            </a>
          </div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
