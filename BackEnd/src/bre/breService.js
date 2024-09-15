import BreClaim from '../model/BreClaim.js'
import { QueryTypes } from 'sequelize';
import { sequelize } from '../model/database.js';
import Catagory from '../model/Catagory.js'
import Head from '../model/Head.js'
import BreClaimDetails from '../model/BreClaimDetails.js';

const now = new Date();
const formattedDate = now.toISOString().slice(0, 19).replace('T', ' ');

export async function insertBreClaim(claimTO){
    const dataR = await sequelize.query('insert into BreClaim (EmpID,CatagoryID,Status,Active,ApplicationDate,\
        CreatedBy,ModifiedBy,CreatedAt,ModifiedAt) values (?,?,?,?,?,?,?,?,?)',{
        replacements: [claimTO.EmpID,claimTO.CatagoryID,claimTO.State,1,claimTO.ApplicationDate,claimTO.EmpID,claimTO.EmpID,
            formattedDate,formattedDate],
        type: QueryTypes.INSERT,
        raw:false
    })
return dataR[0];
}

export async function insertBreClaimDetail(detailTO){
    const dataR = await sequelize.query('insert into BreClaimDetails (ClaimID,HeadID,ConveyanceID,EligibleAmt,BillPeriod,BillDate,ConveyanceRate,\
        Amount,EmpRemarks,EmpExcessClaimRemarks,CreatedBy,ModifiedBy,CreatedAt,ModifiedAt) \
         values (?,?,?,?,?,?,?,?,?,?,?,?,?,?)',{
        replacements: [detailTO.ClaimID,detailTO.HeadID,detailTO.ConveyanceID,detailTO.EligibleAmt,detailTO.BillPeriod,detailTO.BillDate,detailTO.ConveyanceRate
            ,detailTO.Amount,detailTO.EmpRemarks,detailTO.EmpExcessClaimRemarks,detailTO.CreatedBy,detailTO.CreatedBy,formattedDate,formattedDate],
        type: QueryTypes.INSERT,
        raw:false
    })
const data = [{'ID':1,'name':'a'},{'ID':2}]
return data;
}

export async function catagoryList(){
    // try{
    // const data = await Catagory.findAll({
    //     where: { Active: true },
    //     include: {
    //         model: Head,
    //         where: { Active: true },
    //         attributes: ['HeadID','HeadName'],
    //     },
    //     attributes: ['CatagoryName'],
    // }, {raw:true});
    // return data;

    try{
        const data = await Catagory.findAll({
            where: { Active: true },
            attributes: ['CatagoryID','CatagoryName'],
        }, {raw:true});
        return data;
    
}
catch(e){
    console.error('Error fetching categories:', e);
    throw e;
}
}

export async function HeadService(CatagoryID){
    try{
        const data = await Head.findAll({
            where: { CatagoryID: CatagoryID,Active:1 },
            attributes: ['HeadID','HeadName'],
        }, {raw:true});
        return data;    
}
catch(e){
    console.error('Error fetching categories:', e);
    throw e;
}
}

export async function headDetailService(HeadID){
    try{
        const data = await Head.findAll({
            where: { HeadID: HeadID,Active:1 },
            attributes: ['HeadID','HeadName'],
        }, {raw:true});
        return data;    
}
catch(e){
    console.error('Error fetching categories:', e);
    throw e;
}
}

export async function getClaimDetail(ClaimID){
    try{
        const data = await BreClaim.findAll({
            where: { Active: true },
            include: {
                model: BreClaimDetails,
                // where: { Active: true },
                attributes: ['HeadID','ConveyanceID','EligibleAmt','BillPeriod','BillDate','ConveyanceRate','Amount','EmpRemarks','EmpExcessClaimRemarks'],
            },
            attributes: ['CatagoryID','Status','ApplicationDate'],
            where:{ClaimID:ClaimID}
        }, {raw:true});
        return data; 
    }
    catch(e){
        console.error('Error fetching categories:', e);
    throw e;
    }
}


export async function claimListService(EmpID){
    try{
        const data = await BreClaim.findAll({
            where: { Active: true },
            // include: {
            //     model: BreClaimDetails,
            //     // where: { Active: true },
            //     attributes: ['HeadID','ConveyanceID','EligibleAmt','BillPeriod','BillDate','ConveyanceRate','Amount','EmpRemarks','EmpExcessClaimRemarks'],
            // },
            attributes: ['ClaimID','EmpID','CatagoryID','Status','ApplicationDate'],
            where:{EmpID:EmpID}
        }, {raw:true});
        return data;    
    }
    catch(e){
        console.error('Error fetching categories:', e);
    throw e;
    }
}
