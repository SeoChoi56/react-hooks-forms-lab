import React, { useState }from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

  const [newCategory, setCategory] = useState({
    id: '',
    name:'',
  category: 'Produce'})

  function handleSubmit(event) {
    event.preventDefault();
    console.log(onItemFormSubmit)
    console.log(event.target.name.value);
    console.log(event.target.category.value);
    setCategory({
      id:  uuid(),
      name: (event.target.name.value),
      category: (event.target.category.value),
    })
    onItemFormSubmit(newCategory)
  }


  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" />
      </label>

      <label>
        Category:
        <select name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
    
  );
  
}

export default ItemForm;
