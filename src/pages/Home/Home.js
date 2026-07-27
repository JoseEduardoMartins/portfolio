import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Experiences from "./Experiences";
import style from "./Home.module.css";
import Introduction from "./Introduction";
import Repositories from "./Repositories";
import Skils from "./Skils";

const Home = () => (
    <div className={style.home}>
        <Introduction />
        <About />
        <Experiences />
        <Skils />
        <Education />
        <Repositories />
        <Contact />
    </div>
);

export default Home;
