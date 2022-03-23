import React from "react";
// import { v4 as uuid } from "uuid";

function ItemForm({
  newItem,
  onItemFormSubmit,
  setNewItem,
  newItemCategory,
  setNewItemCategory,
}) {
  function handleSubmit(e) {
    e.preventDefault();

    onItemFormSubmit(newItem, newItemCategory);

    setNewItem("");
  }

  return (
    <form className="NewItem">
      <label>
        Name:
        <input
          type="text"
          name="name"
          onChange={(e) => setNewItem(e.target.value)}
          value={newItem}
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          onChange={(e) => setNewItemCategory(e.target.value)}
          value={newItemCategory}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" onClick={handleSubmit}>
        Add to List
      </button>
    </form>
  );
}

export default ItemForm;
