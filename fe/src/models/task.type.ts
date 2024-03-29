export type TaskResponse = {
    id: number;
    task_name: string;
    status: string
}

export type TaskRequest = {
    id?: number;
    task_name: string;
    status: string
}