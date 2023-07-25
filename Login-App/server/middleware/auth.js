import expess from 'express'
import jwt from 'jsonwebtoken'
import User from '../model/userModel.js';

class middleware {
    static authenticateUser = async (req, res, next) => {
        let token;
        try {
            const { authorization } = req.headers
            if (authorization && authorization.startsWith('Bearer')) {
                //extract token
                token = authorization.split(" ")[1];

                //verify token by secreatkry and extract userID as object
                const { userID } = jwt.verify(token, process.env.secreatkey)
                req.user = await User.findById(userID);
                next()
            } else {
                if (!token) {
                    res.send({
                        status: "failed",
                        msg: "unauthorised user"
                    })
                }
            }

        } catch (error) {
            console.log(error)
            // res.send({
            //     status: "failed",
            //     message: "Authentication Error"
            // })
        }
    }

}

export default middleware