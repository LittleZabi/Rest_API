import express from 'express'
import authentication from './authentication'
import Users from './users'

const router = express.Router();

export default (): express.Router => {
    router.get('/', (req, res)=> res.send("working...").status(200).end())
    authentication(router);
    Users(router)
    return router; 
}