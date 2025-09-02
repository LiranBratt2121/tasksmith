"use client";

import React from 'react'
import TaskEngine from './engine/taskEngine';
import { FillTheBlankTask } from './tasks/FillTheBlank';

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

  taskEngine.addTask(new FillTheBlankTask({
    id: "3",
    name: "Space facts",
    location: { x: 0, y: 100 },
    type: "fill-the-blank",
    textWithBlanks: "The [blank] is the [blank] planet from the sun",
    answerKey: {
      "blank-0": "Earth",
      "blank-1": "third"
    }
  }))

  return (
    <>
      {
        taskEngine.getAllTasks().map((task) => task.render())
      }
    </>
  )
}

export default Home;
