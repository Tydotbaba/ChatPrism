import { Link } from 'react-router-dom'
const Navigation = () => {
	return (
		<nav className="navbar navbar-expand-sm navbar-light border-bottom border-dark mt-1 mb-3 mr-0 pb-3">
          <Link to="/" className="navbar-brand"><b>ChatPrism</b></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar"
            aria-controls="collapsibleNavbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
            <ul className="navbar-nav align-items-end">
              <li className="nav-item">
                <Link to="/login" disabled className="btn btn-outline-dark my-2 px-5" role="button">Login</Link>
              </li>
              <li className="nav-item ml-3">
                <Link to="/chat" className="btn btn-outline-dark mb-2 px-5" role="button">Chat</Link>
              </li>
              <li className="nav-item ml-3">
                <Link to="/about" className="btn btn-outline-dark mb-2 px-5" role="button">About</Link>
              </li>
            </ul>
          </div>
        </nav>
	)
}

export default Navigation;