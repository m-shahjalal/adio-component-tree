import About from '../components/about/About';
import Blog from '../components/blog/Blog';
import Customer from '../components/customar/Customar';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

const HomePage = () => {
	return (
		<>
			<Header />
			<About />
			<Blog />
			<Customer />
			<Footer />
		</>
	);
};

export default HomePage;
