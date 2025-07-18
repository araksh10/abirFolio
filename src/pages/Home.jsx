import { motion } from "framer-motion";

const Home = () => {
	return (
		<section className="w-full h-screen bg-black text-white flex flex-col justify-center items-center relative overflow-hidden">
			<motion.h1
				className="text-4xl md:text-6xl font-extrabold text-center text-red-500"
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
			>
				Abir Rakshit
			</motion.h1>

			<motion.p
				className="mt-4 text-lg md:text-2xl text-green-300 italic"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.2, duration: 1 }}
			>
				Samurai Coder. Ninja of the Frontend. Shadow Hacker.
			</motion.p>

			<motion.div
				className="mt-6 px-6 py-2 bg-sky-700 rounded-xl font-bold shadow-lg hover:bg-sky-500 transition"
				whileHover={{ scale: 1.1 }}
			>
				<a href="#projects">View My Missions</a>
			</motion.div>
		</section>
	);
};

export default Home;
