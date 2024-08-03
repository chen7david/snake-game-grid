import { onSnake, expandSnake } from "./snake.js"
import { randomGridPosition } from "./grid.js"

let food = getRandomFoodPosition()
export const EXPANSION_RATE = 1

export const SNAKE_SPEED = 5

export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE)
    food = getRandomFoodPosition()
  }
}

export function draw(gameBoard) {
  const foodlement = document.createElement("div")
  foodlement.style.gridRowStart = food.y
  foodlement.style.gridColumnStart = food.x
  foodlement.classList.add("food")
  gameBoard.appendChild(foodlement)

  console.log("draw")
}

export function getRandomFoodPosition() {
  let newFoodPosition
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition()
  }
  return newFoodPosition
}
