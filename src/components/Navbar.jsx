function Navbar({ darkMode, setDarkMode }) {
    return (
        <nav className="container navbar navbar-expand-lg  bg-dark bg-opacity-75 rounded-4 shadow-lg">
            <div className="container">
                <a className="navbar-brand fs-4 fw-bold" href="#">Areeba Ahmad</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link fs-4 fw-bold" aria-current="page" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link fs-4 fw-bold" href="#skills">Skills</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link fs-4 fw-bold" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link fs-4 fw-bold" href="#contact">Contact</a>
                        </li>
                    </ul>
                    <button className="btn border-0 text-warning" onClick={() => setDarkMode(!darkMode)}>
                        <i className={darkMode ? 'bi bi-sun' : 'bi bi-moon'}></i>
                    </button>
                </div>
            </div>
        </nav>
    )
}
export default Navbar