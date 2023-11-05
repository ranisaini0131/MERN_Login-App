import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import otpGenerator from 'otp-generator'

import User from '../model/userModel.js'
import OTP from '../model/otpSchema.js'


class UserController {

    static registeration = async (req, res) => {
        try {

            const { username, password, profile, email } = req.body
            const existUsername = await User.findOne({ username });
            const existEmail = await User.findOne({ email });

            if (!existUsername) {
                if (!existEmail) {
                    if (password) {
                        const hashedPassword = await bcrypt.hash(password, 10)
                        const newUser = new User({
                            username,
                            email,
                            profile,
                            password: hashedPassword
                        });
                        await newUser.save();

                        res.send({
                            status: "success",
                            message: newUser
                        })

                    } else {
                        res.send({
                            status: "failed",
                            message: "Password  required"
                        })
                    }
                } else {
                    res.send({
                        status: "failed",
                        message: "Please use unique email"
                    })
                }

            } else {
                res.send({
                    status: "failed",
                    message: "Please use unique username"
                })
            }

        } catch (error) {
            console.log(error)
            res.send({
                status: "failed",
                message: "Ragistereation failed"
            })
        }

    }

    static login = async (req, res) => {

        const { username, email, password } = req.body
        try {
            const usernameFound = await User.findOne({ username })
            console.log(usernameFound, "68")
            if (usernameFound) {

                const emailFound = await User.findOne({ email })
                if (emailFound) {

                    //generate Token
                    const passwordMatched = await bcrypt.compare(password, emailFound.password)
                    console.log(passwordMatched, "77")
                    if (passwordMatched) {
                        let token = jwt.sign({
                            userID: emailFound._id
                        }, process.env.secreatkey, { expiresIn: '2d' },
                        )
                        res.send({
                            status: "success",
                            token: token
                        })
                    } else {
                        res.send({
                            status: "failed",
                            message: "Token not found"
                        })
                    }

                } else {
                    res.send({
                        status: "failed",
                        message: "Wrong Credentials"
                    })
                }
            } else {
                res.send({
                    status: "failed",
                    message: "username not found"
                })
            }

        } catch (error) {
            console.log(error)
        }

    }


    static userProfile = async (req, res) => {

        try {
            //token
            res.send(req.user)


        } catch (error) {
            console.log(error)
        }

    }

    static registerationMail = async (req, res) => {
        try {
            res.send({
                status: "success",
                message: "registerationMail route"
            })
        } catch (error) {
            console.log(error)
        }

    }

    //when user try to reset their password
    static generateOTP = async (req, res) => {
        try {
            const useOTP = () => {
                var digit = "0123456789"
                let otp = ""
                for (let i = 0; i < 6; i++) {
                    otp += digit[Math.floor((Math.random() * 10))]
                }
                return otp
            }
            let otp = useOTP();
            const alreadyUser = await OTP.findOne({ email: req.body.email })
            if (alreadyUser) {

                const userExist = await OTP.findByIdAndUpdate(alreadyUser._id, { otp })
                res.send({
                    status: "success",
                    message: "generate OTP route"
                })

            } else {
                let data = { ...req.body, otp }
                const newOTP = new OTP(data);
                await newOTP.save();


                res.send({
                    status: "success",
                    message: "generate OTP route"
                })
            }
        } catch (error) {
            console.log(error)
        }

    }

    static verifyOTP = async (req, res) => {
        try {

            const user = await OTP.findOne({ email: req.body.email })
            if (user.otp == req.body.otp) {
                await OTP.findByIdAndUpdate(user._id, { otp: null })
                res.send({
                    status: "success",
                    message: "verify OTP successfully"
                })
            } else {
                res.send({
                    status: "failed",
                    message: "Wrong OTP"
                })
            }
        } catch (error) {
            console.log(error)
        }

    }

    static resetPassword = async (req, res) => {

        const { email, new_password } = req.body
        try {

            const newHashedPassword = await bcrypt.hash(new_password, 10)

            await User.findOneAndUpdate({ email }, { password: newHashedPassword })
            res.send({
                status: "success",
                message: "Password reset successfully"
            })
        } catch (error) {
            console.log(error)
        }

    }




}

export default UserController