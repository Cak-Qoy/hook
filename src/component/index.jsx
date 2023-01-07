
import ComponentNews from "./ComponentNews";

const Berita = () => {
  return (
    <div class="">
      {/* navigation bar */}
      <div class="py-4">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div class="container-fluid">
            <a class="navbar-brand text-warning" href="/">
              Navbar
            </a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">
                    General
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/bisnis" id="bisnis">
                    Bisnis
                  </a>
                </li>
              </ul>
              <form class="d-flex" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-warning text-warning" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>

      {/* isi berita */}
      <div class="mt-5">
        <ComponentNews class="mt-5" />
      </div>
    </div>
  );
};

export default Berita;
