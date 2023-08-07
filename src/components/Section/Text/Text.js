import style from './Text.module.css';

const Text = ({ children }) => (
    <div className={style.text}>
        {children}
    </div>
);

export default Text;