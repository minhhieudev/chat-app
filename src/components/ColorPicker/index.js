import React, { useState } from "react";
import { SketchPicker } from "react-color";

export default function ColorPicker(props) {
  const [showColorPicker, setShowColorPicker] = useState(false);

  const handleColorClick = () => {
    setShowColorPicker(!showColorPicker);
  };

  const handleColorChange = (color) => {
    props.onChange(color.hex);
  };

  

  return (
    <div>
      <button onClick={handleColorClick}>Pick Color</button>
      {showColorPicker ? (
        <div >
          <SketchPicker color={props.color} onChange={handleColorChange} />
          <div  onClick={() => setShowColorPicker(false)} />
        </div>
      ) : null}
    </div>
  );
}
