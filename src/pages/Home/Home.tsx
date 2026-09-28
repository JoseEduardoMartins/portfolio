import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Experiences from "./Experiences";
import Introduction from "./Introduction";
import Repositories from "./Repositories";
import Skils from "./Skils";

const Home = () => (
  <div className="w-full flex flex-col items-center [&>section]:w-full">
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
