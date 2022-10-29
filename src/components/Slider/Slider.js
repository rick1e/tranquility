import React from 'react'
import './Slider.css'

const Slider = (props) => {

    return (
        <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={props.value}
            className="slider"
            id="myRange"
            onChange={props.onChange}
        />
    )
}

export default Slider

