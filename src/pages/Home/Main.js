import Introduction from "./Introduction";
import About from "./About";
import Experiences from "./Experiences";
import Repositories from "./Repositories";
import Skils from "./Skils";
import Contact from "./Contact";
import style from "./Main.module.css";

const Main = () => {
  return (
    <div className={style.main}>
      <Introduction />
      <About />
      <Experiences />
      <Repositories id="repositories" />
      <Skils />
      <Contact />
    </div>
  );
};

export default Main;
