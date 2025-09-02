"use client";

import React from 'react'
import TaskEngine from './engine/taskEngine';
import { FillTheBlankTask } from './tasks/FillTheBlank';
import { MultipleChoice } from './tasks/MultipleChoice';

const Home = () => {
  const taskEngine = new TaskEngine();

  taskEngine.addTask(new FillTheBlankTask({
    id: "1",
    name: "The fox story",
    location: { x: 0, y: 0 },
    type: "fill-the-blank",
    textWithBlanks: "The [blank] fox went to [blank] and [blank]",
    answerKey: {
      "blank-0": "orange",
      "blank-1": "school",
      "blank-2": "exploded"
    }
  }))

  taskEngine.addTask(new FillTheBlankTask({
    id: "2",
    name: "Weather",
    location: { x: 100, y: 0 },
    type: "fill-the-blank",
    textWithBlanks: "Today is [blank] and the temperature is [blank] degrees",
    answerKey: {
      "blank-0": "sunny",
      "blank-1": "75"
    }
  }))

  taskEngine.addTask(new MultipleChoice({
    id: "3",
    name: "Captial Cities",
    location: { x: 0, y: 50 },
    type: "multiple-choice",
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin"],
    correctIndex: 0
  }))

  taskEngine.addTask(new FillTheBlankTask({
    id: "4",
    name: "Space facts",
    location: { x: 0, y: 100 },
    type: "fill-the-blank",
    textWithBlanks: "The [blank] is the [blank] planet from the sun",
    answerKey: {
      "blank-0": "Earth",
      "blank-1": "third"
    }
  }))

  taskEngine.addTask(new MultipleChoice({
    id: "5",
    name: "Basic math",
    location: { x: 0, y: 150 },
    type: "multiple-choice",
    question: "what is the answer for 1 + 1",
    options: ["3", "2", "1"],
    correctIndex: 1
  }));

  return (
    <>
      {
        taskEngine.getAllTasks().map((task) => task.render())
      }
    </>
  )
}

export default Home;
