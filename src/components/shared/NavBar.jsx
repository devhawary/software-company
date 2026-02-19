import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" href="/">
          <img
            src="/images/home-page/Header-images/logo.svg"
            alt="logo"
            width="100"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto ms-3">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                href="/insights"
              >
                Insights
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/careers">
                Careers
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/">
                Team
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Buy Now
              </a>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <i className="bi bi-globe"></i>
            <span className="ms-2">EN</span>
            <button
              className="btn btn-success d-flex align-items-center ms-2"
              type="button"
            >
              Send inquiry
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
