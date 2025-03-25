import ReactGA from "react-ga4";

import React, { useState, useEffect} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSun,
    faMoon,
    faHelmetSafety
} from "@fortawesome/free-solid-svg-icons";

import HeaderComponent from "./Components/HeaderComponent";
import RoundedImage from "./Components/ImageComponent";
import Introduction from "./Components/IntroComponent";
import SkillsContainer from "./Components/SkillsComponent";
import DownloadCVButton from "./Components/ButtonComponent";
import SocialMediaLinks from "./Components/SocialBarComponent";
import ProjectsSection from "./Components/ProjectsComponent";
import {
    EducationSection,
    CertificationSection,
} from "./Components/EducationComponent";
import WorkExperienceSection from "./Components/WorkExperienceComponent/EducationComponent";
import EventsSection from "./Components/EventsComponent";
import FooterSection from "./Components/FooterComponent";

import "./App.css";

const measurement_id = process.env.REACT_APP_MEASUREMENT_ID;

ReactGA.initialize(measurement_id);

function App() {
    const [isNightMode, setIsNightMode] = useState(false);

    useEffect(() => {
        document.body.className = isNightMode ? "night-mode" : "light-mode";
    }, [isNightMode]);

    const toggleNightMode = () => {
        setIsNightMode(!isNightMode);
    };

    return (
        <div className={`App ${isNightMode ? "night" : ""}`}>
            <div className="night_mode_btn_header-container">
                <button className={`night_mode_btn ${isNightMode ? "sun" : "moon"}`} onClick={toggleNightMode}>
                { isNightMode ? <FontAwesomeIcon icon={faSun} size="lg" /> : <FontAwesomeIcon icon={faMoon} size="lg" /> }
                </button>
            </div>
            <HeaderComponent nightMode={ isNightMode } />
            <section id="about">
                <h1 className="about-header">Haywood D. Johnson</h1>
                <div className="underconstruction">
                    <FontAwesomeIcon icon={faHelmetSafety} className="construct-icon" />
                    <h4>Pardon our dust. Doing some maintenance!</h4>
                    <FontAwesomeIcon icon={faHelmetSafety} className="construct-icon" />
                </div>
                <RoundedImage
                    src="/avatar.png"
                    alt="me or whatever"
                    className="rounded-img"
                />
                <Introduction nightMode={ isNightMode } />
                <SocialMediaLinks />
            </section>
            <section id="skills">
                <h2 className="skills-header">SKILLS</h2>
                <SkillsContainer className="skills-section" />
                <DownloadCVButton className="button-section" />
            </section>
            <section id="projects">
                <h2 className="projects-header">PROJECTS</h2>
                <ProjectsSection />
            </section>
            <section id="experience">
                <h2 className="projects-header">EXPERIENCE</h2>
                <div className="education-container">
                    <h3 className="education-header">EDUCATION</h3>
                    <EducationSection nightMode={ isNightMode } />
                </div>
                <div className="certification-container">
                    <h3 className="certification-header">CERTIFICATIONS</h3>
                    <CertificationSection />
                </div>
                <div className="certification-container">
                    <h3 className="certification-header">WORK EXPERIENCE</h3>
                    <WorkExperienceSection />
                </div>
            </section>
            <section id="events">
                <h2 className="projects-header">EVENTS</h2>
                <EventsSection />
            </section>
            <section id="footer">
                <FooterSection />
            </section>
        </div>
    );
}

export default App;
