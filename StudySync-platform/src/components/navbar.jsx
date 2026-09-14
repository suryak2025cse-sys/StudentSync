function navbar() {
    return (
        <nav className="navbar">
      <h2 className="logo">StudySync</h2>

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/tasks">Tasks</a>
        <a href="/subjects">DSA</a>
        <a href="/notes">Coding</a>
        <a href="/notes">Web dev</a>
        <a href="/profile">Profile</a>
      </div>

      <button className="login-btn">Login</button>
    </nav>
    );
}
export default navbar;