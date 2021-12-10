"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = require("../controller/users");
const users_2 = require("../controller/users");
const users_3 = require("../controller/users");
const users_4 = require("../controller/users");
const users_5 = require("../controller/users");
const router = (0, express_1.Router)();
router.get('/', users_1.getUsers);
router.get('/:id', users_2.getUser);
router.post('/', users_3.postUser);
router.put('/:id', users_4.putUser);
router.delete('/:id', users_5.deleteUser);
exports.default = router;
//# sourceMappingURL=userRouter.js.map