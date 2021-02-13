import Navigation from "../navigation";
import Muro from "../muro";

const MainScreen = () => {
  return (
    <div className="main-screen">
      <Navigation />
      <Muro />
      <style jsx>{`
        .main-screen {
          width: 100%;
          height: 100%;
          flex: 8;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-flow: column;
          background: yellow;
        }
        h3 {
          color: black;
        }
      `}</style>
    </div>
  );
};

export default MainScreen;
