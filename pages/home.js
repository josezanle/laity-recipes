import Categories from "./components/categories";
import MainScreen from "./components/main-screen";

const Home = () => {
  return (
    <div className="home">
      <div className="main">
        <Categories />
        <MainScreen />
      </div>
      <style jsx>{`
        .home {
          width: 100vw;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #ebebeb;
        }
        .main {
          width: 95%;
          height: 95%;
          display: flex;
          border-radius: 1em;
          padding: 0.5em;
          background: white;
        }
      `}</style>
    </div>
  );
};

export default Home;
