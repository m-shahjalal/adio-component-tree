import { Router } from '@reach/router';
import Nav from '../components/navigation/Nav';

import AboutPage from '../pages/AboutPage';
import BlogPage from '../pages/BlogPage';
import ClientPage from '../pages/ClientPage';
import ContactPage from '../pages/ContactPage';
import HomePage from '../pages/HomePage';

const AppRouter = () => {
	return (
		<>
			<Nav />
			<Router>
				<AboutPage path='about' />
				<BlogPage path='blog' />
				<ClientPage path='client' />
				<ContactPage path='contact' />
				<HomePage path='/' />
			</Router>
		</>
	);
};

export default AppRouter;
