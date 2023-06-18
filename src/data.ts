import { Task } from "./types";
import { v4 as uuidv4 } from "uuid";

export const INITIAL_TASKS: Task[] = [
  {
    id: uuidv4(),
    title: "Title 2",
    description: "Desc 2",
    status: "backlog",
  },
  {
    id: uuidv4(),
    title: "Title 3",
    description: "Desc 3",
    status: "backlog",
  },
  {
    id: uuidv4(),
    title: "Title 4",
    description: "Desc 4",
    status: "done",
  },
  {
    id: uuidv4(),
    title: "Title 5",
    description: "Desc 5",
    status: "done",
  },
  {
    id: uuidv4(),
    title: "Title 6",
    description: "Desc 6",
    status: "done",
  },
  {
    id: uuidv4(),
    title: "Title 6",
    description: "Desc 6",
    status: "done",
  },
];
