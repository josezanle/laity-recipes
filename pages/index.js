import Login from "../components/login";
import Laity from "../components/laity";

const Home = () => {
  return (
    <div className="body">
      <div className="main">
        <Laity />
        <Login />
      </div>

      <style jsx>{`
        .body {
          width: 100vw;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #ebebeb;
        }
        .main {
          width: 720px;
          height: 400px;
          display: flex;
          border-radius: 1em;
          background: white;
        }
      `}</style>
    </div>
  );
};

export default Home;
