import express ,{Request,Response} from "express";
import RegisterUser  from "../controllers/UserRegistrations";
const router=express.Router();

router.post('/UserRegister',RegisterUser.AddUser)
router.get('/UserRegister',RegisterUser.ShowUser)


export{router}