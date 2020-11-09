// import React, { Component } from 'react';
import React, {useState, useEffect} from 'react'
import '../../../styles/components/home/upcomingBills.scss';

export default function UpcomingBills(props) {

    const date = new Date();
    const currentDate = date.getFullYear() + "-" + (date.getMonth() + 1 ) + "-" + date.getDate()
    const [selectedDate, setSelectedDate] = useState(currentDate);

    const getNextDate = () => {
        const today = new Date(selectedDate);
        const currentMonth = new Date(selectedDate).getMonth()
        const nextDate = new Date(today.getFullYear(), currentMonth+1, today.getDate())
        // setDate(nextDate)
        const date = nextDate || new Date();
        setSelectedDate(date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate())
    }

    return (
        <div className="Bills">
            <div className="Bills__Left-Con">
                <img src={require (`../../../../img/${props.image}`)} alt="" />

                <div className="Bills__Left-Con__Info">
                    <div>{props.title}</div>
                    <div className="BillsDate">{selectedDate}</div>
                </div>
            </div>

            <div className="Bills__Right-Con">
                ${props.price}
                <button onClick={getNextDate}>Pay</button>
            </div>
        </div>
    )
}
