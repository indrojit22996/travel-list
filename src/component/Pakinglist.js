import { useState } from "react";
import { Item } from "./Item";

export function Pakinglist({ items, onDeleteItem, onCheckItem, onClearItem }) {
  const [sortBy, setSortBy] = useState("input");
  let shortItem;
  if (sortBy === "input") {
    shortItem = items;
  }
  if (sortBy === "description") {
    shortItem = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === "packed") {
    shortItem = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {shortItem.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onCheckItem={onCheckItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">sort by input oder</option>
          <option value="description">sort by description</option>
          <option value="packed">sort by packed status </option>
        </select>
      </div>
      <button onClick={onClearItem}>Clear list</button>
    </div>
  );
}
