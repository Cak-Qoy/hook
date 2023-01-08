import ComponentNews from "./ComponentNews";

const Berita = () => {
  return (
    <div className="">
      {/* navigation bar */}
      <div className="py-4">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand text-warning" href="/">
              Navbar
            </a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    General
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/bisnis" id="bisnis">
                    Bisnis
                  </a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-warning text-warning" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>

      {/* isi berita */}
      <div className="mt-5">
        <ComponentNews className="mt-5" />
      </div>
    </div>
  );
};

export default Berita;
