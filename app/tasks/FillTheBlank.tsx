"use client";

import React from "react";
import { BaseTask } from "../engine/task/baseTask";
import { TaskContainer } from "../engine/components/TaskContainer/TaskContainer";
import { FillBlankData } from "./tasks.types";

export class FillTheBlankTask extends BaseTask {
    protected data: FillBlankData;

    constructor(data: FillBlankData) {
        super(data);
        this.data = data;

        this.state = { userAnswers: [] };
    }

    render(props = {}) {
        const parts = this.data.text.split('___');

        return (
            <TaskContainer
                task={this.data}
                color="#3b82f6"
                onValidate={() => {
                    const result = this.validate();
                    alert(result.message);
                }}
                {...props}
            >
                <div style={{ lineHeight: '1.6' }}>
                    {parts.map((part, i) => (
                        <span key={i}>
                            {part}
                            {i < parts.length - 1 && (
                                <input
                                    type="text"
                                    style={{
                                        display: 'inline-block',
                                        width: '80px',
                                        margin: '0 4px',
                                        padding: '2px 6px',
                                        border: '1px solid #ccc',
                                        borderRadius: '3px'
                                    }}
                                    onChange={(e) => {
                                        this.state.userAnswers[i] = e.target.value.trim().toLowerCase();
                                    }}
                                />
                            )}
                        </span>
                    ))}
                </div>
            </TaskContainer>
        );
    }

    validate() {
        const correct = this.data.answers.every((answer, i) =>
            this.state.userAnswers[i]?.toLowerCase() === answer.toLowerCase()
        );
        return {
            isValid: correct,
            message: correct ? "✅ Correct!" : "❌ Try again!"
        };
    }

    getConfig() {
        return {
            type: 'fill-blank',
            text: this.data.text,
            answers: this.data.answers
        };
    }

    clone(): BaseTask {
        return new FillTheBlankTask({
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
            text: {
                type: 'text' as const,
                label: 'Sentence with Blanks (use "___")',
                value: this.data.text,
            },
            answers: {
                type: 'text' as const,
                label: 'Answers (comma-separated)',
                value: this.data.answers.join(', '),
            },
        };
    }
}