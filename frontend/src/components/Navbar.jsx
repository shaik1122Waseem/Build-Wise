function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                Build<span>Wise</span>
            </div>

            <div className="nav-links">
                <a href="#home">Home</a>
                <a href="#how-it-works">How It Works</a>
                <a href="#projects">Projects</a>
                <a href="#about">About</a>
            </div>

            <div className="nav-buttons">
                <button className="login-btn">Login</button>
                <button className="signup-btn">Get Started</button>
            </div>
        </nav>
    );
}

export default Navbar;