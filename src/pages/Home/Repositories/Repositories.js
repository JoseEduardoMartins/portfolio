import { useState, useEffect } from "react";
import Translator from "../../../components/I18n/Translator";
import { getAll } from "./Repositories.service";
import Section from "../../../components/Section";
import Subtitle from "../../../components/Subtitle";
import List from "../../../components/List";
import Button from "../../../components/Button";
import Project from "./Repository";

const Repositories = () => {
    const [limit, setLimit] = useState(3);

    const [repository, setRepository] = useState([]);
    const [repositoryTable, setRepositoryTable] = useState([]);

    const setDataPagination = (data, limit) => {
        const newData = [...data];

        const limitNumber = newData.length > limit ? limit : newData.length;
        const response = newData.splice(0, limitNumber);

        setRepositoryTable(response);
        setLimit(limitNumber);
    };

    const loadRepository = async () => {
        try {
            const response = await getAll();
            setRepository(response);
            setDataPagination(response, limit);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        loadRepository();
        // eslint-disable-next-line
    }, []);

    return (
        <Section id="repositories">
            <Subtitle>
                <Translator path="home.repositorie.title" />
                <span>{repository.length}</span>
            </Subtitle>
            <List gap="20" direction="column">
                {repositoryTable?.map((repository) => (
                    <Project key={repository.id} repository={repository} />
                ))}

                {repositoryTable.length !== repository.length && (
                    <Button
                        size="small"
                        onClick={() =>
                            setDataPagination(repository, repository.length)
                        }
                    >
                        <Translator path="home.repositorie.showMore" />
                    </Button>
                )}

                {repositoryTable.length === repository.length && (
                    <Button
                        size="small"
                        onClick={() => setDataPagination(repository, 3)}
                    >
                        <Translator path="home.repositorie.showLess" />
                    </Button>
                )}
            </List>
        </Section>
    );
};

export default Repositories;
