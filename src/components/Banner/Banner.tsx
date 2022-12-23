import { useState } from "react";
import helmet from "../../assets/my_pictures/helmet_CERN-min.jpg";
import whiteboard from "../../assets/my_pictures/white_board_CERN-min.jpg";
import reception from "../../assets/my_pictures/reception_cropped-min.jpg";
import coding from "../../assets/my_pictures/coding_cropped-min.jpg";
import peace from "../../assets/my_pictures/peace_CERN-min.jpg";
import "./Banner.scss";

const Banner = () => {
  const pictures: string[] = [reception, whiteboard, coding, helmet, peace];
  const traits: string[] = [
    "friendly",
    "creative",
    "hard-working",
    "headstrong",
    "communicative"
  ];

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
          <img
            src={pictures[index]}
            className="banner-pic"
            alt="Peace pic"
          />
          <div className="banner-placeholder" onClick={getNextPicture}>
            <i className="fas fa-angle-right"></i>
          </div>
        </div>
        <p className="banner-text">
          If I would have to describe myself I guess I would use the word{" "}
          <b>{traits[index]}</b>
        </p>
      </div>
    </div>
  );
};
export default Banner;
