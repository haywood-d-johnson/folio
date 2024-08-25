import HeaderComponent from "./Components/HeaderComponent";
import RoundedImage from "./Components/ImageComponent";
import Introduction from "./Components/IntroComponent";
import SkillsContainer from "./Components/SkillsComponent";
import DownloadCVButton from "./Components/ButtonComponent";

import "./App.css";
import SocialMediaLinks from "./Components/SocialBarComponent";
import ProjectsSection from "./Components/ProjectsComponent";

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
                <h2 className="projects-header">Projects</h2>
                <ProjectsSection />
            </section>
        </div>
    );
}

export default App;
