import { Router } from 'express';

const router = Router();

import { getUsers, createUser, getUser } from '../controllers/user.controller';

router.get('/users', getUsers);
router.get('/users/:id', getUser);
router.post('/users', createUser);
    
export default router;