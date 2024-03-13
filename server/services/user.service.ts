import { Response } from 'express';
// getting user by id

import userModel from "../models/user.model"

export const getUserByID = async (id: string, res:Response) => {
    const user = await userModel.findById(id);
    res.status(201).json({
        success :true,
        user,
    })
}