import Navigation from '../navigation/navigation'
import Footer from '../footer/footer'

const About = () => {
	return (
		<div className='container'>
			<Navigation />
			<h3 class="text-center my-4 mx-2 h3"><b>Wanna Reach Your Loved Ones With Less Data?</b></h3>
 
			<div class="p-4 ">
				<h4>Key Features:</h4>
				<ul class="abt">
					<li>Supports More than One Audio</li>
					<li>Users Connect Using Only Audio</li>
				</ul>
			</div>

			<div class="container">
				<h4 class="">Problems Solved:</h4>
				<ul class="abt mx-4 ">
					<li>
						Help to make communications easy between individuals from different parts with different languages. 
					</li>
					<li>
						Improve communications skills and confidence of individuals while they are comfortable speaking
						language they know 
					</li>
					<li>
						Remove communnication barrier (like needing a translator) and help people communicate easier.
					</li>
					<li>
						Solve the issue of data consumption that puts people off using Zoom, and improve 
						on the issue of "no avenue to provide feedback" that limits Mixir usage.
					</li>
				</ul>
			</div>

			<div class="text-center mb-5 pb-5">
				<h4 class="">FAQs</h4>
			</div>

			<Footer />
		</div>
	)
}

export default About;