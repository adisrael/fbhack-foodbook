const recpiesData = [
    {
        id: 0,
        name: "Shawarma",
        image: "https://www.themediterraneandish.com/wp-content/uploads/2016/01/Chicken-Shawarma-Recipe-The-Mediterranean-Dish-2.jpg",
        description: "Traditional Turkish dish commonly found in the Middle East consisting of thin slices of lamb, chicken or beef",
        ingredients: ['Steak','Pita','Tomato','Cucumber','Hummus'],
        quantities: ['8 Boneless chicken thighs (skinless)','1/2 cup malt vinegar','1/4 cup plain yogurt','1 tbsp vegetable oil','to taste salt and pepper','1/4 tsp freshly ground cardamom','1 tsp All spice powder','1/2 cup tahini','1/4 cup plain yogurt','1/2 tsp garlic (minced)','2 tbsp lemon juice','1 tbsp olive oil','1 tbsp fresh parsley, chopped','to taste salt and pepper','4 medium tomatoes, sliced','1/2 cup onion, sliced','4 cups lettuce, shredded','8 Pita bread rounds'],
        preparation: ['1. Slice the chicken breasts into 5-6 pieces each and the thighs into 3-4 pieces each. Place them in a marinating dish or large plastic zipper bag','2. In a small bowl, whisk together 1/4 cup olive oil, the spices, 3/4 tsp salt and 1/4 tsp black pepper (if you are salt sensitive, use 1/2 tsp of salt). Pour the spice marinade over the chicken pieces. Stir with a spoon till all the chicken pieces are evenly coated in the marinade.', '3. Cover the marinating dish with plastic wrap, or close the zipper bag. Place chicken in the refrigerator and let it marinate at least 1 hour, up to overnight.'],
        time: '1hr'
    },
    {
        id: 1,
        name: "Lomo Salteado",
        image: "https://www.comedera.com/wp-content/uploads/2013/05/lomo-saltado-jugoso.jpg",
        description: "Plato típico de la gastronomía del Perú consistente en carne de res, arroz cocido y papas fritas. Es uno de los platos más consumidos popularmente en el Perú",
        ingredients: ['Steak','Onion','Tomato','Rice','Potato'],
        quantities: ['8 Boneless chicken thighs (skinless)','1/2 cup malt vinegar','1/4 cup plain yogurt','1 tbsp vegetable oil','to taste salt and pepper','1/4 tsp freshly ground cardamom','1 tsp All spice powder','1/2 cup tahini','1/4 cup plain yogurt','1/2 tsp garlic (minced)','2 tbsp lemon juice','1 tbsp olive oil','1 tbsp fresh parsley, chopped','to taste salt and pepper','4 medium tomatoes, sliced','1/2 cup onion, sliced','4 cups lettuce, shredded','8 Pita bread rounds'],
        preparation: ['1. Slice the chicken breasts into 5-6 pieces each and the thighs into 3-4 pieces each. Place them in a marinating dish or large plastic zipper bag','2. In a small bowl, whisk together 1/4 cup olive oil, the spices, 3/4 tsp salt and 1/4 tsp black pepper (if you are salt sensitive, use 1/2 tsp of salt). Pour the spice marinade over the chicken pieces. Stir with a spoon till all the chicken pieces are evenly coated in the marinade.', '3. Cover the marinating dish with plastic wrap, or close the zipper bag. Place chicken in the refrigerator and let it marinate at least 1 hour, up to overnight.'],
        time: '2hr'
    },
    {
        id: 2,
        name: "Curry Chicken",
        image: "https://recipesfromapantry.com/wp-content/uploads/2018/05/instant-pot-chicken-curry-11.jpg",
        description: "A Jamaican-style curry chicken, rich and hearty with great flavor, satisfies the craving when you can't get the real thing in the islands",
        ingredients: ['Steak','Onion','Tomato','Rice','Potato'],
        quantities: ['8 Boneless chicken thighs (skinless)','1/2 cup malt vinegar','1/4 cup plain yogurt','1 tbsp vegetable oil','to taste salt and pepper','1/4 tsp freshly ground cardamom','1 tsp All spice powder','1/2 cup tahini','1/4 cup plain yogurt','1/2 tsp garlic (minced)','2 tbsp lemon juice','1 tbsp olive oil','1 tbsp fresh parsley, chopped','to taste salt and pepper','4 medium tomatoes, sliced','1/2 cup onion, sliced','4 cups lettuce, shredded','8 Pita bread rounds'],
        preparation: ['1. Slice the chicken breasts into 5-6 pieces each and the thighs into 3-4 pieces each. Place them in a marinating dish or large plastic zipper bag','2. In a small bowl, whisk together 1/4 cup olive oil, the spices, 3/4 tsp salt and 1/4 tsp black pepper (if you are salt sensitive, use 1/2 tsp of salt). Pour the spice marinade over the chicken pieces. Stir with a spoon till all the chicken pieces are evenly coated in the marinade.', '3. Cover the marinating dish with plastic wrap, or close the zipper bag. Place chicken in the refrigerator and let it marinate at least 1 hour, up to overnight.'],
        time: '1.5hr'
    },
    {   id: 3,
        name: 'Empanada de Pino',
        image: 'https://gcdn.emol.cl/cocina/files/2017/09/pino-empanadas-1.jpg',
        description: 'Dough or puff pastry stuffed with a salty or sweet preparation and baked or fried.',
        ingredients: ['Steak','Flour','Egg','Onion'],
        quantities: ['8 Boneless chicken thighs (skinless)','1/2 cup malt vinegar','1/4 cup plain yogurt','1 tbsp vegetable oil','to taste salt and pepper','1/4 tsp freshly ground cardamom','1 tsp All spice powder','1/2 cup tahini','1/4 cup plain yogurt','1/2 tsp garlic (minced)','2 tbsp lemon juice','1 tbsp olive oil','1 tbsp fresh parsley, chopped','to taste salt and pepper','4 medium tomatoes, sliced','1/2 cup onion, sliced','4 cups lettuce, shredded','8 Pita bread rounds'],
        preparation: ['1. Slice the chicken breasts into 5-6 pieces each and the thighs into 3-4 pieces each. Place them in a marinating dish or large plastic zipper bag','2. In a small bowl, whisk together 1/4 cup olive oil, the spices, 3/4 tsp salt and 1/4 tsp black pepper (if you are salt sensitive, use 1/2 tsp of salt). Pour the spice marinade over the chicken pieces. Stir with a spoon till all the chicken pieces are evenly coated in the marinade.', '3. Cover the marinating dish with plastic wrap, or close the zipper bag. Place chicken in the refrigerator and let it marinate at least 1 hour, up to overnight.'],
        time: '2hr',
    },
    {id: 4,
        name: 'Pastel de Choclo',
        image: 'http://recipesandfoods.com/wp-content/uploads/2012/08/bolivian-food-cheese-humitas-128x128.jpg',
        description: 'Baked cornmeal pasta and can be sweet or salty and stuffed with meat.',
        ingredients: ['Corn','Steak','Milk','Onion'],
        quantities: ['8 Boneless chicken thighs (skinless)','1/2 cup malt vinegar','1/4 cup plain yogurt','1 tbsp vegetable oil','to taste salt and pepper','1/4 tsp freshly ground cardamom','1 tsp All spice powder','1/2 cup tahini','1/4 cup plain yogurt','1/2 tsp garlic (minced)','2 tbsp lemon juice','1 tbsp olive oil','1 tbsp fresh parsley, chopped','to taste salt and pepper','4 medium tomatoes, sliced','1/2 cup onion, sliced','4 cups lettuce, shredded','8 Pita bread rounds'],
        preparation: ['1. Slice the chicken breasts into 5-6 pieces each and the thighs into 3-4 pieces each. Place them in a marinating dish or large plastic zipper bag','2. In a small bowl, whisk together 1/4 cup olive oil, the spices, 3/4 tsp salt and 1/4 tsp black pepper (if you are salt sensitive, use 1/2 tsp of salt). Pour the spice marinade over the chicken pieces. Stir with a spoon till all the chicken pieces are evenly coated in the marinade.', '3. Cover the marinating dish with plastic wrap, or close the zipper bag. Place chicken in the refrigerator and let it marinate at least 1 hour, up to overnight.'],
        time: '45min'
    },
    {   id: 5,
        name: 'Humitas',
        image: 'https://www.gourmet.cl/wp-content/uploads/2012/01/Humitas-e1325692985982.jpg',
        description: 'It consists basically of a paste or dough of corn lightly seasoned, wrapped and finally cooked or toasted in the own leaves of a corn cob.',
        ingredients: ['Corn','Milk'],
        quantities: ['8 Boneless chicken thighs (skinless)','1/2 cup malt vinegar','1/4 cup plain yogurt','1 tbsp vegetable oil','to taste salt and pepper','1/4 tsp freshly ground cardamom','1 tsp All spice powder','1/2 cup tahini','1/4 cup plain yogurt','1/2 tsp garlic (minced)','2 tbsp lemon juice','1 tbsp olive oil','1 tbsp fresh parsley, chopped','to taste salt and pepper','4 medium tomatoes, sliced','1/2 cup onion, sliced','4 cups lettuce, shredded','8 Pita bread rounds'],
        preparation: ['1. Slice the chicken breasts into 5-6 pieces each and the thighs into 3-4 pieces each. Place them in a marinating dish or large plastic zipper bag','2. In a small bowl, whisk together 1/4 cup olive oil, the spices, 3/4 tsp salt and 1/4 tsp black pepper (if you are salt sensitive, use 1/2 tsp of salt). Pour the spice marinade over the chicken pieces. Stir with a spoon till all the chicken pieces are evenly coated in the marinade.', '3. Cover the marinating dish with plastic wrap, or close the zipper bag. Place chicken in the refrigerator and let it marinate at least 1 hour, up to overnight.'],
        time: '1h15min'
    },
    {   id: 6,
        name: 'Cazuela',
        image: 'https://images-gmi-pmc.edge-generalmills.com/5722b9dc-deaa-497b-8581-a79af9cf1002.jpg',
        description: 'Traditional soup made with a dam of beef, chicken or other protein, plus varied vegetables: squash, corn, potatoes. Sometimes rice, chuchoca or other vegetables are added.',
        ingredients: ['Chicken','Corn','Potato'],
        time: '50min'
    },
    {   id: 7,
          name: 'Porotos con Riendas',
          image: 'http://www.gustocriollo.cl/wp-content/uploads/2012/09/porotos.jpeg',
          description: 'Porotos con riendas is a traditional dish of Chilean cuisine, whose name shows a peasant metaphor of pig leather strips, associated with reins. It is usually replaced the pork skin with noodles.',
          ingredients: ['Beans','Sausage','Pasta'],
          time: '1h'
    },
    {   id: 8,
        name: 'Salted pork ramen',
        image: 'https://www.flavorfuljourneys.com/wp-content/uploads/2013/10/Santouka-Salt-Miso-Ramen.jpg',
        ingredients: ['Rice','Fish'],
        description: 'A simple bowl of unctuous roasted pork belly ramen with noodles in a deeply flavorful broth is the perfect warming, comfort food',
    },
    {   id: 9,
        name: 'Tuna makizushi ',
        image: 'https://i.pinimg.com/originals/d9/b0/a0/d9b0a0996050d637d926d108526c7ea1.jpg',
        ingredients: ['Rice','Fish'],
        description: 'A classic Japanese spicy tuna maki sushi recipe'
    },
    {   id: 10,
        name: 'Yakizakana (Grilled fish)',
        image: 'https://i.pinimg.com/originals/af/36/a0/af36a004a2929eeea7a198dee3a59148.jpg',
        ingredients: ['Rice','Fish'],
        description: 'Yakizakana is a catch-all term for Japanese style grilled fish thats often served whole'
    },
    {   id: 11,
        name: 'Chahan (Fried Rice)',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Asa_chahan_by_ayustety_in_Naha%2C_Okinawa.jpg/280px-Asa_chahan_by_ayustety_in_Naha%2C_Okinawa.jpg',
        ingredients: ['Rice','Fish'],
        description: ' Japanese fried rice dish prepared with rice as a primary ingredient and a myriad of additional ingredients and seasonings'
    },
    {   id: 12,
        name: 'Onigiri (Rice Balls)',
        image: 'https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg',
        ingredients: ['Rice','Fish'],
        description: ' Japanese food made from white rice formed into triangular or cylindrical shapes and often wrapped in nori '
    }
]

export default recpiesData
