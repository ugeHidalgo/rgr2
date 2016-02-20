import express from "express";
import {port} from "./config";

let server = express();

server.use(express.static('public'));


server.listen(port, () => {
	console.log ('- Listening on port 3000');
});

