import React from 'react';
import { Link } from 'react-router-dom';

const Project = () => {
    return (
        <div>
            <h2>WORK</h2>
            <section className="project-gallery flex justify-between flex-col xl:flex-row">
                <article className="project-card">
                    <a href="https://mike-gonz0.github.io/sadLibs/" target="_blank">
                        <h3>sadLibs</h3>
                        <img src="../test-images/sadLibs.jpg" alt="sadLibs" />
                    </a>
                </article>
                <article className="project-card">
                    <a href="https://salty-island-34746.herokuapp.com/" target="_blank">
                        <h3>Recipe Finder</h3>
                        <img src="../test-images/recipefinder.png" alt="recipefinder" />  
                    </a>
                </article>
            </section>
        </div>
    );
};

export default Project;
