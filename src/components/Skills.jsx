import { motion } from "framer-motion";
import htmlImg from "../assets/skills/html.png";
import cssImg from "../assets/skills/css.png";
import javascriptImg from "../assets/skills/javascript.png";
import reactImg from "../assets/skills/react.png";
import tailwindImg from "../assets/skills/tailwind.png";
import nodeImg from "../assets/skills/node.png";

const skills = [
	{ name: "HTML", icon: `${htmlImg}` },
	{ name: "CSS", icon: `${cssImg}` },
	{ name: "JavaScript", icon: `${javascriptImg}` },
	{ name: "React", icon: `${reactImg}` },
	{ name: "Tailwind", icon: `${tailwindImg}` },
	{ name: "Node.js", icon: `${nodeImg}` },
	// Add more: MongoDB, GraphQL, Git, etc.
];

const Skills = () => {
	return (
		<section className="bg-black py-20 px-6 md:px-20" id="skills">
			<h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
				Shinobi Arsenal ⚙️
			</h2>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-10 place-items-center">
				{skills.map((skill, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, scale: 0.8 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.3, delay: index * 0.1 }}
						viewport={{ once: true }}
						className="flex flex-col items-center text-white"
					>
						<img
							src={skill.icon}
							alt={skill.name}
							className="w-16 h-16 md:w-20 md:h-20"
						/>
						<p className="mt-2 text-sm md:text-base font-semibold">
							{skill.name}
						</p>
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default Skills;
