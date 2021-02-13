import Navigation from "../navigation";
import InteractionsContainer from "../interaction-container";

const MainScreen = () => {
  return (
    <div className="main-screen">
      <Navigation />
      <InteractionsContainer />

      <style jsx>{`
        .main-screen {
          width: 100%;
          height: 100%;
          flex: 8;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-flow: column;
          background: white;
        }
        h3 {
          color: black;
        }
      `}</style>
    </div>
  );
};

export default MainScreen;
