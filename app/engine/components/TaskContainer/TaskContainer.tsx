import React from "react";
import { BaseTaskData } from "../../task/task.types";
import {
    StyledTaskContainer,
    StyledTaskHeader,
    ColorCircle,
    TaskTitle,
    ValidateButton
} from './TaskContainer.styles';

interface TaskContainerProps {
    task: BaseTaskData;
    children: React.ReactNode;
    onValidate?: () => void;
    isDragging?: boolean;
    color?: string;
    onDragStart?: (e: React.MouseEvent) => void;
}

export const TaskContainer = ({
    task,
    color = '#3b82f6',
    children,
    onValidate,
    isDragging,
    onDragStart
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