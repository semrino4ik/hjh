import express from 'express';
import http from 'http';
import path from 'path';
import { Server } from 'socket.io';

const earningsFilePath = path.join(__dirname, '../earnings.json');
const app = express();
const server = http.createServer(app);
const io = new Server(server);

let earnings = 0; // Змінна для збереження заробітків

app.use(express.static(path.join(__dirname, '../public')));

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
