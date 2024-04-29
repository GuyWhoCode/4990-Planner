export interface Task {
    id: number;
    title: string;
    description: string;
    status: TaskStatus;
}

export interface TaskStatus {
    id: number;
    name: string;
}

export interface Configuration {
    category: string;
    quantifier: string;
}
