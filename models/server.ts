import express, {Application} from 'express';
import cors from 'cors';
import userRoutes from '../routes/usuario';

import db from '../db/connection';

class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios'
    };

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';

        //MEtodos iniciales
        this.dbConnection();
        this.middlewares();
        //Definir mis rutas
        this.routes()

    }

    //TODO conectar base de datos
    async dbConnection(){
        try {
            
            await db.authenticate();
            console.log('Database Online');

        } catch (err: any) {
            throw new Error(err)
        }
    }

    middlewares(){
        //CORS
        this.app.use(cors({

        }))
        //LEctura del Body
        this.app.use(express.json())

        //Carpeta publicaº
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.apiPaths.usuarios, userRoutes)
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`);
        })
    }
}

export default Server;