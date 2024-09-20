import React, { useEffect, useState } from 'react'
import {FetchCatagory,FetchHead,FetchSaveHead} from './fetchAPI'


const HeadBox = (props) => {
    console.log('CatID',props.CatagoryID)
    const [head,sethead]=useState([]);
    const [headForm, setHeadForm] = useState(
        {
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
        }
    );

    useEffect(()=>{
        
        setHeadForm(prevForm => ({ ...prevForm, ...props.claimID }));
    },[props.claimID])

    const [selectedOption, setSelectedOption] = useState('');
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

    const handleChange = (name, value) => {
        if(name==='HeadName'){
            setSelectedOption(value)
        }
        setHeadForm(prevForm => ({ ...prevForm, [name]: value }));
    }

    const handleClick = () => {
        props.getHead(headForm)
    }

    return <div>
        <form>
            <label>Head:<select id="dropdown" name="HeadID"
                value={headForm.HeadName || ''}
                onChange={e=>handleChange(e.target.name, e.target.value)}>
                required
                <option value="">PleaseSelect</option>
                {head.map((h) => (<option key={h.HeadID} value={h.HeadID}>{h.HeadName}</option>))}
            </select>
            </label>
            <label>BillDate:<input type='date' name='BillDate' value={headForm.BillDate} onChange={e => handleChange(e.target.name, e.target.value)}></input></label>
            <label>Amount:<input type='text' name='EligibleAmt' value={headForm.EligibleAmt } onChange={e => handleChange(e.target.name, e.target.value)}></input></label>
            
        </form>
        <button onClick={handleClick}>Save</button>
    </div>
}



export default HeadBox;