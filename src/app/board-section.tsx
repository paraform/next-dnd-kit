import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import React from "react";
import SortableTaskItem from "./sortable-task-item";
import { Task } from "../types";
import TaskItem from "./task-item";
import { useDroppable } from "@dnd-kit/core";

type BoardSectionProps = {
  id: string;
  title: string;
  tasks: Task[];
};

const BoardSection = ({ id, title, tasks }: BoardSectionProps) => {
  const { setNodeRef } = useDroppable({
    id,
  });

  return (
    <div className="bg-white">
      {title}

      <SortableContext
        id={id}
        items={tasks}
        strategy={verticalListSortingStrategy}
      >
        <div ref={setNodeRef}>
          {tasks.map((task) => (
            <div key={task.id}>
              <SortableTaskItem id={task.id}>
                <TaskItem task={task} />
              </SortableTaskItem>
            </div>
          ))}
        </div>
      </SortableContext>
    </div>
  );
};

export default BoardSection;
