"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
exports.connectToMongoDb = () => {
    return mongoose_1.default.connect(process.env.DATABASE_ADDRESS || 'mongodb://localhost:27017/requester', Object.assign({ useNewUrlParser: true }, getAuthForDatabase()));
};
const getAuthForDatabase = () => {
    if (process.env.DATABASE_USER && process.env.DATABASE_PASSWORD) {
        return { auth: { user: process.env.DATABASE_USER, password: process.env.DATABASE_PASSWORD } };
    }
    return {};
};
exports.default = {
    connectToMongoDb: exports.connectToMongoDb
};
//# sourceMappingURL=init.js.map