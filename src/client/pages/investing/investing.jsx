import React from 'react';
import AmazonStock from '../../components/investing/amazonStock';
import FacebookStock from '../../components/investing/facebookStock';
import TeslaStock from '../../components/investing/teslaStock';
import Nvidia from '../../components/investing/nvidiaStock'
import '../../styles/pages/investing.scss'

// class Investing extends Component {
//     render() {
//         return (
//             <div className="Investing">
//                 <div className="Investing__Left-Con">
//                     <AmazonStock />
//                     <FacebookStock />
//                 </div>

//                 <div className="Investing__Right-Con">
//                     <TeslaStock />
//                     <Nvidia />
//                 </div>
//             </div>
//         )
//     }
// }

// export default Investing;

export default function Investing() {
    return (
        <div className="Investing">
            <div className="Investing__Left-Con">
                <AmazonStock />
                <FacebookStock />
            </div>

            <div className="Investing__Right-Con">
                <TeslaStock />
                <Nvidia />
            </div>
        </div>
    )
}