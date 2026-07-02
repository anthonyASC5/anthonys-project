var canvas = document.getElementById('drawing');
var context = canvas.getContext('2d');
//setting start color and size of brush
var currentColor = 'black';
var currentBrushSize = 50;

//making it able to change color of brush
document.getElementById('color').addEventListener('change', function (event) {
    currentColor = event.target.value;
});
//making it able to change size of brush

document.getElementById('brush-size').addEventListener('input', function (event) {
    currentBrushSize = event.target.value;
});

var isDrawing = false;
//mouse down to draw
canvas.addEventListener('mousedown', function (event) {
    isDrawing = true;
    context.beginPath();
    context.fillStyle = currentColor;
    context.arc(event.clientX, event.clientY, currentBrushSize / 2, 0, 2 * Math.PI);
    context.fill();
});
//when mouse is moved and drawing, continue drawing with mouse movement
canvas.addEventListener('mousemove', function (event) {
    if (isDrawing) {
        context.beginPath();
        context.fillStyle = currentColor;
        context.arc(event.clientX, event.clientY, currentBrushSize / 2, 0, 2 * Math.PI);
        context.fill();
    }
});

canvas.addEventListener('mouseup', function () {
    isDrawing = false;
});
