export interface Task {
    title: string;
    weight: number;
}

export interface Category {
    name: string;
    tasks: Task[];
}

export interface Planner {
    categories: Category[];
    weightName: string;
}

export interface Configuration {
    category: string;
    quantifier: string;
    tasks?: string;
}
