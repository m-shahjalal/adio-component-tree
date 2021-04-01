import map from '../../assets/images/g.png';

const Map = () => {
	return (
		<div class='col-md-6'>
			<div class='map_section'>
				<div class='row'>
					<div class='col-sm-12'>
						<div class='full map_section'>
							<div id='map'>
								<img src={map} alt='map' />
							</div>
						</div>
					</div>
				</div>
			</div>
			<h1 class='newsletter_text'>Newsletter</h1>
			<div class='input-group mb-3'>
				<input
					type='text'
					class='form-control'
					placeholder='ENTER YOUR MAIL'
					aria-label="Recipient's username"
					aria-describedby='basic-addon2'
				/>
				<div class='input-group-append'>
					<span class='input-group-text' id='basic-addon2'>
						SUBSCRIBE
					</span>
				</div>
			</div>
		</div>
	);
};

export default Map;
