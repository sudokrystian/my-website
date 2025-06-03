import { useState, useEffect } from "react";
import kluska from "../../assets/my_pictures/new/kluska.webp";
import iceland from "../../assets/my_pictures/new/iceland.webp";
import sea from "../../assets/my_pictures/new/sea.webp";
import beer from "../../assets/my_pictures/new/beer.webp";
import cave from "../../assets/my_pictures/new/cave.webp";
import "./banner.scss";

const Banner = () => {
  const pictures: string[] = [kluska, sea, beer, iceland, cave];
  const traits: string[] = [
    "friendly",
    "creative",
    "hard-working",
    "headstrong",
    "communicative",
  ];

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
  }, [pictures]);

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
          <div className="banner-placeholder" onClick={getPreviousPicture}>
            <i className="fas fa-angle-left"></i>
          </div>
          <img src={pictures[index]} className="banner-pic" alt="Peace pic" />
          <div className="banner-placeholder" onClick={getNextPicture}>
            <i className="fas fa-angle-right"></i>
          </div>
        </div>
        <p className="banner-text">{bannerText[index]}</p>
      </div>
    </div>
  );
};
export default Banner;
