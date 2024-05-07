import {
    Button,
    Card,
    CardActions,
    CardContent,
    Container,
    Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Task, Category, Planner } from "@/types/Task";

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
    const [planner, setPlanner] = useState({} as Planner);

    useEffect(() => {
        const storedPlanner = localStorage.getItem("tasks");
        if (storedPlanner) {
            const parsedPlanner = JSON.parse(storedPlanner);

            // Sorting algorithm for the tasks
            parsedPlanner.categories.forEach((category: Category) => {
                category.tasks.sort((a: Task, b: Task) => b.weight - a.weight);
            });

            setPlanner(parsedPlanner);
        }
    }, [setPlanner]);

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
                        {weight} {planner.weightName}
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
