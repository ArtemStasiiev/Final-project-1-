import React from "react";
import "../../../styles/components/home/wallet.scss";

export default function Wallet(props) {
  return (
    <section className="wallet">
      <h4>Wallet</h4>
      <div className="card">
        <div className="card__inner">
          <div className="card__front">
            <div className="card__content">
              <p className="card__usd-number">USD</p>
              <span className="card__money-con">${props.cardMoney}</span>
              <div className="card__number-con">
                <p className="card__number">**** 4439</p>
                <img
                  src={require(`../../../../img/${props.masterCard}`)}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="card__back">
            <p>For lost and stolen card please call 01234 567890</p>
            <div className="card__back-line"></div>
            <p>Authorized signature/Not valid unless signed</p>
            <div className="card__back-cvv">
              <span>123</span>
            </div>
            <div className="card__back-bottom">
              <div className="card__qr">
                <img
                  src="http://qrcoder.ru/code/?https%3A%2F%2Fwww.paypal.com%2Fua%2Fhome&4&0"
                  width="80"
                  height="80"
                  border="0"
                  title="QR код"
                  alt="QR"
                />
                <p>
                  Install free mobile app
                  <a href="https://play.google.com/store/apps/details?id=com.paypal.android.p2pmobile&hl=ru&gl=US">
                    PayPal Mobile
                  </a>
                </p>
              </div>
              <div className="card__payments">
                <div className="card__visa">
                  <img
                    src={require(`../../../../img/${props.visaLogo}`)}
                    alt=""
                  />
                </div>
                <div className="card__master-card">
                  <img
                    src={require(`../../../../img/${props.masterCardLogo}`)}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
