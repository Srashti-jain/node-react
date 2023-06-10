import { Request, Response } from "express";
import connection from "../database";
import user from "../model/user";
class RegisterUser {
    async AddUser(req: Request, res: Response) {
        let data:any = {
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            password:req.body.password,
        };
        let result:any = await user.AddUser(data).catch((error:any)=>{
          console.log(error)
        })
        if(result!==0 && typeof result!== 'undefined')
       {
         res.json(result)
       }
       else
       {
        res.json("Error")
        }
       };
       async ShowUser(req:Request,res:Response){
        let result:any = await user.ShowUser().catch((error:any)=>{
          console.log(error)
        })
        if(result!==0 && typeof result!== 'undefined')
       {
         res.json(result)
       }
       else
       {
        res.json("Error")
        }
    }
    

    }
   


export default new RegisterUser();




