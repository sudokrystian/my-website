import "./games.scss";
import { Link } from "react-router-dom";
import PageMeta from "../../components/page-meta/PageMeta";
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

const GameCard = (props: {
  game: { title: string; description: string; image: string; link: string };
}) => (
  <Link to={props.game.link} className="game-card-link">
    <div className="game-card">
      <img
        src={props.game.image}
        alt={props.game.title}
        className="game-card-image"
      />
      <div className="game-card-info">
        <h4>{props.game.title}</h4>
        <p>{props.game.description}</p>
      </div>
    </div>
  </Link>
);

const Games = () => {
  return (
    <div className="games-div">
      <PageMeta title="Games" description="Play Tetris and Froggers — browser games built with React and Unity." />
      <div className="games-header">
        <h3 className="games-title">Play Games</h3>
        <hr />
      </div>
      <MyParticles />
      <div className="games-list">
        <h4 className="games-section-title">Desktop & Mobile</h4>
        <div className="games-section">
          {mobileGames.map((game) => (
            <GameCard game={game} key={game.title} />
          ))}
        </div>
        {desktopGames.length > 0 && (
          <>
            <h4 className="games-section-title">Desktop Only</h4>
            <div className="games-section">
              {desktopGames.map((game) => (
                <GameCard game={game} key={game.title} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Games;
