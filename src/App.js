import HeaderComponent from "./Components/HeaderComponent";
import RoundedImage from "./Components/ImageComponent";
import Introduction from "./Components/IntroComponent";
import SkillsContainer from "./Components/SkillsComponent";
import DownloadCVButton from "./Components/ButtonComponent";
import SocialMediaLinks from "./Components/SocialBarComponent";
import ProjectsSection from "./Components/ProjectsComponent";
import {
    EducationSection,
    ExperienceSection,
    CertificationSection,
} from "./Components/EducationComponent";

import "./App.css";
import WorkExperienceSection from "./Components/WorkExperienceComponent/EducationComponent";

function App() {
    return (
        <div className="App">
            <HeaderComponent />
            <section id="about">
                <h1 className="about-header">Haywood D. Johnson</h1>
                <RoundedImage
                    src="/avatar.png"
                    alt="me or whatever"
                    className="rounded-img"
                />
                <Introduction />
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
                    <EducationSection />
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
        </div>
    );
}

export default App;
