import { Container, TextField, Typography } from "@mui/material";

function Settings() {
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
            <Typography variant="h3">
                AI Planner
            </Typography>
            <br />

            <Container sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Typography>
                    I want to see my planner organized by
                </Typography>
                <TextField id="standard-basic" label="Category" variant="standard" sx={{
                    paddingBottom: "1.5vh",
                    marginLeft: "0.5vw",
                }}/>
            </Container>
            <Container sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Typography>
                    with each task quantified by 
                </Typography>
                <TextField id="standard-basic" label="Quantifier" variant="standard" sx={{
                    paddingBottom: "1.5vh",
                    marginLeft: "0.5vw",
                }}/>
            </Container>
        </Container>
    );
}

export default Settings;
