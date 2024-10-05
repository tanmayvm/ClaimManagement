import React, { useEffect, useState } from 'react'
import {useParams,Link} from 'react-router-dom'
import { FetchCatagory, FetchHead, FetchSaveHead, FetchClaimList, FetchClaimDetail } from './fetchAPI'
import HeadBox from './HeadBox';
import CatagoryBox from './CatagoryBox'
import './main.css'
import NotificationContainer from './notification'

const BreMain = () => {
    const [catID, setCatID] = useState('')
    // const [saveClaim, setSaveClaim] = useState([]);
    const [viewHead, setViewHead] = useState(0);
    const { claimID } = useParams();  

    const getCat = (ID) => {
        setCatID(ID);
        console.log('catID:', ID)
    }


    // useEffect(() => {
    //     const response = async () => {
    //         try {
    //             if (saveClaim.HeadID) {
    //                 const response = await FetchSaveHead({
    //                     "ClaimID": null,
    //                     "EmpID": 1,
    //                     "CatagoryID": catID,
    //                     "State": "Saved",
    //                     "ApplicationDate": new Date().toISOString().split('T')[0],
    //                     "claim": saveClaim
    //                 });
    //                 console.log(response)
    //             }

    //         } catch (error) {
    //             console.error('Error Saving Head data:', error);
    //         }
    //     }
    //     response();
    // }, [])




    const getHead = (headValue) => {        
        // setSaveClaim(headValue);
        setViewHead(0);
    }

    const AddNewHead = () => {
        setViewHead(1);
    }

    // const [editID, setEditID] = useState();
    // const [breClaimID,setBreClaimID]= useState();

    useEffect(()=>{
        const editClaim = async () => {
            // setBreClaimID(claimId)
            if(claimID){
            console.log(claimID)
            const responce = await FetchClaimDetail({
                "ClaimID": claimID
            });
            getCat(responce.CatagoryID)
            setViewHead(1);
        }
            // setEditID({
            //     "ClaimDetailID": null,
            //     "CatagoryID": null,
            //     "HeadID": null,
            //     "ConveyanceID": null,
            //     "EligibleAmt": null,
            //     "BillPeriod": null,
            //     "BillDate": null,
            //     "ConveyanceRate": null,
            //     "Amount": null,
            //     "EmpRemarks": null,
            //     "EmpExcessClaimRemarks": null,
            //     "Status": null,
            //     "Active": null
            // });
        }
        editClaim();
    },[])


    return (
        <div>
            <CatagoryBox getCat={setCatID} setCat={catID} />
            <div style={{ textAlign: 'right', borderRight: '50px' }}>
                <button onClick={AddNewHead}>Add Head</button>
            </div>

            {viewHead === 1 && <HeadBox  CatagoryID={catID}  claimID={claimID}/>}
            <button ><Link to={'/'}>Back</Link></button>
            <button >Submit</button>
           
        </div>
    )
}


export default BreMain;

