import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/icon/Christy-Logo.png";

function Nav(props) {
	const { pages = [], setCurrentPage, currentPage } = props;

	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header className="sticky top-0 bg-soft-black text-white md:flex md:justify-between relative z-50">
			{/* <h1 className="text-3xl font-bold uppercase text-center px-5 py-3 font-macondo text-transparent bg-clip-text bg-gradient-to-b from-rose-500 to-slate-200 hover:cursor-pointer drop-shadow" onClick={() => setCurrentPage("about me")}>
				Christy Le
			</h1> */}
			<img className="text-center px-5 py-3 h-16 object-cover" src={logo} alt="Christy's Logo"></img>
			<nav
				className="flex flex-col w-full max-w-md min-h-screen z-50"
				ref={navRef}
			>
				{/* Close button */}
				<button className="nav-btn nav-close-btn z-20 text-white text-2xl" onClick={showNavbar}>
					<FaTimes />
				</button>
				<ul className="flex flex-col bg-black w-full h-screen gap-16 text-4xl uppercase items-center justify-center font-semibold z-10">
					{pages.map((page) => (
						<li
							className={`hover:text-blue-500 cursor-pointer ${
								currentPage.name === page.name && "navActive"
							}`}
							key={page.name}
						>
							<span onClick={() => {setCurrentPage(page); showNavbar()}}>
								{page.name}
							</span>
						</li>
					))}
				</ul>
			</nav>
			{/* Menu button */}
			<button className="nav-btn absolute top-1/2 right-0 flex -translate-y-1/2 p-5 text-xl" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Nav;
