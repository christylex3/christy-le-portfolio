import React from "react";
import { Link } from "react-router-dom";
import placeholder from "../images/resume_placeholder.jpg";

const Header = () => {
    return (
        <header class="flex flex-col flex-wrap justify-between items-center z-10">
            <a href="/"><h1>Christy Le</h1></a>
            <nav class="flex flex-col sm:flex-row">
                <Link to="/christy-le-portfolio">about me</Link>
                
                <Link to="/christy-le-portfolio/work">work</Link>
                <a href="#contact-info">contact</a>
                {/* <!-- Resume is in progress, so placeholder is downloaded --> */}
                <a href={placeholder} alt="Christy Le's Resume" download>resume</a>
            </nav>
        </header>
    );
};

export default Header;