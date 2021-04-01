import { Link } from '@reach/router';
import img from '../../assets/images/img-1.png';
import img2 from '../../assets/images/img-2.png';

const Blog = () => {
	return (
		<div className='blog_section layout_padding'>
			<div className='about_section_2 '>
				<div className='container'>
					<div className='row'>
						<div className='col-sm-12'>
							<div className='classNameified_text'>
								ONE OF THE BEST{' '}
								<span style={{ color: '#c6610f' }}>
									CLASSIFIED
								</span>
							</div>
						</div>
					</div>
					<div className='row front'>
						<div className='col-md-2'>
							<div className='about_img'>
								<img src={img} alt='blog post' />
							</div>
						</div>
						<div className='col-md-10'>
							<h1 className='fron_text'>
								FRONT END MULTICURRENCY
							</h1>
							<p className='using_text'>
								using Lorem Ipsum is that it has a more-or-less
								normal distribution of letters, as opposed to
								using 'Content here, content here', making it
								look like readable English. Many desktop
								publishing packages and web page editors now use
								Lorem Ipsum as their default model
							</p>
						</div>
					</div>
					<div className='row front'>
						<div className='col-md-2'>
							<div className='about_img'>
								<img src={img2} alt='blog post' />
							</div>
						</div>
						<div className='col-md-10'>
							<h1 className='fron_text'>
								FRONT END MULTICURRENCY
							</h1>
							<p className='using_text'>
								using Lorem Ipsum is that it has a more-or-less
								normal distribution of letters, as opposed to
								using 'Content here, content here', making it
								look like readable English. Many desktop
								publishing packages and web page editors now use
								Lorem Ipsum as their default model
							</p>
						</div>
						<div className='red_bt'>
							<Link to='#'>Read More</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;
