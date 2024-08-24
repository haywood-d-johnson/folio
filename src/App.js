import "./App.css";
import HeaderComponent from "./Components/HeaderComponent";
import RoundedImage from "./Components/ImageComponent";
import Introduction from "./Components/IntroComponent";
import SkillsContainer from "./Components/SkillsComponent";

function App() {
    return (
        <div className="App">
            <HeaderComponent />
            <RoundedImage
                src="/avatar.png"
                alt="me or whatever"
                className="rounded-img"
            />
            <Introduction />
            <SkillsContainer />
        </div>
    );
}

export default App;
