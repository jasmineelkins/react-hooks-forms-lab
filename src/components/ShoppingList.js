import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import itemArray from "../data/items";

function ShoppingList() {
  const [items, setItems] = useState(itemArray);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [newItem, setNewItem] = useState("");
  const [newItemCategory, setNewItemCategory] = useState("Produce");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function onSearchChange(event) {
    setSearchText(event.target.value);
  }

  function onItemFormSubmit(newItem, newItemCategory) {
    const listOfIDs = items.map((item) => item.id).sort();
    const previousItemID = listOfIDs.pop();

    const newItemID = parseInt(previousItemID) + 1;

    const newItemList = [
      ...items,
      { name: newItem, id: newItemID, category: newItemCategory },
    ];

    console.log(newItemList);
    setItems(newItemList);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  const displayItemsByName = itemsToDisplay.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="ShoppingList">
      <ItemForm
        onItemFormSubmit={onItemFormSubmit}
        newItem={newItem}
        setNewItem={setNewItem}
        newItemCategory={newItemCategory}
        setNewItemCategory={setNewItemCategory}
      />
      <Filter
        onCategoryChange={handleCategoryChange}
        searchText={searchText}
        setSearchText={setSearchText}
        onSearchChange={onSearchChange}
      />
      <ul className="Items">
        {displayItemsByName.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
