import Contact from '../contact/Contact';
import Form from '../from/Form';
import Map from '../map/Map';

const Footer = () => {
	return (
		<div class='footer_section layout_padding'>
			<div class='container'>
				<Contact />
				<div class='enput_bt'>
					<div class='row'>
						<Form />
						<Map />
					</div>
				</div>
				<div class='copyright_section'>
					<p class='copyright_text'>
						created components tree by{' '}
						<a href='https://shahjalal.com'>Shahjalal</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
