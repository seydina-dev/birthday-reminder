import React, { useState } from "react";
import { Button } from "./ui/button";
import { Edit2Icon } from "lucide-react";

const Person = ({ people, setPeople }) => {
  const removeItem = (id) => {
    setPeople(
      people.filter((person) => {
        return person.id !== id;
      })
    );
  };

  const [hoveredPersonId, setHoveredPersonId] = useState(null);

  return (
    <>
      {people.map(({ id, name, age, image }) => (
        <div
          key={id}
          className="flex items-center p-4 gap-4 transition ease-in-out delay-150 duration-300 hover:border hover:shadow-md hover:rounded-xl"
          onMouseEnter={() => setHoveredPersonId(id)}
          onMouseLeave={() => setHoveredPersonId(null)}
        >
          <img
            src={image}
            alt={name}
            className="w-20 h-20 rounded-full object-cover drop-shadow-md"
          />
          <div className="flex justify-between items-center w-[80%]">
            <div>
              <h2 className="font-PoppinsBold font-bold text-[#595c77]">
                {name}
              </h2>
              <p className="text-[#595c77] font-PoppinsMedium font-medium text-muted-foreground">
                {age} years
              </p>
            </div>
            <div>
              <Button
                variant="ghorst"
                className="font-medium text-[#3fdeaf] border-2 transition ease-in-out delay-150 duration-300 border-[#3fdeaf] hover:text-white hover:bg-[#3fdeaf]"
                onClick={() => {
                  removeItem(id);
                }}
              >
                remove
              </Button>
              {hoveredPersonId === id && (
                <Button
                  variant="secondary"
                  className="transition ease-in-out delay-500 duration-1000 ml-2 text-orange-300"
                  onClick={() => console.log(`Edit person with ID: ${id}`)}
                >
                  Edit
                  <Edit2Icon />
                </Button>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Person;
