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
        <div className="card-back">
          <img src={card_back_bg} alt="" className="card-back-bg" />
          <span className="ccv"> 123</span>
        </div>
        <div className="card-front">
          <img src={card_front_bg} alt="" className="card-front-bg" />
          <img src={card_logo} alt="" className="logo" />
          <div className="card-number-group">
            <span className="card-number">1234</span>
            <span className="card-number">3232</span>
            <span className="card-number">3232</span>
            <span className="card-number">3223</span>
          </div>
          <div className="name-row">
            <span className="owner-name">Felicia Leire</span>{" "}
            <span className="expire-date">09/22</span>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="gradient-bg">
          <img src={mobile_bg} className="mobile-image" />
          <img src={desktop_bg} className="desktop-image" />
        </div>
        <div className="form-container">
          <form action="/submit" method="post">
            <div className="input-group form-name-group">
              <label htmlFor="card-hodler-name">Cardholder name</label>
              <input
                type="text"
                name=""
                id="owner-name"
                placeholder="e.g Jane Appleseed"
              />
            </div>
            <div className="input-group  form-card-number-group">
              <label htmlFor="card-number">Card Number</label>
              <input
                type="text"
                name=""
                id="owner-name"
                placeholder="e.g 1234 1231 1231 3123"
              />
            </div>
            <div className="lastrow">
              <div className="input-group  form-exp-date-group">
                <label htmlFor="expire-date">EXP. Date (MM/YY)</label>
                <div className="form-exp-date-input">
                  <input
                    type="text"
                    name="month"
                    id="month"
                    placeholder="MM"
                    className="date-input"
                  />
                  <input
                    type="text"
                    name="month"
                    id="Year"
                    placeholder="YY"
                    className="date-input"
                  />
                </div>
              </div>
              <div className="input-group form-cvc-group">
                <label htmlFor="CVC">CCV</label>
                <input type="text" name="CCV" id="ccv" />
              </div>
            </div>
            <input type="button" value="Confirm" />
          </form>
        </div>
      </div>
    </>
  )
}

export default App
