


import {Router} from 'express';
import { deleteUsuario, getUsuario, getUsuarios, postUsuario, putUsuario } from '../controllers/usuarios';

const router =  Router();

router.delete('/:id',   deleteUsuario);
router.get('/',         getUsuarios);
router.get('/:id',      getUsuario);
router.post('/',        postUsuario);
router.put('/:id',      putUsuario);






export default router;