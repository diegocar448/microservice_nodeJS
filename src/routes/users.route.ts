import { Router, Request, Response,  NextFunction, response } from 'express';

// get/users
const usersRoute = Router();


//configuração de rota
usersRoute.get('/users', (req:Request, res:Response, next:NextFunction) => {
    const users = [{ userName: 'Diego' }];
    res.status(200).send( users );
});

export default usersRoute;



// get /:uuid
// post /users
// put /users/:uuid
// delete /users/:uuid
