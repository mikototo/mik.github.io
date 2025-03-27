const canvas = document.getElementById('background');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const shapes = [];
const colors = ['#FF0055', '#00FFAA', '#5500FF', '#FFAA00', '#AAFF00', '#00AAFF'];

function random(min, max) {
    return Math.random() * (max - min) + min;
}

class Shape {
    constructor() {
        this.x = random(0, canvas.width);
        this.y = random(0, canvas.height);
        this.size = random(80, 200);
        this.color = colors[Math.floor(random(0, colors.length))];
        this.speedX = random(-0.3, 0.3);
        this.speedY = random(-0.3, 0.3);
        this.type = Math.floor(random(0, 3)); // 0:circle, 1:square, 2:triangle
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        switch (this.type) {
            case 0:
                ctx.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2);
                ctx.fill();
                break;
            case 1:
                ctx.fillRect(this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
                break;
            case 2:
                ctx.moveTo(this.x, this.y - this.size / 2);
                ctx.lineTo(this.x - this.size / 2, this.y + this.size / 2);
                ctx.lineTo(this.x + this.size / 2, this.y + this.size / 2);
                ctx.closePath();
                ctx.fill();
                break;
        }
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width + this.size) this.x = -this.size;
        if (this.x < -this.size) this.x = canvas.width + this.size;
        if (this.y > canvas.height + this.size) this.y = -this.size;
        if (this.y < -this.size) this.y = canvas.height + this.size;
    }
}

function initShapes(count) {
    for (let i = 0; i < count; i++) {
        shapes.push(new Shape());
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    shapes.forEach(shape => {
        shape.update();
        shape.draw();
    });
    requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

initShapes(25);
animate();

// Project Upload Function
function uploadProject() {
    const portfolio = document.getElementById('portfolio');

    const name = prompt('Enter project name:');
    const imageURL = prompt('Enter project image URL:');

    if (name && imageURL) {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');
        projectDiv.innerHTML = `
            <img src="${imageURL}" alt="${name}">
            <h3>${name}</h3>
        `;
        portfolio.appendChild(projectDiv);
    } else {
        alert('Both name and image URL are required.');
    }
}
