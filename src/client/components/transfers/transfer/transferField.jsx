import React, { useState } from "react";
import "../../../styles/components/transfer/transferField.scss";
import NumberFormat from "react-number-format";

export default function TransferField(props) {
  const [cardNumber, setCardNumber] = useState("");
  const [sum, setSum] = useState(0);

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleSumChange = (event) => {
    setSum(event.target.value);
  };

  const clearInputValues = () => {
      setCardNumber("");
      setSum(0);
      console.log(sum.length, cardNumber.length)
  };
  return (
    <section className="transfer">
      <h4>Transfer</h4>
      <label className="transfer__input-header">From</label>
      <div className="transfer__my-card-con">
        <div className="transfer__my-card">
          <div className="transfer__my-card-info">
            <p>Mastercard **** 4439</p>
            <p>$16.234</p>
          </div>
          <img src={require(`../../../../img/${props.debitCard}`)} alt="" />
        </div>
      </div>
      <label className="transfer__input-header">To</label>
      <div className="transfer__input-form-con">
        <form className="transfer__input-form">
          <NumberFormat
            type="text"
            name="cardNumber"
            format="#### #### #### ####"
            mask=" "
            autoComplete="off"
            required
            onChange={handleCardNumberChange}
            value={cardNumber}
            className="transfer__input-first"
          />
          <label htmlFor="">
            <span>Card number</span>
          </label>
        </form>
      </div>
      <label className="transfer__input-header">Amount, USD</label>
      <form className="transfer__input-form">
        <NumberFormat
          type="text"
          name="ammount"
          thousandSeparator={true}
          prefix={"$"}
          autoComplete="off"
          required
          onChange={handleSumChange}
          value={sum}
          className="transfer__input-second"
        />
      </form>
      <div className="transfer__button-con">
        <p>the commission will be calculated automatically</p>
        <button onClick={() => clearInputValues()}>Transfer money</button>
      </div>
      <div className="transfer__from-card">
        <div className="transfer__icon-con">
          <img src={require(`../../../../img/${props.creditCards}`)} alt="creditCards" style={{ width: '25px' }}/>
        </div>
        <p>From card to card</p>
      </div>
      <div className="transfer__transfers">
        <div className="transfer__icon-con">
          <img src={require(`../../../../img/${props.briefcase}`)} alt="briefcase" style={{ width: '25px' }}/>
        </div>
        <p>SWIFT transfers</p>
      </div>
    </section>
  );
}
