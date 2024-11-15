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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { v4 as uuidv4 } from "uuid";

const AddBirthday = ({ people, setPeople }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [birthdate, setBirthdate] = useState(new Date());

  const calculateDaysUntilBirthday = (birthdate) => {
    const today = new Date();
    const currentYear = today.getFullYear();

    let nextBithday = new Date(
      currentYear,
      birthdate.getMonth(),
      birthdate.getDate()
    );

    if (nextBithday < today) {
      nextBithday = new Date(
        currentYear + 1,
        birthdate.getMonth(),
        birthdate.getDate()
      );
    }

    const differenceInTime = nextBithday - today; // in milliseconds
    const nextBithdayInDays = Math.ceil(
      differenceInTime / (1000 * 60 * 60 * 24)
    ); // convert the time to days

    return nextBithdayInDays;
  };

  const handleAdd = () => {
    if (name.trim() && age.trim()) {
      const daysUntilBirthday = calculateDaysUntilBirthday(birthdate);
      setPeople((prev) => [
        ...prev,
        {
          id: uuidv4(),
          name,
          age,
          birthdate: birthdate.toISOString().split("T")[0], // Store ISO format (e.g., "2024-02-21")
          daysUntilBirthday,
          image: `https://ui-avatars.com/api/?background=fff&name=${name}`,
        },
      ]);
      setName("");
      setAge("");
      setBirthdate(new Date()); // reset to the current date or a default
    }
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
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
                type="number"
                min="1"
                max="120"
                value={age}
                className="col-span-3"
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="birthdate" className="text-right">
                Birthday
              </Label>
              <DatePicker
                selected={birthdate}
                onChange={(date) => setBirthdate(date)}
                dateFormat="dd/MM/yyyy"
                className="col-span-3 border rounded p-2"
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              type="submit"
              onClick={handleAdd}
              disabled={!name.trim() || !age.trim()}
            >
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
