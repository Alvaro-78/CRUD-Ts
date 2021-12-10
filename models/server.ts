import express, { Application } from 'express';
import userRouter from '../routes/userRouter';

class Server {
	private app: Application;
	private port: string;
	private apiPaths = {
		users: '/api/users',
	};

	constructor() {
		this.app = express();
		this.port = process.env.PORT || '8000';
		this.routes();
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
