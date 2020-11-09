import React, { useState } from 'react';
import '../../../styles/components/home/myGoals.scss';

export default function MyGoals() {
        const firstFinalPrice = 1900;
        const [firstPrice, setFirstPrice] = useState(1330);
    const pay = () => {
        const persentage = firstFinalPrice / 10;
        const result = firstPrice + persentage;
        console.log(result)
        setFirstPrice(result)
    }
    return (
        <div className="myGoals">
            <header>My goals</header>
            <section>6 Mos</section>
            <div className="myGoalsItemsCon">
                <div className="myGoalsItem">
                    <div className="myGoalItemTop">
                        <p>macBook</p>
                        <button onClick={pay}>Pay</button>
                    </div>
                    <div className="myGoalItemBottom">
                        <span>${firstPrice}.00 / ${firstFinalPrice}.00</span>
                        <div className="myGoalLineBackground">
                            <div className="myGoalLine"></div>
                        </div>
                    </div>
                </div>

                <div className="myGoalsItem">
                    <div className="myGoalItemTop">
                        <p>iPhone 11</p>
                        <button>Pay</button>
                    </div>
                    <div className="myGoalItemBottom">
                        <span>$230.00 / $900.00</span>
                        <div className="myGoalLineBackground">
                            <div className="myGoalLine"></div>
                        </div>
                    </div>
                </div>
                {/* <div className="myGoalsItem"></div> */}
            </div>
            
        </div>
    )
}