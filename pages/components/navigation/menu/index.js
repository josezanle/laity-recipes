import Link from "next/link";

const Menu = () => {
  return (
    <div className="menu">
      <Link href="/home">
        <a>Inicio</a>
      </Link>

      <Link href="/galeria">
        <a>galeria</a>
      </Link>

      <style jsx>{`
        .menu {
          flex: 7;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background: white;
        }
        a {
          margin: 0 5px;
          color: black;
        }
      `}</style>
    </div>
  );
};

export default Menu;
