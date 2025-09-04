"use client";

import React from "react";
import { BaseTask } from "../engine/task/baseTask";
import { MathData } from "./tasks.types";
import { TaskContainer } from "../engine/components/TaskContainer/TaskContainer";
import { TaskField } from "../engine/components/TaskField/TaskField";

export class MathTask extends BaseTask {
    protected data: MathData;

    constructor(data: MathData) {
        super(data);
        this.data = data;

        this.state = { userAnswer: '' };
    }

    render(props = {}) {
        return (
            <TaskContainer
                task={this.data}
                color="#f59e0b"
                onValidate={() => {
                    const result = this.validate();
                    alert(result.message);
                }}
                {...props}
            >
                <div style={{ fontSize: '18px', textAlign: 'center', margin: '12px 0' }}>
                    {this.data.expression} = ?
                </div>
                <TaskField
                    type="text"
                    label="Your answer:"
                    value={this.state.userAnswer}
                    onChange={(value) => this.state.userAnswer = value}
                />
            </TaskContainer>
        );
    }

    validate() {
        const userNum = parseFloat(this.state.userAnswer);
        const correct = userNum === this.data.answer;

        return {
            isValid: correct,
            message: correct ? "✅ Correct!" : `❌ The answer is ${this.data.answer}`
        };
    }

    getConfig() {
        return {
            type: 'math',
            expression: this.data.expression,
            answer: this.data.answer
        };
    }

    clone(): MathTask {
        return new MathTask({
            ...this.data,
            id: `${this.data.id}-copy-${Date.now()}`
        });
    }

    getEdibleFields() {
        return {
            name: {
                type: 'text' as const,
                label: 'Task Name',
                value: this.data.name,
            },
            expression: {
                type: 'text' as const,
                label: 'Math Expression',
                value: this.data.expression,
            },
            answer: {
                type: 'text' as const,
                label: 'Correct Answer',
                value: this.data.answer.toString(),
            },
        };
    }
}