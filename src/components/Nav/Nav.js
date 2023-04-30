import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/icon/christy-le-logo-black.png";

function Nav() {

	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

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

	return (
		<header className="sticky top-0 bg-hero bg-top bg-cover text-black md:flex md:justify-between relative z-50">
			<img
				className="text-center pl-5 py-3 h-20 md:h-24 object-cover hover:cursor-pointer hover:opacity-50 transition ease-in-out hover:translate-y-0.5 hover:scale-110 duration-300"
				src={logo}
				alt="Christy's Logo"
				onClick={() => {window.scrollTo(0, 0)}}
			></img>
			<nav
				className="flex flex-col w-full max-w-md min-h-screen z-50"
				ref={navRef}
			>
				{/* Close button */}
				<button
					className="nav-btn nav-close-btn z-20 text-white text-2xl hover:text-green-400"
					onClick={showNavbar}
				>
					<FaTimes />
				</button>
				<ul className="flex flex-col bg-neutral-800 w-full h-screen gap-16 text-4xl uppercase text-white items-center justify-center font-semibold z-10">
					{menu.map((menu) => (
						<li
							className={`hover:text-green-400 transition ease-in-out hover:translate-y-1 hover:scale-110 duration-300 cursor-pointer`}
							key={menu.id}
						>
							<a href={menu.scroll} onClick={showNavbar}>
								{menu.name}
							</a>
						</li>
					))}
				</ul>
			</nav>
			{/* Menu button */}
			<button
				className="nav-btn absolute top-1/2 right-0 flex -translate-y-1/2 p-5 text-xl hover:opacity-50"
				onClick={showNavbar}
			>
				<FaBars />
			</button>
		</header>
	);
}

export default Nav;
