import React, { useState } from "react";
import ItemsList from "./ItemsList";

function ItemsSidebar() {
  // const blankAvatar = require("./assets/characters/blank.png")

  const [currentItems, setCurrentItems] = useState([
    {
      name: "Axe",
      quantity: 1,
      category: "weapon",
      image: require("./assets/items/axe.png")
    },
    {
      name: "Potion",
      quantity: 3,
      category: "item",
      description: "Potions are a one-use item. Some potions can heal your health, others can replenish your magic. Some have lasting effects, others have momentary boosts to your stats.",
      image: require("./assets/items/potion.png")
    },
    {
      name: "Treasure",
      quantity: 1,
      category: "item",
      image: require("./assets/items/treasure.png")
    },
    {
      name: "Helmet",
      quantity: 1,
      category: "armor",
      image: require("./assets/items/helmet.png")
    }
  ]);

  const items = currentItems.map(item => (
    <ItemsList key={item.name} item={item}/>
    ))

  return (
    <div id="itemsSidebar">
      <div id="itemsSidebarContent">
        <h3>Items</h3>
        {items}
        <p>The above items are placeholders.</p>
        <p>This space will hold your characters items in a future version of the game.</p>
      </div>
    </div>
  )
};

export default ItemsSidebar;