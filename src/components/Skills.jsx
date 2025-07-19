import { motion } from "framer-motion";
import htmlImg from "../assets/skills/html.png";
import cssImg from "../assets/skills/css.png";
import javascriptImg from "../assets/skills/javascript.png";
import reactImg from "../assets/skills/react.png";
import tailwindImg from "../assets/skills/tailwind.png";
import nodeImg from "../assets/skills/node.png";
import mongodbImg from "../assets/skills/mongodb.png";
import reduxImg from "../assets/skills/redux.png";
import graphqlImg from "../assets/skills/graphql.png";
import apolloImg from "../assets/skills/apollo.png";
import gitImg from "../assets/skills/git.png";
import githubImg from "../assets/skills/github.png";
import mysqlImg from "../assets/skills/mysql.png";
import kaliImg from "../assets/skills/kali.png";
import mintImg from "../assets/skills/mint.png";
import ubuntuImg from "../assets/skills/ubuntu.png";
import vscodeImg from "../assets/skills/vscode.png";
import win11Img from "../assets/skills/win11.png";
import webstormImg from "../assets/skills/webstorm.png";
import bootstrapImg from "../assets/skills/bootstrap.png";
import angularImg from "../assets/skills/angular.png";

const skills = [
	{ name: "React", icon: `${reactImg}` },
	{ name: "HTML", icon: `${htmlImg}` },
	{ name: "CSS", icon: `${cssImg}` },
	{ name: "JavaScript", icon: `${javascriptImg}` },
	{ name: "Redux", icon: `${reduxImg}` },
	{ name: "Node.js", icon: `${nodeImg}` },
	{ name: "AngularJS", icon: `${angularImg}` },
	{ name: "Tailwind", icon: `${tailwindImg}` },
	{ name: "BootStrap", icon: `${bootstrapImg}` },
	{ name: "MongoDB", icon: `${mongodbImg}` },
	{ name: "MySQL", icon: `${mysqlImg}` },
	{ name: "GraphQL", icon: `${graphqlImg}` },
	{ name: "Apollo", icon: `${apolloImg}` },
	{ name: "Git", icon: `${gitImg}` },
	{ name: "GitHub", icon: `${githubImg}` },
	{ name: "VS Code", icon: `${vscodeImg}` },
	{ name: "WebStorm", icon: `${webstormImg}` },
	{ name: "Windows", icon: `${win11Img}` },
	{ name: "Kali Linux", icon: `${kaliImg}` },
	{ name: "Linux Mint", icon: `${mintImg}` },
	{ name: "Ubuntu", icon: `${ubuntuImg}` },
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
