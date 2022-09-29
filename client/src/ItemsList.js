import { useState } from "react"

function ItemsList({ item }) {
  const [isVisible, setIsVisible] = useState("none")

  function handleMouseEnter() {
    setIsVisible("block")
  }

  function handleMouseLeave() {
    setIsVisible("none")
  }

  return (
    <div className="itemList" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <p>{item.quantity} x </p>
      <img className="itemImg" src={item.image}></img>
      <p style={{display: isVisible}}>{item.name}</p>
    </div>
  );
};

export default ItemsList;