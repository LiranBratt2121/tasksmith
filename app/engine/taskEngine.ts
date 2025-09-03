"use client";

import { BaseTask } from "./task/baseTask";
import { BaseTaskData } from "./task/task.types";

export default class TaskEngine {
    private tasks: Map<string, BaseTask>;

    constructor() {
        this.tasks = new Map();
    }

    addTask(task: BaseTask) {
        this.tasks.set(task.id(), task);
    }

    getAllTasks(): BaseTask[] {
        return Array.from(this.tasks.values());
    }

    getTask(id: string): BaseTask | undefined {
        return this.tasks.get(id);
    }

    removeTask(id: string) {
        this.tasks.delete(id);
    }

    clear() {
        this.tasks.clear();
    }
}