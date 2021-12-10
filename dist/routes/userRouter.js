"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersController_1 = require("../controller/usersController");
const usersController_2 = require("../controller/usersController");
const usersController_3 = require("../controller/usersController");
const usersController_4 = require("../controller/usersController");
const usersController_5 = require("../controller/usersController");
const router = (0, express_1.Router)();
router.get('/', usersController_1.getUsers);
router.get('/:id', usersController_2.getUser);
router.post('/', usersController_3.postUser);
router.put('/:id', usersController_4.putUser);
router.delete('/:id', usersController_5.deleteUser);
exports.default = router;
//# sourceMappingURL=userRouter.js.map