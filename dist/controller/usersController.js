"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.putUser = exports.postUser = exports.getUser = exports.getUsers = void 0;
// importamos los tipados de express
// Traer todos los usuarios
const getUsers = (req, res) => {
    res.json({
        message: 'getUsers',
    });
};
exports.getUsers = getUsers;
// Traer un usuario
const getUser = (req, res) => {
    const { id } = req.params;
    res.json({
        message: 'getUser',
        id,
    });
};
exports.getUser = getUser;
// Crear un usuario
const postUser = (req, res) => {
    const { body } = req;
    res.json({
        message: 'postUser',
        body,
    });
};
exports.postUser = postUser;
// Actualizar un usuario
const putUser = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    res.json({
        message: 'putUser',
        body,
    });
};
exports.putUser = putUser;
// Borrar un usuario
const deleteUser = (req, res) => {
    const { id } = req.params;
    res.json({
        message: 'deleteUser',
        id,
    });
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=usersController.js.map