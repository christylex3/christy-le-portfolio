import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header class="flex justify-between sticky">
            <h1>Christy Le</h1>
            <nav class="flex flex-col md:flex-row">
                <a href="#about-me-section">about me</a>
                <a href="#work-section">work</a>
                <a href="#contact-info">contact</a>
                {/* <!-- Resume is in progress -->
                <!-- <a href="./asset/images/resume_placeholder.jpg" alt="Christy Le's Resume" download>Resume</a> --> */}
            </nav>
        </header>
    );
};

export default Header;