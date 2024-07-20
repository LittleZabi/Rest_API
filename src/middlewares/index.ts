import express from "express";
import { get, merge } from "lodash";
import { getUserBySessionToken } from "../db/users";

export const isOwner = async (req: express.Request, res:express.Response, next: express.NextFunction) => {
  try{
    const {id} = req.params;
    const currentUserId = get(req, 'identity._id') as string;
    if(!currentUserId){
      return res.sendStatus(403);
    }
    if(currentUserId.toString() !== id){
      return res.sendStatus(403);
    }
    next();
  }
  catch(error){
    console.log(error)
    return res.sendStatus(400)
  }
}

export const isAuthenticated = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    req.cookies['api-auth'] = 'c4d6fc06ba9519cc975fdc4c16c9bfb88a478fdbcd36399b2f4746ae2f25dfa1' // set a default cookie
    const sessionToken = req.cookies["api-auth"];
    console.log(sessionToken)
    if (!sessionToken) return res.send({message: "Please login."}).status(403);
    const existingUser = await getUserBySessionToken(sessionToken);
    if (!existingUser) return res.sendStatus(403);
    merge(req, { identity: existingUser });
    return next();
  } catch (error) {
    console.log(error);
    return res.send({ message: error, m: error.message }).status(400).end();
  }
};
