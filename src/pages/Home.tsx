import ConfirmationDialog from "@/components/Dialog";
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import TaskComponent from "@/components/Task";
import { Category, Planner, Task } from "@/types/Task";
import CategoryComponent from "@/components/Category";

function Home() {
    const [open, setOpen] = useState(true);
    const [planner, setPlanner] = useState({} as Planner);

    useEffect(() => {
        const storedPlanner = localStorage.getItem("planner");
        if (storedPlanner) {
            const parsedPlanner = JSON.parse(storedPlanner);

            // // Sorting algorithm for the tasks
            parsedPlanner.categories.forEach((category: Category) => {
                category.tasks.sort((a: Task, b: Task) => b.weight - a.weight);
            });

            setPlanner(parsedPlanner);
        }
    }, [setPlanner]);

    return (
        <div>
            <ConfirmationDialog open={open} setOpen={setOpen} />

            <IconButton
                aria-label="Setting"
                onClick={() => setOpen(true)}
                sx={{ fontSize: "4rem" }}
            >
                <SettingsIcon fontSize={"inherit"} />
            </IconButton>

            <section
                style={{
                    display: "flex",
                    flexDirection: "row",
                }}
            >
                {planner.categories &&
                    planner.categories.map((category, index) => (
                        <CategoryComponent key={index} name={category.name}>
                            {category.tasks.map((task, index) => (
                                <TaskComponent
                                    key={index}
                                    title={task.title}
                                    weight={task.weight}
                                />
                            ))}
                        </CategoryComponent>
                    ))}
            </section>
        </div>
    );
}

export default Home;
