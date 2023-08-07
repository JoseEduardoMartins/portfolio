import Icon from '../Icon';
import style from './Sidebar.module.css'

const Sidebar = () => {
    return (
        <div className={style.container}>
            <Icon href="https://github.com/JoseEduardoMartins">
                github
            </Icon>
            <Icon href="https://www.linkedin.com/in/jos%C3%A9-eduardo-martins-b06b8b190/">
                linkedin
            </Icon>
            <Icon href="https://www.instagram.com/zeduardoo_/">
                instagram
            </Icon>
            <Icon href="https://web.whatsapp.com/">
                whatsapp
            </Icon>
        </div>
    )
};

export default Sidebar;