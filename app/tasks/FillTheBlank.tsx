// FillTheBlankTask.ts

"use client";

import { TaskData } from "../engine/task/task.types";
import { BaseTask } from "../engine/task/baseTask";
import { JSX } from "react";

type FillTheBlankTaskData = TaskData & {
    textWithBlanks: string;
    answerKey: { [blankId: string]: string };
};

export class FillTheBlankTask extends BaseTask {
    private answers: { [blankId: string]: string } = {};

    constructor(task: FillTheBlankTaskData) {
        super(task);
    }

    render(): JSX.Element {
        const taskData = this.task as FillTheBlankTaskData;
        const parts = taskData.textWithBlanks.split("[blank]");

        const handleValidation = () => {
            this.performAction();
        };

        return (
            <div>
                <p>
                    {parts.map((part, index) => (
                        <span key={index}>
                            {part}
                            {index < parts.length - 1 && (
                                <input
                                    type="text"
                                    onChange={(e) => {
                                        this.answers[`blank-${index}`] = e.target.value.trim().toLowerCase();
                                    }}
                                />
                            )}
                        </span>
                    ))}
                </p>
                <button onClick={handleValidation}>
                    Validate
                </button>
            </div>
        );
    }

    validate(): boolean {
        const taskData = this.task as FillTheBlankTaskData;
        const correctAnswers = taskData.answerKey;

        if (Object.keys(this.answers).length !== Object.keys(correctAnswers).length) {
            return false;
        }

        for (const key in correctAnswers) {
            if (this.answers[key] !== correctAnswers[key].toLowerCase()) {
                return false;
            }
        }
        return true;
    }

    performAction(): void {
        if (this.validate()) {
            alert("Task completed successfully!");
        } else {
            alert("Task is incomplete or incorrect.");
        }
    }
}