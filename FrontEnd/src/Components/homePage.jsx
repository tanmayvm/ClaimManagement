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
        </div>
    );
};


export default HomePage;