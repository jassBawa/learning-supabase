import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import supabase from "@/services/supabase";
import { useState } from "react";
import useTodos from "@/hooks/useTodos";
import { toast } from "sonner";

type Props = {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddTodoModal = ({ setModalOpen }: Props) => {
  const [todo, setTodo] = useState("");
  const { mutate: mutateTodos } = useTodos();

  const handleAddTodo = async () => {
    if (!todo) return toast.error("Todo can't be empty");

    const { data, error } = await supabase
      .from("todos")
      .insert([{ task: todo, completed: false }])
      .select();

    if (data) {
      toast.success("Added todo");
    }

    // resting the states
    setTodo("");
    setModalOpen(false);
    mutateTodos();
  };

  return (
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>Add todo here</DialogTitle>
        <DialogDescription>
          Anyone who has this link will be able to view this.
        </DialogDescription>
      </DialogHeader>
      <div className="flex items-center space-x-2">
        <div className="grid flex-1 gap-2">
          <Label htmlFor="link" className="sr-only">
            Link
          </Label>
          <Input
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            id="link"
            placeholder="Do groceries"
          />
        </div>
      </div>
      <DialogFooter className="sm:justify-start">
        <Button type="button" variant="default" onClick={handleAddTodo}>
          Create todo
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default AddTodoModal;
