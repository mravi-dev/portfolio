import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <h1>
            <FaUser /> My Portfolio
          </h1>
        </Link>
      </div>
      <ul>
        <li>
          <Link to="aboutme">About Me</Link>
        </li>
        <li>
          <Link to="skills">Skills</Link>
        </li>
        <li>
          <Link to="experiance">Experiance</Link>
        </li>

        <li>
          <Link to="recommendations">Recommendations</Link>
        </li>
        <li>
          <Link to="contactme">Contact Me</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
