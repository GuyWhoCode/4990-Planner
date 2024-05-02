import {
    Button,
    Card,
    CardActions,
    CardContent,
    Container,
    Typography,
} from "@mui/material";
import { useContext } from "react";
import { ConfigurationContext } from "./ConfigurationProvider";

interface TaskComponentProps {
    title: string;
    weight: number;
    completedTask: () => void;
    taskColor: string;
}

function TaskComponent({
    title,
    weight,
    completedTask,
    taskColor,
}: TaskComponentProps) {
    const { configuration } = useContext(ConfigurationContext);

    return (
        <Container
            sx={{
                marginBottom: "4vh",
                marginTop: "4vh",
            }}
            maxWidth="xs"
        >
            <Card elevation={3}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {weight} {configuration.quantifier}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        size="small"
                        onClick={completedTask}
                        sx={{
                            backgroundColor: taskColor,
                        }}
                    >
                        Mark as Done
                    </Button>
                </CardActions>
            </Card>
        </Container>
    );
}

export default TaskComponent;
