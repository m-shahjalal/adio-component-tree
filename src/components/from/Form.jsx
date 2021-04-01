const Form = () => {
	return (
		<div class='col-md-6'>
			<div class='input_main'>
				<div class='container'>
					<form action='/action_page.php'>
						<div class='form-group'>
							<input
								type='text'
								class='email-bt'
								placeholder='NAME'
								name='Name'
							/>
						</div>
						<div class='form-group'>
							<input
								type='text'
								class='email-bt'
								placeholder='EMAIL'
								name='Email'
							/>
						</div>
						<div class='form-group'>
							<input
								type='text'
								class='email-bt'
								placeholder='PHONE NUMBER'
								name='Email'
							/>
						</div>
						<form action='/action_page.php'>
							<div class='form-group'>
								<textarea
									class='massage-bt'
									placeholder='MASSAGE'
									rows='5'
									id='comment'
									name='text'></textarea>
							</div>
						</form>
					</form>
				</div>
				<div class='send_bt_main'>
					<div class='left'>
						<div class='send_bt'>
							<a href='localhost'>SEND</a>
						</div>
					</div>
					<div class='right'>
						<div class='social_icon'>
							<ul>
								<li>
									<a href='https://facebook.com'>
										<img
											src='images/fb-icon.png'
											alt='facebook'
										/>
									</a>
								</li>
								<li>
									<a href='https://facebook.com'>
										<img
											src='images/twitter-icon.png'
											alt='twitter'
										/>
									</a>
								</li>
								<li>
									<a href='https://facebook.com'>
										<img
											src='images/in-icon.png'
											alt='linked-in'
										/>
									</a>
								</li>
								<li>
									<a href='https://facebook.com'>
										<img
											src='images/instagram-icon.png'
											alt='instagram'
										/>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Form;
