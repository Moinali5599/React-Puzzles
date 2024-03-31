import { useState } from "react";

const Puzzle1 = () => {
  const [items, setItems] = useState([]);
  const [newText, setNewText] = useState("");

  const addItem = () => {
    setItems([...items, { text: newText, isStrikedThrough: false }]);
    setNewText("");
  };

  const strikeThrough = (index) => {
    const updateItems = [...items];
    updateItems[index].isStrikedThrough = !updateItems[index].isStrikedThrough;
    setItems(updateItems);
  };

  const clearAll = () => {
    setItems([]);
  };

  return (
    <div>
      <div className="flex mt-10">
      <span className="w-1/2 border-2 border-solid border-black rounded-md p-3"><span className="font-semibold">Description: </span>This puzzle requires you to build a React application that displays a dynamic list of items. Each item should have its own text and the ability to be crossed out through a strike-through effect when clicked. Users should be able to add new items to the list and clear all existing items at once.</span>
      </div>
      <div className="flex gap-4 justify-center items-center mt-12">
        <input
          className="w-1/3 p-2 border-solid border-black border-2 rounded-md"
          type="text"
          placeholder="Text for new item"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          required={true}
        />
        <button
          className={`bg-slate-900 text-neutral-200 px-4 py-2 rounded-md ${
            newText === "" ? "disabled" : ""
          }`}
          onClick={addItem}
        >
          Add Item
        </button>
        <button className="bg-red-700 text-white px-4 py-2 rounded-md" onClick={clearAll}>Clear All</button>
      </div>
      <div className="flex flex-col gap-4 mt-12 items-center">
        {items.map((item, idx) => (
           <h2 key={idx} className={`cursor-pointer ${item.isStrikedThrough ? "line-through" : ""}`} onClick={() => strikeThrough(idx)}>
            {item.text}
          </h2>))}
      </div>
    </div>
  );
};

export default Puzzle1;
