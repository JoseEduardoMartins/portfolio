import { useState, useLayoutEffect } from 'react';
import icons from './icons';
import style from './Icon.module.css';

const Icon = ({ children, href }) => {
    const [Component, setComponent] = useState(<></>);

    useLayoutEffect(() => {
        if (typeof children !== 'string') return;

        const icon = icons[children];
        if (!icon) return;

        const NewComponent = require('react-icons/fa')[icon];
        if (!href) setComponent(<NewComponent className={style.icon} />);
        else setComponent(<a href={href} target="_blank" rel="noreferrer">
            <NewComponent className={style.icon} />
        </a>);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [children]);

    return (Component);
}

export default Icon;