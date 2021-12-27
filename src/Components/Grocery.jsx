// import {useState} from "react";
import "./Grocery.css";
import { GroceryInput } from "./GroceryInput";

import { GroceryList } from "./GroceryList";

import { useState } from "react";

import { nanoid } from "nanoid";

export const Grocery = () => {
  const [list, setList] = useState([]);
  // console.log(list)
  const handleBars = (data) => {
    const payload = {
      title: data,
      id: nanoid(5)
    };

    setList([...list, payload]);
  };

  const handleDelete = (id) => {
    console.log(list);
    var newArray = list.filter((e) => {
      return e.id !== id;
    });

    setList(newArray);
  };

  return (
    <>
      <h1>My Grocery App</h1>
      <GroceryInput getData={handleBars} />
      {list.map((e) => (
        <GroceryList key={e.id} {...e} handleDelete={handleDelete} />
      ))}
    </>
  );
};
