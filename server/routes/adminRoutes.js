import express from 'express'
import { adminLogin } from '../controllers/adminController.js';
const router = express.Router()
import { getEmployees,updateEmployee,deleteEmployee,createEmployee } from '../controllers/adminController.js';



router.post('/',adminLogin)
router.get('/employees', getEmployees);
router.post('/employees', createEmployee);
router.put('/employees/:id', updateEmployee);
router.delete('/employees/:id', deleteEmployee);

export default router;  