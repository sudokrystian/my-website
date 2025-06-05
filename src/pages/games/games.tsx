import "./games.scss";
import { Link } from "react-router-dom";
import MyParticles from "../../components/particles/MyParticles";
import froggersImg from "../../assets/my_projects/froggers.png";
import tetris from "../../assets/games/tetris.webp";

const mobileGames = [
  {
    title: "Tetris",
    description: "Classic falling blocks game. Challenge your reflexes!",
    image: tetris,
    link: "/tetris",
  },
];

const desktopGames = [
  {
    title: "Froggers",
    description: "Become a legendary frog warrior looking for his pond!",
    image: froggersImg,
    link: "/Froggers",
  },
];

const Games = () => {
  return (
    <div className="games-div">
      <div className="games-header">
        <h3 className="games-title">Play Games</h3>
        <hr />
      </div>
      <div className="games-list">
        <MyParticles />
        <h4 className="games-section-title">Desktop & Mobile Games</h4>
        <div className="games-section">
          {mobileGames.map((game, idx) => (
            <Link
              to={game.link}
              className="game-card-link"
              key={game.title + idx}
            >
              <div className="game-card">
                <img
                  src={game.image}
                  alt={game.title}
                  className="game-card-image"
                />
                <div className="game-card-info">
                  <h4>{game.title}</h4>
                  <p>{game.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {desktopGames.length > 0 && (
          <>
            <div className="games-divider">
              <span>Desktop Only Games</span>
            </div>
            <h4 className="games-section-title">Desktop only Games</h4>
            <div className="games-section">
              {desktopGames.map((game, idx) => (
                <Link
                  to={game.link}
                  className="game-card-link"
                  key={game.title + idx}
                >
                  <div className="game-card">
                    <img
                      src={game.image}
                      alt={game.title}
                      className="game-card-image"
                    />
                    <div className="game-card-info">
                      <h4>{game.title}</h4>
                      <p>{game.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Games;
