import express  from "express";
import cors from "cors";
import tradersRouter from "../routes/trader.routes.js"; 
import accionesRouter from "../routes/accion.routes.js"; 
import dineroRouter from "../routes/dinero.routes.js"; 
import tipoRouter from "../routes/tiposDineros.routes.js"; 

class Server {
    constructor(){
        this.app = express();
        this.app.use(express.json());
        this.port = process.env.PORT
        this.tradersPath = "/api/traders";
        this.accionesPath = "/api/acciones";
        this.dineroPath = "/api/dinero";
        this.tipoPath = "/api/tipo";
        //Middlewares
        this.middlewares();
        //Routing
        this.routes();
    }

    middlewares(){
        //cors
        this.app.use((cors()))
        //PUBLIC DIRECTORY
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.tradersPath, tradersRouter);
        this.app.use(this.accionesPath, accionesRouter);
        this.app.use(this.dineroPath, dineroRouter);
        this.app.use(this.tipoPath, tipoRouter);
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Server Running on port ${this.port}`);
        })
    }
}

export default Server;