const ColorInput = (props) => {
  return (
    <input style={`--track-color: ${props.trackColor}; --inner-thumb: ${props.innerThumb}; --outer-thumb: ${props.outerThumb};`} value="51" type="range" min="0" max="255" id={props.id} />
  )
}

export default ColorInput
