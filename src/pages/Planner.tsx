import { useEffect, useState } from "react";
import { Configuration } from "../types/Task";





function Planner() {
    const [configuration, setConfiguration] = useState({} as Configuration);
    useEffect(() => {
        const storedConfiguration = localStorage.getItem("configuration");
        if (storedConfiguration) {
            setConfiguration(JSON.parse(storedConfiguration));
        }
    }, []);

    return (
        <div>
            <h1>Planner</h1>
            <h2>Category</h2>
            <p>{configuration.category}</p>

            <h2>Quantifier</h2>
            <p>{configuration.quantifier}</p>

            <a href="./">Home</a>
        </div>
    );
}

export default Planner;
