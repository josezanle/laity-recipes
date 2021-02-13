const Categories = () => {
  return (
    <div className="categories">
      <h3>Ensalas</h3>
      <h3>Salsas</h3>
      <h3>Cookies</h3>
      <h3>Tortas</h3>
      <h3>Mermeladas</h3>
      <style jsx>{`
        .categories {
          width: 100%;
          height: 100%;
          flex: 2;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-flow: column;
          background-image: linear-gradient(15deg, #13547a 0%, #80d0c7 100%);
          border-radius: 1em;
        }
        h3 {
          width: 100%;
          color: white;
          margin: 0.3em 0;
          padding: 0 0 0 2em;
          font-weight: 100;
        }
      `}</style>
    </div>
  );
};

export default Categories;
