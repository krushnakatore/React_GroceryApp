import "./GroceryInput.css";
import { useState } from "react";
export const GroceryInput = ({ getData }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    // console.log(handleChange())

    // console.log(text)
    getData(text);
    var a = document.getElementById("class");
    a.value = "";
  };

  return (
    <div className="class">
      <input
        id="class"
        onChange={handleChange}
        type="text"
        placeholder="Enter your Purchase Item"
      />
      <button onClick={handleClick}>Add Item</button>
    </div>
  );
};
