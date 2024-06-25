import { useState, useLayoutEffect } from "react";
import Box from "../../../../components/Box";
import Skil from "../../../../components/Skil";
import Icon from "../../../../components/Icon";
import style from "./Experience.module.css";

const Experience = ({ experience, changeExperience }) => {
    const [isOpen, setIsOpen] = useState(false);

    useLayoutEffect(() => {
        setIsOpen(!!experience.isOpen);
    }, [experience]);

    return (
        <>
            <Box
                size="small"
                justify="space-between"
                color={isOpen ? "secondary" : "seventenary"}
                onClick={() => changeExperience(experience.key)}
            >
                <div>
                    {experience.title} / {experience.company}
                </div>
                <div>
                    {experience.start_date.month} {experience.start_date.year} -{" "}
                    {experience.isWorking
                        ? "Present"
                        : `${experience.start_date.month} ${experience.start_date.year}`}
                </div>
                <Icon size="small" style={{ cursor: "pointer" }}>
                    {isOpen ? "minus" : "plus"}
                </Icon>
            </Box>
            {isOpen && (
                <Box size="small" order="column" color="sextenary">
                    <header className={style.header}>
                        <div className={style.header_data}>
                            <Icon size="small">location</Icon>
                            <div>
                                {experience.address.city},{" "}
                                {experience.address.state},{" "}
                                {experience.address.country} -{" "}
                                {experience.location_type}
                            </div>
                        </div>

                        <div className={style.header_data}>
                            <Icon size="small">domain</Icon>
                            <div>{experience.domain}</div>
                        </div>
                    </header>

                    <div className={style.description}>
                        {experience.description}
                    </div>
                    <footer className={style.footer}>
                        {experience.skils.map((skil) => (
                            <Skil key={skil.key} theme="primary">
                                {skil.value}
                            </Skil>

                        ))}
                    </footer>
                </Box>
            )}
        </>
    );
};

export default Experience;
