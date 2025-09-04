"use client";
import React, { useState } from 'react';
import TaskEngine from './engine/taskEngine';
import { FillTheBlankTask } from './tasks/FillTheBlank';
import { MultipleChoice } from './tasks/MultipleChoice';
import { MathTask } from './tasks/Math';
import { BaseTask } from './engine/task/baseTask';
import TaskEditor from './engine/components/TaskEditor/TaskEditor';
import {
  AppContainer,
  Toolbar,
  AddTaskButton,
  SharePrintContainer,
  ShareButton,
  PrintButton,
  CanvasContainer,
  ClearButton
} from './styles';

const Home = () => {
  const [taskEngine] = useState(() => new TaskEngine());
  const [tasks, setTasks] = useState<BaseTask[]>([]);
  const [editingTask, setEditingTask] = useState<BaseTask | null>(null);

  const zeroState = {
    isDragging: false,
    taskId: "",
    offset: { x: 0, y: 0 }
  }

  const [dragState, setDragState] = useState(zeroState);

  const handleDragStart = (taskId: string, e: React.MouseEvent) => {
    const task = taskEngine.getTask(taskId);
    if (!task) return;

    setDragState({
      isDragging: true,
      taskId,
      offset: {
        x: e.clientX - task.getLocation().x,
        y: e.clientY - task.getLocation().y
      }
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragState?.isDragging) return;

    const task = taskEngine.getTask(dragState.taskId);
    if (task) {
      task.setLocation(
        e.clientX - dragState.offset.x,
        e.clientY - dragState.offset.y
      );
      setTasks([...taskEngine.getAllTasks()]);
    }
  };

  const handleMouseUp = () => {
    setDragState(zeroState);
  };

  const addNewTask = (type: string) => {
    let newTask;
    const id = `task-${Date.now()}`;
    const randomX = Math.random() * 400 + 50;
    const randomY = Math.random() * 200 + 100;

    switch (type) {
      case 'fill-blank':
        newTask = new FillTheBlankTask({
          id,
          name: 'New Fill Blank',
          type: 'fill-blank',
          location: { x: randomX, y: randomY },
          text: 'Fill in the ___',
          answers: ['blank']
        });
        break;
      case 'multiple-choice':
        newTask = new MultipleChoice({
          id,
          name: 'New Multiple Choice',
          type: 'multiple-choice',
          location: { x: randomX, y: randomY },
          question: 'What is the answer?',
          options: ['Option A', 'Option B', 'Option C'],
          correctIndex: 0
        });
        break;
      case 'math':
        newTask = new MathTask({
          id,
          name: 'New Math Problem',
          type: 'math',
          location: { x: randomX, y: randomY },
          expression: '2 + 2',
          answer: 4
        });
        break;
      default:
        return;
    }

    taskEngine.addTask(newTask);
    setTasks([...taskEngine.getAllTasks()]);
  };

  const handleClearScreen = () => {
    taskEngine.clear();
    setTasks([]);
  }

  const handleEditTask = (taskId: string) => {
    const task = taskEngine.getTask(taskId);
    if (task) {
      setEditingTask(task);
    }
  };

  const handleSaveTaskEdits = (taskId: string, updates: Record<string, any>) => {
    const task = taskEngine.getTask(taskId);
    if (task) {
      task.updateData(updates);
      setTasks([...taskEngine.getAllTasks()]);
    }
    setEditingTask(null);
  };

  const handleCloseEditor = () => {
    setEditingTask(null);
  };

  return (
    <AppContainer
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <Toolbar>
        <AddTaskButton color="#3b82f6" onClick={() => addNewTask('fill-blank')}>
          + Fill Blank
        </AddTaskButton>
        <AddTaskButton color='#10b981' onClick={() => addNewTask('multiple-choice')}>
          + Multiple Choice
        </AddTaskButton>
        <AddTaskButton color='#f59e0b' onClick={() => addNewTask('math')}>
          + Math
        </AddTaskButton>
        <ClearButton onClick={handleClearScreen}>
          Clear Screen
        </ClearButton>
        <SharePrintContainer>
          <ShareButton onClick={() => alert('No')}>
            📤 Share
          </ShareButton>
          <PrintButton onClick={() => window.print()}>
            🖨️ Print
          </PrintButton>
        </SharePrintContainer>
      </Toolbar>

      <CanvasContainer>
        {tasks.map(task =>
          task.render({
            key: task.id(),
            isDragging: dragState?.taskId === task.id(),
            onDragStart: (e: React.MouseEvent) => handleDragStart(task.id(), e),
            remove: () => {
              taskEngine.removeTask(task.id());
              setTasks([...taskEngine.getAllTasks()]);
            },
            edit: () => handleEditTask(task.id())
          })
        )}
      </CanvasContainer>

      {editingTask && (
        <TaskEditor
          task={editingTask}
          onSave={handleSaveTaskEdits}
          onClose={handleCloseEditor}
        />
      )}
    </AppContainer>
  );
};

export default Home;