import { useState, useEffect } from 'react';
import ColorInput from "./Components/ColorInput/ColorInput";

const App = () => {
  const [red, setRed] = useState(51);
  const [green, setGreen] = useState(51);
  const [blue, setBlue] = useState(51);
  const [hex, setHex] = useState(false);
  const [color, setColor] = useState('#333333');

  const convertToHex = (number) => (
    parseInt(number).toString(16).padStart(2, '0')
  )

  const randomColor = (setColor) => {
    setColor(Math.floor(Math.random() * 255.9999999999999));
  }

  const setBackground = (color) => {
    document.documentElement.style.setProperty(
      '--bg-color', 
      color
    )
  }

  useEffect(() => {
    setColor(`#${convertToHex(red)}${convertToHex(green)}${convertToHex(blue)}`);
    setBackground(color);
  }, [red, green, blue, color])

  return(
    <div className="modal">
      <form className="modal-items">
        <p onClick={() => {setHex(!hex)}} className='output'>
          {hex 
            ? `#${convertToHex(red)}${convertToHex(green)}${convertToHex(blue)}`
            : `rgb(${red}, ${green}, ${blue})`
          }
        </p>
        <div className="inputs">
          <ColorInput 
            value={red}
            setValue={setRed}
            trackColor={'#c03939'}
            innerThumb={'#f57777'}
            outerThumb={'#882626'}
            id={'red'}
          />
          <ColorInput 
            value={green}
            setValue={setGreen}
            trackColor={'#54c039'}
            innerThumb={'#90f577'}
            outerThumb={'#368826'}
            id={'green'}
          />
          <ColorInput 
            value={blue}
            setValue={setBlue}
            trackColor={'#3942c0'}
            innerThumb={'#8477f5'}
            outerThumb={'#282688'}
            id={'blue'}
          />
        </div>
        <button onClick={(e) => {
          e.preventDefault();
          [setRed, setGreen, setBlue].forEach(x => {
            randomColor(x);
          })
        }} className="color-btn">Losowy</button>
      </form>
    </div>
  )
}

export default App;
