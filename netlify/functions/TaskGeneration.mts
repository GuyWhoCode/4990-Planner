import type { Config } from "@netlify/functions";

interface Configuration {
    category: string;
    quantifier: string;
    tasks: string;
}

function generatePrompt({ category, quantifier, tasks }: Configuration) {
    const userInput = `category: ${category}\nquantifier: ${quantifier}\n${tasks}`;
    return {
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
    };
}

export default async (req: Request) => {
    const { category, quantifier, tasks } = (await req.json()) as Configuration;

    if (!category || !quantifier) {
        return new Response("Missing required parameters", { status: 400 });
    }

    const request = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.AI_API_KEY}`,
        },
        body: JSON.stringify(generatePrompt({ category, quantifier, tasks })),
    });

    const response = await request.json();

    return new Response(response.choices[0].message.content, { status: 200 });
};

export const config: Config = {
    path: "/generate-tasks",
};
