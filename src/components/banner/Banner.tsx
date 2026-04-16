import { useState, useEffect } from "react";
import kluska from "../../assets/my_pictures/new/kluska.webp";
import iceland from "../../assets/my_pictures/new/iceland.webp";
import sea from "../../assets/my_pictures/new/sea.webp";
import beer from "../../assets/my_pictures/new/beer.webp";
import cave from "../../assets/my_pictures/new/cave.webp";
import "./banner.scss";

const pictures: string[] = [kluska, sea, beer, iceland, cave];

const Banner = () => {
  const bannerText: string[] = [
    "My favorite Project Manager",
    "One day after the release",
    "One hour after the release",
    "When your junior accidently commits to production Monday 9 AM",
    "The perfect place for a backend developer",
  ];

  useEffect(() => {
    pictures.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  const [index, setIndex] = useState<number>(0);

  function getNextPicture() {
    if (index !== pictures.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function getPreviousPicture() {
    if (index !== 0) {
      setIndex(index - 1);
    } else {
      setIndex(pictures.length - 1);
    }
  }

  return (
    <div className="banner-div">
      <div className="banner-box">
        <div className="pictures-box">
          <button
            className="banner-placeholder"
            onClick={getPreviousPicture}
            aria-label="Previous picture"
          >
            <i className="fas fa-angle-left"></i>
          </button>
          <img src={pictures[index]} className="banner-pic" alt={bannerText[index]} />
          <button
            className="banner-placeholder"
            onClick={getNextPicture}
            aria-label="Next picture"
          >
            <i className="fas fa-angle-right"></i>
          </button>
        </div>
        <p className="banner-text">{bannerText[index]}</p>
      </div>
    </div>
  );
};
export default Banner;
