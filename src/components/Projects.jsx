import ProjectCard from "./ProjectCard";
import animgel from "../assets/projects/animgel.png";
import portfolio from "../assets/projects/portfolio.png";

const projects = [
	{
		title: "Animgel",
		image: `${animgel}`,
		description:
			"A fullstack GraphQL-based anime database app featuring Studio, Genre, and dynamic filters.",
		tech: ["React", "GraphQL", "MongoDB", "Tailwind"],
		repo: "https://github.com/yourusername/animgel",
		live: "https://animgel.netlify.app",
	},
	{
		title: "Portfolio Website",
		image: `${portfolio}`,
		description:
			"Your personal tech-ninja dojo showcasing your journey, skills, and scrolls.",
		tech: ["React", "Tailwind", "Framer Motion"],
		repo: "https://github.com/yourusername/portfolio",
		live: "https://yourname.dev",
	},
	// Add more projects
];

const Projects = () => {
	return (
		<section className="bg-black py-20 px-6 md:px-20" id="projects">
			<h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
				Legendary Battles ⚔️
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{projects.map((proj, idx) => (
					<ProjectCard key={idx} {...proj} />
				))}
			</div>
		</section>
	);
};

export default Projects;
