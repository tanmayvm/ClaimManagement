import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { FetchCatagory, FetchHead, FetchSaveHead, FetchClaimList, FetchClaimDetail } from './fetchAPI'
import HeadBox from './HeadBox';
import CatagoryBox from './CatagoryBox'
import './main.css'
import NotificationContainer from './notification'

const BreMain = () => {
    const [catID, setCatID] = useState('')
    const { claimID } = useParams();

    const getCat = (ID) => {
        setCatID(ID);
        console.log('catID:', ID)
    }

    useEffect(() => {
        const editClaim = async () => {
            if (claimID) {
                console.log(claimID)
                const responce = await FetchClaimDetail({
                    "ClaimID": claimID
                });
                getCat(responce.CatagoryID)
            }

        }
        editClaim();
    }, [])


    return (
        <div>
            <CatagoryBox getCat={setCatID} setCat={catID} />
            <HeadBox CatagoryID={catID} claimID={claimID} />
            <button ><Link to={'/'}>Back</Link></button>
            <button >Submit</button>

        </div>
    )
}


export default BreMain;

