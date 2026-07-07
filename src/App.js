import ReactGA from "react-ga4";

import React, { useState, useEffect} from 'react'

import HeaderComponent from "./Components/HeaderComponent";
import RoundedImage from "./Components/ImageComponent";
import Introduction from "./Components/IntroComponent";
import SkillsContainer from "./Components/SkillsComponent";
import DownloadCVButton from "./Components/ButtonComponent";
import StickyLinks from "./Components/StickyLinksComponent";
import ProjectsSection from "./Components/ProjectsComponent";
import {
    EducationSection,
    CertificationSection,
} from "./Components/EducationComponent";
import WorkExperienceSection from "./Components/WorkExperienceComponent/EducationComponent";

import "./App.css";

const measurement_id = process.env.REACT_APP_MEASUREMENT_ID;

if (measurement_id) {
    ReactGA.initialize(measurement_id);
}

function App() {
    const [isNightMode, setIsNightMode] = useState(true);

    useEffect(() => {
        document.body.className = isNightMode ? "night-mode" : "light-mode";
    }, [isNightMode]);

    const toggleNightMode = () => {
        setIsNightMode(!isNightMode);
    };

    useEffect(() => {
        const targets = document.querySelectorAll(".reveal, .reveal-grid");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("in-view");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
        );
        targets.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div className={`App ${isNightMode ? "night" : ""}`}>
            <StickyLinks nightMode={isNightMode} toggle={toggleNightMode} />
            <HeaderComponent nightMode={ isNightMode } />
            <section id="about" className="reveal">
                <h1 className="about-header">Haywood D. Johnson</h1>
                <RoundedImage
                    src="/avatar.png"
                    alt="Portrait of Haywood D. Johnson"
                    className="rounded-img"
                />
                <Introduction nightMode={ isNightMode } />
            </section>
            <section id="skills" className="reveal">
                <h2 className="skills-header">SKILLS</h2>
                <SkillsContainer className="skills-section" />
                <DownloadCVButton className="button-section" />
            </section>
            <section id="projects" className="reveal">
                <h2 className="projects-header">PROJECTS</h2>
                <ProjectsSection />
            </section>
            <section id="experience" className="reveal">
                <h2 className="projects-header">EXPERIENCE</h2>
                <div className="education-container">
                    <h3 className="education-header">EDUCATION</h3>
                    <EducationSection nightMode={ isNightMode } />
                </div>
                <div className="certification-container">
                    <h3 className="certification-header">CERTIFICATIONS</h3>
                    <CertificationSection nightMode={ isNightMode } />
                </div>
                <div className="certification-container">
                    <h3 className="certification-header">WORK EXPERIENCE</h3>
                    <WorkExperienceSection nightMode={ isNightMode } />
                </div>
            </section>
            <footer className="site-copyright">
                &copy; {new Date().getFullYear()} Haywood D. Johnson
            </footer>
        </div>
    );
}

export default App;
