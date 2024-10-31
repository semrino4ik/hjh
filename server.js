"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const path_1 = __importDefault(require("path"));
const socket_io_1 = require("socket.io");
const earningsFilePath = path_1.default.join(__dirname, '../earnings.json');
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const io = new socket_io_1.Server(server);
let earnings = 0; // Змінна для збереження заробітків
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
io.on('connection', (socket) => {
    console.log('Користувач підключився');
    socket.on('tap', () => {
        earnings += 1; // Збільшуємо заробітки при кожному "tap"
        socket.emit('earningsUpdate', { earnings }); // Надсилаємо заробітки як об'єкт { earnings: значення }
    });
    socket.on('disconnect', () => {
        console.log('Користувач відключився');
    });
});
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Сервер запущено на http://localhost:${PORT}`);
});
