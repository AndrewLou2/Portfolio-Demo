import React from "react";
import "./SecretScreen.css";
import GingerBreadHouse from "../../../images/G/GingerbreadHouse.jpg";
import Cooking from "../../../images/G/Cooking.jpg";
import Selfie from "../../../images/G/Selfie.jpg";
import Maple from "../../../images/G/Maple.jpg";
import BirthDayHotPot from "../../../images/G/birthday_hotpot.jpg";
import Baddy from "../../../images/G/baddy.jpg";
import Eclipse from "../../../images/G/eclipse.jpg";
import Club from "../../../images/G/Club.jpg";
import Ring from "../../../images/G/ring.jpg";
import Golf from "../../../images/G/golf.jpg";
import Painting from "../../../images/G/painting.jpg";
import Ikea from "../../../images/G/ikea.jpg";
import performance from "../../../images/G/performance.jpg";
import grad from "../../../images/G/grad.jpg";
import sophie from "../../../images/G/sophie.jpg";
import dinner from "../../../images/G/dinner.jpg";
import vancover from "../../../images/G/vancover.jpg";

const galleryData = [
  {
    img: GingerBreadHouse,
    description:
      "The day I fell in love. We were making gingerbread houses, and I haven't had this much fun in ages.",
  },
  { img: Cooking, description: "One of the first times cooking together." },
  { img: Selfie, description: "Mirror selfie, we look so good." },
  { img: Maple, description: "PS I still haven't finished my maple bacon" },
  {
    img: BirthDayHotPot,
    description: "So glad to have enjoyed the hotpot with you",
  },
  { img: Baddy, description: "Techincally we won. I got the best cheerleader" },
  { img: Eclipse, description: "(did something kinda special hehe)" },
  { img: Club, description: "In da clurb, we all fam." },
  {
    img: Ring,
    description: "Ring, ring, ring, herro!",
  },
  { img: Golf, description: "Mini golf. Btw I won!" },
  {
    img: Painting,
    description:
      "This is when I painted you like an orange, and you make me a mop head",
  },
  { img: Ikea, description: "Our little Ikea trip" },
  {
    img: performance,
    description: "Your performance was amazing and we werew the hottest there",
  },
  { img: grad, description: "One of my biggest days. Grateful you were there" },
  {
    img: sophie,
    description: "Seeing sophie do that made me want to get a cat so bad.",
  },
  {
    img: dinner,
    description: "Almost barfed from doing pushups after 15 oysters.",
  },
  {
    img: vancover,
    description:
      "Fun Christmas trip and got to see your family. Vancouver might be my favorite city now.",
  },
];

export default function SecretScreen({ closeSecretScreen }) {
  return (
    <div className="secret-screen">
      <div className="gallery-container">
        <button onClick={closeSecretScreen} className="close-secret-btn">
          Back
        </button>
        <h1>I Love You Gemma!💝</h1>
        {galleryData.map((item, index) => (
          <div key={index} className="gallery-row">
            <img
              src={item.img}
              alt={`Gallery ${index + 1}`}
              className="gallery-image"
            />
            <div className="gallery-description">
              <p>{item.description}</p>
            </div>
          </div>
        ))}
        <h1>我期待和你的每一个明天</h1>
      </div>
    </div>
  );
}
