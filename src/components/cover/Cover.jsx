import { Link } from '@reach/router';
import banner from '../../assets/images/banner-img1.png';

const Cover = () => {
	return (
		<div className='row'>
			<div className='banner_section layout_padding'>
				<section>
					<div
						id='main_slider'
						className='section carousel slide banner-main'
						data-ride='carousel'>
						<div className='carousel-inner'>
							<div className='carousel-item active'>
								<div className='container'>
									<div className='row marginii'>
										<div className='col-md-5 col-sm-12'>
											<div className='carousel-sporrt_text'>
												<h1 className='banner_taital'>
													Classified Ads
												</h1>
												<p className='lorem_text'>
													It is a long established
													fact that a reader will be
													distracted by the readable
													content of a page when
													looking at its layout. The
													point of using Lorem Ipsum
													is that it has a
													more-or-less normal
													distribution of letters,
												</p>
												<div className='ads_bt'>
													<Link to='#'>Ads Now</Link>
												</div>
												<div className='contact_bt'>
													<Link to='#'>
														Contact Us
													</Link>
												</div>
											</div>
										</div>
										<div className='col-md-7 col-sm-12'>
											<div className='img-box'>
												<figure>
													<img
														src={banner}
														style={{
															maxWidth: '100%',
														}}
														alt='cover'
													/>
												</figure>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='carousel-item'>
								<div className='container'>
									<div className='row marginii'>
										<div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
											<div className='carousel-sporrt_text'>
												<h1 className='banner_taital'>
													Classified Ads
												</h1>
												<p className='lorem_text'>
													It is a long established
													fact that a reader will be
													distracted by the readable
													content of a page when
													looking at its layout. The
													point of using Lorem Ipsum
													is that it has a
													more-or-less normal
													distribution of letters,
												</p>
												<div className='ads_bt'>
													<Link to='#'>Ads Now</Link>
												</div>
												<div className='contact_bt'>
													<Link to='#'>
														Contact Us
													</Link>
												</div>
											</div>
										</div>
										<div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
											<div className='img-box'>
												<figure>
													<img
														src={banner}
														style={{
															maxWidth: '100%',
														}}
														alt='banner'
													/>
												</figure>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='carousel-item'>
								<div className='container'>
									<div className='row marginii'>
										<div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
											<div className='carousel-sporrt_text'>
												<h1 className='banner_taital'>
													Classified Ads
												</h1>
												<p className='lorem_text'>
													It is a long established
													fact that a reader will be
													distracted by the readable
													content of a page when
													looking at its layout. The
													point of using Lorem Ipsum
													is that it has a
													more-or-less normal
													distribution of letters,
												</p>
												<div className='ads_bt'>
													<Link to='#'>Ads Now</Link>
												</div>
												<div className='contact_bt'>
													<Link to='#'>
														Contact Us
													</Link>
												</div>
											</div>
										</div>
										<div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
											<div className='img-box'>
												<figure>
													<img
														src={banner}
														style={{
															maxWidth: '100%',
														}}
														alt='banner'
													/>
												</figure>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Cover;
