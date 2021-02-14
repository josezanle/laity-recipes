import PersonalContainer from "../personal-container";

const Muro = () => {
  return (
    <div className="muro">
      <PersonalContainer />
      <style jsx>{`
        .muro {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-flow: column;
          background: yellow;
          overflow-y: scroll;
        }
        h3 {
          color: black;
        }
      `}</style>
    </div>
  );
};

export default Muro;