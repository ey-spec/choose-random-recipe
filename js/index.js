var recipes = [
  {
    name: "Pad Thai",
    description: "Popular Thai stir-fried noodles with shrimp and peanuts",
    image: "./assets/images/Pad-Thai.png",
    review: 445,
    rating: 4.8,
    level_tag: "Intermediate",
    region_tag: "Asian",
    prep_time: 20,
    cook_time: 15,
    serving: 2,
    ingredients: [
      "200g rice noodles",
      "200g shrimp, peeled",
      "2 eggs",
      "3 tablespoons tamarind paste",
      "2 tablespoons fish sauce",
      "1 tablespoon palm sugar",
      "Bean sprouts",
      "Crushed peanuts",
      "Lime wedges and cilantro",
    ],

    instructions: [
      "Soak rice noodles in warm water for 30 minutes. Drain and set aside.",
      "Mix tamarind paste, fish sauce, and palm sugar to make the sauce.",
      "Heat wok over high heat. Scramble eggs and set aside.",
      "Cook shrimp until pink. Add noodles and sauce, toss for 2-3 minutes.",
      "Add scrambled eggs and bean sprouts. Toss everything together.",
      "Serve topped with crushed peanuts, lime wedges, and cilantro.",
    ],

    nutrition: {
      calories: "540 kcal",
      protein: "32g",
      carb: "62g",
      fat: "16g",
      fiber: "4g",
      sodium: "1120mg",
    },

    tips: [
      "Don't oversoak noodles or they'll be mushy",
      "Cook on high heat for authentic wok flavor",
      "Balance sweet, sour, and salty flavors",
      "Prepare all ingredients before starting to cook",
    ],
  },
  {
    name: "BBQ Pulled Pork",
    description: "Slow-cooked tender pork in smoky barbecue sauce",
    image: "./assets/images/BBQ-Pulled-Pork.png",
    review: 412,
    rating: 4.7,
    level_tag: "Intermediate",
    region_tag: "American",
    prep_time: 15,
    cook_time: 240,
    serving: 4,
    ingredients: [
      "1kg pork shoulder",
      "1 cup BBQ sauce",
      "1/2 cup apple cider vinegar",
      "2 tablespoons brown sugar",
      "1 tablespoon paprika",
      "1 tablespoon garlic powder",
      "Burger buns",
      "Coleslaw for serving",
    ],
    instructions: [
      "Rub pork shoulder with paprika and garlic powder.",
      "Place in slow cooker with vinegar and half the BBQ sauce.",
      "Cook on low for 8 hours until fork-tender.",
      "Shred the pork and mix with remaining BBQ sauce.",
      "Serve on buns topped with coleslaw.",
    ],
    nutrition: {
      calories: "620 kcal",
      protein: "38g",
      carb: "48g",
      fat: "28g",
      fiber: "2g",
      sodium: "980mg",
    },
    tips: [
      "Low and slow gives the most tender meat",
      "Let the pork rest before shredding",
      "Toast the buns for extra texture",
      "Add pickles for a tangy contrast",
    ],
  },

  {
    name: "French Onion Soup",
    description: "Rich beef broth with caramelized onions and melted cheese",
    image: "./assets/images/French-Onion-Soup.png",
    review: 267,
    rating: 4.7,
    level_tag: "Intermediate",
    region_tag: "Mediterranean",
    prep_time: 15,
    cook_time: 60,
    serving: 4,
    ingredients: [
      "4 large onions, thinly sliced",
      "4 tablespoons butter",
      "1 liter beef broth",
      "1/2 cup white wine",
      "2 bay leaves",
      "Fresh thyme",
      "Baguette slices",
      "200g Gruyère cheese, grated",
    ],
    instructions: [
      "Melt butter in a large pot and add sliced onions.",
      "Cook onions slowly over low heat for 40 minutes until deeply caramelized.",
      "Add wine and scrape up any browned bits.",
      "Pour in beef broth with bay leaves and thyme, simmer 15 minutes.",
      "Ladle into oven-safe bowls, top with baguette and cheese.",
      "Broil until cheese is bubbly and golden.",
    ],
    nutrition: {
      calories: "410 kcal",
      protein: "18g",
      carb: "32g",
      fat: "22g",
      fiber: "3g",
      sodium: "1340mg",
    },
    tips: [
      "Don't rush the caramelization, it builds the flavor",
      "Use a good melting cheese like Gruyère",
      "Day-old baguette works best for topping",
      "A splash of sherry deepens the flavor",
    ],
  },

  {
    name: "Shrimp Scampi",
    description: "Garlicky shrimp in white wine butter sauce",
    image: "./assets/images/Shrimp-Scampi.png",
    review: 356,
    rating: 4.8,
    level_tag: "Easy",
    region_tag: "Seafood",
    prep_time: 10,
    cook_time: 15,
    serving: 2,
    ingredients: [
      "400g large shrimp, peeled",
      "300g linguine pasta",
      "6 cloves garlic, minced",
      "1/2 cup white wine",
      "4 tablespoons butter",
      "2 tablespoons olive oil",
      "Fresh parsley, chopped",
      "Lemon juice and zest",
      "Red pepper flakes",
    ],
    instructions: [
      "Cook linguine according to package instructions.",
      "Heat olive oil and butter, sauté garlic until fragrant.",
      "Add shrimp and cook until pink, about 3 minutes.",
      "Pour in white wine and lemon juice, simmer 2 minutes.",
      "Toss with drained pasta, parsley, and red pepper flakes.",
    ],
    nutrition: {
      calories: "480 kcal",
      protein: "30g",
      carb: "52g",
      fat: "16g",
      fiber: "2g",
      sodium: "620mg",
    },
    tips: [
      "Don't overcook the shrimp or they'll turn rubbery",
      "Reserve some pasta water to loosen the sauce",
      "Fresh lemon zest makes a big difference",
      "Use a dry white wine, not a sweet one",
    ],
  },

  {
    name: "Mediterranean Quinoa Bowl",
    description: "Healthy bowl with quinoa, vegetables, and tahini dressing",
    image: "./assets/images/Mediterranean-Quinoa-Bowl.png",
    review: 156,
    rating: 4.5,
    level_tag: "Easy",
    region_tag: "Mediterranean",
    prep_time: 20,
    cook_time: 35,
    serving: 2,
    ingredients: [
      "1 cup quinoa",
      "Cherry tomatoes, halved",
      "Cucumber, diced",
      "Red onion, sliced",
      "Kalamata olives",
      "Feta cheese, crumbled",
      "Fresh parsley",
      "Tahini dressing",
    ],
    instructions: [
      "Rinse quinoa and cook in water until fluffy, about 15 minutes.",
      "Let quinoa cool slightly, then fluff with a fork.",
      "Chop tomatoes, cucumber, and red onion.",
      "Combine quinoa with vegetables, olives, and feta.",
      "Drizzle with tahini dressing and top with parsley.",
    ],
    nutrition: {
      calories: "390 kcal",
      protein: "14g",
      carb: "46g",
      fat: "17g",
      fiber: "7g",
      sodium: "540mg",
    },
    tips: [
      "Rinse quinoa well to remove bitterness",
      "Let quinoa cool before mixing to keep veggies crisp",
      "Make extra dressing, it keeps well in the fridge",
      "Swap feta for a dairy-free option if needed",
    ],
  },

  {
    name: "Beef Tacos",
    description: "Seasoned ground beef tacos with fresh toppings",
    image: "./assets/images/Beef-Tacos.png",
    review: 289,
    rating: 4.6,
    level_tag: "Easy",
    region_tag: "Mexican",
    prep_time: 10,
    cook_time: 20,
    serving: 4,
    ingredients: [
      "500g ground beef",
      "1 packet taco seasoning",
      "8 small tortillas",
      "Shredded lettuce",
      "Diced tomatoes",
      "Shredded cheese",
      "Sour cream",
      "Salsa",
    ],
    instructions: [
      "Brown the ground beef in a skillet over medium heat.",
      "Add taco seasoning and water, simmer 5 minutes.",
      "Warm the tortillas in a dry pan or microwave.",
      "Fill tortillas with beef and desired toppings.",
      "Serve immediately with salsa and sour cream.",
    ],
    nutrition: {
      calories: "460 kcal",
      protein: "26g",
      carb: "34g",
      fat: "24g",
      fiber: "3g",
      sodium: "890mg",
    },
    tips: [
      "Drain excess fat from the beef before seasoning",
      "Warm tortillas make them easier to fold",
      "Set up a toppings bar for build-your-own tacos",
      "Add lime juice for extra brightness",
    ],
  },

  {
    name: "Chicken Tikka Masala",
    description: "Creamy spiced tomato curry with grilled chicken",
    image: "./assets/images/Chicken-Tikka-Masala.png",
    review: 521,
    rating: 4.9,
    level_tag: "Intermediate",
    region_tag: "Indian",
    prep_time: 30,
    cook_time: 50,
    serving: 4,
    ingredients: [
      "600g chicken breast, cubed",
      "1 cup yogurt",
      "2 tablespoons tikka masala spice blend",
      "1 can crushed tomatoes",
      "1 cup heavy cream",
      "1 onion, diced",
      "4 cloves garlic, minced",
      "Fresh ginger, grated",
      "Basmati rice for serving",
    ],
    instructions: [
      "Marinate chicken in yogurt and spices for at least 1 hour.",
      "Grill or pan-sear chicken until charred and cooked through.",
      "Sauté onion, garlic, and ginger until soft.",
      "Add crushed tomatoes and simmer 15 minutes.",
      "Stir in cream and cooked chicken, simmer 10 more minutes.",
      "Serve hot over basmati rice.",
    ],
    nutrition: {
      calories: "560 kcal",
      protein: "42g",
      carb: "30g",
      fat: "30g",
      fiber: "4g",
      sodium: "760mg",
    },
    tips: [
      "Marinate longer for deeper flavor, even overnight",
      "Char the chicken for authentic smoky taste",
      "Adjust cream for a lighter or richer sauce",
      "Fresh ginger makes a noticeable difference",
    ],
  },

  {
    name: "Margherita Pizza",
    description: "Classic pizza with tomato, mozzarella, and basil",
    image: "./assets/images/Margherita-Pizza.png",
    review: 398,
    rating: 4.7,
    level_tag: "Intermediate",
    region_tag: "Italian",
    prep_time: 90,
    cook_time: 12,
    serving: 4,
    ingredients: [
      "500g pizza dough",
      "1 cup crushed tomatoes",
      "250g fresh mozzarella",
      "Fresh basil leaves",
      "2 tablespoons olive oil",
      "Salt to taste",
      "1 clove garlic, minced",
    ],
    instructions: [
      "Let dough rest at room temperature until doubled in size.",
      "Preheat oven to its highest setting with a pizza stone if available.",
      "Stretch dough into a round base.",
      "Spread crushed tomatoes mixed with garlic and salt.",
      "Top with torn mozzarella and bake until crust is golden.",
      "Finish with fresh basil and a drizzle of olive oil.",
    ],
    nutrition: {
      calories: "510 kcal",
      protein: "22g",
      carb: "58g",
      fat: "20g",
      fiber: "3g",
      sodium: "870mg",
    },
    tips: [
      "A hot oven is key for a crisp crust",
      "Don't overload with toppings, less is more",
      "Fresh mozzarella releases less water than pre-shredded",
      "Add basil after baking to keep it vibrant",
    ],
  },

  {
    name: "Beef Bourguignon",
    description: "Classic French braised beef in red wine sauce",
    image: "./assets/images/Beef-Bourguignon.png",
    review: 178,
    rating: 4.8,
    level_tag: "Advanced",
    region_tag: "French",
    prep_time: 30,
    cook_time: 180,
    serving: 6,
    ingredients: [
      "1.5kg beef chuck, cubed",
      "200g bacon, diced",
      "1 bottle red wine",
      "3 carrots, sliced",
      "1 onion, diced",
      "300g mushrooms, quartered",
      "2 tablespoons tomato paste",
      "Fresh thyme and bay leaves",
    ],
    instructions: [
      "Brown bacon in a large pot, then set aside.",
      "Sear beef cubes in the bacon fat until browned on all sides.",
      "Add onion and carrots, cook until softened.",
      "Stir in tomato paste, then pour in red wine to deglaze.",
      "Add thyme, bay leaves, and bacon back in, cover and braise for 2.5 hours.",
      "Sauté mushrooms separately and stir in near the end.",
    ],
    nutrition: {
      calories: "640 kcal",
      protein: "44g",
      carb: "18g",
      fat: "36g",
      fiber: "3g",
      sodium: "710mg",
    },
    tips: [
      "Use a wine you'd actually drink for best flavor",
      "Low, slow braising is essential for tender beef",
      "Make it a day ahead, it tastes better reheated",
      "Serve with crusty bread or mashed potatoes",
    ],
  },

  {
    name: "Vegetable Stir Fry",
    description: "Quick and colorful vegetables in savory soy sauce",
    image: "./assets/images/Vegetable-Stir-Fry.png",
    review: 203,
    rating: 4.4,
    level_tag: "Easy",
    region_tag: "Asian",
    prep_time: 15,
    cook_time: 10,
    serving: 3,
    ingredients: [
      "2 cups broccoli florets",
      "1 red bell pepper, sliced",
      "1 carrot, julienned",
      "150g snap peas",
      "3 tablespoons soy sauce",
      "1 tablespoon sesame oil",
      "2 cloves garlic, minced",
      "1 tablespoon cornstarch",
      "Sesame seeds for garnish",
    ],
    instructions: [
      "Heat sesame oil in a wok over high heat.",
      "Add garlic and stir-fry until fragrant.",
      "Add vegetables in order of firmness, starting with carrots.",
      "Mix soy sauce with cornstarch and a splash of water, add to wok.",
      "Toss until sauce thickens and vegetables are tender-crisp.",
      "Garnish with sesame seeds before serving.",
    ],
    nutrition: {
      calories: "220 kcal",
      protein: "8g",
      carb: "26g",
      fat: "9g",
      fiber: "6g",
      sodium: "780mg",
    },
    tips: [
      "Keep the heat high for authentic wok flavor",
      "Cut vegetables uniformly for even cooking",
      "Don't overcrowd the wok, cook in batches if needed",
      "Add cornstarch slurry last for a glossy sauce",
    ],
  },
];

function getRandomRecipe() {
  var index = Math.floor(Math.random() * recipes.length);
  return recipes[index];
}

var foodCard = document.querySelector(".food-card");

function renderRecipe(recipe) {
  var ingredientsHTML = "";
  for (var i = 0; i < recipe.ingredients.length; i++) {
    ingredientsHTML += `
      <li><span class="step-number">${i + 1}</span> ${recipe.ingredients[i]}</li>
    `;
  }

  var instructionsHTML = "";
  for (var i = 0; i < recipe.instructions.length; i++) {
    instructionsHTML += `
      <li><span class="step-number">${i + 1}</span> ${recipe.instructions[i]}</li>
    `;
  }

  var tipsHTML = "";
  for (var i = 0; i < recipe.tips.length; i++) {
    tipsHTML += `
      <li><i class="fa-solid fa-circle-check"></i> ${recipe.tips[i]}</li>
    `;
  }

  var warningHTML = "";
  if (recipe.cook_time > 45) {
    warningHTML = `
      <div class="prep-warning d-flex align-items-center">
        <i class="fa-solid fa-triangle-exclamation"></i>
        <div class="warning-text">
          <h6>Extended Preparation Time</h6>
          <p>This recipe requires more than 45 minutes to prepare. Plan accordingly!</p>
        </div>
      </div>
    `;
  }

  foodCard.innerHTML = `
    <div class="row g-0">
      <div class="col-12 col-lg-5">
        <div class="card-left h-100 position-relative">
          <img
            src="${recipe.image}"
            alt="${recipe.name}"
            class="w-100 h-100 object-fit-cover"
          />
          <span class="image-span position-absolute rounded-pill d-flex gap-1 align-items-center">
            <i class="fa-solid fa-star"></i>
            <span class="rating">${recipe.rating}</span>
            <span class="number-reviews">(${recipe.review} reviews)</span>
          </span>

          <div class="bottom-span position-absolute d-flex justify-content-between">
            <div class="prep-time d-flex flex-column align-items-center gap-0">
              <i class="fa-solid fa-clock"></i>
              <p>Prep Time</p>
              <h5>${recipe.prep_time} min</h5>
            </div>
            <div class="cook-time d-flex flex-column align-items-center gap-0">
              <i class="fa-solid fa-fire-burner"></i>
              <p>cook Time</p>
              <h5>${recipe.cook_time} min</h5>
            </div>
            <div class="serving d-flex flex-column align-items-center gap-0">
              <i class="fa-solid fa-users"></i>
              <p>Serving</p>
              <h5>${recipe.serving} people</h5>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-lg-7">
        <div class="card-right">

          <div class="right-heading d-flex justify-content-between align-items-start">
            <div class="heading-text">
              <div class="tags-row">
                <span class="level rounded-pill">${recipe.level_tag}</span>
                <span class="region rounded-pill">${recipe.region_tag}</span>
              </div>
              <h4>${recipe.name}</h4>
              <p>${recipe.description}</p>
            </div>
            <div class="heading-icons">
              <i class="fa-solid fa-bookmark"></i>
              <i class="fa-solid fa-share-nodes"></i>
            </div>
          </div>

          ${warningHTML}

          <ul class="nav nav-tabs d-flex justify-content-between" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active" id="ingredients-tab" data-bs-toggle="tab" data-bs-target="#ingredients-tab-pane" type="button" role="tab" aria-controls="ingredients-tab-pane" aria-selected="true">
                <i class="fa-solid fa-list-check"></i> <span>Ingredients</span>
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="instructions-tab" data-bs-toggle="tab" data-bs-target="#instructions-tab-pane" type="button" role="tab" aria-controls="instructions-tab-pane" aria-selected="false">
                <i class="fa-solid fa-book-open"></i> <span>Instructions</span>
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="nutrition-tab" data-bs-toggle="tab" data-bs-target="#nutrition-tab-pane" type="button" role="tab" aria-controls="nutrition-tab-pane" aria-selected="false">
                <i class="fa-solid fa-chart-pie"></i> <span>Nutrition</span>
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="tips-tab" data-bs-toggle="tab" data-bs-target="#tips-tab-pane" type="button" role="tab" aria-controls="tips-tab-pane" aria-selected="false">
                <i class="fa-solid fa-lightbulb"></i> <span>Chef's Tips</span>
              </button>
            </li>
          </ul>

          <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="ingredients-tab-pane" role="tabpanel" aria-labelledby="ingredients-tab" tabindex="0">
              <ul>${ingredientsHTML}</ul>
            </div>

            <div class="tab-pane fade" id="instructions-tab-pane" role="tabpanel" aria-labelledby="instructions-tab" tabindex="0">
              <ul>${instructionsHTML}</ul>
            </div>

            <div class="tab-pane fade" id="nutrition-tab-pane" role="tabpanel" aria-labelledby="nutrition-tab" tabindex="0">
              <div class="row row-cols-1 row-cols-lg-2 g-3">
                <div class="col">
                  <div class="nutrition-item">
                    <i class="fa-solid fa-fire"></i>
                    <span>Calories</span>
                    <span>${recipe.nutrition.calories}</span>
                  </div>
                </div>
                <div class="col">
                  <div class="nutrition-item">
                    <i class="fa-solid fa-dumbbell"></i>
                    <span>Protein</span>
                    <span>${recipe.nutrition.protein}</span>
                  </div>
                </div>
                <div class="col">
                  <div class="nutrition-item">
                    <i class="fa-solid fa-wheat-awn"></i>
                    <span>Carbohydrates</span>
                    <span>${recipe.nutrition.carb}</span>
                  </div>
                </div>
                <div class="col">
                  <div class="nutrition-item">
                    <i class="fa-solid fa-droplet"></i>
                    <span>Fat</span>
                    <span>${recipe.nutrition.fat}</span>
                  </div>
                </div>
                <div class="col">
                  <div class="nutrition-item">
                    <i class="fa-solid fa-leaf"></i>
                    <span>Fiber</span>
                    <span>${recipe.nutrition.fiber}</span>
                  </div>
                </div>
                <div class="col">
                  <div class="nutrition-item">
                    <i class="fa-solid fa-cube"></i>
                    <span>Sodium</span>
                    <span>${recipe.nutrition.sodium}</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="tab-pane fade" id="tips-tab-pane" role="tabpanel" aria-labelledby="tips-tab" tabindex="0">
              <ul class="d-flex flex-column">${tipsHTML}</ul>
            </div>
          </div>

          <div class="random-button">
            <button class="recipe-button d-flex align-items-center" onclick="showRandomRecipe()">
              <i class="fa-solid fa-rotate"></i>Try Another Recipe
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

renderRecipe(getRandomRecipe());

function showRandomRecipe() {
  var randomRecipe = getRandomRecipe();
  renderRecipe(randomRecipe);
}
