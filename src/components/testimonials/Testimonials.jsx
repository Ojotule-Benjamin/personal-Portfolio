import { TurnRight, YouTube } from "@mui/icons-material";
import "./testimonials.scss";

const Testimonials = () => {
  const data = [
    {
      id: 1,
      name: "Onogu Martins",
      title: "Senior Developer",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
      icon: "assets/twitter.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "Ojochoko Mary Ochuma",
      title: "Product Designer",
      img: "https://media-exp1.licdn.com/dms/image/C5603AQHo6TW26TrLYA/profile-displayphoto-shrink_200_200/0/1641590702361?e=2147483647&v=beta&t=0iYzWi0Di1aYvf3nfCnn3-h8Rl0Lontd9xG8tI-FI4g",
      icon: "assets/youtube.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "John Opaluwa",
      title: "CEO of Regenate",
      img: "https://avatars.githubusercontent.com/u/18556742?v=4",
      icon: "assets/linkedin.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonial</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <TurnRight className="left" />
              <img src={d.img} alt="" />
              <YouTube className="right" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
