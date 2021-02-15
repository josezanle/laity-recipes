import Perfil from "./perfil";
import Clima from "./clima";

const PersonalContainer = ({children}) => {
  return (
    <div className="personal">
      {children}
      <Perfil />
      <Clima />
      <style jsx>{`
        .personal {
          width: 100%;
          height: 300px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: green;
          padding: 1em;
        }
      `}</style>
    </div>
  );
};

export default PersonalContainer;
