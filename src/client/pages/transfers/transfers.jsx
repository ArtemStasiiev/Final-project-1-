import React from "react";
import "../../styles/pages/transfers.scss";
import SendMoney from "../../components/transfers/sendMoney/sendMoney";
import TransferField from "../../components/transfers/transfer/transferField";
import Payments from "../../components/transfers/payments/payments";
import {
  contactsItem,
  briefcase,
  creditCards,
  debitCard
} from "../../config/data.config";

export default function Transfer() {
  return (
    <div className="transfer-con">
      <div className="transfer__left">
        <SendMoney contactsItem={contactsItem} />
      </div>
      <div className="transfer__center">
        <TransferField
          briefcase={briefcase}
          creditCards={creditCards}
          debitCard={debitCard}
        />
      </div>
      <div className="transfer__right">
        <Payments />
      </div>
    </div>
  );
}
