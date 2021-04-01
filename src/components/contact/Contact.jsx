import map from '../../assets/images/map-icon.png';
import phone from '../../assets/images/call-icon.png';
import mail from '../../assets/images/mail-icon.png';

const Contact = () => {
	return (
		<div class='row'>
			<div class='col-sm-3'>
				<div class='footer_contact'>Contact Us</div>
			</div>
			<div class='col-sm-3'>
				<div class='location_text'>
					<img src={map} alt='map' />

					<span style={{ paddingLeft: '10px' }}>Locations</span>
				</div>
			</div>
			<div class='col-sm-3'>
				<div class='location_text'>
					<img src={phone} alt='phone' />
					<span style={{ paddingLeft: '10px' }}>Locations</span>
				</div>
			</div>
			<div class='col-sm-3'>
				<div class='location_text'>
					<img src={mail} alt='mail' />
					<span style={{ paddingLeft: '10px' }}>Locations</span>
				</div>
			</div>
		</div>
	);
};

export default Contact;
