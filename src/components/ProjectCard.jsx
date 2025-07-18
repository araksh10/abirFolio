import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const ProjectCard = ({ title, image, description, tech, repo, live }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			viewport={{ once: true }}
			className="bg-[#0f172a] p-5 rounded-2xl shadow-lg flex flex-col"
		>
			<img
				src={image}
				alt={title}
				className="w-full h-48 object-cover rounded-xl mb-4"
			/>
			<h3 className="text-white text-xl font-bold mb-2">{title}</h3>
			<p className="text-gray-300 text-sm mb-3">{description}</p>
			<div className="flex flex-wrap gap-2 text-xs text-sky-400 font-mono mb-4">
				{tech.map((t, i) => (
					<span key={i} className="bg-sky-900 px-2 py-1 rounded-full">
						{t}
					</span>
				))}
			</div>
			<div className="mt-auto flex gap-4 text-white">
				{repo && (
					<a href={repo} target="_blank" rel="noopener noreferrer">
						<Github className="hover:text-sky-400" />
					</a>
				)}
				{live && (
					<a href={live} target="_blank" rel="noopener noreferrer">
						<ExternalLink className="hover:text-sky-400" />
					</a>
				)}
			</div>
		</motion.div>
	);
};

export default ProjectCard;
