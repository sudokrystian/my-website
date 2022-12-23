import { useState, useEffect } from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import loadingSpinner from "../../assets/loadingSpinner.gif";
import "./game.scss";

const unityContext = new UnityContext({
  loaderUrl: "unityBuild/froggersBeta.loader.js",
  dataUrl: "unityBuild/froggersBeta.data",
  frameworkUrl: "unityBuild/froggersBeta.framework.js",
  codeUrl: "unityBuild/froggersBeta.wasm",
});

const Game = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const isMobile = width <= 768;
  var containerClassName: string = isMobile
    ? (containerClassName = "game-container-padding")
    : (containerClassName = "game-container");

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    unityContext.on("loaded", () => {
      setIsLoaded(true);
    });

    document.body.style.backgroundColor = "#205081";
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
      document.body.style.backgroundColor = "#ffffff";
    };
  }, []);

  function gameFullscreen() {
    unityContext.setFullscreen(true);
  }

  return (
    <div className={containerClassName}>
      <div className="game-spacer"></div>
      {isMobile ? (
        <h6>Unfortunately the game doesn't support mobile devices</h6>
      ) : (
        <>
          {isLoaded ? (
            <div className="game-fullscreen-button-container">
              <button className="game-fullscreen-button" onClick={() => gameFullscreen()}>Fullscreen</button>
            </div>
          ) : (
            <div className="game-loading-screen">
              <h6>Game is loading please wait...</h6>
              <br />
              <div id="loading"></div>
            </div>
          )}
          <Unity
            style={{
              visibility: isLoaded ? "visible" : "hidden",
              width: "100%",
              justifySelf: "center",
              cursor: "pointer",
            }}
            unityContext={unityContext}
          />
          )
        </>
      )}

      <div className="game-page-filler"></div>
    </div>
  );
};

export default Game;
