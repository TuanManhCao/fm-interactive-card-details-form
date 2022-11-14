import { useRef, useState } from "react"
import "./App.css"
import mobile_bg from "./assets/bg-main-mobile.png"
import desktop_bg from "./assets/bg-main-desktop.png"
import card_front_bg from "./assets/bg-card-front.png"
import card_back_bg from "./assets/bg-card-back.png"
import card_logo from "./assets/card-logo.svg"

function splitToNumberGroupOfFour(source) {
  const paddedString = String(source + "0000000000000000").slice(0, 16)

  return paddedString.match(/.{1,4}/g)
}

function App() {
  const cardNumberInput = useRef(null)
  const nameInput = useRef(null)
  const monthInput = useRef(null)
  const yearInput = useRef(null)
  const ccvInput = useRef(null)

  const [name, setName] = useState("Card Holder Name")
  const [expiredDate, setExpiredDate] = useState("01/22")
  const [ccvCode, setCcvCode] = useState(null)
  const [cardNumbers, setCardNumbers] = useState(
    splitToNumberGroupOfFour("0000000000000000")
  )

  const [nameInputError, setNameInputError] = useState(null)
  const [monthInputError, setMonthInputError] = useState(null)
  const [yearInputError, setyearInputError] = useState(null)
  const [ccvInputError, setCcvInputError] = useState(null)
  const [cardNumberErr, setCardNumberErr] = useState(null)

  function cardNumberOnChange(e) {
    e.preventDefault()
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

  function dateChanged(e) {
    e.preventDefault()
    const month = monthInput.current.value || "00"
    const year = yearInput.current.value || "00"
    setExpiredDate(`${month}/${year}`)
  }

  function ccvChanged(e) {
    e.preventDefault()
    setCcvCode(ccvInput.current.value)
  }

  function handleFormSubmision(e) {
    e.preventDefault()
    if (nameInput.current.value.length == 0) {
      setNameInputError("Name cannot be blank.")
    } else {
      setNameInputError(null)
    }

    if (cardNumberInput.current.value.length == 0) {
      setCardNumberErr("Card number cannot be blank.")
    } else {
      setCardNumberErr(null)
    }

    if (monthInput.current.value.length == 0) {
      setMonthInputError("Cannot be blank.")
    } else {
      setMonthInputError(null)
    }

    if (yearInput.current.value.length == 0) {
      setyearInputError("Cannot be blank.")
    } else {
      setyearInputError(null)
    }

    if (ccvInput.current.value.length == 0) {
      setCcvInputError("Cannot be blank.")
    } else {
      setCcvInputError(null)
    }
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
                  className={nameInputError == null ? "normal" : "invalid"}
                />
                <p className="error-message">{nameInputError}</p>
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
                  className={cardNumberErr == null ? "normal" : "invalid"}
                />
                <p className="error-message">{cardNumberErr}</p>
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
                      className={
                        "date-input" +
                        " " +
                        (monthInputError == null ? "normal" : "invalid")
                      }
                      maxLength={2}
                      ref={monthInput}
                      onChange={dateChanged}
                    />
                    <input
                      type="text"
                      name="month"
                      id="Year"
                      placeholder="YY"
                      className={
                        "date-input" +
                        " " +
                        (yearInputError == null ? "normal" : "invalid")
                      }
                      maxLength={2}
                      ref={yearInput}
                      onChange={dateChanged}
                    />
                  </div>
                  <p className="error-message">{monthInputError || yearInputError}</p>
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
                    className={ccvInputError == null ? "normal" : "invalid"}
                  />
                  <p className="error-message">{ccvInputError}</p>
                </div>
              </div>
              <input
                type="button"
                value="Confirm"
                className="submit-btn"
                onClick={handleFormSubmision}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
