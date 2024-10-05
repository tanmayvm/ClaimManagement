
import React, { useEffect, useState } from 'react'
import {FetchCatagory,FetchHead,FetchSaveHead} from './fetchAPI'
import NotificationContainer from './notification'


const CatagoryBox = (props) => {
    const [cat, setCat] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);

    const handleChange = (e) => {
        setSelectedOption(e.target.value)
        props.getCat(e.target.value)
    }

    useEffect(()=>{
        setSelectedOption(props.setCat);
        if(props.setCat){
        setIsDisabled(true)
    }
    },[props.setCat])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await FetchCatagory({ "EmpID": 2 });
                console.log(response)
                setCat(response);

            } catch (error) {
                console.error('Error fetching category data:', error);
            }
        }

        fetchData();
    }, []);

    return <form>        
        <label>Catagory Name:<select id="dropdown" name="catagory"
            value={selectedOption}
            onChange={handleChange}
           disabled={isDisabled}
            >                
           <option value="0">Please Select</option>
                    {cat.map((category) => (
                        <option key={category.CatagoryID} value={category.CatagoryID}>
                            {category.CatagoryName} 
                        </option>
                    ))}
            </select>
        </label>
    </form>
}


export default CatagoryBox;