/* canvas setting */ 
let canvas;
let ctx;
canvas = document.createElement("canvas");
ctx = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 700;
document.body.appendChild(canvas);

let playerImage, enemyImage, bulletImage, enemybulletImage, gameoverImage, backgroundImage;
let playerX = canvas.width/2-32;
let playerY = canvas.height-64;
function loadImage() {
    playerImage = new Image();
    playerImage.src = "img/player.png";
    enemyImage = new Image();
    enemyImage.src = "img/bullet.png";
    enemybulletImage = new Image();
    enemybulletImage.src = "img/enemy-bullet.png";
    gameoverImage = new Image();
    gameoverImage.src = "img/gameover.png";
    backgroundImage = new Image();
    backgroundImage.src = "img/background.jpg";
}

let keyDown = {}        // pressed key name

function setupKeyboardListener() {
    document.addEventListener("keydown", function(event) {
        keyDown[event.key] = true;
        console.log("value", keyDown);
    });
    document.addEventListener("keyup", function(event) {
        delete keyDown[event.key];
        console.log("after pressed", keyDown);
    })
}

// 이미지를 캔버스에 보여주는 함수
function render() {
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(playerImage, playerX, playerY);
}

function main() {
    render();
    requestAnimationFrame(main);
}

loadImage();
setupKeyboardListener();
main();