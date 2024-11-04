import React from "react";
import { Link } from "react-router-dom";



const HomePage = () => {
    return (
        <div>
            <h1>Welcome to Claim Management System</h1>
            <h2>Developed By: <span>Tanmay Verma</span></h2>
            <div>
                <label>
                    Make a new Claim
                    <span><Link to={'/newClaim'} aria-label="Create a new claim">New Claim</Link></span>
                </label>
            </div>
            <div>
                <label>
                    Go to Existing Claims
                    <span><Link to={'/claimList'} aria-label="View my claims">My Claims</Link></span>
                </label>
            </div>
            <div>
                <h2>ToDo's For FrontEnd</h2>
                <div>1.Claim List --Done</div>
                <div>2.New Claim --Done</div>
                <div>3.Edit Claim --Done</div>
                <div>4.Notification --Done</div>
                <div>5.Submit --Pending</div>
                <div>6. --Pending</div>
                <div>7. --Pending</div>

            </div>
        </div>
    );
};


export default HomePage;