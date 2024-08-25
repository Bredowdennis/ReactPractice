import React, { useState } from "react";

function ColorPicker() {
  const [selectedColor, setColor] = useState("#FFFFFF");

  function handleColorChange(event: {
    target: { value: React.SetStateAction<string> };
  }) {
    setColor(event.target.value);
  }

  return (
    <div>
      <h1>Color Picker</h1>
      <div style={{ backgroundColor: selectedColor }}>
        <p>Selected Color: {selectedColor}</p>
      </div>
      <label>Select a Color:</label>
      <input value={selectedColor} onChange={handleColorChange} type="color" />
    </div>
  );
}
export default ColorPicker;
