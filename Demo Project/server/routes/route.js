import { Router } from 'express'
const router = Router()

import UserController from '../controllers/user.js';
import middleware from '../middleware/auth.js';

const { authenticateUser } = middleware


//POST Methods

router.post('/registeration', UserController.registeration) //register user
router.post('/login', UserController.login) //Login in app
router.post('/registerationMail', UserController.registerationMail) //send the email




//GET Methods
router.get('/userProfile', authenticateUser, UserController.userProfile)// get user with username
router.post('/generateOTP', UserController.generateOTP)// generate random OTP
router.post('/verifyOTP', UserController.verifyOTP)//  verify generate OTP




//PUT Methods
router.put('/resetPassword', UserController.resetPassword) //reset




export default router;