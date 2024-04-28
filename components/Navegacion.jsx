import Link from "next/link";
// import Image from "next/image";
function Navegacion() {
  return (
    <nav
      style={{ backgroundColor: "#0a9ff6" }}
      className="navbar navbar-expand-lg p-3"
    >
      <div className="container">
        <Link style={{ color: "white" }} className="navbar-brand" href="/">
          <img
            src="https://media.licdn.com/dms/image/C4D0BAQG-sVplQm9jXg/company-logo_200_200/0/1630555304205/megadigitalpy_logo?e=2147483647&v=beta&t=24aonyEA1WpLhqwzp3tO4RxDW92yS61cP_t0zt5NLcE"
            alt="Logo"
            style={{
              width: "50px",
              height: "50px",
              objectFit: "cover",
              borderRadius: "50%",
              marginRight: "10px",
              marginLeft: "10px",
            }}
          />
          MEGADIGITAL
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
}
export default Navegacion;
