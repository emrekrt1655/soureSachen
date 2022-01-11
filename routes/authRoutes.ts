import express, {Response,Request} from 'express'
const router : any = express.Router()
export default router;


router.post('/register', (req: Request, res: Response) => {
    res.send("blabla")
})
