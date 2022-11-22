"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarios_1 = require("../controllers/usuarios");
const router = (0, express_1.Router)();
router.delete('/', usuarios_1.deleteUsuario);
router.get('/', usuarios_1.getUsuario);
router.get('/', usuarios_1.getUsuarios);
router.post('/', usuarios_1.postUsuario);
router.put('/', usuarios_1.putUsuario);
exports.default = router;
//# sourceMappingURL=usuarios.js.map