import { Request, Response } from 'express';

// importamos los tipados de express

// Traer todos los usuarios
export const getUsers = (req: Request, res: Response) => {
	res.json({
		message: 'getUsers',
	});
};

// Traer un usuario
export const getUser = (req: Request, res: Response) => {
	const { id } = req.params;

	res.json({
		message: 'getUser',
		id,
	});
};

// Crear un usuario
export const postUser = (req: Request, res: Response) => {
	const { body } = req;

	res.json({
		message: 'postUser',
		body,
	});
};

// Actualizar un usuario
export const putUser = (req: Request, res: Response) => {
	const { body } = req;
	const { id } = req.params;

	res.json({
		message: 'putUser',
		body,
	});
};

// Borrar un usuario
export const deleteUser = (req: Request, res: Response) => {
	const { id } = req.params;

	res.json({
		message: 'deleteUser',
		id,
	});
};
