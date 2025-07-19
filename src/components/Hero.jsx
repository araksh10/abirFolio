// components/Hero.jsx
import { motion } from "framer-motion";
import bgImage from "../assets/avatar.jpg";
import "../styles/custom_1.css";

const Hero = () => {
	return (
		<div
			className="relative h-screen w-full bg-cover bg-center flex items-center justify-center text-white"
			style={{ backgroundImage: `url(${bgImage})` }}
		>
			<div className="h-full w-full backdrop-blur-lg py-30 md:p-0 lg:px-30">
				<div className="customShape flex justify-center items-center  bg-sky-300/25 backdrop-blur-md h-full w-full">
					<div className="bg-black/60 p-8 rounded-xl shadow-lg text-center">
						<motion.h1
							initial={{ opacity: 0, y: -50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1 }}
							className="text-4xl md:text-6xl font-bold font-mono"
						>
							Abir Rakshit
						</motion.h1>
						<motion.p
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.5, duration: 1 }}
							className="mt-4 text-lg md:text-xl italic"
						>
							JS Web Developer ⚔️ | Full Day Training 💻 | MERN Stack 🤞🏽
						</motion.p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
