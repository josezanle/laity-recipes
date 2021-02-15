import MainScreen from "../main-screen";
import Categories from "../categories";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Categories />
      <MainScreen>{children}</MainScreen>

      <style jsx>{`
        .layout {
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

export default Layout;
