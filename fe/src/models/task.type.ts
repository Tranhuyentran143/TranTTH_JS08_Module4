export type TaskResponse = {
    id: number;
    task_name: string;
    status: boolean
}

export type TaskRequest = {
    id?: number;
    task_name: string;
    status: boolean
}

export type TaskUpdateStatus = {
    id?: number
}