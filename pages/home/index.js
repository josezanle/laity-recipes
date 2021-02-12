const Home = () => {
  return (
    <div className="body">
      <div className="hero">
        <div className="menu">
          <div className="icon">
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
            <h3>Laity</h3>
          </div>
          <div className="nav-bar">
            <h3>Home</h3>
            <h3>About</h3>
            <h3>Products</h3>
          </div>
        </div>

        <div className="banner">
          <div className="text">
            <span className="box">
              <h3>Busca tus recetas</h3>
              <p>Ingresa en el buscador lo que quieras cocinar hoy!</p>
            </span>
            <h2>
              Sem magna iaculis parturient commodo feugiat suspendisse fusce
              malesuada, cum volutpat morbi mi mus aliquet non vehicula sagittis
            </h2>
          </div>
          <img src="/images/banner-home.jpg" alt="banner picture" />
        </div>
      </div>

      <style jsx>{`
        .body {
          width: 100vw;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .hero {
          width: 800px;
          height: 470px;
          display: flex;
          flex-flow: column;
          border-radius: 1em;
          padding: 1em;
          border: 5px solid #ebebeb;
          background-image: linear-gradient(
              to top,
              hsla(0, 0%, 100%, 0.7),
              hsla(0, 0%, 100%, 0.7)
            ),
            url(/images/banner-home.jpg);
        }

        .menu {
          width: 100%;
          display: flex;
          flex: 1;
        }
        .icon {
          width: 100%;
          height: 100%;
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        svg {
          width: 30px;
          height: 30px;
        }
        h3 {
          padding: 0.5em;
        }
        .nav-bar {
          width: 100%;
          height: 100%;
          flex: 7;
          display: flex;
          justify-content: flex-end;
        }
        .nav-bar h3 {
          font-size: 1em;
        }

        // ==================================================================

        .banner {
          width: 100%;
          height: 100%;
          display: flex;
          flex: 9;
          border-radius: 1em;
        }
        .text {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-flow: column;
          flex: 1;
          padding: 0 3em;
        }

        .box {
          width: 100%;
          height: 120px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 5px solid silver;
          border-radius: 2em 2em 0 2em;
          background: hsla(0, 0%, 100%, 0.7);
        }
        .box h3,
        .box p {
          margin: 0;
          padding: 0.4em;
        }
        .box h3 {
          color: grey;
        }
        h2 {
          color: grey;
        }

        img {
          flex: 1;
          width: 100%;
          height: 360px;
          border-radius: 67% 33% 92% 8% / 41% 68% 32% 59%;
        }

        //   ====================================================
      `}</style>
    </div>
  );
};

export default Home;
