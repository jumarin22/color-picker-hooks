import React, { useState } from 'react'

export function App() {
  const [hue, setHue] = useState(Math.floor(Math.random() * 360))
  const [sat, setSat] = useState(Math.floor(Math.random() * 100))
  const [light, setLight] = useState(Math.floor(Math.random() * 100))
  const [alpha, setAlpha] = useState(Math.floor(Math.random() * 100))

  function handleHueChange(e) {
    setHue(e.target.value)
  }

  function handleSatChange(e) {
    setSat(e.target.value)
  }

  function handleLightChange(e) {
    setLight(e.target.value)
  }

  function handleAlphaChange(e) {
    setAlpha(e.target.value)
  }

  function handleRandomize(e) {
    setHue(Math.floor(Math.random() * 360))
    setSat(Math.floor(Math.random() * 100))
    setLight(Math.floor(Math.random() * 100))
    setAlpha(Math.floor(Math.random() * 100))
  }

  const newBackgroundColor = `hsla(${hue}, ${sat}%, ${light}%, ${alpha}%)`
  const newStyle = { backgroundColor: newBackgroundColor }

  return (
    <>
      <h1>Color Picker</h1>
      <article className="displayBox">
        <div className="underBox">&nbsp;</div>
        <div className="colorBox" style={newStyle}>
          &nbsp;
        </div>
      </article>
      <label htmlFor="displayBox" className="display">
        {newBackgroundColor}
      </label>
      <div className="sliders">
        <div className="inputs">
          <input
            id="hueSlider"
            type="range"
            min="0"
            max="360"
            value={hue}
            onChange={handleHueChange}
          />
          <input
            id="satSlider"
            type="range"
            min="0"
            max="100"
            value={sat}
            onChange={handleSatChange}
          />
          <input
            id="lightSlider"
            type="range"
            min="0"
            max="100"
            value={light}
            onChange={handleLightChange}
          />
          <input
            id="alphaSlider"
            type="range"
            min="0"
            max="100"
            value={alpha}
            onChange={handleAlphaChange}
          />
        </div>
        <div className="labels">
          <label htmlFor="hueSlider">H</label>
          <label htmlFor="satSlider">S</label>
          <label htmlFor="lightSlider">L</label>
          <label htmlFor="alphaSlider">A</label>
        </div>
      </div>
      <button type="button" onClick={handleRandomize}>
        Randomize!
      </button>
    </>
  )
}
