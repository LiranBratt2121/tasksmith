"use client";

import React from "react";
import { BaseTask } from "../engine/task/baseTask";
import { TaskContainer } from "../engine/components/TaskContainer/TaskContainer";
import { MultipleChoiceData } from "./tasks.types";
import { TaskField } from "../engine/components/TaskField/TaskField";

export class MultipleChoice extends BaseTask {
    protected data: MultipleChoiceData;

    constructor(data: MultipleChoiceData) {
        super(data);
        this.data = data;

        this.state = { selected: -1 };
    }

    render(props = {}) {
        return (
            <TaskContainer
                task={this.data}
                color="#10b981"
                onValidate={() => {
                    const result = this.validate();
                    alert(result.message);
                }}
                {...props}
            >
                <div style={{ marginBottom: '12px', fontWeight: '500' }}>
                    {this.data.question}
                </div>
                <TaskField
                    type="radio"
                    label=""
                    value={this.data.options[this.state.selected]}
                    options={this.data.options}
                    onChange={(value) => {
                        this.state.selected = this.data.options.indexOf(value);
                    }}
                />
            </TaskContainer>
        );
    }

    validate() {
        const correct = this.state.selected === this.data.correctIndex;
        
        return {
            isValid: correct,
            message: correct ? "✅ Correct!" : "❌ Try again!"
        };
    }

    getConfig() {
        return {
            type: 'multiple-choice',
            question: this.data.question,
            options: this.data.options,
            correct: this.data.correctIndex
        };
    }

    clone() {
        return new MultipleChoice({
            ...this.data,
            id: `${this.data.id}-copy-${Date.now()}`
        });
    }
}