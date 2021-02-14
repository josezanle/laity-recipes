import MainScreen from "./components/main-screen";
import Categories from "./components/categories";

const Home = () => {
  return (
    <div className="home">
      <Categories />
      <MainScreen />

      <style jsx>{`
        .home {
          width: 100vw;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1em;
        }
      `}</style>
    </div>
  );
};

export default Home;
