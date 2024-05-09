import React, { useState, FormEvent } from "react";
import { FiChevronRight } from "react-icons/fi";
import api from "../../services/api";
import logoImg from "../../assets/logo.svg"

import { Title, Form, Repositories } from './styles';

interface Repository {
    full_name: string;
    owner: {
        login: string,
        avatar_url: string;
    };
    description: string;
}

const Dashboard: React.FC = () => {
    const [newRepo, setNewRepo] = useState('')
    const [repositories, setRepositories] = useState<Repository[]>([]);

    async function handleAddRepository (event: FormEvent<HTMLFormElement>) :Promise<void> {
        // Adição de um novo repositório
        // Consumir API do Github
        // Salvar novo repositório no estado
        event.preventDefault();

        const response = await api.get<Repository>(`repos/${newRepo}`);
        const repository = response.data;
        setRepositories([...repositories, repository]);
        setNewRepo('');
        console.log(response.data);
    }
    return (
        <>
            <img src={logoImg} alt="Github explorer" />
            <Title>Explore repositórios no Github.</Title>

            <Form onSubmit={handleAddRepository}>
                <input 
                value={newRepo}
                onChange={(e) => setNewRepo(e.target.value)}
                placeholder="Digite o nome do repositório"></input>
                <button type="submit">Pesquisar</button>
            </Form>

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