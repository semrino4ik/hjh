"use strict";
const canvas = document.getElementById('gameCanvas');
const ctx = (canvas === null || canvas === void 0 ? void 0 : canvas.getContext('2d')) || null;
if (ctx) {
    // Ваш код для роботи з ctx
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, 100, 100);
}
else {
    console.error("Контекст canvas не знайдено!");
}
