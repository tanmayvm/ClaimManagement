import React, { useEffect, useState } from 'react'
import {FetchCatagory,FetchHead,FetchSaveHead,FetchClaimList,FetchClaimDetail} from './fetchAPI'
import HeadBox from './HeadBox';
import CatagoryBox from './CatagoryBox'


const BreMain = () => {
    const [catID, setCatID] = useState('')
    const [headFormList,setHeadList]= useState([]);
    const [claimList,setClaimList] = useState([]);
    const [saveClaim,setSaveClaim] = useState([]);
    const [viewHead,setViewHead] = useState(0);
    const getCat = (catID) => {
        setCatID(catID);
        console.log('catID:', catID)
    }


    useEffect(()=>{
        const response  = async()=> {
            try {
                
                const response = await FetchClaimDetail({
                    "ClaimID":null                                      
                  });
                console.log(response)
               

            } catch (error) {
                console.error('Error Saving Head data:', error);
            }
        }
        response();
    },[saveClaim])

    useEffect(()=>{
        const response  = async()=> {
            try {
                if(saveClaim.HeadID){
                const response = await FetchSaveHead({
                    "ClaimID":null,
                    "EmpID":1,
                    "CatagoryID":catID,
                    "State":"Saved",
                    "ApplicationDate":new Date().toISOString().split('T')[0],
                    "claim":saveClaim                   
                  });
                console.log(response)
                }

            } catch (error) {
                console.error('Error Saving Head data:', error);
            }
        }
        response();
    },[saveClaim])


    useEffect(()=>{
        const response  = async()=> {
            try {
                  const response = await FetchClaimList({
                   "EmpID":1                 
                  });
                console.log(response)               
                setClaimList(response);     
            } catch (error) {
                console.error('Error Saving Head data:', error);
            }
        }
        response();
    },[])

    const getHead = (headValue) => {
        // setClaimList(prevList => [...prevList, headValue]);
        setSaveClaim(headValue);
        setViewHead(0);
    }

    const AddNewHead =()=>{
        setViewHead(1);
    }

    const [editID,setEditID] = useState() 
    const editClaim=(index)=>{
        setViewHead(1);
        console.log('index:',index)
        setEditID( {
            "ClaimDetailID": null,
            "CatagoryID": null,
            "HeadID": null,
            // "HeadName": null,
            "ConveyanceID": null,
            "EligibleAmt": null,
            "BillPeriod": null,
            "BillDate": null,
            "ConveyanceRate": null,
            "Amount": null,
            "EmpRemarks": null,
            "EmpExcessClaimRemarks": null,
            "Status": null,
            "Active": null
        });
    }

    return (
        <div>
            <CatagoryBox getCat={getCat} />
            <div style={{ textAlign:'right', borderRight:'50px' }}>
            <button onClick={AddNewHead}>Add Head</button>
            </div>
            
            { viewHead===1 &&  <HeadBox  getHead={getHead} CatagoryID={catID} claimID={editID}/>}
            <button >Submit</button>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th>ClaimID</th>
                        <th>Head Name</th>
                        <th>Bill Date</th>
                        <th>Amount</th>
                        <th>ApplicationDate</th>
                    </tr>
                </thead>
                <tbody>
                    {claimList.map((item, index) => (
                        <tr key={index}>
                            <td>{item.ClaimID}</td>
                            <td>{item.head}</td>
                            <td>{item.BillDate}</td>
                            <td>{item.EligibleAmt}</td>
                            <td>{item.ApplicationDate}</td>
                            {item.Status === 'Saved' && (
                            <button onClick={() => editClaim(index)}>Edit</button>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}


export default BreMain;

