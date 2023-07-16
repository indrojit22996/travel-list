import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import { Pakinglist } from "./Pakinglist";
import { Stats } from "./Stats";

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

  function addItemDelete() {
    const confirm = window.confirm("Are you sure delete the all item");
    if (confirm) {
      setItems([]);
    }
  }
  return (
    <div>
      <Logo />
      <Form onAddItems={handelAddItem} />
      <Pakinglist
        items={items}
        onDeleteItem={handelDeleteItem}
        onCheckItem={handelCheck}
        onClearItem={addItemDelete}
      />
      <Stats items={items} />
    </div>
  );
}
