import React from "react";
import AmazonStock from "../../components/investing/amazonStock";
import FacebookStock from "../../components/investing/facebookStock";
import TeslaStock from "../../components/investing/teslaStock";
import Nvidia from "../../components/investing/nvidiaStock";
import "../../styles/pages/investing.scss";

export default function Investing() {
  return (
    <div className="investing">
      <div className="investing__left">
        <AmazonStock />
        <FacebookStock />
      </div>

      <div className="investing__right">
        <TeslaStock />
        <Nvidia />
      </div>
    </div>
  );
}
