import { ConfigurationContext } from "@/components/ConfigurationProvider";
import ConfirmationDialog from "@/components/Dialog";
import { useEffect, useContext, useState } from "react";

function Home() {
    const { configuration } = useContext(ConfigurationContext);
    const [open, setOpen] = useState(true);
    useEffect(() => {
        console.log("Configuration updated", configuration);
    }, [configuration]);

    return (
        <div>
            <h1>Home</h1>
            <ConfirmationDialog open={open} setOpen={setOpen}/>
            <h2>Category</h2>
            <p>{configuration.category}</p>

            <h2>Quantifier</h2>
            <p>{configuration.quantifier}</p>

            <button onClick={() => setOpen(true)}>Reset Configuration</button>
        </div>
    );
}

export default Home;
