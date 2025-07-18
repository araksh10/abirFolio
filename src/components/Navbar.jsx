import Logo from "../assets/logo.svg";

const Navbar = () => {
	return (
		<div className="flex bg-sky-800 contain-content">
			<div className="m-2">
				<img className="size-20" src={Logo} alt="" />
			</div>
			<div className="flex items-center mx-4">
				<h1 className="text-4xl font-extrabold text-sky-400">
					<span className="text-white animate-pulse">Abir</span>Folio
				</h1>
			</div>
		</div>
	);
};

export default Navbar;
