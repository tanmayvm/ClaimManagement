import React, { useEffect, useState, useRef } from 'react'
import { FetchCatagory, FetchHead, FetchSaveHead, FetchBreDetail, FetchBreClaimDetail } from './fetchAPI'
import Notification from './notification'

const HeadBox = (props) => {
    console.log('CatID', props.CatagoryID)
    const [head, sethead] = useState([]);
    const [breDetail, setbreDetail] = useState([]);
    const formRef = useRef(null);
    const [headForm, setHeadForm] = useState(
        {
            "ClaimDetailID": null,
            "CatagoryID": null,
            "HeadID": null,
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
        }
    );

    useEffect(() => {
        setHeadForm(prevForm => ({ ...prevForm, ...props.claimID }));
    }, [props.claimID])

    const [selectedOption, setSelectedOption] = useState(null);
    const [headList, setHeadList] = useState()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await FetchHead({ "CatagoryID": props.CatagoryID });
                console.log(response)
                sethead(response);

            } catch (error) {
                console.error('Error fetching category data:', error);
            }
        }

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await FetchBreDetail({ "ClaimID": props.claimID });
                console.log(response)
               
                

            } catch (error) {
                console.error('Error fetching category data:', error);
            }
        }
        if(props.claimID){
        fetchData();
    }
    }, [props.ClaimID]);


    const handleChange = (name, value) => {
        if (name === 'HeadName') {
            setSelectedOption(value)
        }
        setHeadForm(prevForm => ({ ...prevForm, [name]: value }));
    }

    const [message,setmessage]= useState();
    const [messageType,setmessageType]= useState();

     const  handleClick = async () => {        
                    try {
                         
                            const response =  FetchSaveHead({
                                "ClaimID": props.claimID,
                                "EmpID": 1,
                                "CatagoryID": props.CatagoryID,
                                "State": "Saved",
                                "ApplicationDate": new Date().toISOString().split('T')[0],
                                "claim": headForm
                            });
                            console.log(response)
                            setmessage("Claim saved Successfully")
                            setmessageType("success");
                            setbreDetail(response);
                    } catch (error) {
                        console.error('Error Saving Head data:', error);
                    }
                }

    const handleClickCancle = () => {
        setHeadForm({
            "ClaimDetailID": null,
            "CatagoryID": null,
            "HeadID": null,
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
        })
    }

    const editHeadClaim = (i) => {
        console.log('BreDetailID', breDetail[i]);
        setHeadForm(breDetail[i])
    }

    return <div>
        <Notification message={message} type={messageType}/>
        <form ref={formRef}>
            <label>Head:<select id="dropdown" name="HeadID"
                value={headForm.HeadID}
                onChange={e => handleChange(e.target.name, e.target.value)}>
                required
                <option value="0">PleaseSelect</option>
                {head.map((h) => (<option key={h.HeadID} value={h.HeadID}>{h.HeadName}</option>))}
            </select>
            </label>
            <label>EligibleAmt:{headForm.EligibleAmt}</label>
            <label>BillPeriod:<input type='text' name='BillPeriod' value={headForm.BillPeriod } onChange={e => handleChange(e.target.name, e.target.value)}></input></label>
            <label>BillDate:<input type='date' name='BillDate' value={headForm.BillDate } onChange={e => handleChange(e.target.name, e.target.value)}></input></label>
            <label>ConveyanceRate:{headForm.BillDate }</label>
            <label>Amount:<input type='text' name='Amount' value={headForm.Amount } onChange={e => handleChange(e.target.name, e.target.value)}></input></label>
            <label>EmpRemarks:<input type='text' name='EmpRemarks' value={headForm.EmpRemarks } onChange={e => handleChange(e.target.name, e.target.value)}></input></label>
            <label>EmpExcessClaimRemarks:<input type='text' name='EmpExcessClaimRemarks' value={headForm.EmpExcessClaimRemarks } onChange={e => handleChange(e.target.name, e.target.value)}></input></label>
        </form>
        <button onClick={handleClick}>Save</button>
        <button onClick={handleClickCancle}>Cancle</button>

        <table>
            <thead>
                <tr>
                    <th>BreDetailID</th>
                    <th>HeadName</th>
                    <th>Amount</th>
                    <th>BillDate</th>
                    <th>ApprovedAmount</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {breDetail.map((item, index) => (
                    <tr key={item.HeadID}>
                        <td>{item.HeadName}</td>
                        {/* <td>{item.BillDate}</td> */}
                        <td>{item.Amount}</td>
                        <td>{item.BillDate}</td>
                        <td>{item.ApprovedAmount}</td>
                        <td>
                            <button onClick={() => editHeadClaim(index)}>Edit</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

    </div>
}



export default HeadBox;