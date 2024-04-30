import { Configuration } from "@/types/Task";
import { Container, TextField, Typography } from "@mui/material";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

interface SettingsComponent {
    setting: Configuration;
    setSetting: Dispatch<SetStateAction<Configuration>>;
}

function Settings({ setting, setSetting }: SettingsComponent) {
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
        >
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
        </Container>
    );
}

export default Settings;
