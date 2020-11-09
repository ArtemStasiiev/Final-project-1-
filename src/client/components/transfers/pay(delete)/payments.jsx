import React, { Component } from 'react';
import '../../../styles/components/payments/payments.scss'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Charity from '../payments/charity/charity';
import Education from '../payments/education/education';
import Games from '../payments/games/games';
import Internet from '../payments/internet/internet';
import MobileCommunication from '../payments/mobileCommunication/mobileCommunication';
import Traveling from '../payments/traveling/traveling';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt, faWifi, faPlane, faHandHoldingHeart, faGamepad, faUserGraduate} from "@fortawesome/free-solid-svg-icons";
// import { faWifi } from "@fortawesome/free-solid-svg-icons";
// import { faPlane } from "@fortawesome/free-solid-svg-icons";
// import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";
// import { faGamepad } from "@fortawesome/free-solid-svg-icons";
// import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";

// class Payments extends Component {
//     render() {
//         return (
//             <Tabs className="Payments">
//                 <div className="Payments-Con">
//                     <header>Payments</header>

//                     <div className="Payments-Con__Items">
//                         <TabList className="Payments-Con__Tab-List">
//                             <Tab className="Payments-Con__Tab">
//                                 <div className="Payments-Con__Icon-Con">
//                                     <div>
//                                         <FontAwesomeIcon icon={faMobileAlt} className="Payments-Con__Icons" />
//                                     </div>
//                                 </div>
//                                 <div className="Payments-Con__Name">
//                                     Mobile communication
//                                 </div>
//                             </Tab>

//                             <Tab className="Payments-Con__Tab">
//                                 <div className="Payments-Con__Icon-Con">
//                                     <div>
//                                         <FontAwesomeIcon icon={faWifi} className="Payments-Con__Icons" />
//                                     </div>
//                                 </div>
//                                 <div className="Payments-Con__Name">
//                                     Internet
//                                 </div>
//                             </Tab>

//                             <Tab className="Payments-Con__Tab">
//                                 <div className="Payments-Con__Icon-Con">
//                                     <div>
//                                         <FontAwesomeIcon icon={faPlane} className="Payments-Con__Icons" />
//                                     </div>
//                                 </div>
//                                 <div className="Payments-Con__Name">
//                                     Traveling
//                                 </div>
//                             </Tab>

//                             <Tab className="Payments-Con__Tab">
//                                 <div className="Payments-Con__Icon-Con">
//                                     <div>
//                                         <FontAwesomeIcon icon={faHandHoldingHeart} className="Payments-Con__Icons" />
//                                     </div>
//                                 </div>
//                                 <div className="Payments-Con__Name">
//                                     Charity
//                                 </div>
//                             </Tab>

//                             <Tab className="Payments-Con__Tab">
//                                 <div className="Payments-Con__Icon-Con">
//                                     <div>
//                                         <FontAwesomeIcon icon={faGamepad} className="Payments-Con__Icons" />
//                                     </div>
//                                 </div>
//                                 <div className="Payments-Con__Name">
//                                     Games
//                                 </div>
//                             </Tab>

//                             <Tab className="Payments-Con__Tab">
//                                 <div className="Payments-Con__Icon-Con">
//                                     <div>
//                                         <FontAwesomeIcon icon={faUserGraduate} className="Payments-Con__Icons" />
//                                     </div>
//                                 </div>
//                                 <div className="Payments-Con__Name">
//                                     <div>Education</div>
//                                 </div>
//                             </Tab>
//                         </TabList>
//                     </div>
//                 </div>

//                 <div className="Send-Money-Transfer">
//                     <div className="Send-Money-Transfer__Con">
//                         <TabPanel>
//                             <MobileCommunication />
//                         </TabPanel>
//                         <TabPanel>
//                             <Internet />
//                         </TabPanel>
//                         <TabPanel>
//                             <Traveling />
//                         </TabPanel>
//                         <TabPanel>
//                             <Charity />
//                         </TabPanel>
//                         <TabPanel>
//                             <Games />
//                         </TabPanel>
//                         <TabPanel>
//                             <Education />
//                         </TabPanel>
//                     </div>
//                 </div>
//             </Tabs>
//         );
//     }
// }

// export default Payments;

export default function Payments() {
    return (
        <Tabs className="Payments">
        <div className="Payments-Con">
            <header>Payments</header>

            <div className="Payments-Con__Items">
                <TabList className="Payments-Con__Tab-List">
                    <Tab className="Payments-Con__Tab">
                        <div className="Payments-Con__Icon-Con">
                            <div>
                                <FontAwesomeIcon icon={faMobileAlt} className="Payments-Con__Icons" />
                            </div>
                        </div>
                        <div className="Payments-Con__Name">
                            Mobile communication
                        </div>
                    </Tab>

                    <Tab className="Payments-Con__Tab">
                        <div className="Payments-Con__Icon-Con">
                            <div>
                                <FontAwesomeIcon icon={faWifi} className="Payments-Con__Icons" />
                            </div>
                        </div>
                        <div className="Payments-Con__Name">
                            Internet
                        </div>
                    </Tab>

                    <Tab className="Payments-Con__Tab">
                        <div className="Payments-Con__Icon-Con">
                            <div>
                                <FontAwesomeIcon icon={faPlane} className="Payments-Con__Icons" />
                            </div>
                        </div>
                        <div className="Payments-Con__Name">
                            Traveling
                        </div>
                    </Tab>

                    <Tab className="Payments-Con__Tab">
                        <div className="Payments-Con__Icon-Con">
                            <div>
                                <FontAwesomeIcon icon={faHandHoldingHeart} className="Payments-Con__Icons" />
                            </div>
                        </div>
                        <div className="Payments-Con__Name">
                            Charity
                        </div>
                    </Tab>

                    <Tab className="Payments-Con__Tab">
                        <div className="Payments-Con__Icon-Con">
                            <div>
                                <FontAwesomeIcon icon={faGamepad} className="Payments-Con__Icons" />
                            </div>
                        </div>
                        <div className="Payments-Con__Name">
                            Games
                        </div>
                    </Tab>

                    <Tab className="Payments-Con__Tab">
                        <div className="Payments-Con__Icon-Con">
                            <div>
                                <FontAwesomeIcon icon={faUserGraduate} className="Payments-Con__Icons" />
                            </div>
                        </div>
                        <div className="Payments-Con__Name">
                            <div>Education</div>
                        </div>
                    </Tab>
                </TabList>
            </div>
        </div>

        <div className="Send-Money-Transfer">
            <div className="Send-Money-Transfer__Con">
                <TabPanel>
                    <MobileCommunication />
                </TabPanel>
                <TabPanel>
                    <Internet />
                </TabPanel>
                <TabPanel>
                    <Traveling />
                </TabPanel>
                <TabPanel>
                    <Charity />
                </TabPanel>
                <TabPanel>
                    <Games />
                </TabPanel>
                <TabPanel>
                    <Education />
                </TabPanel>
            </div>
        </div>
    </Tabs>
    )
}