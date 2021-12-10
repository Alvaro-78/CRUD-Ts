import { Router } from 'express';
import { getUsers } from '../controller/userController';
import { getUser } from '../controller/userController';
import { postUser } from '../controller/userController';
import { putUser } from '../controller/userController';
import { deleteUser } from '../controller/userController';

const router = Router();

router.get('/', getUsers);
router.get('/:id', getUser);
router.get('/', postUser);
router.get('/:id', putUser);
router.get('/:id', deleteUser);

export default router;
