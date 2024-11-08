"use client";
import React, { useState } from "react";
import data from "../app/data";
import Person from "./Person";
import Card from "./Card";
import { Button } from "./ui/button";

const BirthdayList = () => {
  const [people, setPeople] = useState(data);
  return (
    // <div className="flex flex-col border p-4 rounded shadow-2xl w-[80%] max-w-[500]">
    <Card>
      <h1 className="font-RubikDoodleShadowRegular font-bold text-[#595c77] text-3xl text-center p-5">
        {people.length} Birthdays today
      </h1>
      <Person people={people} setPeople={setPeople} />
      <Button
        variant="destructive"
        className="font-poppins bg-[#595c77] text-[#f5f8ff] m-5 mt-10 rounded-lg transition ease-in-out delay-150 duration-300 hover:bg-red-400"
        onClick={() => {
          setPeople([]);
        }}
      >
        clear all
      </Button>
    </Card>
  );
};

export default BirthdayList;
