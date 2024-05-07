import ConfirmationDialog from "@/components/Dialog";
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import TaskComponent from "@/components/Task";
import { Category, Planner, Task } from "@/types/Task";
import CategoryComponent from "@/components/Category";

const BACKGROUND_COLORS = [
    "#F1F1EF",
    "#F4EEEE",
    "#FAEBDD",
    "#FBF3DB",
    "#EDF3EC",
    "#E7F3F8",
    "#F6F3F9",
    "#FAF1F5",
    "#FDEBEC",
];

const randomBackgroundColor = () =>
    BACKGROUND_COLORS[Math.floor(Math.random() * BACKGROUND_COLORS.length)];

function Home() {
    const [open, setOpen] = useState(true);
    const [planner, setPlanner] = useState({} as Planner);
    const [categoryBackgroundColor, setCategoryBackgroundColor] = useState<
        string[]
    >([]);

    useEffect(() => {
        if (planner.categories) {
            for (let i = 0; i <= planner.categories.length; i++) {
                setCategoryBackgroundColor((prev) => [
                    ...prev,
                    randomBackgroundColor(),
                ]);
            }
        }
    }, [planner.categories]);

    useEffect(() => {
        const storedPlanner = localStorage.getItem("tasks");
        if (storedPlanner) {
            const parsedPlanner = JSON.parse(storedPlanner);

            // Sorting algorithm for the tasks
            parsedPlanner.categories.forEach((category: Category) => {
                category.tasks.sort((a: Task, b: Task) => b.weight - a.weight);
            });

            setPlanner(parsedPlanner);
            setOpen(false);
        } else {
            setOpen(true);
        }
    }, [setPlanner]);

    const deleteTask = (categoryIndex: number, taskIndex: number) => {
        const newPlanner = { ...planner };
        newPlanner.categories[categoryIndex].tasks.splice(taskIndex, 1);
        setPlanner(newPlanner);
        localStorage.setItem("tasks", JSON.stringify(newPlanner));
    };

    return (
        <div>
            <ConfirmationDialog open={open} setOpen={setOpen} />

            <IconButton
                aria-label="Setting"
                sx={{ fontSize: "4rem" }}
                onClick={() => {
                    setOpen(true);
                }}
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
                    planner.categories.map((category, categoryIndex) => (
                        <CategoryComponent
                            key={categoryIndex}
                            name={category.name}
                            categoryBackgroundColor={
                                categoryBackgroundColor[categoryIndex]
                            }
                        >
                            {category.tasks.map((task, taskIndex) => (
                                <TaskComponent
                                    key={taskIndex}
                                    title={task.title}
                                    weight={task.weight}
                                    completedTask={() =>
                                        deleteTask(categoryIndex, taskIndex)
                                    }
                                    taskColor={
                                        categoryBackgroundColor[categoryIndex]
                                    }
                                />
                            ))}
                        </CategoryComponent>
                    ))}
            </section>
        </div>
    );
}

export default Home;
