import React from "react";
import { useLocation  } from "react-router-dom";

const Repository: React.FC = () => {
    const location = useLocation();
    const repository = location.pathname;
    return (
        <div>
            <h1>Repository: {repository }</h1>
        </div>
    );
};
export default Repository;