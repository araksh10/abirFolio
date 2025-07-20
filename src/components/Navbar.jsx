import Logo from "../assets/logo.svg";
import { motion } from "framer-motion";

const Navbar = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: -50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1 }}
			className="absolute inset-0 h-25 z-10 flex justify-between items-center bg-sky-800 contain-content"
		>
			<div className="flex contain-content">
				<div className="m-2 hover:rotate-12">
					<img className="size-20 " src={Logo} alt="" />
				</div>
				<div className="flex items-center mx-4">
					<h1 className="text-4xl font-extrabold text-sky-400">
						<span className="text-white animate-pulse">Abir</span>Folio
					</h1>
				</div>
			</div>
			<div className="hidden md:block mx-4 text-white font-bold">
				<button className="m-2 p-2 bg-sky-500 rounded-md hover:bg-sky-700 hover:drop-shadow-lg hover:drop-shadow-sky-500 active:bg-sky-950">
					<a href="#about">About</a>
				</button>
				<button className="m-2 p-2 bg-sky-500 rounded-md hover:bg-sky-700 hover:drop-shadow-lg hover:drop-shadow-sky-500 active:bg-sky-950">
					<a href="#skills">Skills</a>
				</button>
				<button className="m-2 p-2 bg-sky-500 rounded-md hover:bg-sky-700 hover:drop-shadow-lg hover:drop-shadow-sky-500 active:bg-sky-950">
					<a href="#projects">Projects</a>
				</button>
				<button className="m-2 p-2 bg-sky-500 rounded-md hover:bg-sky-700 hover:drop-shadow-lg hover:drop-shadow-sky-500 active:bg-sky-950">
					<a href="#contact">Contact</a>
				</button>
			</div>
		</motion.div>
	);
};

export default Navbar;
