import { Router } from 'express';
import { getUsers } from '../controller/users';
import { getUser } from '../controller/users';
import { postUser } from '../controller/users';
import { putUser } from '../controller/users';
import { deleteUser } from '../controller/users';

const router = Router();

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', postUser);
router.put('/:id', putUser);
router.delete('/:id', deleteUser);

export default router;
