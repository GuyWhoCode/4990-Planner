import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import Settings from "@/components/Settings";
import {
    Dispatch,
    SetStateAction,
    useContext,
    useEffect,
    useState,
} from "react";
import { ConfigurationContext } from "@/components/ConfigurationProvider";
import { CircularProgress, Container } from "@mui/material";
import TaskGeneration from "@/lib/TaskGeneration";

interface ConfirmationDialogProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}

const DEV_MODE = false;

export default function ConfirmationDialog({
    open,
    setOpen,
}: ConfirmationDialogProps) {
    const { configuration, setConfiguration } =
        useContext(ConfigurationContext);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const storedConfiguration = localStorage.getItem("configuration");
        if (storedConfiguration) {
            setConfiguration(JSON.parse(storedConfiguration));
        }
    }, [setConfiguration]);

    const handleSubmit = async () => {
        setLoading(true);
        localStorage.setItem("configuration", JSON.stringify(configuration));

        let tasks;
        if (DEV_MODE) {
            tasks = await TaskGeneration(configuration);
        } else {
            const request = await fetch("/generate-tasks", {
                method: "POST",
                body: JSON.stringify(configuration),
            });

            tasks = JSON.stringify(await request.json());
        }
        await localStorage.setItem("tasks", tasks ?? "");

        setLoading(false);
        window.location.reload();
    };

    return (
        <Dialog
            sx={{ "& .MuiDialog-paper": { width: "80%", maxHeight: 435 } }}
            maxWidth="md"
            open={open}
            keepMounted
        >
            <DialogTitle variant="h4">AI Planner</DialogTitle>
            <DialogContent dividers>
                {!loading && (
                    <Settings
                        setting={configuration}
                        setSetting={setConfiguration}
                    />
                )}
                {loading && (
                    <Container
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                        }}
                    >
                        <CircularProgress />
                    </Container>
                )}
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setOpen(false)}>Cancel</Button>
                <Button onClick={handleSubmit}>Submit</Button>
            </DialogActions>
        </Dialog>
    );
}
