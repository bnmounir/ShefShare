"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const next_1 = __importDefault(require("next"));
const express_1 = __importDefault(require("express"));
const dev = process.env.NODE_ENV != "production";
const app = next_1.default({ dev });
const server = express_1.default();
app.prepare()
    .then(() => {
    server.use(app.getRequestHandler());
    server.listen(0, console.log.bind(console, "Server listening successfully."));
});
