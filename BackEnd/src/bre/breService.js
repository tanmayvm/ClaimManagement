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
        CreatedBy,ModifiedBy,CreatedAt,ModifiedAt,ClaimCode) values (?,?,?,?,?,?,?,?,?,?)',{
        replacements: [claimTO.EmpID,claimTO.CatagoryID,claimTO.State,1,claimTO.ApplicationDate,claimTO.EmpID,claimTO.EmpID,
            formattedDate,formattedDate,claimTO.ClaimCode],
        type: QueryTypes.INSERT,
        raw:false
    })
return dataR[0];
}

export async function insertBreClaimDetail(detailTO){
    console.log("Acrtive",detailTO.ClaimDetailID)
    let dataR= null;
    if(!detailTO.ClaimDetailID){
    await sequelize.query('insert into BreClaimDetails (ClaimID,HeadID,ConveyanceID,EligibleAmt,BillPeriod,BillDate,ConveyanceRate,\
        Amount,EmpRemarks,EmpExcessClaimRemarks,CreatedBy,ModifiedBy,CreatedAt,ModifiedAt,Active) \
         values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',{
        replacements: [detailTO.ClaimID,detailTO.HeadID,detailTO.ConveyanceID,detailTO.EligibleAmt,detailTO.BillPeriod,detailTO.BillDate,detailTO.ConveyanceRate
            ,detailTO.Amount,detailTO.EmpRemarks,detailTO.EmpExcessClaimRemarks,detailTO.CreatedBy,detailTO.CreatedBy,formattedDate,formattedDate,detailTO.Active],
        type: QueryTypes.INSERT,
        raw:false
    })
}
else{
    await BreClaimDetails.update({
        HeadID:detailTO.HeadID,
        ConveyanceID:detailTO.CatagoryID,
        BillPeriod:detailTO.BillPeriod,
        ConveyanceRate:detailTO.ConveyanceRate,
        Amount:detailTO.Amount,
        EmpRemarks:detailTO.EmpRemarks,
        EmpExcessClaimRemarks:detailTO.EmpExcessClaimRemarks,
        Active:detailTO.Active
    },{
        where :{ClaimDetailID:detailTO.ClaimDetailID},
        returning:true
    })
}

dataR = await BreClaimDetails.findAll({
    where :{ClaimID:detailTO.ClaimID,Active:1},
   raw:false
})

console.log(dataR)
const data = [{'ID':1,'name':'a'},{'ID':2}]
return dataR;
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
            include: [{
                model:Catagory,
                attributes:['CatagoryName']
            },
                {
                model: BreClaimDetails,
                // where: { Active: true },
                // attributes: ['HeadID','ConveyanceID','EligibleAmt','BillPeriod','BillDate','ConveyanceRate','Amount','EmpRemarks','EmpExcessClaimRemarks'],
                include:{
                    model:Head,
                    attributes:['HeadName']
                }
            }],
            attributes: ['CatagoryID','Status','ApplicationDate','ClaimCode'],
            where:{ClaimID:ClaimID}
            
        }, {raw:false});
        return data.length > 0 ? data[0] : null; 
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
            attributes: ['ClaimID','EmpID','CatagoryID','Status','ApplicationDate','TotalAmount','ClaimCode'],
            where:{EmpID:EmpID}
        }, {raw:true});
        return data;    
    }
    catch(e){
        console.error('Error fetching categories:', e);
    throw e;
    }
}


export async function breDetailListService(ClaimID){
    try{
        const data = await BreClaimDetails.findAll({
            where: { Active: true },
            // attributes: ['HeadID','ConveyanceID','EligibleAmt','BillPeriod','BillDate','ConveyanceRate','Amount','EmpRemarks','EmpExcessClaimRemarks'],
            where:{ClaimID:ClaimID}
        }, {raw:false});
        return data;    
    }
    catch(e){
        console.error('Error fetching categories:', e);
    throw e;
    }
}