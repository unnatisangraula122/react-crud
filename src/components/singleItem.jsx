import { useState } from "react";
import { FiEdit, FiTrash2, FiCheck } from "react-icons/fi";

const SingleItem = ({ item, editCompleted, removeItem, updateItem }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(item.name);

  const handleSave = () => {
    if (!editValue.trim()) return;
    updateItem(item.id, editValue);
    setIsEditing(false);
  };

  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => editCompleted(item.id)}
      />

      {isEditing ? (
        <input
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          className="edit-input"
        />
      ) : (
        <p
          style={{
            textTransform: "capitalize",
            textDecoration: item.completed ? "line-through" : "none",
          }}
        >
          {item.name}
        </p>
      )}

      {isEditing ? (
        <button
          className="icon-btn"
          type="button"
          onClick={handleSave}
        >
          <FiCheck size={18} />
        </button>
      ) : (
        <button
          className="icon-btn"
          type="button"
          onClick={() => setIsEditing(true)}
        >
          <FiEdit size={18} />
        </button>
      )}

      <button
        className="icon-btn remove-btn"
        type="button"
        onClick={() => removeItem(item.id)}
      >
        <FiTrash2 size={18} />
      </button>
    </div>
  );
};

export default SingleItem;