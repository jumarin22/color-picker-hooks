import React, { useState } from 'react'

export function App() {
  const [hue, setHue] = useState(Math.floor(Math.random() * 360))
  const [sat, setSat] = useState(Math.floor(Math.random() * 100))
  const [light, setLight] = useState(Math.floor(Math.random() * 100))
  const [alpha, setAlpha] = useState(Math.floor(Math.random() * 100))

  function handleHueChange(e) {
    const newHue = e.target.value
    console.log(newHue)
    setHue(newHue)
  }

  function handleSatChange(e) {
    const newSat = e.target.value
    console.log(newSat)
    setSat(newSat)
  }

  function handleLightChange(e) {
    const newLight = e.target.value
    console.log(newLight)
    setLight(newLight)
  }

  function handleAlphaChange(e) {
    const newAlpha = e.target.value
    console.log(newAlpha)
    setAlpha(newAlpha)
  }

  const newBackgroundColor = `hsla(${hue}, ${sat}%, ${light}%, ${alpha}%)`
  const newStyle = { backgroundColor: newBackgroundColor }

  return (
    <>
      <h1>Color Picker</h1>
      <article>
        <div className="underBox">&nbsp;</div>
        <div className="colorBox" style={newStyle}>
          &nbsp;
        </div>
      </article>
      <p>{newBackgroundColor}</p>
      <div className="slider">
        <input
          type="range"
          min="0"
          max="360"
          value={hue}
          onChange={handleHueChange}
        />
        <label>H</label>
      </div>
      <div className="slider">
        <input
          type="range"
          min="0"
          max="100"
          value={sat}
          onChange={handleSatChange}
        />
        <label>S</label>
      </div>
      <div className="slider">
        <input
          type="range"
          min="0"
          max="100"
          value={light}
          onChange={handleLightChange}
        />
        <label>L</label>
      </div>
      <div className="slider">
        <input
          type="range"
          min="0"
          max="100"
          value={alpha}
          onChange={handleAlphaChange}
        />
        <label>A</label>
      </div>
    </>
  )
}
