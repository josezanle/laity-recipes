import Link from "next/link";

const Bienvenidos = () => {
  return (
    <div className="body">
      <div className="box">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="seedling"
          class="svg-inline--fa fa-seedling fa-w-16"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M64 96H0c0 123.7 100.3 224 224 224v144c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V320C288 196.3 187.7 96 64 96zm384-64c-84.2 0-157.4 46.5-195.7 115.2 27.7 30.2 48.2 66.9 59 107.6C424 243.1 512 147.9 512 32h-64z"
          ></path>
        </svg>
        <h2>Bienvenidos</h2>
        <button>
          <Link href="/home">
            <a>Home</a>
          </Link>
        </button>
      </div>

      <style jsx>{`
        .body {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100vw;
          height: 100vh;
        }

        .box {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-flow: column;
          width: 300px;
          height: 400px;
        }

        svg {
          width: 60px;
          height: 60px;
          color: grey;
        }
        h2 {
          color: grey;
          margin-bottom: 2em;
        }
        a {
          color: white;
        }

        button {
          background: #000;
          padding: 0.5em 1.5em;
          border-radius: 0.5em;
          box-shadow: 3px 3px 5px rgb(43, 33, 33);
          outline: none;
          border: none;
          margin-bottom: 2em;
          color: silver;
        }

        button:hover {
          cursor: pointer;
          background: rgb(19, 19, 19);
        }
      `}</style>
    </div>
  );
};

export default Bienvenidos;
