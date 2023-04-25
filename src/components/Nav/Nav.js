import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/icon/christy-le-logo.png";

function Nav(props) {
	// const { pages = [], setCurrentPage, currentPage } = props;

	const menu = [
		{
			id: 1,
			name: "ABOUT",
			scroll: "#about-section"
		},
		{
			id: 2,
			name: "Portfolio",
			scroll: "#portfolio-section"
		},
		{
			id: 3,
			name: "Resume",
			scroll: "#resume-section"
		},
		{
			id: 4,
			name: "Contact",
			scroll: "#contact-section"
		},
	];

	// TODO: Scroll smoothly to certain section

	// const scrollToSection

	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header className="sticky top-0 bg-black text-white md:flex md:justify-between relative z-50">
			<img
				className="text-center pl-5 py-3 h-20 md:h-24 object-cover"
				src={logo}
				alt="Christy's Logo"
			></img>
			<nav
				className="flex flex-col w-full max-w-md min-h-screen z-50"
				ref={navRef}
			>
				{/* Close button */}
				<button
					className="nav-btn nav-close-btn z-20 text-white text-2xl"
					onClick={showNavbar}
				>
					<FaTimes />
				</button>
				<ul className="flex flex-col bg-black w-full h-screen gap-16 text-4xl uppercase items-center justify-center font-semibold z-10">
					{menu.map((menu) => (
						<li
							className={`hover:text-indigo-500 cursor-pointer`}
							key={menu.id}
						>
							<a href={menu.scroll}							>
								{menu.name}
							</a>
						</li>
					))}
				</ul>
			</nav>
			{/* Menu button */}
			<button
				className="nav-btn absolute top-1/2 right-0 flex -translate-y-1/2 p-5 text-xl"
				onClick={showNavbar}
			>
				<FaBars />
			</button>
		</header>
	);
}

export default Nav;
