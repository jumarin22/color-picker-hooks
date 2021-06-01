import React, { Component } from 'react'

export class App extends Component {
  state = {
    hue: Math.floor(Math.random() * 360),
    sat: Math.floor(Math.random() * 100),
    light: Math.floor(Math.random() * 100),
    alpha: Math.floor(Math.random() * 100),
  }

  updateHue = (e) => {
    this.setState({ hue: e.target.value })
  }

  updateSat = (e) => {
    this.setState({ sat: e.target.value })
  }

  updateLight = (e) => {
    this.setState({ light: e.target.value })
  }

  updateAlpha = (e) => {
    this.setState({ alpha: e.target.value })
  }

  handleNewState = (e) => {
    this.setState({
      hue: Math.floor(Math.random() * 360),
      sat: Math.floor(Math.random() * 100),
      light: Math.floor(Math.random() * 100),
      alpha: Math.floor(Math.random() * 100),
    })
  }

  render() {
    const newBackgroundColor = `hsla(${this.state.hue}, ${this.state.sat}%, ${this.state.light}%, ${this.state.alpha}%)`
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
            value={this.state.hue}
            onChange={this.updateHue}
          />
          <label>H</label>
        </div>
        <div className="slider">
          <input
            type="range"
            min="0"
            max="100"
            value={this.state.sat}
            onChange={this.updateSat}
          />
          <label>S</label>
        </div>
        <div className="slider">
          <input
            type="range"
            min="0"
            max="100"
            value={this.state.light}
            onChange={this.updateLight}
          />
          <label>L</label>
        </div>
        <div className="slider">
          <input
            type="range"
            min="0"
            max="100"
            value={this.state.alpha}
            onChange={this.updateAlpha}
          />
          <label>A</label>
        </div>
        <button type="button" onClick={this.handleNewState}>
          Randomize!
        </button>
      </>
    )
  }
}
