import "./GroceryList.css";
export const GroceryList = ({ title, handleDelete, id }) => {
  // console.log(id)
  return (
    <>
      <div className="list">
        <li>{title}</li>
        <button onClick={() => handleDelete(id)}>Mark as completed</button>
      </div>
    </>
  );
};
