import { Configuration } from "@/types/Task";
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: import.meta.env.VITE_AI_API_KEY,
    dangerouslyAllowBrowser: true
});

async function TaskGeneration({ category, quantifier }: Configuration) {
    const userInput = `category: ${category}\nquantifier: ${quantifier}`;

    const response = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
            {
                role: "system",
                content:
                    "Create a To Do List if given a list of tasks organized by hyphens. Generate To Do List items if not given a list. Organize the tasks by a specified category and quantifier\nOutput the response in the following JSON format based on the Planner TypeScript type:\n\ninterface Task {\n    title: string;\n    weight: number;\n}\n\ninterface Category {\n    name: string;\n    tasks: Task[];\n}\n\ninterface Planner {\n    categories: Category[];\n    weightName: string;\n}\n",
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
