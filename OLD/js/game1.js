let player;
let balls = [];
let obstacles = [];
let powerUps = [];
let lasers = [];
let score = 0;
let lives = 3;
let gameOverFlag = false;

function preload() {
  // Load images
  player = loadImage('images/car.png');
  ballImage = loadImage('images/Fireball.png');
  obstacleImage = loadImage('images/brick.png');
  powerUpImage = loadImage('images/berry.png');
  laserImage = loadImage('images/laser.png');
}

function setup() {
  createCanvas(400, 400);
  playerX = 100;
  playerY = 350;
  createBalls();
  createObstacles();
  createPowerUps();

  // Add a click event listener to the restart button
  const restartButton = document.getElementById("restartButton");
  restartButton.addEventListener("click", restartGame);
}

function draw() {
  background(220);

  // Draw obstacles and check for collision
  for (let i = obstacles.length - 1; i >= 0; i--) {
    const obstacle = obstacles[i];
    obstacle.y += 3;
    image(obstacleImage, obstacle.x, obstacle.y, obstacle.size, obstacle.size);

    if (obstacle.hits(playerX, playerY)) {
      handleCollision();
    }

    if (obstacle.y > height) {
      obstacles.splice(i, 1); // Remove the obstacle if it's out of the canvas
    }
  }

  // Draw power-ups and check for collection
  for (let i = powerUps.length - 1; i >= 0; i--) {
    const powerUp = powerUps[i];
    powerUp.y += 3;
    image(powerUpImage, powerUp.x, powerUp.y, powerUp.size, powerUp.size);

    if (powerUp.collects(playerX, playerY)) {
      handlePowerUpCollection();
    }

    if (powerUp.y > height) {
      powerUps.splice(i, 1); // Remove the power-up if it's out of the canvas
    }
  }

  // Draw balls and check for collision
  for (let i = balls.length - 1; i >= 0; i--) {
    const ball = balls[i];
    ball.y += 5;
    image(ballImage, ball.x, ball.y, ball.size, ball.size);

    if (ball.hits(playerX, playerY)) {
      handleCollision();
    }

    if (ball.y > height) {
      balls.splice(i, 1); // Remove the ball if it's out of the canvas
      score++;
    }
  }

  // Draw lasers and check for collisions with balls
  for (let i = lasers.length - 1; i >= 0; i--) {
    const laser = lasers[i];
    laser.y -= 5;
    image(laserImage, laser.x, laser.y, laser.size, laser.size);

    // Check for collisions with balls
    for (let j = balls.length - 1; j >= 0; j--) {
      if (laser.hits(balls[j].x, balls[j].y)) {
        score++;
        lasers.splice(i, 1); // Remove the laser
        balls.splice(j, 1);  // Remove the ball
        break;
      }
    }

    if (laser.y < 0) {
      lasers.splice(i, 1); // Remove the laser if it's out of the canvas
    }
  }

  // Draw the player character
  image(player, playerX - 25, playerY - 25, 100, 100);

  if (!gameOverFlag) {
    // Handle character movement only if the game is not over
    if (keyIsDown(LEFT_ARROW) && playerX > 25) {
      playerX -= 5;
    }
    if (keyIsDown(RIGHT_ARROW) && playerX < width - 25) {
      playerX += 5;
    }

    // Handle shooting lasers with spacebar
    if (keyIsDown(32)) { // 32 is the key code for spacebar
      shootLaser(playerX, playerY);
    }
  }

  // Display the score and lives
  textSize(20);
  fill(0);
  text(`Score: ${score}`, 20, 30);
  text(`Lives: ${lives}`, width - 100, 30);

  // Add new balls, obstacles, and power-ups at random intervals
  if (frameCount % 60 === 0) {
    createBalls();
  }

  if (frameCount % 100 === 0) {
    createObstacles();
  }

  if (frameCount % 300 === 0) {
    createPowerUps();
  }
}

function createBalls() {
  const ballX = random(width);
  const ballY = random(-200, -50);
  const ballSize = random(70, 90);

  const ball = {
    x: ballX,
    y: ballY,
    size: ballSize,
    hits: function (cx, cy) {
      const d = dist(cx, cy, this.x + this.size / 2, this.y + this.size / 2);
      return d < 25; // Adjust the value for collision detection
    },
  };

  balls.push(ball);
}

function createObstacles() {
  const obstacleX = random(width);
  const obstacleY = random(-200, -50);
  const obstacleSize = random(50, 80);

  const obstacle = {
    x: obstacleX,
    y: obstacleY,
    size: obstacleSize,
    hits: function (cx, cy) {
      const d = dist(cx, cy, this.x + this.size / 2, this.y + this.size / 2);
      return d < 20; // Adjust the value for collision detection
    },
  };

  obstacles.push(obstacle);
}

function createPowerUps() {
  const powerUpX = random(width);
  const powerUpY = random(-200, -50);
  const powerUpSize = random(50, 50);

  const powerUp = {
    x: powerUpX,
    y: powerUpY,
    size: powerUpSize,
    collects: function (cx, cy) {
      const d = dist(cx, cy, this.x + this.size / 2, this.y + this.size / 2);
      return d < 40; // Adjust the value for collection radius
    },
  };

  powerUps.push(powerUp);
}

function shootLaser(x, y) {
  const laser = {
    x: x - 5,
    y: y - 40,
    size: 10,
    hits: function (bx, by) {
      const d = dist(bx, by, this.x + this.size / 2, this.y + this.size / 2);
      return d < 15; // Adjust the value for laser collision detection
    },
  };

  lasers.push(laser);
}

function handleCollision() {
  lives--;
  if (lives <= 0) {
    gameOver();
  }
}

function handlePowerUpCollection() {
  score += 5;
  // Add any power-up effects or enhancements here
}

function gameOver() {
  gameOverFlag = true;
  noLoop();
  textSize(32);
  fill(255, 0, 0);
  text("Game Over", width / 2 - 100, height / 2);

  // Show the restart button
  const restartButton = document.getElementById("restartButton");
  restartButton.style.display = "block";
}

function restartGame() {
  // Reset game variables
  score = 0;
  lives = 3;
  playerX = width / 2;
  playerY = height - 50;
  balls = [];
  obstacles = [];
  powerUps = [];
  lasers = [];
  gameOverFlag = false;
  createBalls();
  createObstacles();
  createPowerUps();

  // Hide the restart button
  const restartButton = document.getElementById("restartButton");
  restartButton.style.display = "none";

  // Restart the game loop
  loop();
}
