import { Router, Request, Response,  NextFunction, response } from 'express';
import statusCode from 'http-status-codes';

//configuração de rota
const usersRoute = Router();


// get/users
usersRoute.get('/users', (req:Request, res:Response, next:NextFunction) => {
    const users = [{ userName: 'Diego' }];
    // aqui passamos o statusCode  usando o repositorio (npm install --save 'http-status-code')
    res.status(statusCode.OK).send( users );
});

// get /:uuid
// podemos tbm tipar o parâmetro em Request com o Request<{ uuid:string }>
usersRoute.get('/users/:uuid', (req:Request<{ uuid: string }>, res:Response, next:NextFunction) => {

    //aqui pegar o valor passado na url
    const uuid = req.params.uuid;    
    res.status(statusCode.OK).send({ uuid });
});








export default usersRoute;


// post /users
// put /users/:uuid
// delete /users/:uuid
