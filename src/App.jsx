import { useState, useEffect } from "react";
import { groceryItems } from "./data/groceryItems";
import Items from "./components/Items";
import "./App.css";

const getLocalStorage = () => {
  const data = localStorage.getItem("list");
  if (data) {
    return JSON.parse(data);
  } else {
    return groceryItems;
  }
};

const App = () => {
  const [items, setItems] = useState(getLocalStorage);
  const [newItem, setNewItem] = useState("");

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(items));
  }, [items]);

  const addItem = (e) => {
    e.preventDefault();
    if (!newItem.trim()) return;

    const item = {
      id: new Date().getTime().toString(),
      name: newItem,
      completed: false,
    };

    setItems([...items, item]);
    setNewItem("");
  };

  const editCompleted = (id) => {
    const updated = items.map((item) =>
      item.id === id
        ? { ...item, completed: !item.completed }
        : item
    );
    setItems(updated);
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const updateItem = (id, newName) => {
    const updated = items.map((item) =>
      item.id === id ? { ...item, name: newName } : item
    );
    setItems(updated);
  };

  return (
    <section className="section-center">
      <h2>Grocery Bud</h2>

      <form onSubmit={addItem} className="form-control">
        <input
          type="text"
          placeholder="add item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type="submit" className="btn">
          add
        </button>
      </form>

      <Items
        items={items}
        editCompleted={editCompleted}
        removeItem={removeItem}
        updateItem={updateItem}
      />
    </section>
  );
};

export default App;