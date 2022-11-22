


import {Router} from 'express';
import { deleteUsuario, getUsuario, getUsuarios, postUsuario, putUsuario } from '../controllers/usuarios';

const router =  Router();

router.delete('/', deleteUsuario);
router.get('/', getUsuario);
router.get('/', getUsuarios);
router.post('/', postUsuario);
router.put('/', putUsuario);






export default router;