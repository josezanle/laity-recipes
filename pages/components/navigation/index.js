import Menu from "./menu";
import SearchInput from "./search-input";

const Navigation = () => {
  return (
    <div className="navigation">
      <Menu />
      <SearchInput />

      <style jsx>{`
        .navigation {
          display: flex;
          width: 100%;
          height: 50px;
          background: aqua;
        }
        h3 {
          color: black;
        }
      `}</style>
    </div>
  );
};

export default Navigation;
