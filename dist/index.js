"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const init_1 = require("./store/init");
const api_1 = __importDefault(require("./api/api"));
const app = express_1.default();
dotenv_1.default.config();
app.use(express_1.default.json());
(function () {
    init_1.connectToMongoDb().catch((reason) => {
        console.error(reason);
        process.exit(1);
    });
})();
app.use('/api', api_1.default);
app.use('*', (req, res) => {
    res.status(404).send(`Resource not found on '${req.originalUrl}'`);
});
app.listen(3000, () => console.info('Listenning on port 3000'));
//# sourceMappingURL=index.js.map