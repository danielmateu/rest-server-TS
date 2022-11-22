import { Request, Response } from "express";



export const getUsuarios = (req: Request, res: Response) => {
    res.json({
        msg: 'Get Usuarios'
    })
}

export const getUsuario = (req: Request, res: Response) => {

    const {id} = req.params;

    res.json({
        msg: 'Get Usuario',
        id
    })
}

export const postUsuario = (req: Request, res: Response) => {

    const {body} = req;

    res.json({
        msg: 'Crear Usuario',
        body
    })
}

export const putUsuario = (req: Request, res: Response) => {


    const {id} = req.params;
    const {body} = req;

    res.json({
        msg: 'Actualizar Usuario',
        body
    })
}

export const deleteUsuario = (req: Request, res: Response) => {


    const {id} = req.params;

    res.json({
        msg: 'Delete Usuario',
        id
    })
}



