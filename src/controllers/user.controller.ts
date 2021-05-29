import { Request , Response } from 'express';
import { getRepository} from 'typeorm'; //Para traer una tabla de la BD
import { User } from '../entity/User';

export const getUsers = async (req : Request , res : Response): Promise<Response> => {

    //Esto equivale a SELECT * FROM USER
    const users = await getRepository(User).find();
    return res.json(users);
}

export const getUser = async (req : Request , res : Response): Promise<Response> => {

    //Esto equivale a SELECT * FROM USER
    const resultado = await getRepository(User).findOne(req.params.id);
    return res.json(resultado);
}

export const createUser = async (req : Request , res : Response): Promise<Response> => {

    //Creo un nuevo usuario
    const newUser = getRepository(User).create(req.body);
    //Almaceno el nuevo usuario en la BD
    const result = await getRepository(User).save(newUser);
    return res.json(result);
}