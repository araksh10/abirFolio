import { Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
			className="p-8 text-white bg-gradient-to-tr from-slate-900 to-slate-800 rounded-t-4xl shadow-xl mt-10"
			id="contact"
		>
			<h2 className="text-3xl md:text-4xl font-extrabold tracking-wider text-center mb-4">
				Contact the Tech Ronin
			</h2>
			<p className="text-center text-slate-400 mb-6">
				If my blade has impressed you... reach out.
			</p>
			<div className="flex justify-center gap-6">
				<a
					href="mailto:your-email@example.com"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:text-sky-400 transition"
				>
					<Mail size={28} />
				</a>
				<a
					href="https://github.com/araksh10"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:text-sky-400 transition"
				>
					<Github size={28} />
				</a>
				<a
					href="http://www.linkedin.com/in/abir-rakshit"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:text-sky-400 transition"
				>
					<Linkedin size={28} />
				</a>
			</div>
		</motion.div>
	);
};

export default Contact;
