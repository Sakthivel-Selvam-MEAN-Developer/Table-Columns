import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <nav className="container navbar ps-3 pe-3 navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Columns</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <Link to='/buttons'>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Buttons</a>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export { NavBar }