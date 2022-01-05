import express, {Request, Response, NextFunction} from 'express';
import usersRoute from './routes/users.route';

const app = express();

//utilize essa configuração de users.route.ts
app.use(usersRoute);


/* parâmetro com a tipagem e vai fazer a requisição*/
app.get('/status', (req: Request, res: Response, next:NextFunction) => {
    res.status(200).send({foo: 'sucesso total! agora build with realtime'});
});

/* Aqui definimos em qual porta será executada o nosso app */
app.listen(3000, () =>{
    console.log('Aplicação executando na porta 3000!');
});