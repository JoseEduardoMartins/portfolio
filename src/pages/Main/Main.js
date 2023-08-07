import About from './About';
import Projects from './Projects';
import style from './Main.module.css';

const Main = () => {
    return (
        <div className={style.main}>
            <About />
            <Projects />
        </div>
    )
}

export default Main;