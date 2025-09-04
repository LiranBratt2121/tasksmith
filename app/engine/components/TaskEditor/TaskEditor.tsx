import React, { useState, useEffect } from 'react';
import { BaseTask } from '../../task/baseTask';
import { TaskField } from '../TaskField/TaskField';
import {
    EditorOverlay,
    EditorContainer,
    EditorHeader,
    ButtonGroup,
    EditorButton,
    FieldWrapper
} from './TaskEditor.styles';

interface TaskEditorProps {
    task: BaseTask;
    onSave: (taskId: string, updates: Record<string, any>) => void;
    onClose: () => void;
}

const TaskEditor: React.FC<TaskEditorProps> = ({ task, onSave, onClose }) => {
    const [formData, setFormData] = useState<Record<string, any>>({});
    const editableFields = task.getEdibleFields();

    const editorOverlayRef = React.useRef<HTMLDivElement>(null);
    const editorContainerRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        const initialData: Record<string, any> = {};

        if (editableFields) {
            Object.keys(editableFields).forEach(key => {
                initialData[key] = editableFields[key].value;
            })
        }

        setFormData(initialData);
    }, [task.id()]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        const handleClickOutside = (e: MouseEvent) => {
            if (editorOverlayRef.current && 
                editorContainerRef.current &&
                !editorContainerRef.current.contains(e.target as Node) &&
                e.composedPath().includes(editorOverlayRef.current)) {
                onClose();
            }
        };

        window.addEventListener('click', handleClickOutside);
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('click', handleClickOutside);
            window.removeEventListener('keydown', handleKeyDown);
        };
    })

    const handleChange = (key: string, value: any) => {
        setFormData(prev => ({ ...prev, [key]: value }));
    };

    const handleSubmit = () => {
        const updates: Record<string, any> = { ...formData };

        switch (task.getData().type) {
            case 'fill-blank':
                updates.answers = updates.answers
                    .split(',')
                    .map((s: string) => s.trim())
                    .filter(Boolean);
                break;
            case 'multiple-choice':
                updates.options = updates.options
                    .split(',')
                    .map((s: string) => s.trim())
                    .filter(Boolean);

                let parsedIndex = parseInt(updates.correctIndex, 10);
                if (isNaN(parsedIndex) || parsedIndex < 0 || parsedIndex >= updates.options.length) {
                    parsedIndex = 0;
                }
                updates.correctIndex = parsedIndex;
                break;
            case 'math':
                updates.answer = parseFloat(updates.answer);
                if (isNaN(updates.answer)) {
                    updates.answer = 0;
                }
                break;

            default:
                break;
        }

        onSave(task.id(), updates);
        onClose();
    };

    return (
        <EditorOverlay ref={editorOverlayRef}>
            <EditorContainer ref={editorContainerRef}>
                <EditorHeader>Edit Task: {task.getData().name}</EditorHeader>
                {editableFields && Object.entries(editableFields).map(([key, field]) => (
                    <FieldWrapper key={key}>
                        <TaskField
                            type={field.type}
                            label={field.label}
                            value={formData[key]}
                            options={field.options}
                            onChange={(val) => handleChange(key, val)}
                        />
                    </FieldWrapper>
                ))}
                <ButtonGroup>
                    <EditorButton onClick={onClose}>Cancel</EditorButton>
                    <EditorButton primary onClick={handleSubmit}>Save Changes</EditorButton>
                </ButtonGroup>
            </EditorContainer>
        </EditorOverlay>
    );
};

export default TaskEditor;
