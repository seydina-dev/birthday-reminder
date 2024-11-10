import { useState } from "react";
import { PlusCircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { v6 as uuidv6 } from "uuid";

const AddBirthday = ({ people, setPeople }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleAdd = () => {
    // TODO: more input control for age
    if (name.trim() && age.trim()) {
      setPeople((prev) => {
        return [
          ...prev,
          {
            id: uuidv6(),
            name: name,
            age: age,
            image: `https://ui-avatars.com/api/?name=${name}`,
          },
        ];
      });
      setName("");
      setAge("");
    }
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild className="w-full bg-gray-500 py-2">
          <Button variant="outline">Add Person</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-center">New Birthday</DialogTitle>
            <DialogDescription>
              Add a new person's birthday here. Click Add Birthday when you're
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                value={name}
                className="col-span-3"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="age" className="text-right">
                Age
              </Label>
              <Input
                id="age"
                value={age}
                className="col-span-3"
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={handleAdd}>
              Add Birthday
              <PlusCircleIcon />
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddBirthday;
