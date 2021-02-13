const Muro = () => {
  return (
    <div className="muro">
      <h3>hola desde muro soy scrollable y mostrare varios componentes</h3>
      <style jsx>{`
        .muro {
          width: 100%;
          height: 100%;
          flex: 8;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-flow: column;
          background: pink;
        }
        h3 {
          color: black;
        }
      `}</style>
    </div>
  );
};

export default Muro;
