"use client";

import { JSX } from "react";
import { BaseTask } from "../engine/task/baseTask";
import { TaskData } from "../engine/task/task.types";


type MultipleChoiceTaskData = TaskData & {
    question: string;
    options: string[];
    correctIndex: number;
};


export class MultipleChoice extends BaseTask {
    private taskData = this.task as MultipleChoiceTaskData;
    private selectedIndex: number = -1;

    constructor(task: MultipleChoiceTaskData) {
        super(task);
    }

    render(): JSX.Element {
        const handleSubmit = () => {
            const isValid = this.validate();

            if (isValid) {
                alert("The answer is correct");
                return;
            }

            alert("The answer is incorrect");
        }

        return (
            <div>
                <p>{this.taskData.question}</p>
                {
                    this.taskData.options.map((option, idx) => {
                        const id = `${this.taskData.name}-${idx}`;

                        return (
                            <div key={idx}>
                                <input
                                    type="radio"
                                    id={id}
                                    name={this.taskData.name}
                                    value={idx}
                                    onChange={(e) => this.selectedIndex = parseInt(e.target.value)}
                                />
                                <label htmlFor={id}>{option}</label>
                            </div>
                        )
                    })
                }
                <button onClick={handleSubmit}>Validate</button>
            </div>)
    }

    validate(): boolean {
        return this.selectedIndex === this.taskData.correctIndex;
    }
}
