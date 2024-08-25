import "./App.css";
import HeaderComponent from "./Components/HeaderComponent";
import RoundedImage from "./Components/ImageComponent";
import Introduction from "./Components/IntroComponent";
import SkillsContainer from "./Components/SkillsComponent";
import DownloadCVButton from "./Components/ButtonComponent";

function App() {
    return (
        <div className="App">
            <HeaderComponent />
            <h1>Haywood D. Johnson</h1>
            <RoundedImage
                src="/avatar.png"
                alt="me or whatever"
                className="rounded-img"
            />
            <Introduction />
            <h2 className="skills-header">SKILLS</h2>
            <SkillsContainer className="skills-section" />
            <DownloadCVButton className="button-section" />
        </div>
    );
}

export default App;
