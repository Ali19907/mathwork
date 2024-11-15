// Example of a simple JavaScript game loop
let canvas = document.createElement('canvas');
document.body.appendChild(canvas);
canvas.width = 800;
canvas.height = 600;
let ctx = canvas.getContext('2d');

let player = { x: 50, y: 50, width: 50, height: 50, speed: 5 };

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'blue';
    ctx.fillRect(player.x, player.y, player.width, player.height);
    requestAnimationFrame(update);
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') player.x += player.speed;
    if (e.key === 'ArrowLeft') player.x -= player.speed;
    if (e.key === 'ArrowUp') player.y -= player.speed;
    if (e.key === 'ArrowDown') player.y += player.speed;
});

update();
