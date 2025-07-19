import { motion } from "framer-motion";
import avatar from "../assets/avatar.jpg";

const About = () => {
	return (
		<section
			className="w-full bg-gray-900 text-white py-20 px-4 md:px-20"
			id="about"
		>
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				viewport={{ once: true }}
				className="flex flex-col md:flex-row items-center gap-10"
			>
				<img
					src={avatar}
					alt="avatar"
					className="w-40 h-40 md:w-64 md:h-64 object-cover rounded-full shadow-lg border-e-4 border-blue-500/60"
				/>

				<div>
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						My Ninja Path 🥷
					</h2>
					<p className="text-md md:text-lg leading-relaxed text-gray-300">
						I am <span className="text-sky-400 font-bold">Abir Rakshit</span>, a
						Frontend Web Developer with a dream as fierce as fire. With React,
						Tailwind, and the wisdom of old scrolls, I build web experiences
						that strike fast and stay sharp. I walk the Fullstack path, MERN
						blade in hand, training daily to become the{" "}
						<span className="text-yellow-400">Tech-King</span>.
					</p>
				</div>
			</motion.div>
		</section>
	);
};

export default About;
