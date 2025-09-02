"use client";

import { FC, JSX } from "react";
import { TaskData } from "./task.types";

export abstract class BaseTask {
    protected task: TaskData;

    constructor(task: TaskData) {
        this.task = task;
    }

    id() {
        return this.task.id;
    }

    abstract render(): JSX.Element;

    abstract validate(): boolean;
    abstract performAction(): void;
}