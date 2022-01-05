import { Router, Request, Response,  NextFunction, response } from 'express';

//configuração de rota
const usersRoute = Router();


// get/users
usersRoute.get('/users', (req:Request, res:Response, next:NextFunction) => {
    const users = [{ userName: 'Diego' }];
    res.status(200).send( users );
});

export default usersRoute;

// get /:uuid
// podemos tbm tipar o parâmetro em Request com o Request<{ uuid:string }>
usersRoute.get('/users/:uuid', (req:Request<{ uuid: string }>, res:Response, next:NextFunction) => {

    //aqui pegar o valor passado na url
    const uuid = req.params.uuid;    
    res.status(200).send({ uuid });
})


// post /users
// put /users/:uuid
// delete /users/:uuid
