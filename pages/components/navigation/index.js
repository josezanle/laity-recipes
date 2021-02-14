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
          background: white;
          padding: 1em;
        }
        h3 {
          color: black;
        }
      `}</style>
    </div>
  );
};

export default Navigation;
