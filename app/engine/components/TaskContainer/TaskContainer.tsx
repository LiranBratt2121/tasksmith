import React from "react";
import { BaseTaskData } from "../../task/task.types";
import {
    StyledTaskContainer,
    StyledTaskHeader,
    ColorCircle,
    TaskTitle,
    ValidateButton,
} from './TaskContainer.styles';
import OptionsMenu from "./components/OptionMenu";

interface TaskContainerProps {
    task: BaseTaskData;
    children: React.ReactNode;
    onValidate?: () => void;
    isDragging?: boolean;
    color?: string;
    onDragStart?: (e: React.MouseEvent) => void;
    remove?: () => void;
    edit?: () => void;
}

export const TaskContainer = ({
    task,
    color = '#3b82f6',
    children,
    onValidate,
    isDragging,
    onDragStart,
    remove: removeTask,
    edit: editTask
}: TaskContainerProps) => {
    return (
        <StyledTaskContainer
            top={task.location.y}
            left={task.location.x}
            color={color}
            isDragging={!!isDragging}
            onMouseDown={onDragStart}
        >
            <StyledTaskHeader color={color}>
                <ColorCircle color={color} />
                <TaskTitle color={color}>
                    {task.name}
                </TaskTitle>

                <OptionsMenu
                    editTask={() => editTask && editTask()}
                    removeTask={() => removeTask && removeTask()} />

            </StyledTaskHeader>

            <div className="task-content">
                {children}
            </div>

            {onValidate && (
                <ValidateButton
                    onClick={onValidate}
                    color={color}
                >
                    Check Answer
                </ValidateButton>
            )}
        </StyledTaskContainer>
    );
};