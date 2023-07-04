import React from 'react';
import mail from "../../assets/images/mail.svg";
import phone from "../../assets/images/phone.svg";
import profileImage from "../../assets/images/profile-img1.jpg";
import callIcon from "../../assets/images/call.svg";
import smiley from "../../assets/images/smiley.png";
import send from "../../assets/images/send.svg";
import soundwave from "../../assets/images/soundwave.svg";
import award from "../../assets/images/award.png";
import agentImage from "../../assets/images/agentimage.png";
import notificationIcon from "../../assets/images/notificationIcon.png";
import saleforceIcon from "../../assets/images/saleforce.png";
import rightArrow from "../../assets/images/rightarrow.png";
import thumbsup  from "../../assets/images/thumbs-up.png";
import thumbsdown  from "../../assets/images/thumbs-up-down.png";
import sheIcon from "../../assets/images/sheIcon.png";
import heIcon from "../../assets/images/HeIcon.png";
import theyIcon from "../../assets/images/theyIcon.png";
import refresh from "../../assets/images/refresh.png";
import Chart from "../Dashboard/chart";
import productIcon from "../../assets/images/product.png";
import productIconTwo from "../../assets/images/Achmea_logo.png";
import productOfferIcon from "../../assets/images/productoffer.png";
import { FormattedMessage } from 'react-intl';

const DashboardNew=()=>{
    return(
        <>
         <div className="container-fluid r-panel px-4">
            <div className="d-flex justify-content-between w-100 py-3 top-section">
                <div className="r-logo">
                    <h1><FormattedMessage id="app.header" defaultMessage={"Smart Suggest"}/></h1>
                    <p><FormattedMessage id="app.header.two" defaultMessage={"Welcome Back"}/>, <strong>James Lobo</strong></p>
                </div>
               
                <div>
                    <div className="d-flex justify-content-between gap-3 w-10">
                        <span className='noti-btn'><img src={notificationIcon} alt=""/></span>
                        <img src={agentImage} alt="" style={{height:"31px",width:"31px"}}/>
                        <span className='agent-name'>James Lobo</span>
                        {/* <select className="form-select form-select-sm" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select> */}
                        </div>
                    {/* <div>
                        
                    </div> */}
                </div>
            </div>
            <div className="d-flex justify-content-between gap-3 w-100 mb-3 mid-hldr pb-3">
                {/* <!-- tab section --> */}
                <div className="bdr-hldr bdr-primary w-40 position-relative">
                    <div className='d-flex w-100 justify-content-between'>
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home"
                                    type="button" role="tab" aria-controls="home" aria-selected="true"><FormattedMessage id="app.label.transcription" defaultMessage={"Live Transcription"}/></button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile"
                                    type="button" role="tab" aria-controls="profile" aria-selected="false"><FormattedMessage id="app.label.summary" defaultMessage={"Summary"}/></button>
                            </li>
                            {/* <li className="nav-item" role="presentation">
                                <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact"
                                    type="button" role="tab" aria-controls="contact" aria-selected="false">History</button>
                            </li> */}
                            
                            {/* <div className='live-trans-counter'>01:13</div> */}
                            
                        </ul>
                        <div className='live-trans-counter'>01:13</div>
                    </div>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <p className="text-center my-2">Today at 4:30 PM</p>
                            <div className="chat-hldr">
                                <div className="chat-usr chat-usr2-hldr">
                                    <div className="chat-img">
                                        <img src={profileImage} alt=""/>
                                        <p style={{margin:"4px",textAlign:"center"}}>Lisa Smith</p>
                                    </div>
                                    <div className="chat-desc">
                                        <p style={{margin:"14px"}}>Hi. I'm interested in applying for a home loan. Can you assist me with the process?</p>
                                    </div>
                                </div>

                                <div className="chat-usr chat-usr1-hldr">
                                    <div className="chat-img">
                                        <img src={agentImage} alt=""/>
                                        <p style={{margin:"4px",textAlign:"center"}}>you</p>
                                    </div>
                                    <div className="chat-desc">
                                        <p style={{margin:"4px"}}>Good morning, madam. Absolutely, I'm here to help you. I can guide you through the home loan options available in the Netherlands. Could you please provide some basic information about the type of property you're looking to purchase and your budget?</p>
                                    </div>
                                </div>

                                <div className="chat-usr chat-usr1-hldr">
                                    <div className="chat-img">
                                        <img src={profileImage} alt=""/>
                                        <p style={{margin:"4px",textAlign:"center"}}>Lisa Smith</p>
                                    </div>
                                    <div className="chat-desc">
                                        <p style={{margin:"14px"}}>I'm looking to buy an apartment in a central location in Amsterdam. My budget is around €500,000.</p>
                                    </div>
                                </div>

                                <div className="chat-usr chat-usr1-hldr">
                                    <div className="chat-img">
                                        <img src={agentImage} alt=""/>
                                        <p style={{margin:"4px",textAlign:"center"}}>you</p>
                                    </div>
                                    <div className="chat-desc">
                                        <p style={{margin:"4px"}}>Good morning, madam. Absolutely, I'm here to help you. I can guide you through the home loan options available in the Netherlands. Could you please provide some basic information about the type of property you're looking to purchase and your budget?</p>
                                    </div>
                                </div>

                                <div className="chat-usr chat-usr1-hldr">
                                    <div className="chat-img">
                                        <img src={agentImage} alt=""/>
                                        <p style={{margin:"4px",textAlign:"center"}}>you</p>
                                    </div>
                                    <div className="chat-desc">
                                        <p style={{margin:"4px"}}>Good morning, madam. Absolutely, I'm here to help you. I can guide you through the home loan options available in the Netherlands. Could you please provide some basic information about the type of property you're looking to purchase and your budget?</p>
                                    </div>
                                </div>

                                <div className="chat-usr chat-usr1-hldr">
                                    <div className="chat-img">
                                        <img src={agentImage} alt=""/>
                                        <p style={{margin:"4px",textAlign:"center"}}>you</p>
                                    </div>
                                    <div className="chat-desc">
                                        <p style={{margin:"4px"}}>Good morning, madam. Absolutely, I'm here to help you. I can guide you through the home loan options available in the Netherlands. Could you please provide some basic information about the type of property you're looking to purchase and your budget?</p>
                                    </div>
                                </div>

                            </div>
                            <div className='chat-btn-hldr'>
                                <button className="chat-end-btn"><img src={callIcon} alt="End Call"/> End</button>
                                {/* <div className="input-group mb-3 chat-input-hldr">
                                    <span className="input-group-text"><img src={smiley} alt=""/></span>
                                    <input type="text" className="form-control chat-input"
                                        aria-label="Amount (to the nearest dollar)"/>
                                    <span className="input-group-text"><img src={send} alt=""/></span>
                                </div> */}
                            </div>
                        </div>
                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...2</div>
                        <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...3</div>
                    </div>
                </div>
                {/* <!-- agent responses --> */}
                <div className="bdr-hldr bdr-primary w-40 agnt-resp">
                <img src={soundwave} alt="" style={{height:"25px",width:"25px"}}/>&nbsp;&nbsp;
                    <h2><FormattedMessage id="app.label.AISuggested" defaultMessage={"AI Suggested Responses"}/></h2>
                    {/* <div className="ai-title">
                        <img src={soundwave} alt=""/>
                        <h3 className="mb-0">AI Suggested Responses</h3>
                    </div> */}
                    <div className='d-flex justify-content-between align-items-center mb-3'>
                        <div className='suggested-res-img d-flex justify-content-between'>
                            <span className='she active'><img src='' alt='' /> She/Her</span>
                            <span className='he _active'><img src='' alt='' /> He/Him</span>
                            <span className='they _active'><img src='' alt='' /> They/Them</span>
                            {/* <img src={sheIcon} alt="" style={{height:"20px"}}/>&nbsp;&nbsp;
                            <img src={heIcon} alt="" style={{height:"20px"}}/>&nbsp;&nbsp;
                            <img src={theyIcon} alt="" style={{height:"20px"}}/> */}
                        </div>
                        <button className='refresh-btn'><img src={refresh} alt=""/></button>
                    </div>
                    <div className="respo-hldr">
                        <div className="respo-chat">
                            <p className='respo-chat-feedback'>Positive - Response</p>
                            <p>
                            Great! Our bank offers a range of home loan options that may suit your needs. One option to consider is a fixed-rate mortgage, where the interest rate remains constant throughout the loan term, providing you with predictability and stability. Would you like more information about this option?..
                            </p>
                            <div className='repo-chat-icon d-flex justify-content-around'>
                        <div>
                            <img src={thumbsup} alt="" style={{width:"15px",height:"15px"}}/>&nbsp;
                            <img src={thumbsdown} alt="" style={{width:"15px",height:"15px"}}/>
                        </div>
                        </div>
                        </div>
                        <div className="respo-chat">
                        <p className='respo-chat-feedback'>Netural - Response</p>
                            <p>
                            That's wonderful! Our bank offers a range of home loan options to suit different needs. We have adjustable-rate mortgages and fixed-rate mortgages. Adjustable-rate mortgages allow for rate adjustments based on market conditions, while fixed-rate mortgages provide a stable interest rate throughout the loan term. Do you have a preference between the two?
                                </p>
                        </div>
                        {/* <div className="respo-chat">
                            <p>I'm so sorry but currently we don't have any policy which suits your requirements</p>
                        </div> */}
                    </div>
                    <div>
                        <div className="ai-title">
                            <img src={productOfferIcon} alt=""/>
                            <h3 className="mb-0"><FormattedMessage id="app.label.products" defaultMessage={"Products and Offers"}/></h3>
                        </div>
                        <div>
                            <table className="table table-borderless ai-suggest w-100">
                                <tbody>
                                    <tr>
                                        <td><img src={productIcon} alt=""/></td>
                                        <td>32.6%</td>
                                        <td>€ 234.00</td>
                                        <td><button>Suggest</button></td>
                                    </tr>
                                    <tr>
                                        <td><img src={productIconTwo} alt=""/></td>
                                        <td>32.6%</td>
                                        <td>€ 160.00</td>
                                        <td><button>Suggest</button></td>
                                    </tr>
                                    {/* <tr>
                                        <td><img src={award} alt=""/></td>
                                        <td>32.6%</td>
                                        <td>₹ 1,234.00</td>
                                        <td><button>Suggest</button></td>
                                    </tr> */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* <!-- agent analytics --> */}
                {/* <div className="w-30" style={{display: "none"}}>
                    <h2 className="title1">Agent Analytics</h2>
                    <div className="rank-title">
                        <div className="icon-hldr"><img src="" alt=""/></div>
                        <h3>Lead Chart</h3>
                        <div>Chart</div>
                        <div className="d-flex">
                            <div className="d-flex">
                                <div>Total Calls</div>
                                <div>46</div>
                            </div>
                            <div>
                                <div className="d-flex">
                                    <div>Total Queries Solved</div>
                                    <div>2</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* <!-- customer history --> */}
                <div className="w-30 cust-hist-hldr">

                {/* <div className="d-flex justify-content-between gap-3 w-100 mb-4"> */}
                <div className="chart-one-hldr text-center">
                    <h2 className="title1"><FormattedMessage id="app.label.customerDelight" defaultMessage={"Customer Delight"}/></h2>
                    <Chart NoofSegments={5} value={200}/>
                </div>
                <div className="chart-two-hldr text-center">
                    <h2 className="title1"><FormattedMessage id="app.label.customerIntent" defaultMessage={"Customer Intent"}/></h2>
                    <Chart isCustomerIntent="true" NoofSegments={3} value={400}/>
                </div>
                {/* <div className="cust-call-dtls bg-hldr w-4">
                    <p>Current Call Duration</p>
                    <p><strong>00:04 Sec</strong></p>
                </div> */}
                <div className="d-flex flex-column bg-hldr">
                    <div className="d-flex justify-content-between">
                        <div className="desc-hldr">
                            <h3>Customer Name</h3>
                            <p className="cust-name-txt">Lisa Smith</p>
                            <p className="cust-details">
                                Gender Identity : <img src={sheIcon} style={{height:"12px",width:"48px"}}/>
                            </p>
                        </div>
                        <div className="img-hldr">
                            <img src={profileImage} className='img-hldr-profile' alt="Customer image"/>
                            
                        </div>
                    </div>
                    <div>
                        <p className="cust-details">
                            Age : <span className='cust-details-data'>27 years</span>
                        </p>
                        <p className="cust-details">
                            Occupation : <span className='cust-details-data'>Hr</span>
                        </p>
                        <p className="cust-details">
                            Company Name : <span className='cust-details-data'>Abc Infotech</span>
                        </p>
                        <p className="cust-details">
                            Current policy's : <span className='cust-details-data'>2</span>
                        </p>
                        {/* <p className="cust-name-email d-flex"><img src={mail} alt=""/>
                            <span>lisasmith@mail.com</span>
                        </p>
                        <p className="cust-name-ph d-flex"><img src={phone} alt=""/> <span>(333)-333333</span></p>
                        <p className="cust-name-duration"><strong>Customer since 5 months</strong></p> */}
                    </div>

                    <button className='cust-dtl-view-more d-flex justify-content-between ms-auto'>
                        <div>
                            <img src={saleforceIcon} alt="Salesforce Icon" style={{width:"30px",height:"20px"}}/>
                        </div>
                        <div style={{color:"#000000",fontSize:"10px",fontWeight:"600"}}>
                            View More
                        </div>
                        <div>
                            <img src={rightArrow} alt=""/>
                        </div>
                    </button>
                </div>
            {/* </div> */}

                    {/* <h2 className="title1">Customer History</h2>
                    <div className="cust-hist">
                        <table className="table table-borderless _cust-hist ai-suggest">
                            <thead>
                                <tr>
                                    <th>Insurer</th>
                                    <th>Amount</th>
                                    <th>&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><img src={smiley} alt=""/></td>
                                    <td>€ 289.00</td>
                                    <td><button>View Details</button></td>
                                </tr>
                                <tr>
                                    <td><img src={smiley} alt=""/></td>
                                    <td>€ 289.00</td>
                                    <td><button>View Details</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="bg-hldr p-4 pay-info">
                        <div>
                            <h2>Payment Info</h2>
                            <p>Credit Card</p>
                            <button>Update payment info</button>
                        </div>
                        <div>
                            <img src="images/" alt=""/>
                            <p>*****5548</p>
                            <p>Expiry Date: 03/27</p>
                        </div>
                    </div>
                    <div className="tckes-hldr mt-4">
                        <h3>Tickets</h3>
                        <div class="box-hldr">
                            No older tickets found...
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
        </>
    )
}

export default DashboardNew;