import { ConfigurationContext } from "@/components/ConfigurationProvider";
import ConfirmationDialog from "@/components/Dialog";
import { IconButton } from "@mui/material";
import { useEffect, useContext, useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import TaskComponent from "@/components/Task";
import Category from "@/components/Category";

function Home() {
    const { configuration } = useContext(ConfigurationContext);
    const [open, setOpen] = useState(true);
    useEffect(() => {
        console.log("Configuration updated", configuration);
    }, [configuration]);

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
                <Category name="Epic 1">
                    <TaskComponent title="Test1" weight={5} />
                    <TaskComponent title="Test2" weight={2} />
                    <TaskComponent title="Test3" weight={6} />
                    <TaskComponent title="Test4" weight={1} />
                </Category>
                
                <Category name="Epic 1">
                    <TaskComponent title="Test1" weight={5} />
                    <TaskComponent title="Test2" weight={2} />
                    <TaskComponent title="Test3" weight={6} />
                    <TaskComponent title="Test4" weight={1} />
                </Category>
            </section>
        </div>
    );
}

export default Home;
