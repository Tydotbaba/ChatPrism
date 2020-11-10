import Navigation from '../navigation/navigation'
import Footer from '../footer/footer'

function Home() {
    return (
        <div className="container container-m h-100">
            <Navigation />

            <h3 className="text-center my-4"><b>Wanna Reach Your Loved Ones With Less Data?</b></h3>

            <div className="row">
              <div className="col-md-4 order-2 align-self-center text-center">
                <h3 className="h3"><b>Chat, Talk and Connect Without Language Barrier</b></h3>
              </div>

            <div className="col-md-8 order-1">
              <div className="embed-responsive embed-responsive-21by9">
                <iframe width="560" height="315" 
                	src="https://www.youtube.com/embed/do_KkvT7le0" 
                	frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
                	encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm p-4 pl-5">
              <h5>Key Features:</h5>
              <ul>
                <li>Supports More Than One Audio</li>
                <li>Users Connect Using Only Audio</li>
              </ul>
            </div>

            <div className="col-sm order-md-2 p-3 text-right">
              <button className="btn btn-primary px-5">Get Started</button>
            </div>

            <div className="col-sm order-md-3"></div>
          </div>

          <Footer />
        </div>
    );
}

export default Home;