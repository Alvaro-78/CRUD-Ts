import express, { Application } from 'express';
import userRouter from '../routes/userRouter';
import cors from 'cors';

import db from '../db/connection';

class Server {
	private app: Application;
	private port: string;
	private apiPaths = {
		users: '/api/users',
	};

	constructor() {
		this.app = express();
		this.port = process.env.PORT || '8000';

		this.dbConnection();
		this.middlewares();

		this.routes();
	}

	async dbConnection() {
		try {
			await db.authenticate();
			console.log('DB en línea');
		} catch (error) {
			throw new Error();
		}
	}

	middlewares() {
		// Cors
		this.app.use(cors());
		// Parseo del body
		this.app.use(express.json());
		// Carpeta pública
		this.app.use(express.static('public'));
	}

	routes() {
		this.app.use(this.apiPaths.users, userRouter);
	}

	listen() {
		this.app.listen(this.port, () => {
			console.log('Servidor levantado en el puerto ' + '', this.port);
		});
	}
}

export default Server;
