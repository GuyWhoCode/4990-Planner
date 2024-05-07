import { Configuration } from "@/types/Task";
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: import.meta.env.VITE_AI_API_KEY,
    dangerouslyAllowBrowser: true,
});

async function TaskGeneration({ category, quantifier, tasks }: Configuration) {
    const userInput = `category: ${category}\nquantifier: ${quantifier}\n${tasks}`;

    const response = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
            {
                role: "system",
                content:
                    "Create a To Do List if given a list of tasks organized by hyphens. Generate list items and related categories if not given a list. Organize the tasks by a specified category and quantifier.\nOutput the response only in JSON format with categories (array) of tasks (object) and weightName (string). Each category has name (property), tasks (array). Each task has title (property) and weight (number).\n",
            },
            {
                role: "user",
                content: userInput,
            },
        ],
        temperature: 1,
        max_tokens: 2048,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });
    return response;
}

export default TaskGeneration;
