import React, { useEffect, useState } from "react";

function OptionSelect({ option, onOptionSelect, character }) {
  const [restricted, setRestricted] = useState(false)


  return (
    <div>
      <button className={restricted ? 'disabledButton' : 'normalButton'} onClick={e => onOptionSelect(option)}>{option.action}</button>
    </div>
  )
};

export default OptionSelect;