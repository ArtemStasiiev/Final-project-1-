import React from 'react';
import '../../../styles/components/home/safeToSpend.scss'
// import CircularProgress from '@material-ui/core/CircularProgress';

import { monthNames } from '../../../config/data.config'


export default function SafeToSpend() {
    return (
        <div className="SafeTospend-Con">
            <header>Safe to spend</header>
            {/* <CircularProgress style={{color: 'radial-gradient(circle, rgba(124,78,78,1) 0%, rgba(175,223,74,1) 100%, rgba(56,40,40,1) 100%)', width: '100px', borderRadius: '20px'}} variant="static" value={75} /> */}
            <div className="SafeToSpend-Border">
                <div className="SafeToSpend-Content">
                    <span className="SafeToSpend-Ammount">$1,043.06</span>
                    <span className="SafeToSpend-Date">
                        Until {monthNames[new Date().getMonth() + 1]}, 31
                    </span>
                </div>
            </div>
        </div>
    )
}