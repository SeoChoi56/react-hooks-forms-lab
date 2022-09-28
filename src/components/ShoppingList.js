import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  // const [selectedCategory, setSelectedCategory] = useState("All");

  const [formData, setFormData] = useState({
    id: 0,
    name: '',
    category:'All',
  })

  const [itemArray, setArray] = useState([])


  function handleCategoryChange(event) {
    // setSelectedCategory(event.target.value);
    // console.log(event.target.value)
    if(event.target.name === "search") {
      setFormData({ ...formData, name: (event.target.value)})
    } else {
      setFormData({ ...formData, category: (event.target.value)})
    }
  }

  function addElement(itemtoAdd) {
    setArray([...itemArray, itemtoAdd])
  }


  const itemsToDisplay = items.filter((item) => {
    if (formData.category === "All") return true;
    return item.category === formData.category;
  });

  const filteredItems = itemsToDisplay.filter((item) => {
    if(formData.name === ''){
      return true
    }else {
      return item.name.toLowerCase().includes(formData.name.toLowerCase())
    }
  })

  if(itemArray.length === 0){
    setArray(items)
  }

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={addElement}/>
      <Filter onSearchChange={handleCategoryChange} searchTerm={formData.name} />
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
