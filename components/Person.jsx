import React from "react";
import { Button } from "./ui/button";

const Person = ({ people, setPeople }) => {
  const removeItem = (id) => {
    setPeople(
      people.filter((person) => {
        return person.id !== id;
      })
    );
  };
  return (
    <>
      {people.map(({ id, name, age, image }) => (
        <div
          key={id}
          className="flex items-center p-4 gap-4 transition ease-in-out delay-150 duration-300 hover:border hover:shadow-md hover:rounded"
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
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Person;
