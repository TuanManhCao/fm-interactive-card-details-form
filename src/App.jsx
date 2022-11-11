import { useState } from "react"
import "./App.css"
import mobile_bg from "./assets/bg-main-mobile.png"
import desktop_bg from "./assets/bg-main-desktop.png"
import card_front_bg from "./assets/bg-card-front.png"
import card_back_bg from "./assets/bg-card-back.png"
import card_logo from "./assets/card-logo.svg"

function App() {
  return (
    <>
      <div className="cards-wrapper">
        <div className="card-front">
          <img src={card_front_bg} alt="" className="card-front-bg" />
          <img src={card_logo} alt="" className="logo" />
          <div className="card-number-group">
            <span className="card-number">0000</span>
            <span className="card-number">0000</span>
            <span className="card-number">0000</span>
            <span className="card-number">0000</span>
          </div>
          <div className="name-row">
            <span className="owner-name">Felicia Leire</span> <span className="expire-date">09/22</span>
          </div>
        </div>
        <div className="card-back">
          <img src={card_back_bg} alt="" />
        </div>
      </div>
      <div className="container">
        <div className="gradient-bg">
          <img src={mobile_bg} className="mobile-image" />
          <img src={desktop_bg} className="desktop-image" />
        </div>
        <div className="form-container"></div>
      </div>
    </>
  )
}

export default App
