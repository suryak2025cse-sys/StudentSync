import logo from "../assets/logo.jpg";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo-container">
        <img
          src={logo}
          alt="StudySync Logo"
          className="logo-image"
        />
        <h2 className="logo">  StudySync</h2>
      </div>

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/tasks">Tasks</a>
        <a href="/subjects">Subjects</a>
        <a href="/notes">Notes</a>
        <a href="/profile">Profile</a>
      </div>

      <button className="login-btn">
        Login
      </button>

    </nav>
  );
}

export default Navbar;