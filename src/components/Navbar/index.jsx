import { useState, useEffect, useRef } from "react";
import { HashLink } from "react-router-hash-link";
import { Link, useLocation } from "react-router-dom";
import "./index.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      (!buttonRef.current || !buttonRef.current.contains(event.target))
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isHomePage = location.pathname === "/";

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>
          {isHomePage ? (
            <HashLink smooth to="/#homeSection" className="link-react">
              Tarun Kumar
            </HashLink>
          ) : (
            <Link to="/" className="link-react">
              Tarun Kumar
            </Link>
          )}
        </h1>
      </div>
      <ul ref={menuRef} className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
        <li>
          <HashLink smooth to="/#aboutSection" className="link-react">
            About
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#skillsSection" className="link-react">
            Skills
          </HashLink>
        </li>
        <li>
          <Link to="/experience" className="link-react">
            Experience
          </Link>
        </li>
        <li>
          <Link to="/projects" className="link-react">
            Projects
          </Link>
        </li>
        <li>
          <HashLink smooth to="/#contactSection" className="link-react">
            Contact
          </HashLink>
        </li>
      </ul>
      <button
        ref={buttonRef}
        type="button"
        className="hamburger"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>
    </nav>
  );
};

export default Navbar;
