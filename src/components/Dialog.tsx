import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import Settings from "@/components/Settings";
import { Dispatch, SetStateAction, useContext, useEffect } from "react";
import { ConfigurationContext } from "@/components/ConfigurationProvider";

interface ConfirmationDialogProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function ConfirmationDialog({
    open,
    setOpen,
}: ConfirmationDialogProps) {
    const { configuration, setConfiguration } =
        useContext(ConfigurationContext);

    useEffect(() => {
        const storedConfiguration = localStorage.getItem("configuration");
        if (storedConfiguration) {
            setConfiguration(JSON.parse(storedConfiguration));
        }
        setOpen(false);
    }, [setConfiguration, setOpen]);

    const handleSubmit = () => {
        setOpen(false);
        localStorage.setItem("configuration", JSON.stringify(configuration));
    };

    return (
        <Dialog
            sx={{ "& .MuiDialog-paper": { width: "80%", maxHeight: 435 } }}
            maxWidth="md"
            open={open}
            keepMounted
        >
            <DialogTitle>AI Planner</DialogTitle>
            <DialogContent dividers>
                <Settings
                    setting={configuration}
                    setSetting={setConfiguration}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setOpen(false)}>Cancel</Button>
                <Button onClick={handleSubmit}>Submit</Button>
            </DialogActions>
        </Dialog>
    );
}
