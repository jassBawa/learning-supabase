import formatDate from "@/utils/date-formatters";
import { cn } from "@/utils/utils";
import React from "react";

type Props = {
  id: number;
  task: string;
  completed: boolean;
  created_at: string;
};

const TodoCard = ({ completed, created_at, id, task }: Props) => {
  const formattedDate = formatDate(created_at);
  return (
    <div
      className={cn("bg-slate-200 relative shadow-md py-8 px-4 rounded-lg", {
        "bg-cyan-200": completed,
      })}
    >
      <p className="text-lg font-semibold">Created At: {formattedDate}</p>
      <p className="mt-2 text-gray-500">{task}</p>
      <p
        className={cn("text-red-400 text-sm", {
          "text-green-700": completed,
        })}
      >
        {completed ? "Completed" : "Not Completed"}
      </p>
    </div>
  );
};

export default TodoCard;
