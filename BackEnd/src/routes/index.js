import { Router } from 'express';
import {breNewClaimSave,getCatagoryList,claimDetail,headDetail,claimList,HeadList} from '../bre/breContoller.js';


const router = Router();

router.use('/saveClaim', breNewClaimSave);
router.use('/getCatagory', getCatagoryList);
router.use('/getHead',HeadList);
router.use('/getHeadDetail', headDetail);

router.use('/getClaimList', claimList);
router.use('/getClaimDetail', claimDetail);

// router.use('/getApproverClaimList', ApproverClaimList);
// router.use('/getApproverClaimDetail', ApproverClaimDetail);
// router.use('/saveApproverAction', ApproverAction);


export default router;
