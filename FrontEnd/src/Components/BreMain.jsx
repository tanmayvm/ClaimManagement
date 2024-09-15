import React, { useEffect, useState } from 'react'


const catagory = [
    {
        "CatagoryID": "C1",
        "CatagoryName": "Staff",
        "Active": true
    },
    {
        "CatagoryID": "C2",
        "CatagoryName": "Conveyance",
        "Active": true
    },
    {
        "CatagoryID": "C3",
        "CatagoryName": "IT",
        "Active": true
    }
]

const head = [
    {
        "HeadID": "C11",
        "CatagoryID": "C1",
        "HeadName": "John Doe",
        "Active": true
    },
    {
        "HeadID": "C12",
        "CatagoryID": "C1",
        "HeadName": "Jane Smith",
        "Active": false
    },
    {
        "HeadID": "C21",
        "CatagoryID": "C2",
        "HeadName": "Emily Johnson",
        "Active": true
    },
    {
        "HeadID": "C31",
        "CatagoryID": "C3",
        "HeadName": "Michael Brown",
        "Active": true
    }
]


const CatagoryBox = (props) => {
    const [catID, setCatID] = useState();
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (e) => {
        setSelectedOption(e.target.value)
        props.getCat(e.target.value)
    }


    return <form>
        <label>Catagory Name:<select id="dropdown" name="catagory"
            value={selectedOption}
            onChange={handleChange}>
            <option value="">PleaseSelect</option>
            <option value="C1">Staff</option>
            <option value="C2">Conveyance</option>
            <option value="C3">IT</option>
        </select>
        </label>
    </form>
}

const HeadBox = (props) => {
    console.log(props.claimID)
    const [headForm, setHeadForm] = useState(
        {
            "ClaimID": null,
            "CatagoryID": null,
            "HeadID": null,
            "HeadName": null,
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
    const headMap = () => {
        const filtered = head.filter(({ CatagoryID }) => CatagoryID === props.CatagoryID);
        return filtered
        // setHeadList(filtered);
    }
    const op = headMap();
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
            <label>Head:<select id="dropdown" name="HeadName"
                value={headForm.HeadName || ''}
                onChange={e=>handleChange(e.target.name, e.target.value)}>
                required
                <option value="">PleaseSelect</option>
                {op.map(({ HeadID, HeadName }) => (<option key={HeadID} value={HeadID}>{HeadName}</option>))}
            </select>
            </label>
            <label>BillDate:<input type='date' value={headForm.BillDate} name='BillDate' onChange={e => handleChange(e.target.name, e.target.value)}></input></label>
            <label>Amount:<input type='text' name='EligibleAmt' value={headForm.EligibleAmt } onChange={e => handleChange(e.target.name, e.target.value)}></input></label>
            
        </form>
        <button onClick={handleClick}>Save</button>
    </div>
}

const BreMain = () => {
    const [catID, setCatID] = useState('')
    const [headFormList,setHeadList]= useState([]);
    const [claimList,setClaimList] = useState([]);
    const [viewHead,setViewHead] = useState(0);
    const getCat = (catID) => {
        setCatID(catID);
        console.log('catID:', catID)
    }


    const getHead = (headValue) => {
        setClaimList(prevList => [...prevList, headValue]);
        setViewHead(0);
    }

    const AddNewHead =()=>{
        // setHeadList([...headFormList,headFormList.length])
        setViewHead(1);
    }

    const [editID,setEditID] = useState() 
    const editClaim=(index)=>{
        setViewHead(1);
        console.log('index:',index)
        setEditID( {
            "ClaimID": null,
            "CatagoryID": 'C2',
            "HeadID": 'C21',
            "HeadName": 'Jane Smith',
            "ConveyanceID": null,
            "EligibleAmt": 100,
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
                        <th>Head Name</th>
                        <th>Bill Date</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {claimList.map((item, index) => (
                        <tr key={index}>
                            <td>{item.head}</td>
                            <td>{item.BillDate}</td>
                            <td>{item.EligibleAmt}</td>
                            <td><button onClick={e=>editClaim(index)}>Edit</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}


export default BreMain;

