import { insertBreClaim, insertBreClaimDetail,catagoryList,getClaimDetail,headDetailService,claimListService,HeadService,breDetailListService} from './breService.js'

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
        let claim;
        let claimDataTO
        claim = req.body.claim;
        if(!req.body.ClaimID){
            claimDataTO=await insertBreClaim(claimTO);
            console.log(claimDataTO);            
        }
        else{
            claimDataTO=req.body.ClaimID;
        }
    
        const claimDetailTO  = await    
         insertBreClaimDetail(
            {
                ClaimDetailID:claim.ClaimDetailID,
                ClaimID:claimDataTO,
                HeadID: claim.HeadID,
                ConveyanceID:claim.ConveyanceID,
                EligibleAmt:claim.EligibleAmt,
                BillPeriod:claim.BillPeriod,
                BillDate:claim.BillDate,
                ConveyanceRate:claim.ConveyanceRate,
                Amount:claim.Amount,
                EmpRemarks:claim.EmpRemarks,
                EmpExcessClaimRemarks:claim.EmpExcessClaimRemarks,
                CreatedBy: req.body.EmpID,
                Active:claim.Active
            }
        ) 
    console.log(claimDetailTO)

   return res.status(200).json({data:claimDetailTO})  
 }
 catch(e)
    {
        console.log(e)
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
        // console.log(data)
    
        return res.status(200).json({'data':data});
    }
        catch(e)
        {
            return res.status(400).json({Message:"Some Error Occured"})  
    }

}


export async function breDetail(req,res){

    if(!req.body.ClaimID){
        return res.status(400).json({ error: 'ClaimID is required' });
    }

    try{
        const data = await breDetailListService(req.body.ClaimID);
        // console.log(data)
    
        return res.status(200).json({'data':data});
    }
        catch(e)
        {
            return res.status(400).json({Message:"Some Error Occured"})  
    }

}



