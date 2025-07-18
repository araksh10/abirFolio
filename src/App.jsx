import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
	return (
		<div className="bg-sky-950">
			{/* <Navbar /> */}
			<Home />
			<About />
			<Skills />
			<Projects />
			<Contact />
		</div>
	);
}

export default App;
