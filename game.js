import {
  SNAKE_SPEED,
  update as updateSnake,
  draw as drawSnake,
  getSnakeHead,
  snakeIntersected,
} from "./snake.js"
import { update as updateFood, draw as drawFood } from "./food.js"
import { outsideGrid } from "./grid.js"

const gameBoard = document.getElementById("game-board")
let lastRenderTime = 0
let gameOver = false
console.log(gameBoard)

// setup game loop
function main(currentTime) {
  if (gameOver) {
    if (confirm("You lost, press ok to restart!")) {
      window.location = "/"
    }
    return
  }
  window.requestAnimationFrame(main)
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return
  lastRenderTime = currentTime
  update()
  draw()
}

window.requestAnimationFrame(main)

function update() {
  updateSnake()
  updateFood()
  checkDeath()
}

function draw() {
  gameBoard.innerHTML = ""
  drawSnake(gameBoard)
  drawFood(gameBoard)
}

function checkDeath() {
  const snakeHead = getSnakeHead()
  gameOver = outsideGrid(snakeHead) || snakeIntersected()
}
