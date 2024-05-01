import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import Settings from "@/components/Settings";
import { Dispatch, SetStateAction, useContext, useEffect } from "react";
import { ConfigurationContext } from "@/components/ConfigurationProvider";
import TaskGeneration from "@/lib/TaskGeneration";

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

    const handleSubmit = async () => {
        setOpen(false);
        localStorage.setItem("configuration", JSON.stringify(configuration));
        // localStorage.setItem("configuration", JSON.stringify(configuration));
        // const tasks = await TaskGeneration(configuration);
        // console.log(tasks)
        // {
        //     "id": "chatcmpl-9JwJ7Lzn3mabuwm1aVYugSBD0KXjG",
        //     "object": "chat.completion",
        //     "created": 1714539393,
        //     "model": "gpt-4-0613",
        //     "choices": [
        //         {
        //             "index": 0,
        //             "message": {
        //                 "role": "assistant",
        //             },
        //             "logprobs": null,
        //             "finish_reason": "stop"
        //         }
        //     ],
        //     "usage": {
        //         "prompt_tokens": 119,
        //         "completion_tokens": 147,
        //         "total_tokens": 266
        //     },
        //     "system_fingerprint": null
        // }
        // JSON.parse("{\n  \"categories\": [\n    {\n      \"name\": \"Epics\",\n      \"tasks\": [\n        {\n          \"title\": \"Implement login functionality\",\n          \"weight\": 8\n        },\n        {\n          \"title\": \"Develop the user profile module\",\n          \"weight\": 13\n        },\n        {\n          \"title\": \"Design the UI for the dashboard\",\n          \"weight\": 5\n        },\n        {\n          \"title\": \"Create the database architecture\",\n          \"weight\": 21\n        },\n        {\n          \"title\": \"Setup the server and deploy the application\",\n          \"weight\": 13\n        }\n      ]\n    }\n  ],\n  \"weightName\": \"Story Points\"\n}"
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
