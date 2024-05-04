import type { Config } from "@netlify/functions";

interface Configuration {
    category: string;
    quantifier: string;
    tasks: string;
}

export default async (req: Request) => {
    const { category, quantifier, tasks } =
        req.body as unknown as Configuration;

    if (!category || !quantifier || !tasks) {
        return new Response("Missing required parameters", { status: 400 });
    }

    return new Response(
        `Generating tasks for ${category} with ${quantifier} ${tasks}`,
        { status: 200 }
    );
};

export const config: Config = {
    path: "/generate-tasks",
};
