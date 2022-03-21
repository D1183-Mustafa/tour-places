import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css"
function Navbar() {
  return (
    <div>
      <div className="navbar-style d-flex align-items-center justify-content-center">
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a className="nav-link" href="#">
              ABOUT US
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              FOR YOU
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              SERVİCES
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">BLOG</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">VLOG</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
