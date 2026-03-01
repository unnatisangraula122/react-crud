import SingleItem from "./SingleItem";

const Items = ({ items, editCompleted, removeItem }) => {
  return (
    <div className="items">
      {items.map((item) => (
        <SingleItem
          key={item.id}
          item={item}
          editCompleted={editCompleted}
          removeItem={removeItem}
        />
      ))}
    </div>
  );
};

export default Items;