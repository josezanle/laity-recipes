const InteractionsContainer = () => {
  return (
    <div className="interactions-container">
      <h4>hola desde profile container</h4>
      <style jsx>{`
        .interactions-container {
          width: 100%;
          height: 100%;
          flex: 9;
          display: flex;
          justify-content: center;
          align-items: center;
          background: yellow;
        }
        h3 {
          color: black;
        }
      `}</style>
    </div>
  );
};

export default InteractionsContainer;
