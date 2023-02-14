import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Project from "./src/components/Project";
import Home from "./src/pages/Home";
import Work from "./src/pages/Work";
import Footer from "./src/components/Footer";

// import Contact from "./src/pages/Contact";

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState("Home");

    // Checks the value of the currentPage and returns the corresponding components to render
    const renderPage = () => {
        if (currentPage === "Home") {
            return <Home />;
        }
        if (currentPage === "Work") {
            return <Work />;
        }
        // if (currentPage === "Contact") {
        //     return <Contact />;
        // }
        return <Footer />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            {/*  */}
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
}