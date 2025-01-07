import React from "react";
import "./SecretScreen.css";
import GingerBreadHouse from "../../../images/G/GingerbreadHouse.jpg";
import Cooking from "../../../images/G/Cooking.jpg";
import Selfie from "../../../images/G/Selfie.jpg";

const galleryData = [
  {
    img: GingerBreadHouse,
    description: "This is the description for image 1.",
  },
  { img: Cooking, description: "This is the description for image 2." },
  { img: Selfie, description: "This is the description for image 3." },
  { img: Cooking, description: "This is the description for image 2." },
  { img: Selfie, description: "This is the description for image 3." },
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
      </div>
    </div>
  );
}
