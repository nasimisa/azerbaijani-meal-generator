'use strict';

// select elements

const btn = document.querySelector('button');
const main = document.querySelector('main');

const randomMeal = document.createElement('article');
randomMeal.classList.add('random-meal', 'container', 'col-md-6');

// function to create random meal array according to selection
const chooseRandomMeal = () => {
  const mealTypes = document.querySelectorAll('.meal-type input');

  const difficultyLevels = document.querySelector('#difficulty');

  const timeForCooking = document.querySelectorAll('.time-for-cooking input');

  // convert node list to array, then choose selected radio button
  const selectedTime = Array.from(timeForCooking).find(time => time.checked === true).value;

  let meal;

  mealTypes.forEach(mealType => {
    if (mealType.checked === true) {
      meal = recipes[mealType.value]
        .filter(meal => meal.difficulty === difficultyLevels.value)
        .filter(meal => meal.time + meal.min === selectedTime);
    }
  });

  return meal[Math.floor(Math.random() * meal.length)];
};

// from randomly chosen meal array, choose one meal
const newMeal = () => {
  let selectedMeal = chooseRandomMeal();

  // if there is no meal according to selected criteria, then show message, otherwise show meal
  if (selectedMeal !== undefined) {
    randomMeal.innerHTML = `<img src=${selectedMeal.image} alt="${selectedMeal.name}" class="img-fluid" />
  <h2>${selectedMeal.name}</h2>
  <div class="meal-icons">
    <div class="icon-container">
      <i class="fas fa-clock"></i>
      <p><span class="number">${selectedMeal.time}</span><br /><span class="text">${selectedMeal.min}</span></p>
    </div>
    <div class="icon-container">
      <i class="fas fa-concierge-bell"></i>
      <p><span class="number">${selectedMeal.serving}</span><br /><span class="text">servings</span></p>
    </div>
    <div class="icon-container">
      <i class="fas fa-layer-group"></i>
      <p><span class="text">${selectedMeal.difficulty}</span></p>
    </div>
  </div>
  <div class="description">
    <p>
      ${selectedMeal.description}
    </p>
  </div>
  <div class="ingredients">
    <h4>Ingredients</h4>
    <ul>
    </ul>
  </div>
  <div class="directions">
    <h4>Directions</h4>
    <ol>      
    </ol>
  </div>`;
  } else {
    randomMeal.innerHTML = `<p class="no-meals">If no meals appear, please choose different difficulty level and time 👀</p>`;
  }

  main.appendChild(randomMeal);
  main.classList.remove('desktop-main'); //to remove max-width 380px in order accommodate new meal

  // dynamically accommodate ingredients and directions from recipes object
  const listIngredients = document.querySelector('.ingredients ul');
  const listDirections = document.querySelector('.directions ol');

  selectedMeal.ingredients.forEach(ingredient => {
    const createIngredient = document.createElement('li');
    createIngredient.textContent = ingredient;
    listIngredients.appendChild(createIngredient);
  });

  selectedMeal.directions.forEach(direction => {
    const createDirection = document.createElement('li');
    createDirection.textContent = direction;
    listDirections.appendChild(createDirection);
  });

  // when user clicks button, to scroll to the meal, but only small and medium screens.
  let position = randomMeal.offsetTop;

  if (window.matchMedia('(max-width: 768px)').matches)
    window.scrollTo({
      left: 0,
      top: position,
    });
};

btn.addEventListener('click', newMeal);
