import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import logo from "../../assets/logo.svg";
import { Header, Issues, RepositoryInfo } from "./styles";

interface RepositoryParams {
    repository: string;
}

const Repository: React.FC = () => {
    const location = useLocation();
    //const repository = location.pathname;
    return (
        // <div>
        //     <h1>Repository: {repository }</h1>
        // </div>
        <>
            <Header>
                <img src={logo} alt="Github Explorer" />
                <Link to="/">
                    <FiChevronLeft size={16} />
                    Voltar
                </Link>
            </Header>
            <RepositoryInfo>
                <header>
                    <img src="https://avatars.githubusercontent.com/u/42125277?v=4" alt="Willrockies" />
                    <div>
                        <strong>dassda</strong>
                        <p>dassda</p>
                    </div>
                </header>
                <ul>
                    <li>
                        <strong>dassda</strong>
                        <span>dassda</span>
                    </li>

                    <li>
                        <strong>dassda</strong>
                        <span>dassda</span>
                    </li>
                    <li>
                        <strong>dassda</strong>
                        <span>dassda</span>
                    </li>
                </ul>
            </RepositoryInfo>


            <Issues>
                <Link key={"sdsa"} to={`asa`}>

                    <div>
                        <strong>{"repository.full_name"}</strong>
                        <p>{"repository.description"}</p>
                    </div>

                    <FiChevronRight size={20} />
                </Link>
            </Issues>
        </>
    );
};
export default Repository;