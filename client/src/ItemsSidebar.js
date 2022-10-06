import React from "react";
import ItemsList from "./ItemsList";

function ItemsSidebar() {
  // const blankAvatar = require("./assets/characters/blank.png")

  const currentItems = ([
    {
      name: "Axe",
      quantity: 1,
      category: "weapon",
      image: "https://raw.githubusercontent.com/danielpaulwill/wayfarer-lite-v3/main/client/src/assets/Items/axe.png"
    },
    {
      name: "Potion",
      quantity: 3,
      category: "item",
      description: "Potions are a one-use item. Some potions can heal your health, others can replenish your magic. Some have lasting effects, others have momentary boosts to your stats.",
      image: "https://raw.githubusercontent.com/danielpaulwill/wayfarer-lite-v3/main/client/src/assets/Items/potion.png"
    },
    {
      name: "Treasure",
      quantity: 1,
      category: "item",
      image: "https://raw.githubusercontent.com/danielpaulwill/wayfarer-lite-v3/main/client/src/assets/Items/treasure.png"
    },
    {
      name: "Helmet",
      quantity: 1,
      category: "armor",
      image: "https://raw.githubusercontent.com/danielpaulwill/wayfarer-lite-v3/main/client/src/assets/Items/Helmet.png"
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