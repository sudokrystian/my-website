import { useState, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import loadingSpinner from "../../../assets/loading-spinner.gif";
import "./froggers-game.scss";

const unityConfig = {
  loaderUrl: "unityBuild/froggersBeta.loader.js",
  dataUrl: "unityBuild/froggersBeta.data",
  frameworkUrl: "unityBuild/froggersBeta.framework.js",
  codeUrl: "unityBuild/froggersBeta.wasm",
};

const Game = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isLoaded, setIsLoaded] = useState(false);
  const isMobile = width <= 768;

  const {
    unityProvider,
    isLoaded: unityIsLoaded,
    requestFullscreen,
    addEventListener,
    removeEventListener,
  } = useUnityContext(unityConfig);

  useEffect(() => {
    function handleWindowSizeChange() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleWindowSizeChange);

    // Listen for Unity "loaded" event (if you need custom loading, but isLoaded from useUnityContext is enough)
    // addEventListener("loaded", () => setIsLoaded(true));
    setIsLoaded(unityIsLoaded);

    document.body.style.backgroundColor = "#205081";
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
      document.body.style.backgroundColor = "#ffffff";
      // removeEventListener("loaded", () => setIsLoaded(true));
    };
  }, [unityIsLoaded, addEventListener, removeEventListener]);

  function gameFullscreen() {
    requestFullscreen(true);
  }

  return (
    <div className="game-container">
      {isMobile ? (
        <h6>Unfortunately the game doesn't support mobile devices</h6>
      ) : (
        <>
          <div className="game-header-row">
            <h3 className="froggers-game-title">Froggers</h3>
            {unityIsLoaded && (
              <div className="game-fullscreen-button-container">
                <button className="game-fullscreen-button" onClick={gameFullscreen}>
                  Fullscreen
                </button>
              </div>
            )}
          </div>
          <hr className="game-header-hr" />
          {unityIsLoaded ? null : (
            <div className="game-loading-screen">
              <h6>Game is loading please wait...</h6>
              <br />
              <img src={loadingSpinner} id="game-spinner" alt="Loading..." />
            </div>
          )}
          <Unity
            style={{
              visibility: unityIsLoaded ? "visible" : "hidden",
              width: "100%",
              justifySelf: "center",
              cursor: "pointer",
            }}
            unityProvider={unityProvider}
          />
        </>
      )}
      <div className="game-page-filler"></div>
    </div>
  );
};

export default Game;
