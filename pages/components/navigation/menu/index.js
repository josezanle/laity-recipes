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
      <Link href="/galeria">
        <a>galeria</a>
      </Link>
      <Link href="/galeria">
        <a>galeria</a>
      </Link>

      <style jsx>{`
        .menu {
          flex: 6;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
        }
        a {
          margin: 0 1em;
          color: aqua;
          font-weight: 900;
          font-size: 1.5em;
        }
      `}</style>
    </div>
  );
};

export default Menu;
