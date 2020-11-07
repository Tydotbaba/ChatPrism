// import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="container">
            <nav className=" navbar navbar-expand-sm navbar-light border-bottom border-dark mt-1 mb-3 mr-0 pb-3">
              <a href="/" className="navbar-brand"><b>ChatPrism</b></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
              </button>


              <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                <ul className="navbar-nav align-items-end">
                  <li className="nav-item">
                    <a href="/login" className="btn btn-outline-dark my-2 px-5" role="button">Login</a>
                  </li>
                  <li className="nav-item ml-3">
                    <a href="chat.html" className="btn btn-outline-dark mb-2 px-5" role="button">Chat</a>
                  </li>
                  <li className="nav-item ml-3">
                    <a href="about.html" className="btn btn-outline-dark mb-2 px-5" role="button">About</a>
                  </li>
                </ul>
              </div>
            </nav>

          <h3 className="text-center my-4 h3"><b>Wanna Reach Your Loved Ones With Less Data?</b></h3>

          <div className="row">
            <div className="col-lg-4 order-lg-2 px-5 pt-5 text-center">
              <h3 className="h3"><b>Chat, Talk and Connect Without Language Barrier</b></h3>
            </div>

            <div className="col-lg-8 px-5 order-lg-1">
              <div className="embed-responsive embed-responsive-21by9">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/YFhe7EEOnb8" 
                  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen title="video-link">
                </iframe>
              </div>
            </div>
          </div>

          <div className="container row">
            <div className="col-md-4 p-4 pl-5">
              <h5>Key Features:</h5>
              <ul>
                <li>Supports More Than One Audio</li>
                <li>Users Connect Using Only Audio</li>
              </ul>
            </div>

            <div className="col-md-4 order-md-3 p-4 text-center">
              <button className="btn btn-primary px-5">Get Started</button>
            </div>

            <div className="col-md-2 order-md-2"></div>
          </div>

          <footer className="text-center mt-5">
            <p><small>@copy ChatPrism 2020</small></p>
          </footer>
        </div>
    );
}

export default App;