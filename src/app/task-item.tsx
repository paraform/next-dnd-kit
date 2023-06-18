import { Task } from "../types";

type TaskItemProps = {
  task: Task;
};

const TaskItem = ({ task }: TaskItemProps) => {
  return (
    <div className="p-4 rounded-lg border-2 border-gray-500 border-solid">
      <div className="text-lg text-black">{task.title}</div>
    </div>
  );
};

export default TaskItem;
