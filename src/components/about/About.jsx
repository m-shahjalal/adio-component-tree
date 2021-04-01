import { Link } from '@reach/router';

const About = () => {
	return (
		<div className='about_section layout_padding'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-6'>
						<div className='tablet'>
							<img
								src='images/tablet-img.png'
								alt='about details'
							/>
						</div>
					</div>
					<div className='col-md-6'>
						<div className='about_taital'>
							<div className='about_text'>
								About{' '}
								<span style={{ color: '#c6610f' }}>Us</span>
							</div>
							<p className='dolor_text'>
								It is a long established fact that a reader will
								be distracted by the readable content of a page
								when looking at its layout. The point of using
								Lorem Ipsum is that it has a more-or-less normal
								distribution of letters,
							</p>
							<div className='read_more'>
								<Link to='#'>Read More</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
