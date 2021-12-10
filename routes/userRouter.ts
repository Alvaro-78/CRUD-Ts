import { Router } from 'express';
import { getUsers } from '../controller/usersController';
import { getUser } from '../controller/usersController';
import { postUser } from '../controller/usersController';
import { putUser } from '../controller/usersController';
import { deleteUser } from '../controller/usersController';

const router = Router();

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', postUser);
router.put('/:id', putUser);
router.delete('/:id', deleteUser);

export default router;
