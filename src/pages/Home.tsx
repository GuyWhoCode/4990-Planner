import ConfirmationDialog from "@/components/Dialog";
import { Configuration } from "@/types/Task";
import { useState, useEffect } from "react";

function Home() {
    const [configuration, setConfiguration] = useState({} as Configuration);
    useEffect(() => {
        const storedConfiguration = localStorage.getItem("configuration");
        if (storedConfiguration) {
            setConfiguration(JSON.parse(storedConfiguration));
        }
    }, []);

    
    return (
        <div>
            <h1>Home</h1>
            <ConfirmationDialog />
            <h2>Category</h2>
            <p>{configuration.category}</p>

            <h2>Quantifier</h2>
            <p>{configuration.quantifier}</p>
        </div>
    );
}

export default Home;
