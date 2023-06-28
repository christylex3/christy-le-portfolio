import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/icon/christy-le-logo-white.png";
import resume from "../../assets/resume/christy-le-resume.pdf";

function Nav() {
	const navRef = useRef();
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const handleScroll = () => {
		const currentScrollPos = window.scrollY;

		if (currentScrollPos > prevScrollPos) {
			setVisible(false);
		} else {
			setVisible(true);
		}

		setPrevScrollPos(currentScrollPos);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, [handleScroll, visible]);

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	const menu = [
		{
			id: 1,
			name: "About",
			scroll: "#about-section",
		},
		{
			id: 2,
			name: "Experience",
			scroll: "#experience-section",
		},
		{
			id: 3,
			name: "Portfolio",
			scroll: "#portfolio-section",
		},
		{
			id: 4,
			name: "Contact",
			scroll: "#contact-section",
		},
		{
			id: 5,
			name: "Resume",
			scroll: "",
		},
	];

	return (
		<header
			className={`sticky ${
				visible ? "top-0" : ""
			} bg-hero bg-fixed bg-cover bg-top md:bg-center opacity-95 md:flex md:justify-between relative z-50`}
		>
			<img
				className="text-center pl-5 py-4 md:py-3 h-20 ml-1 md:ml-5 object-cover hover:cursor-pointer hover:animate-pulse"
				src={logo}
				alt="Christy's Logo"
				onClick={() => {
					window.scrollTo(0, 0);
				}}
			></img>
			<nav
				className="flex flex-col w-full max-w-md min-h-screen md:hidden z-50"
				ref={navRef}
			>
				{/* Close button */}
				<button
					className="nav-btn nav-close-btn z-20 text-white text-2xl hover:text-rose-400 transition ease-in-out hover:translate-y-1 hover:scale-110 duration-300"
					onClick={showNavbar}
				>
					<FaTimes />
				</button>

				<ul className="flex flex-col bg-neutral-900 w-full h-screen gap-16 text-4xl uppercase text-white items-center justify-center font-semibold z-10">
					{menu.map((menu) => (
						<li
							className={`hover:text-rose-400 transition ease-in-out hover:translate-y-1 hover:scale-110 duration-300 cursor-pointer`}
							key={menu.id}
						>
							{menu.name !== "Resume" ? (
								<a href={menu.scroll} onClick={showNavbar}>
									{menu.name}
								</a>
							) : (
								<a
									href={resume}
									target="_blank"
									rel="noreferrer"
								>
									resume
								</a>
							)}
						</li>
					))}
				</ul>
			</nav>
			{/* Menu button */}
			<button
				className="nav-btn drop-shadow absolute top-1/2 right-0 flex -translate-y-1/2 p-5 text-xl mr-1 md:hidden hover:text-[#f472b6]"
				onClick={showNavbar}
			>
				<FaBars />
			</button>
			{/* Desktop navbar */}
			<div className="timberworld hidden md:block md:flex md:items-center">
				<ul className="hidden md:block md:flex md:items-center md:mr-5">
					{menu.map((menu) => (
						<li
							className={`uppercase text-md font-semibold hover:text-zinc-700 p-5 cursor-pointer transition ease-in-out hover:scale-110 duration-300`}
							key={menu.id}
						>
							{menu.name !== "Resume" ? (
								<a href={menu.scroll} onClick={showNavbar}>
									{menu.name}
								</a>
							) : (
								<a
									href={resume}
									target="_blank"
									rel="noreferrer"
								>
									resume
								</a>
							)}
						</li>
					))}
				</ul>
			</div>
		</header>
	);
}

export default Nav;
