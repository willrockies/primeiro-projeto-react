import React, { useState, FormEvent, useEffect } from "react";
import { FiChevronRight } from "react-icons/fi";
import api from "../../services/api";
import logoImg from "../../assets/logo.svg"

import { Title, Form, Repositories, Error } from './styles';

interface Repository {
    full_name: string;
    owner: {
        login: string,
        avatar_url: string;
    };
    description: string;
}

const Dashboard: React.FC = () => {
    const [newRepo, setNewRepo] = useState('');
    const [inputError, setInputError] = useState('');
    const [repositories, setRepositories] = useState<Repository[]>(() => {
        const storagedRepositories = localStorage.getItem(
            "@GithubExplorer:repositories",
        );
    
        if(storagedRepositories){
            return JSON.parse(storagedRepositories);
        }
        return [];
    });

    
    
    useEffect(() => {
        localStorage.setItem("@GithubExplorer:repositories", JSON.stringify(repositories)); // @GithubExplorer:repositories é para evitar conflitos caso outras aplicações esta rodando na mesma porta 
    }, [repositories]);

    async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
        // Adição de um novo repositório
        // Consumir API do Github
        // Salvar novo repositório no estado
        event.preventDefault();
        if (!newRepo) {
            setInputError("Digite o autor/nome do repositório");
            return;
        }

        try {
            const response = await api.get<Repository>(`repos/${newRepo}`);
            const repository = response.data;
            setRepositories([...repositories, repository]);
            setNewRepo('');
            setInputError('');
            console.log(response.data);
        } catch (err) {
            setInputError('Erro na busca por esse repositório');
        }

    }

    return (
        <>
            <img src={logoImg} alt="Github explorer" />
            <Title>Explore repositórios no Github.</Title>
            {/* // !! => thuthy ("dsasda", 3, { }, []), falsy('',0,) */}
            <Form hasError={!!inputError} onSubmit={handleAddRepository}>
                <input
                    value={newRepo}
                    onChange={(e) => setNewRepo(e.target.value)}
                    placeholder="Digite o nome do repositório"></input>
                <button type="submit">Pesquisar</button>
            </Form>

            {inputError && <Error> {inputError}</Error>}

            <Repositories>
                {repositories.map(repository => (
                    <a key={repository.full_name} href="teste">
                        <img src={repository.owner.avatar_url}
                            alt={repository.owner.login} />
                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>
                        </div>

                        <FiChevronRight size={20} />
                    </a>

                ))}
            </Repositories>
        </>

    )
};

// function Dashboard() {
//     return (
//         <>
//             <h2>Dashboard</h2>
//         </>
//     )
// }


export default Dashboard;