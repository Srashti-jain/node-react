import connection from "../database";
'use strict';
const User = class User {
    constructor() {
    }
    AddUser(data: any) {
        return new Promise(async (resolve, reject) => {
            try {
                const sql = "CALL insertUser(?,?,?,?)";
                const values = [
                    data.name,
                    data.email,
                    data.phone,
                    data.password,
                ];
                connection.query(sql, values, (error,result) => {
                    if (error) {
                        reject(error);
                    }
                    resolve(result);
                });
            } catch (error) {
                reject(error)
            }
        });
    }
    ShowUser() {
        return new Promise(async (resolve, reject) => {
            try {
                const query1 = `CALL ShowUser()`;

                connection.query(query1, (error, results) => {
                    if (error) {
                        reject(error);
                    }
                    resolve(results);
                });
            } catch (error) {
                reject(error)
            }
        });

    }
}

// const query1 = "Select * from registeruser"
// connection.query(query1, (err: Error | null, result: any) => {
//   if (err) resp.json("Error");
//   return resp.json(result);
// })


export default new User();