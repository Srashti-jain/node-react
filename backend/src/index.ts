//Backend previous code
import express, { Request, Response } from "express";
import mysql from 'mysql';
import connection from './database';
import cors from 'cors';
import { router } from "./routes/routes";
const app = express();
const PORT = 8081;
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors());

app.use('/', router);


// app.get('/UserRegister', (req, res) => {
//   const query1 = "Select * from registeruser"
//   db.query(query1, (err: Error | null, result: any) => {
//     if (err) res.json("Error");
//     return res.json(result);
//   })
// })

// app.post('/UserRegister', (req, res) => {
//   const sql = "INSERT INTO registeruser(name,email,phone,password) VALUES(?)";
//   const values = [
//     req.body.name,
//     req.body.email,
//     req.body.phone,
//     req.body.password,
//   ];
//   db.query(sql, [values], (err: Error | null, result: any) => {
//     if (err) {

//       res.json("Error");
//     }
//     else {
//        res.json("user registered succesfully"+result.insertId);
//       // res.json(result);
     

//     }
//   });
// });

app.listen(PORT, () => {
  console.log('server started ')

})


