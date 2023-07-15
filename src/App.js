import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);
  function handelAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handelDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handelCheck(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <div>
      <Logo />
      <Form onAddItems={handelAddItem} />
      <Pakinglist items={items} onDeleteItem={handelDeleteItem} onCheckItem={handelCheck} />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>👜 Go Away 🚗</h1>;
}
function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handelSubmit(e) {
    e.preventDefault();
    if (!description) {
      return;
    }

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);
    setDescription("");
    setQuantity(1);
    onAddItems(newItem);
  }
  return (
    <form className="add-form" onSubmit={handelSubmit}>
      <h3>What do you need for your 😊 trip</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
function Pakinglist({ items, onDeleteItem,onCheckItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onCheckItem={onCheckItem} />
        ))}
      </ul>
    </div>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>You have X item on youe list, and you alradey pack X (X%)</em>
    </footer>
  );
}
function Item({ item, onDeleteItem,onCheckItem }) {
  return (
    <li>
      <input type="checkbox" value={item.packed} onChange={() => onCheckItem(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.description}
        {item.quantity}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
