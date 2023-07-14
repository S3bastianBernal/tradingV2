import dovent from "dotenv";
import conectarDB from "./config/config.js";
import Server from "./models/server.js";

dovent.config()

const server = new Server();

conectarDB();

server.listen();