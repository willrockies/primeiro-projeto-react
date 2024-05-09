import React, { useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import api from "../../services/api";
import logoImg from "../../assets/logo.svg"

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
    
    return (
        <>
            <img src={logoImg} alt="Github explorer" />
            <Title>Explore repositórios no Github.</Title>

            <Form>
                <input placeholder="Digite o nome do repositório"></input>
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <a href="teste">
                    <img src="https://avatars.githubusercontent.com/u/42125277?s=400&u=d95e89d21b5b95e9e2fba9d9c0fd997a9ec9deb9&v=4"
                        alt="Wilson Alves da Silva" />
                    <div>
                        <strong>DDDTypescript</strong>
                        <p>teste</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>

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