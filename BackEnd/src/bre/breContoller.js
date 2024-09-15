import { insertBreClaim, insertBreClaimDetail,catagoryList,getClaimDetail,headDetailService,claimListService,HeadService} from './breService.js'

export async function  breNewClaimSave(req,res) {
    if(!req.body.EmpID){
        return res.status(400).json({ error: 'EmpID is required' });
    }
    let catTemplate ={
        CatagoryID:null,
        CatagoryName:null
    }
    
    const claimTO ={
        EmpID: req.body.EmpID,
        CatagoryID:req.body.CatagoryID,
        State:req.body.State,
        ApplicationDate:req.body.ApplicationDate
    }
    try{
    const claimDataTO =await insertBreClaim(claimTO);
    const claimDetailTO  = await req.body.claim.map((data)=>
         insertBreClaimDetail(
            {
                ClaimID:claimDataTO,
                HeadID: data.HeadID,
                ConveyanceID:data.ConveyanceID,
                EligibleAmt:data.EligibleAmt,
                BillPeriod:data.BillPeriod,
                BillDate:data.BillDate,
                ConveyanceRate:data.ConveyanceRate,
                Amount:data.Amount,
                EmpRemarks:data.EmpRemarks,
                EmpExcessClaimRemarks:data.EmpExcessClaimRemarks,
                CreatedBy: req.body.EmpID
            }
        )
    )
    
    console.log(claimDetailTO)

   return res.status(200).json({Message:"Claim Submitted Sucessfully"})  
 }
 catch(e)
    {
        return res.status(400).json({Message:"Some Error Occured"})  
}
}


export async function  getCatagoryList(req,res){

    try{
    const data = await catagoryList();
    console.log(data)

    return res.status(200).json({'data':data});
}
    catch(e)
    {
        return res.status(400).json({Message:"Some Error Occured"})  
}
}

export async function  HeadList(req,res){

    try{
    const data = await HeadService(req.body.CatagoryID);
    console.log(data)

    return res.status(200).json({'data':data});
}
    catch(e)
    {
        return res.status(400).json({Message:"Some Error Occured"})  
}
}


export async function headDetail(req,res){
    if(!req.body.HeadID){
        return res.status(400).json({ error: 'HeadID is required' });
    }

    try{
    const data = await headDetailService(req.body.HeadID);
    console.log(data)

    return res.status(200).json({'data':data});
}
    catch(e)
    {
        return res.status(400).json({Message:"Some Error Occured"})  
}
}


export async function claimDetail(req,res){

    if(!req.body.ClaimID){
        return res.status(400).json({ error: 'ClaimID is required' });
    }

    try{
        const data = await getClaimDetail(req.body.ClaimID);
        console.log(data)
    
        return res.status(200).json({'data':data});
    }
        catch(e)
        {
            return res.status(400).json({Message:"Some Error Occured"})  
    }

}



export async function claimList(req,res){

    if(!req.body.EmpID){
        return res.status(400).json({ error: 'EmpID is required' });
    }

    try{
        const data = await claimListService(req.body.EmpID);
        console.log(data)
    
        return res.status(200).json({'data':data});
    }
        catch(e)
        {
            return res.status(400).json({Message:"Some Error Occured"})  
    }

}



