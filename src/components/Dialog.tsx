import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import Settings from "@/components/Settings";
import { useState } from "react";
import { Configuration } from "@/types/Task";

export default function ConfirmationDialog() {
    const [open, setOpen] = useState(true);
    const [setting, setSetting] = useState({} as Configuration);

    const handleSubmit = () => {
        setOpen(false);
        console.log(setting);
        localStorage.setItem("configuration", JSON.stringify(setting));
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
                <Settings setting={setting} setSetting={setSetting}/>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleSubmit}>Submit</Button>
            </DialogActions>
        </Dialog>
    );
}
