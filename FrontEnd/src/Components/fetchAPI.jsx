
import { useState, useEffect } from "react";



export const  FetchCatagory = async (reqBody)=>{
    // const [data, setData] = useState();
    try {
        const response = await fetch('http://localhost:3001/api/getCatagory', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(reqBody)
        });
        if (!response.ok) {
          throw new Error('Failed to fetch profile');
        }
        const json = await response.json();
        return json.data;
        // setData(json.data);
      } catch (error) {
        console.error("ViewProfileerror", error);
      }
    // return data;
}



export const  FetchHead = async (reqBody)=>{
    // const [data, setData] = useState();
    try {
        const response = await fetch('http://localhost:3001/api/getHead', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(reqBody)
        });
        if (!response.ok) {
          throw new Error('Failed to fetch profile');
        }
        const json = await response.json();
        return json.data;
        // setData(json.data);
      } catch (error) {
        console.error("ViewProfileerror", error);
      }
    // return data;
}

export const  FetchSaveHead = async (reqBody)=>{
    // const [data, setData] = useState();
    try {
        const response = await fetch('http://localhost:3001/api/saveClaim', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(reqBody)
        });
        if (!response.ok) {
          throw new Error('Failed to fetch profile');
        }
        const json = await response.json();
        return json.data;
        // setData(json.data);
      } catch (error) {
        console.error("ViewProfileerror", error);
      }
    // return data;
}


export const  FetchClaimList = async (reqBody)=>{
  // const [data, setData] = useState();
  try {
      const response = await fetch('http://localhost:3001/api/getClaimList', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reqBody)
      });
      if (!response.ok) {
        throw new Error('Failed to fetch profile');
      }
      const json = await response.json();
      return json.data;
      // setData(json.data);
    } catch (error) {
      console.error("ViewProfileerror", error);
    }
  // return data;
}

export const  FetchClaimDetail = async (reqBody)=>{
  // const [data, setData] = useState();
  try {
      const response = await fetch('http://localhost:3001/api/getClaimDetail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reqBody)
      });
      if (!response.ok) {
        throw new Error('Failed to fetch profile');
      }
      const json = await response.json();
      return json.data;
      // setData(json.data);
    } catch (error) {
      console.error("ViewProfileerror", error);
    }
  // return data;
}

export const  FetchBreDetail = async (reqBody)=>{
  // const [data, setData] = useState();
  try {
      const response = await fetch('http://localhost:3001/api/getBreDetail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reqBody)
      });
      if (!response.ok) {
        throw new Error('Failed to fetch profile');
      }
      const json = await response.json();
      return json.data;
      // setData(json.data);
    } catch (error) {
      console.error("ViewProfileerror", error);
    }
  // return data;
}

export const  FetchBreClaimDetail = async (reqBody)=>{
  // const [data, setData] = useState();
  try {
      const response = await fetch('http://localhost:3001/api/getBreClaimDetail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reqBody)
      });
      if (!response.ok) {
        throw new Error('Failed to fetch profile');
      }
      const json = await response.json();
      return json.data;
      // setData(json.data);
    } catch (error) {
      console.error("ViewProfileerror", error);
    }
  // return data;
}