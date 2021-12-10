"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controller/userController");
const userController_2 = require("../controller/userController");
const userController_3 = require("../controller/userController");
const userController_4 = require("../controller/userController");
const userController_5 = require("../controller/userController");
const router = (0, express_1.Router)();
router.get('/', userController_1.getUsers);
router.get('/:id', userController_2.getUser);
router.get('/', userController_3.postUser);
router.get('/:id', userController_4.putUser);
router.get('/:id', userController_5.deleteUser);
exports.default = router;
//# sourceMappingURL=userRouter.js.map