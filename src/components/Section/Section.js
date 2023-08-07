import style from './Section.module.css';

const Section = ({ children }) => (
    <section className={style.container}>
        <div className={style.container_data}>{children}</div>
    </section>
);

export default Section;