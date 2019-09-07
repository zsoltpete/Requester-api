"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoryDao_1 = __importDefault(require("../store/categoryDao"));
const userDao_1 = __importDefault(require("../store/userDao"));
const apiRouter = express_1.Router();
const getCategories = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const databaseResponse = yield categoryDao_1.default.getAll();
        response.status(databaseResponse.status).send(databaseResponse.value);
    }
    catch (e) {
        response.status(500).send();
    }
});
const getUsers = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const databaseResponse = yield userDao_1.default.getAll();
        response.status(databaseResponse.status).send(databaseResponse.value);
    }
    catch (e) {
        response.status(500).send();
    }
});
apiRouter.get('/categories', getCategories);
apiRouter.get('/users', getUsers);
exports.default = apiRouter;
//# sourceMappingURL=api.js.map