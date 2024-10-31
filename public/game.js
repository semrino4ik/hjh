const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const socket = io();

// Відправляємо подію "tap" при натисканні
canvas.addEventListener("click", () => {
    socket.emit("tap");
});

// Обробка події "earningsUpdate" від сервера
socket.on("earningsUpdate", (earnings) => { // Приймаємо заробітки як число
    console.log("Отримані заробітки:", earnings); // Діагностика
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "20px Arial";
    ctx.fillStyle = "black";
    ctx.fillText(`Ваші заробітки: $${earnings}`, 10, 50); // Відображаємо заробітки
});
function showTab(tabId) {
    ['incomeTabContent', 'upgradesTabContent', 'gameContainer'].forEach(id => {
        document.getElementById(id).style.display = id === tabId ? 'block' : 'none';
    });
}
