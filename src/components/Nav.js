import React from "react";

function Nav(props) {
	const { pages = [], setCurrentPage, currentPage } = props;

	// useEffect(() => {
	// 	document.title = currentPage.name;
	// }, [currentPage]);

	return (
		<nav className="sticky z-20 p-3">
			<ul className="flex flex-row flex-wrap justify-around z-10">
				{pages.map((Page) => (
					<li
						className={` ${
							currentPage.name === Page.name && "navActive"
						}`}
						key={Page.name}
					>
						<span onClick={() => setCurrentPage(Page)}>
							{Page.name}
						</span>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default Nav;
