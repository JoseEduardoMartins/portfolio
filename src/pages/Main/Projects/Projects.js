import Section from '../../../components/Section';
import Title from '../../../components/Section/Title';
import Project from './Project';
import style from './Projects.module.css';

const Projects = () => {
    return (
        <Section>
            <Title>Projects</Title>
            <div className={style.projects}>
                <Project />
            </div>
        </Section>
    )
}

export default Projects;