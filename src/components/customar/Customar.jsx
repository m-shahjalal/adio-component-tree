import img from '../../assets/images/img-3.png';

const Customer = () => {
	return (
		<>
			<div class='clients_section layout_padding'>
				<div class='container'>
					<div class='row'>
						<div class='col-sm-12'>
							<div class='client_text'>
								OUR CLIENT{' '}
								<span style={{ color: '#c6610f' }}>REVIEW</span>
							</div>
							<p class='using_text'>
								It is a long established fact that a reader will
								be distracted by the readable content of a page
								when looking at its layout. The point of using
								Lorem Ipsum is that it has a more-or-less normal
								distribution of letters, as opposed to using
								'Content here, content here', making it
							</p>
						</div>
					</div>
				</div>
			</div>

			<div class='clients_section_2 layout_padding'>
				<div
					id='carouselExampleIndicators'
					class='carousel slide'
					data-ride='carousel'>
					<ol class='carousel-indicators'>
						<li
							data-target='#carouselExampleIndicators'
							data-slide-to='0'
							class='active'></li>
						<li
							data-target='#carouselExampleIndicators'
							data-slide-to='1'></li>
						<li
							data-target='#carouselExampleIndicators'
							data-slide-to='2'></li>
					</ol>
					<div class='carousel-inner'>
						<div class='carousel-item active'>
							<div class='container'>
								<div class='client_img'>
									<img src={img} alt='client' />
								</div>
								<h1 class='johan_text'>JOHN DUE</h1>
								<p class='adiser_text'>(adiser)</p>
								<p class='long_text'>
									It is a long established fact that a reader
									will be distracted by the readable content
									of a page when looking at its layout. The
									point of using Lorem Ipsum is that it has a
									more-or-less normal distribution of letters,
									as opposed to
								</p>
							</div>
						</div>
						<div class='carousel-item'>
							<div class='container'>
								<div class='client_img'>
									<img src={img} alt='client' />
								</div>
								<h1 class='johan_text'>JOHN DUE</h1>
								<p class='adiser_text'>(adiser)</p>
								<p class='long_text'>
									It is a long established fact that a reader
									will be distracted by the readable content
									of a page when looking at its layout. The
									point of using Lorem Ipsum is that it has a
									more-or-less normal distribution of letters,
									as opposed to
								</p>
							</div>
						</div>
						<div class='carousel-item'>
							<div class='container'>
								<div class='client_img'>
									<img src={img} alt='client' />
								</div>
								<h1 class='johan_text'>JOHN DUE</h1>
								<p class='adiser_text'>(adiser)</p>
								<p class='long_text'>
									It is a long established fact that a reader
									will be distracted by the readable content
									of a page when looking at its layout. The
									point of using Lorem Ipsum is that it has a
									more-or-less normal distribution of letters,
									as opposed to
								</p>
							</div>
						</div>
					</div>
					<a
						class='carousel-control-prev'
						href='#carouselExampleIndicators'
						role='button'
						data-slide='prev'>
						<span
							class='carousel-control-prev-icon'
							aria-hidden='true'></span>
						<span class='sr-only'>Previous</span>
					</a>
					<a
						class='carousel-control-next'
						href='#carouselExampleIndicators'
						role='button'
						data-slide='next'>
						<span
							class='carousel-control-next-icon'
							aria-hidden='true'></span>
						<span class='sr-only'>Next</span>
					</a>
				</div>
			</div>
		</>
	);
};

export default Customer;
