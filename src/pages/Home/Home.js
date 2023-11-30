import Introduction from "./Introduction";
import About from "./About";
import Experiences from "./Experiences";
import Repositories from "./Repositories";
import Skils from "./Skils";
import Contact from "./Contact";
import style from "./Home.module.css";

const Home = () => {
    return (
        <div className={style.home}>
            <Introduction />
            <About />
            <Experiences />
            <Repositories />
            <Skils />
            <Contact />
        </div>
    );
};

export default Home;
