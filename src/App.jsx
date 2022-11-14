import { useRef, useState } from "react"
import "./App.css"
import mobile_bg from "./assets/bg-main-mobile.png"
import desktop_bg from "./assets/bg-main-desktop.png"
import card_front_bg from "./assets/bg-card-front.png"
import card_back_bg from "./assets/bg-card-back.png"
import card_logo from "./assets/card-logo.svg"

function splitToNumberGroupOfFour(source) {

  const paddedString = String(source + "0000000000000000").slice(0,16)

  return paddedString.match(/.{1,4}/g)
  
}

function App() {
  const cardNumberInput = useRef(null);
  const nameInput = useRef(null)
  const monthInput = useRef(null)
  const yearInput = useRef(null)
  const ccvInput = useRef(null)

  const [name, setName] = useState(null)
  const [expiredDate, setExpiredDate] = useState("01/22")
  const [ccvCode, setCcvCode] = useState(null)
  const [cardNumbers, setCardNumbers] = useState(
    splitToNumberGroupOfFour("0000000000000000")
  )

  function cardNumberOnChange(e) {
    e.preventDefault();
    const cardNumber = cardNumberInput.current.value
    // console.log(JSON.stringify(cardNumber))
    console.log(cardNumber)
    setCardNumbers(splitToNumberGroupOfFour(cardNumber))
    // setCardNumbers(splitToNumberGroupOfFour(cardNumber))
  }

  function nameChanged(e) {
    e.preventDefault()
    setName(nameInput.current.value) 
  }

  function dateChanged(e){
    e.preventDefault()
    const month = monthInput.current.value ?? "01"
    const year = yearInput.current.value ?? "22"
    setExpiredDate(`${month}/${year}`)
  }

   function ccvChanged(e) {
     e.preventDefault()
     setCcvCode(ccvInput.current.value)
   }

  return (
    <>
      <div className="cards-wrapper">
        <div className="card-back">
          <img src={card_back_bg} alt="" className="card-back-bg" />
          <span className="ccv"> {ccvCode}</span>
        </div>
        <div className="card-front">
          <img src={card_front_bg} alt="" className="card-front-bg" />
          <img src={card_logo} alt="" className="logo" />
          <div className="card-number-group">
            <span className="card-number">{cardNumbers[0]}</span>
            <span className="card-number">{cardNumbers[1]}</span>
            <span className="card-number">{cardNumbers[2]}</span>
            <span className="card-number">{cardNumbers[3]}</span>
          </div>
          <div className="name-row">
            <span className="owner-name">{name}</span>{" "}
            <span className="expire-date">{expiredDate}</span>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="gradient-bg">
          <img src={mobile_bg} className="mobile-image" />
          <img src={desktop_bg} className="desktop-image" />
        </div>
        <div className="parent-form-container">
          <div className="form-container">
            <form action="/submit" method="post">
              <div className="input-group form-name-group">
                <label htmlFor="card-hodler-name">Cardholder name</label>
                <input
                  type="text"
                  name=""
                  id="owner-name2"
                  placeholder="e.g Jane Appleseed"
                  ref={nameInput}
                  onChange={nameChanged}
                  maxLength={32}
                />
              </div>
              <div className="input-group  form-card-number-group">
                <label htmlFor="card-number">Card Number</label>
                <input
                  type="text"
                  name=""
                  id="owner-name"
                  placeholder="e.g 1234 1231 1231 3123"
                  ref={cardNumberInput}
                  onChange={cardNumberOnChange}
                  maxLength={16}
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
                      maxLength={2}
                      ref={monthInput}
                      onChange={dateChanged}
                    />
                    <input
                      type="text"
                      name="month"
                      id="Year"
                      placeholder="YY"
                      className="date-input"
                      maxLength={2}
                      ref={yearInput}
                      onChange={dateChanged}
                    />
                  </div>
                </div>
                <div className="input-group form-cvc-group">
                  <label htmlFor="CVC">CCV</label>
                  <input
                    type="text"
                    name="CCV"
                    id="ccv"
                    placeholder="e.g 123"
                    maxLength={3}
                    ref={ccvInput}
                    onChange={ccvChanged}
                  />
                </div>
              </div>
              <input type="button" value="Confirm" className="submit-btn" />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
