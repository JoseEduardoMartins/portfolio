import style from './Title.module.css';

const Title = ({ children }) => (
    <div className={style.title}>{children}</div>
);

export default Title;