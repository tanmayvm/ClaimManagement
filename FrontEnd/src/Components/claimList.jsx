
import React, { useEffect, useState } from 'react'
import {  FetchClaimList } from './fetchAPI'
import {Link } from 'react-router-dom'

const ClaimList=()=>{
    const [claimList, setClaimList] = useState([]);
    const [sortedList, setSortedList] = useState(claimList);
    const [sortOrder, setSortOrder] = useState('asc');
    useEffect(() => {
        const response = async () => {
            try {
                const response = await FetchClaimList({
                    "EmpID": 1
                });
                console.log(response)
                setClaimList(response);
            } catch (error) {
                console.error('Error Saving Head data:', error);
            }
        }
        response();
    }, [])

    const handleSort = () => {
        const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        const sorted = [...sortedList].sort((a, b) => {
            const dateA = new Date(a.ApplicationDate);
            const dateB = new Date(b.ApplicationDate);
            return newSortOrder === 'asc' ? dateA - dateB : dateB - dateA;
        });
        setSortedList(sorted);
        setSortOrder(newSortOrder);
    };

    const editClaim = async (index) => {
        
    }

    return <div>
         <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th>ClaimID</th>
                        <th>Bill Date</th>
                        <th>TotalAmount</th>
                        <th onClick={handleSort} style={{ cursor: 'pointer' }}>ApplicationDate  {sortOrder === 'asc' ? '↑' : '↓'}</th>
                        <th>ClaimCode</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {claimList.map((item, index) => (
                        <tr key={item.ClaimID}>
                            <td>{item.ClaimID}</td>
                            <td>{item.BillDate}</td>
                            <td>{item.TotalAmount}</td>
                            <td>{item.ApplicationDate}</td>
                            <td>{item.ClaimCode}</td>
                            <td>{item.Status}</td>
                            <td>{item.Status === 'Saved' && (
                                <Link to={`/newClaim/${item.ClaimID}`}><button >Edit</button></Link>
                                // onClick={() => editClaim(item.ClaimID)}
                            )}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button ><Link to={'/'}>Back</Link></button>
    </div>

}

export default ClaimList;