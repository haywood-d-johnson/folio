import HeaderComponent from "./Components/HeaderComponent";
import RoundedImage from "./Components/ImageComponent";
import Introduction from "./Components/IntroComponent";
import SkillsContainer from "./Components/SkillsComponent";
import DownloadCVButton from "./Components/ButtonComponent";

import "./App.css";

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
            </section>
            <section id="skills">
                <h2 className="skills-header">SKILLS</h2>
                <SkillsContainer className="skills-section" />
                <DownloadCVButton className="button-section" />
            </section>
        </div>
    );
}

export default App;
