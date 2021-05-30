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

export const deleteUser = async (req : Request , res : Response): Promise<Response> => {
 
    //Esto equivale a SELECT * FROM USER
    const resultado = await getRepository(User).delete(req.params.id);
    return res.json(resultado);
}

export const createUser = async (req : Request , res : Response): Promise<Response> => {

    //Creo un nuevo usuario
    const newUser = getRepository(User).create(req.body);
    //Almaceno el nuevo usuario en la BD
    const result = await getRepository(User).save(newUser);
    return res.json(result);
}

export const updateUser = async (req : Request , res : Response): Promise<Response> => {

    //Busco al Usuario en la base de datos
    const user = await getRepository(User).findOne(req.params.id);
    // Si existe el usuario
    if (user) {
        //Sustituyo los datos del usuario encontrado por los valores
        //pasados por el req.body, esto lo hace en local
        getRepository(User).merge(user, req.body);
        // Guardo los datos en la base de datos
        const results = await getRepository(User).save(user);
        // Mando el resultado de la operacion
        return res.json(results);
    } else {
        return res.status(404).json( { msg: 'Usuario no encontrado'});
    }

}