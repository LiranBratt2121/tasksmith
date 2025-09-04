"use client";

import { JSX } from "react";
import { BaseTaskData, EdibleFieldConfig } from "./task.types";

export abstract class BaseTask {
  protected data: BaseTaskData;
  protected state: Record<string, any> = {};

  constructor(data: BaseTaskData) {
    this.data = data;
  }

  id() {
    return this.data.id;
  }

  getLocation() {
    return this.data.location;
  }

  setLocation(x: number, y: number) {
    this.data.location = { x, y };
  }

  getData() {
    return this.data;
  }

  getState() {
    return this.state;
  }

  updateData(updates: Record<string, any>) {
    Object.keys(updates).forEach(key => {
      if (key in this.data) {
        (this.data as any)[key] = updates[key];
      }
    });
  }

  abstract render(props?: Record<string, unknown>): JSX.Element;
  abstract validate(): { isValid: boolean; message: string };
  abstract getConfig(): any;
  abstract clone(): BaseTask;

  abstract getEdibleFields(): { [key: string]: EdibleFieldConfig } | null;
}