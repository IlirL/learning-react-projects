import React from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectOpenMail } from './features/mailSlice';
import './Mail.css';
function Mail() {
    
    const history = useHistory();
    const selectedMail = useSelector(selectOpenMail);
    console.log("selectedMail = ", selectedMail)
    return (
        <div className = "mail">
            <div className="mail__tools">
                <div className="mail__toolsLeft">
                    <p >Tools on the left from material ui icons<button onClick = {() => history.push("/")}>Go back</button></p>
                
                </div>
                <div className="mail__toolsRight">
                    <p>Tools on the right</p>
                </div>
            </div>
            <div className="mail__body">
                <div className="mail__bodyHeader">
                    {/* <h2>subject</h2> */}
                    <h2> {selectedMail?.subject} </h2>
                    <p>icon </p>
                    <p>{selectedMail?.title} </p>
                    <p> {selectedMail?.time}  </p>
                </div>

                <div className="mail__message">
                    <p>{selectedMail?.description} </p> 
                </div>
            </div>
        </div>
    )
}
//import './Mail.css';
export default Mail
