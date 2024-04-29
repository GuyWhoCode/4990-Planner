import { Configuration } from "@/types/Task";
import { Container, TextField, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";

function Settings() {
    const [setting, setSetting] = useState({} as Configuration);

    return (
        <Container
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "lightgray",
                borderRadius: "16px",
                flexDirection: "column",
            }}
            maxWidth="sm"
        >
            <Typography variant="h3">AI Planner</Typography>
            <br />

            <Container
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Typography>I want to see my planner organized by</Typography>
                <TextField
                    id="standard-basic"
                    label="Category"
                    variant="standard"
                    autoComplete="off"
                    sx={{
                        paddingBottom: "1.5vh",
                        marginLeft: "0.5vw",
                    }}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        setSetting({
                            ...setting,
                            category: event.target.value,
                        });
                    }}
                />
            </Container>
            <Container
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Typography>with each task given a</Typography>
                <TextField
                    id="standard-basic"
                    label="Quantifier"
                    variant="standard"
                    autoComplete="off"
                    sx={{
                        paddingBottom: "1.5vh",
                        marginLeft: "0.5vw",
                    }}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        setSetting({
                            ...setting,
                            quantifier: event.target.value,
                        });
                    }}
                />
            </Container>

            <button
                onClick={() => {
                    console.log(setting);
                    localStorage.setItem("configuration", JSON.stringify(setting));
                }}
            >
                Submit
            </button>
        </Container>
    );
}

export default Settings;
