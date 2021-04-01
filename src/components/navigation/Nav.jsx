import { Link } from '@reach/router';
import logo from '../../assets/images/logo.png';

const Nav = () => {
	return (
		<div className='cs-row position-fixed'>
			<div className='cs-col'>
				<div className='logo navbar-brand'>
					<Link to='/'>
						<img src={logo} alt='logo' />
					</Link>
				</div>
			</div>
			<div className='cs-col cs-nav'>
				<div className='menu-area'>
					<nav className='navbar navbar-expand-lg navbar-light'>
						<button
							className='navbar-toggler collapsed cs-btn'
							type='button'
							data-toggle='collapse'
							data-target='#navbarSupportedContent'
							aria-controls='navbarSupportedContent'
							aria-expanded='false'
							aria-label='Toggle navigation'>
							<i className='fa fa-bars'></i>
						</button>
						<div
							className='collapse navbar-collapse'
							id='navbarSupportedContent'>
							<ul className='navbar-nav'>
								<li className='nav-item p-2 active'>
									<Link className='nav-link' to='home'></Link>
								</li>
								<li className='nav-item p-2'>
									<Link className='nav-link' to='about'>
										About
									</Link>
								</li>
								<li className='nav-item p-2'>
									<Link className='nav-link' to='client'>
										Client
									</Link>
								</li>
								<li className='nav-item p-2'>
									<Link className='nav-link' to='blog'>
										Blog
									</Link>
								</li>
								<li className='nav-item p-2'>
									<Link className='nav-link' to='contact'>
										Contact
									</Link>
								</li>
								<li className='nav-item p-2'>
									<Link
										className='nav-link border rounded'
										to='login'>
										Login
									</Link>
								</li>
								<li className='nav-item p-2'>
									<Link
										className='bg-dark text-white border rounded nav-link '
										to='register'>
										Register
									</Link>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default Nav;
