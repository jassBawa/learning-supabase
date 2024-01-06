"use client";
import useTodos from "@/hooks/useTodos";
import { todo } from "node:test";
import React from "react";
import TodoCard from "./TodoCard";
import Spinner from "./Spinner";
import { toast } from "sonner";

type Props = {};

export default function TodoList({}: Props) {
  const { todos, isLoading, error } = useTodos();
  console.log(todos);

  if (isLoading) return <Spinner />;

  if (error) {
    toast.error(error);
  }

  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8 md:grid-cols-3 xl:grid-cols-4">
      {todos?.map((todo) => (
        <TodoCard
          key={todo.id}
          completed={todo.completed}
          task={todo.task}
          id={todo.id}
          created_at={todo.created_at}
        />
      ))}
    </div>
  );
}
