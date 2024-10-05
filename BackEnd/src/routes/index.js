import { Router } from 'express';
import {breNewClaimSave,getCatagoryList,claimDetail,headDetail,claimList,HeadList,breDetail} from '../bre/breContoller.js';


const router = Router();

router.use('/getCatagory', getCatagoryList);
router.use('/getHead',HeadList);
router.use('/saveClaim', breNewClaimSave);
router.use('/getHeadDetail', headDetail);


router.use('/getBreDetail', breDetail);
router.use('/getClaimList', claimList);
router.use('/getClaimDetail', claimDetail);// return main table data only

// router.use('/getApproverClaimList', ApproverClaimList);
// router.use('/getApproverClaimDetail', ApproverClaimDetail);
// router.use('/saveApproverAction', ApproverAction);


export default router;
