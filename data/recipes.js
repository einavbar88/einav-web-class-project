const recipes = [{
    title: 'Lemon Pasta',
    subTitle: 'Ready to serve in 20 minutes, this fresh and vibrant lemon pasta is simple to make with just a few basic ingredients and a burst of flavor!',
    servings: 6,
    calories: 300,
    recipeScore: 4.7,
    difficulty: 'Easy',
    credits: '',
    mainImage: '/images/main-image.jpg',
    images: [],
    recipeTime: {
      prep: {
          amount: 10,
          name: 'Prep'
      },
      cook: {
        amount: 10,
        name: 'Cook'
    }
    },
    ingredients: [
        { ingredient:'12 ounces spaghetti'}, 
        { ingredient:'3 tablespoons olive oil'}, 
        { ingredient:'2 garlic cloves', comment: 'minced'}, 
        { ingredient:'2 tablespoons fresh parsley', comment: 'plus more for serving'},
        { ingredient:'Juice and zest of one lemon'},
        { ingredient:'¼ cup grated parmesan cheese', comment: 'optional'},
        { ingredient:'Freshly cracked black pepper', comment: 'for serving'}
    ],
    instructions: [
        'Cook the spaghetti in a pot of salted water according to package instructions until al dente. Drain, reserving ½ cup of the cooking pasta liquid.',
        'In a large skillet over medium heat, heat the olive oil. Add the garlic, parsley, lemon zest and lemon juice. Add the cooking pasta liquid and parmesan cheese and stir to combine. Bring the sauce to a simmer.',
        'Transfer the cooked spaghetti to the skillet with the pasta sauce and toss until well coated. Serve with extra parsley and parmesan cheese, if desired.'
    ]
  }]

  export default recipes