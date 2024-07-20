import express from 'express';
import { deleteUserById, getUserById, getUsers } from '../db/users';

export const updateUser = async (req: express.Request, res: express.Response) => {
    try{
        const {id} = req.params;
        const {username} = req.body;
        if(!username){
            return res.sendStatus(400)
        }
        const user = await getUserById(id);
        user.username = username;
        await user.save()
        // return res.sendStatus(200).json(user).end();
        return res.send(user).status(200).end();
    }
    catch(error){
        console.log(error)
        return res.send({message: error, error: error.message}).status(400)
    }
}

export const getAllUsers = async (req: express.Request, res: express.Response) => {
    try{
        const users = await getUsers();
        return res.send(users).status(200).end();
    }
    catch(error){
        console.log(error)
        return res.send(error).status(400)
    }
}

export const deleteUser = async (req: express.Request, res: express.Response) => {
    try{
        const {id} = req.params;
        const deleteUser = await deleteUserById(id);
        return res.json(deleteUser)
    }
    catch(error) {
        console.log(error)
        res.sendStatus(400)
    }
}