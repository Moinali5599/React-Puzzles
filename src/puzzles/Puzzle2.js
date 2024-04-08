import {React, useState} from 'react'
import { SketchPicker } from 'react-color';

const Puzzle2 = () => {
  const [selectedColor, setSelectedColor] = useState('fff')

  return (
    <div>
      <div className="flex flex-col gap-10 mt-10 items-center justify-center">
      <span className="w-1/2 border-2 border-solid border-black rounded-md p-3"><span className="font-semibold">Description: </span>Develop a React application that features a color picker component. Users should be able to select a color from the picker, and the corresponding hexadecimal code of the chosen color should be displayed prominently on the screen.</span>
      <SketchPicker
      color={selectedColor}
      onChange = {(color) => setSelectedColor(color.hex)}
      />
      
      <p>{selectedColor}</p>
      </div>
      
    </div>
  )
}

export default Puzzle2