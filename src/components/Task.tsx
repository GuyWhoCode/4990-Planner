import {
    Button,
    Card,
    CardActions,
    CardContent,
    Container,
    Typography,
} from "@mui/material";
import { Task } from "@/types/Task";
import { useContext } from "react";
import { ConfigurationContext } from "./ConfigurationProvider";

function TaskComponent({ title, weight }: Task) {
    const { configuration } = useContext(ConfigurationContext);

    return (
        <Container
            sx={{
                minWidth: 275,
                maxWidth: "25vw",
                marginBottom: "2vh",
                marginTop: "2vh",
            }}
            maxWidth="xs"
        >
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {weight}{" "}
                        {weight > 1
                            ? configuration.quantifier + "s"
                            : configuration.quantifier}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Mark as Done</Button>
                </CardActions>
            </Card>
        </Container>
    );
}

export default TaskComponent;
