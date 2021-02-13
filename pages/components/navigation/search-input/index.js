const SearchInput = () => {
  return (
    <div className="search-input">
      <input type="text" name="text" value="search" placeholder="Buscar" />

      <style jsx>{`
        .search-input {
          flex: 3;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background: white;
        }
        input {
          background: white;
          width: 100%;
          border: none;
          outline: none;
          border-radius: 5px;
          border: 2px solid aqua;
        }
      `}</style>
    </div>
  );
};

export default SearchInput;
