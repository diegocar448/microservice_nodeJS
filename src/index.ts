import express, {Request, Response, NextFunction} from 'express';

const app = express();


/* parâmetro com a tipagem e vai fazer a requisição*/
app.get('/status', (req: Request, res: Response, next:NextFunction) => {
    res.status(200).send({foo: 'bar'});
});

/* Aqui definimos em qual porta será executada o nosso app */
app.listen(3000, () =>{
    console.log('Aplicação executando na porta 3000!');
});