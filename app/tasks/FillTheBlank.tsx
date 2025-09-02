"use client";

import { TaskData } from "../engine/task/task.types";
import { BaseTask } from "../engine/task/baseTask";
import { JSX } from "react";

type FillTheBlankTaskData = TaskData & {
    textWithBlanks: string;
    answerKey: { [blankId: string]: string };
};

export class FillTheBlankTask extends BaseTask {
    private taskData = this.task as FillTheBlankTaskData;
    private answers: { [blankId: string]: string } = {};

    constructor(task: FillTheBlankTaskData) {
        super(task);
    }

    render(): JSX.Element {
        const parts = this.taskData.textWithBlanks.split("[blank]").slice(0, -1);

        const handleValidation = () => {
            this.validate();
        };

        return (
            <div>
                <p>
                    {parts.map((part, index) => (
                        <span key={index}>
                            {part}
                            {
                                <input
                                    type="text"
                                    onChange={(e) => {
                                        this.answers[`blank-${index}`] = e.target.value.trim().toLowerCase();
                                    }}
                                />
                            }
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
        const correctAnswers = this.taskData.answerKey;
        Object.keys(correctAnswers).forEach(key => {
            if (this.answers[key] !== correctAnswers[key].toLowerCase()) {
                return false;
            }
        }); 
        
        return true;
    }
}