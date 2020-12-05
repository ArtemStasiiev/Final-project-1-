import React, { useState } from "react";
import "../../../styles/components/home/myGoals.scss";

export default function MyGoals() {
  const firstFinalPrice = 1900;
  const secondFinalPrice = 900;
  const [firstPrice, setFirstPrice] = useState(1330);
  const [secondPrice, setSecondPrice] = useState(270);
  const [firstLineWidth, setFirstLineWidth] = useState(70);
  const [secondLineWidth, setSecondLineWidth] = useState(30);

  const firstPay = () => {
    const persentage = firstFinalPrice / 10;
    const result = firstPrice + persentage;
    setFirstPrice(result);

    const addWidth = 10;
    const resultWidth = firstLineWidth + addWidth;
    setFirstLineWidth(resultWidth);
  };

  const secondPay = () => {
    const persentage = secondFinalPrice / 10;
    const result = secondPrice + persentage;
    setSecondPrice(result);

    const addWidth = 10;
    const resultWidth = secondLineWidth + addWidth;
    setSecondLineWidth(resultWidth);
  };
  return (
    <section className="my-goals">
      <h4>My goals</h4>
      <label>6 Mos</label>
      <div className="my-goals__items">
        {firstPrice < 1900 ? (
          <li className="my-goals__item">
            <div className="my-goal__item-top">
              <p>macBook</p>
              <button
                disabled={firstPrice < 1900 ? false : true}
                className="payBtn"
                onClick={firstPay}
              >
                Pay
              </button>
            </div>
            <div className="my-goal__item-bottom">
              <span>
                ${firstPrice}.00 / ${firstFinalPrice}.00
              </span>
              <div className="my-goal__line-background">
                <div
                  style={{ width: `${firstLineWidth}%` }}
                  className="my-goal__line"
                ></div>
              </div>
            </div>
          </li>
        ) : null}

        {secondPrice < 900 ? (
          <li className="my-goals__item">
            <div className="my-goal__item-top">
              <p>iPhone 11</p>
              <button
                disabled={secondPrice < 900 ? false : true}
                onClick={secondPay}
              >
                Pay
              </button>
            </div>
            <div className="my-goal__item-bottom">
              <span>${secondPrice}.00 / $900.00</span>
              <div className="my-goal__line-background">
                <div
                  style={{ width: `${secondLineWidth}%` }}
                  className="my-goal__line"
                ></div>
              </div>
            </div>
          </li>
        ) : null}
      </div>
    </section>
  );
}
