"use client";
import AddTodoModal from "@/components/AddTodoModal";
import AuthCards from "@/components/Card/AuthCards";
import TodoList from "@/components/TodoList";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CircleUserRound, Copy, Github, GithubIcon } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen((prev) => !prev);
  };
  return (
    <main className="h-full">
      <header className="w-full bg-slate-100 py-4">
        <div className="max-w-4xl mx-auto img__logo flex justify-between items-center">
          <h3>Logo Here</h3>
        </div>
      </header>
      {/* to be changed */}
      <section className="py-8 max-w-md md:max-w-4xl mx-auto">
        <Dialog open={modalOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" onClick={handleModalOpen}>
              Add todo
            </Button>
          </DialogTrigger>
          <AddTodoModal setModalOpen={setModalOpen} />
        </Dialog>
        <TodoList />
      </section>
    </main>
  );
}
