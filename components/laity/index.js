import Logo from "../logo";

const Laity = () => {
  return (
    <div className="laity">
      <Logo />
      <h1>Laity</h1>
      <h3>Hola, somos Laity, una Comunidad para</h3>
      <h3>compartir ricas recetas nutritivas,</h3>
      <h3>unete a nosotros, es gratis,y divertido.</h3>

      <style jsx>{`
        .laity {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-flow: column;
          flex: 1;
          padding: 1em;
        }

        h1 {
          margin: 0;
          color: grey;
        }
        h3 {
          text-transform: uppercase;
          font-size: 0.9em;
          margin: 3px 0;
          padding: 3px;
          background: grey;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default Laity;
