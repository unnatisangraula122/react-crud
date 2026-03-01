import SingleItem from "./SingleItem";

const Items = ({ items, editCompleted, removeItem  ,  updateItem}) => {
  return (
    <div className="items">
      {items.map((item) => (
        <SingleItem
          key={item.id}
          item={item}
          editCompleted={editCompleted}
          removeItem={removeItem}
          updateItem={updateItem}
        />
      ))}
    </div>
  );
};

export default Items;