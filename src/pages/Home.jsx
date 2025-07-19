import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import About from "../components/About";

const Home = () => {
	return (
		<div>
			<Hero />
			<About />
			<Skills />
			<Projects />
			<Contact />
		</div>
	);
};

export default Home;
