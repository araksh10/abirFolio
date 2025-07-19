import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./pages/About";
import Home from "./pages/Hero";

function App() {
	return (
		<div className="bg-sky-950">
			{/* <Navbar /> */}
			{/* <Home /> */}
			<Hero />
			<About />
			<Skills />
			<Projects />
			<Contact />
		</div>
	);
}

export default App;
