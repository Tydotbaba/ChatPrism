import Navigation from '../navigation/navigation'
import Footer from '../footer/footer'

const Chat = () => {
	return (
		<div className='container'>
			<Navigation />
			<div className="text-center">

				<button className="btn btn-primary mt-5 mx-5 px-5">Create a Meeting</button>

				<button className="btn btn-primary mt-5 mx-5 px-5">Join a Meeting</button>

			</div>

			<div className="container text-center my-5">
				<div className="embed-responsive embed-responsive-21by9">
				  <iframe className="embed-responsive-item" title='none' src="..."></iframe>
				</div>
			</div>

			<Footer />
		</div>
	)
}

export default Chat;