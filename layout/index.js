import Head from "next/head";
import Categories from "../pages/components/categories";
import MainScreen from "../pages/components/main-screen";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Laity</title>
      </Head>
      <div className="home">
        <div className="main">
          <Categories />
          <MainScreen />

          <div>{children}</div>
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
    </div>
  );
};

export default Layout;
