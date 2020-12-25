// recipes object
const recipes = {
  salads: [
    {
      image: './images/choban-salad.jpg',
      name: 'Shepherd’s Salad (Çoban Salatı)',
      description:
        'Shepherd’s Salad, or Çoban Salatı, is made with a crunchy and colorful concoction of finely chopped  fresh vegetables, jazzed up with aromatic herbs – the classic one being parsley, with dill and mint as additional options.',
      time: 15,
      min: 'min.',
      serving: 4,
      difficulty: 'Easy',
      ingredients: [
        '4 medium ripe, juicy tomatoes, finely chopped',

        '4 medium cucumbers, finely chopped (peel completely if the skin is coarse, otherwise, do a zebra-stripe peel, or leave the peel on)',

        '1 medium green bell pepper, cored, seeded and finely chopped',

        '1 small red onion, finely chopped',

        'Handful of chopped fresh parsley',

        'Few pinches of chopped fresh dill (optional)',

        'Salt to taste',

        '3-5 tablespoons extra-virgin olive oil',

        'Freshly squeezed juice of ½ lemon',

        'Pinch of sumac (optional)',
      ],
      directions: [
        'Put the vegetables and herbs in a large mixing bowl.',

        'Season with salt to taste.',

        'Add the olive oil and lemon juice, and, if using, sumac. Adjust these ingredients to your taste.',

        'Toss to combine.',

        'Serve immediately.',
      ],
    },
    {
      image: './images/beet-salad.jpg',
      name: 'Garlicky Beet Salad with Yogurt and Walnuts',
      description:
        'Health on a plate, literally. Beets, garlic, plain yogurt, walnuts. Beets? Vitamin C, fiber, anticancer properties, boost stamina, fight inflammation, and so on. Garlic? Packed with vitamins, wards off viruses, improves cholesterol levels, among other good things. Walnuts? Powerful antioxidants, good for you. And yogurt, good old plain yogurt is an excellent source of protein and is loaded with calcium and vitamin D.',
      time: 3,
      min: 'hours',
      serving: 4,
      difficulty: 'Moderate',
      ingredients: [
        '3 medium-size beets (preferably organic, better taste and color, plus healthier)',

        'About 2 cups or as needed, plain yogurt (make it at home, it’s easy!)',

        '2 cloves garlic, passed through a garlic press',

        'Small handful of walnut halves, chopped (depending on how you like your walnuts in a salad, you can chop them either finely or coarsely but never too finely; there should be some crunch in the salad)',

        'Salt',

        'Ground black pepper',
      ],
      directions: [
        'Remove the greens from the beets, if any (do not discard of them—save for other uses, such as add to soups or stir-fry with onions). Cut off the stalk ends taking care not to cut through the beet flesh, otherwise the juices will seep during the cooking. Wash the beets.',

        'Place the beets in a medium saucepan, large enough to fit all the beets. Fill the pan with water, to cover the beets. Bring to a boil, then reduce to medium and cook, until the beets are tender, about 40 minutes. Check for doneness by piercing the tip of a knife or a fork into the beet flesh. If it penetrates easily, the beets are ready. Drain and allow to cool.',

        'When cool enough to handle, peel the beets and grade on the coarse side of a box grater. Place in a medium bowl. Add the plain yogurt (plus sour cream/mayo if making a variation), garlic, and walnuts. Season with salt and pepper to taste. Stir with a spoon to combine. Before serving, chill in the refrigerator at least 2 hours, to allow the flavors to blend.',
      ],
    },
    {
      image: './images/pomegranate-salad.jpg',
      name: 'Pomegranate salad',
      description:
        'Rich red pomegranates are a much-loved part of Azerbaijani cuisine in the autumn and winter. Pomegranate kernels are often added to salads to give extra taste and tang, while they are one of the main ingredients in this salad.',
      time: 45,
      min: 'min.',
      serving: 4,
      difficulty: 'Easy',
      ingredients: [
        '6 medium-sized potatoes, boiled and peeled',

        'Kernels from 2 pomegranates (preferably not too sweet)',

        '2 red onions',

        '1 bunch of fresh coriander',

        '4-5 tablespoons of mayonnaise',

        'Salt and pepper',
      ],
      directions: [
        'Dice the boiled potatoes when cool. Place in a salad bowl. Scatter the pomegranate kernels over the potatoes.',

        'Peel the red onions and cut into fine rings. Place the rings over the pomegranate.',
        'Finely chop the coriander and scatter on top of the onion rings. Add salt, pepper and mayonnaise and mix the salad thoroughly.',

        'You can also use yoghurt instead of mayonnaise.',

        'Serve with the same with fresh crusty bread.',
      ],
    },
    {
      image: './images/mangal-salad.jpg',
      name: 'Mangal salad (fire roasted vegetable salad)',
      description:
        'It’s the best side to barbecued meat or a fantastic barbecue alternative to vegetarians and vegans. What can be better than fresh, aromatic and unusual salad with a yummy sauce which you can dip with crusty bread?It is extremely easy to cook and ingredients are cheap and well known',
      time: 30,
      min: 'min.',
      serving: 2,
      difficulty: 'Easy',
      ingredients: [
        '2 average sized tomatoes',

        '1 sweet pepper',

        '1 aubergine',

        'Herbs- parsley, dill, coriander, basil etc',

        'Salt',

        'Pepper',

        'Good oil- sunflower or olive',

        'Garlic',
      ],
      directions: [
        'Roast aubergine, tomatoes and sweet peppers on fire. Cool them down, peel off the skin and chop them roughly',

        'Add finely chopped herbs, onion and grated garlic to the mixture',

        'Add salt, pepper and favorite spices, in my case I just stop at salt and pepper to ensure we taste the actual veggies. Add good oil and mix.',

        'Serve with barbecued meat or just on its own with fresh bread.',
      ],
    },
    {
      image: './images/khazar-salad.jpg',
      name: '"Khazar" salad',
      description:
        'In Azerbaijani cuisine, every dish is a masterpiece. One of these masterpieces is a salad dish named “Khazar,” which is Azerbaijani for “Caspian.” This no ordinary salad, it is the pride of Azerbaijan and one of the most expensive salads in the world. It can be served as both an appetizer and a main course. The Caspian Sea is well known for its famous sturgeon fish and caviar, that is why the salad decorated with sturgeon, salmon, and black and red caviar and named “Khazar,” after the Caspian Sea.',
      time: 1,
      min: 'hour',
      serving: 4,
      difficulty: 'Difficult',
      ingredients: [
        '3 potatoes',

        '3 fresh cucumbers',

        'a few sprigs of tarragon',

        '2 tablespoons sour cream',

        '1 tablespoon mayonnaise',

        'salt and pepper to taste',

        '5-6 portioned pieces of fresh sturgeon file (for decoration)',

        '5-6 slices of smoked salmon and/or sturgeon (for decoration)',

        'a few sprigs of tarragon (for decoration)',

        'red and/or black caviar (for decoration)',

        'green lettuce (for decoration)',

        '1 lemon (for decoration)',

        '1 cucumber (for decoration)',
      ],
      directions: [
        'Cut the fillet of fresh sturgeon into pieces, place them into a saucepan, cover with cold water, and bring it to a boil over medium heat. Remove any scum from the surface, add salt and pepper, and cook over low heat, until tender, for about 20 minutes. Allow it to cool before decorating the salad.',

        'Wash the potatoes, place them in a pot, and cover them with cold water. Cover the pot and bring the water to a boil. Then, turn down the heat and boil the potatoes for 30 minutes or until you can stick a toothpick in the potato and it goes in easily. Once they’re done, remove a potato from the pot, let it to cool down, and then peel off its skin.',

        'Cut the potatoes and cucumbers into medium size cubes.',

        'Mix the potatoes, cucumbers, tarragon leaves, sour cream, and mayonnaise in a bowl. Season with salt and pepper to taste..',

        'Place the leaves of green lettuce on a serving plate. Then place the potato-cucumber mixture, and decorate with pieces of sturgeon. Place thin, rolled slices of smoked salmon around the salad and fill each roll with caviar.',

        'Garnish with sliced lemon, ​​cucumber, and sprigs of tarragon.',
      ],
    },
  ],
  soups: [
    {
      image: './images/kyufta-bozbash.jpg',
      name: 'Kyufta-Bozbash (Azerbaijani Meatball Soup)',
      description:
        'This is one of the staples of Azerbaijani cuisine. Jumbo apple-size meatballs cooked in a simple broth with chickpeas and potatoes. The word bozbash literally translates as "a piece of gray" or "gray head" referring to the color the meat becomes after heavy boiling) while the word kyufta signifies minced meat in the form of an oval (in essence a large meatball).',
      time: 2,
      min: 'hours',
      serving: 4,
      difficulty: 'Moderate',
      ingredients: [
        '½ cup dried chickpeas, soaked overnight in cold water or 1 cup canned, drained and rinsed. Crushed dried mint, for garnish',

        '1 pound (1/2 kg) ground beef or lamb, or a combination (I use 85% lean/15% fat organic ground beef)',

        '1 medium onion, passed though a meat grinder or grated',

        '1 large egg',

        '1/3 cup medium-grain white rice, rinsed',

        '1 tablespoonful crushed dried mint (optional but recommended; read about the herbs in the intro to the recipe)',

        '1 teaspoonful crushed dried summer savory (optional but recommended)',

        '1 teaspoonful crushed dried basil (green basil; optional but recommended)',

        '1 teaspoon salt',

        '¼ teaspoon ground black pepper',

        '4 dried small sour plums',

        '2 tablespoons clarified butter or regular unsalted butter',

        '1 tablespoon tomato paste',

        '4 medium potatoes, peeled and left whole',

        '¼ teaspoon turmeric',

        'Salt (for Broth)',

        'Ground black pepper (for Broth)',
      ],
      directions: [
        'If using dried presoaked chickpeas, boil them in a small saucepan filled with water to cover until tender but not soft (it will cook more later), about 1 hour. Drain and set aside.',

        'To prepare the meatballs, in a large mixing bowl combine all the ingredients for the meatballs except the dried sour plums. Using your hands, mix thoroughly until the ingredients are well blended. Shape the mixture into 4 big balls, each the size of an apple (You can also make smaller meatballs to feed more people. Make 8 smaller meatballs in place of the 4 big.) If the mixture is sticky, wet your hands in a bowl before shaping the meat. Make a hole in each meatball to reach its center and place one dried sour plum inside. Shape back into balls, packing them hard so that they don’t split apart while cooking. Set them aside to rest.',

        'Meanwhile, prepare the broth. In a medium saucepan (it should be big enough to fit all the meatballs without touching each other), heat the butter over medium heat. Add the tomato paste and cook, stirring, for half a minute. Add 7 cups of water and bring to a boil.',

        'Reduce the heat to medium. Gently drop the meatballs, one by one, into the broth. Cook, uncovered, without stirring (to prevent the meatballs from breaking), until the meatballs are set, about 10 minutes. If froth rises to the top, remove it with a slotted spoon.',

        'Add the potatoes, turmeric, and cooked (not canned) chickpeas. Season with salt and pepper to taste. Bring to a boil, reduce the heat to medium-low, cover, and simmer until the potatoes and the meatballs are cooked through, about 40 minutes. If using canned chickpeas, add to the cooked soup at this point.',

        'Ladle the soup into individual bowls, making sure each serving receives a meatball, a potato and some broth with chickpeas. Garnish with crushed dried mint. Serve immediately with bread.',
      ],
    },
    {
      image: './images/dovgha.jpg',
      name: 'Dovgha (Yogurt Soup with Fresh Herbs and Chickpeas)',
      description:
        'Dovgha is a popular Azerbaijani yogurt soup cooked with lots of fresh herbs! A creamy soup, it is generously nutritious, pleasantly refreshing and flavorsome from the bounty of fresh herbs simmered in yogurt, with a good doze of tender bite provided by the chickpeas, which by the way, can be omitted if you are not a big fan of them. In Azerbaijani countryside, dovgha is particularly delicious; in place of generally known fresh herbs listed in the recipe below, copious varieties of intensely aromatic edible herbs populating the lush fields and mountains, far from the reach of city dwellers, find their way into the soup, making it extra delectable.',
      time: 1,
      min: 'hour',
      serving: 6,
      difficulty: 'Easy',
      ingredients: [
        '½ cup dried chickpeas, soaked in water overnight or 1 cup canned, drained',

        '2 cups chopped fresh cilantro (coriander)',

        '2 cups chopped fresh dill',

        '½ cup chopped fresh spinach',

        '½ cup chopped fresh green garlic (if in season; leaves only)',

        '½ cup chopped fresh mint',

        '½ cup chopped fresh parsley or celery leave',

        '3 cups plain yogurt',

        '4 cups water (or more if your yogurt is too thick and if you want a thinner soup)',

        '1 tablespoon all-purpose flour',

        '1 egg',

        '1/3 cup medium-grain rice, rinsed',

        'Salt, to taste',

        'Ground black pepper, to taste (optional)',
      ],
      directions: [
        'If you are using dried presoaked chickpeas, put them in a small saucepan filled with water and boil until the chickpeas are tender, about 1 hour. Drain and set aside.',

        'Place the chopped herbs in a colander and wash, tossing with your hands, under running water to remove the green juices. Do not squeeze the herbs. Allow the herbs drain on a colander.',

        'Meanwhile, in a medium saucepan, whisk together the yogurt, water, flour and egg until smooth.',

        'Add the rice and stir to mix. Constantly stirring (very important, do not give up!) clockwise with a wooden spoon to prevent the mixture from curdling, bring it to a boil over medium heat. The soup should boil in 7-10 minutes.',

        'As soon as it boils, stir in the fresh herbs. Stirring occasionally, simmer for another 7-8 minutes, or until the rice is cooked.',

        'Add the cooked or canned chickpeas and remove the saucepan from the heat.  Allow to cool to room temperature, then salt to taste and serve the soup ladled into individual serving bowls.',

        'If you wish, sprinkle decoratively with black pepper. You can also chill the soup in the refrigerator before serving. Note that dovgha thickens as it stands. Loosen with cold water.',
      ],
    },
    {
      image: './images/dushbara.jpg',
      name: 'Dushbara (Dumpling Soup)',
      description:
        'It is a classic soup, indigenous to Baku, the capital, but popular all over the country. Traditionally the broth is prepared by boiling chunks of lamb in water and then straining it. But nowadays home cooks prefer a quicker versions of the broth – all water based. Whatever version you may want to choose, one thing is for sure – you will love this soup at first spoon. Pour some vinegar-garlic sauce in your soup and you will say yes, please, another serving!',
      time: 1,
      min: 'hour',
      serving: 5,
      difficulty: 'Difficult',
      ingredients: [
        '2 cups all-purpose, plus extra for kneading and thinning the dough',

        '½ teaspoon salt (for dough)',

        '1 egg',

        '2/3 cup tepid water (for dough)',

        '7 oz (200g) ground lamb or beef, or a combination, not lean',

        '1 small onion, peeled and grated (1/2 cup) (for filling)',

        '½ teaspoon salt (for filling)',

        '¼ teaspoon ground black pepper (for filling)',

        '9 cups water (for broth)',

        '1/8 teaspoon of turmeric powder (for broth)',

        'salt, to taste (for broth)',

        'chopped fresh cilantro (coriander), to garnish (substitute with dried mint in winter) (for garnishing)',

        'garlicky-vinegar sauce (crush 3-4 peeled garlics and mix with about 1 cup red wine vinegar or apple cider) (for serving)',
      ],
      directions: [
        'In a mixing bowl, combine the flour and salt, and stir with your hand to mix. Make a well in the middle, and break the egg into there. Gradually adding the water, stir with your fingers, until a rough ball forms. Dust a clean surface (wooden table or marble countertop) lightly with flour.',

        'Scrape the dough onto that surface. Press any loose dough pieces into the ball and knead the dough, punching it down with your fists, folding it over and turning. If the dough sticks to your hands, add a little more flour. Knead for about 5 minutes, or until the dough is smooth and elastic. Do not be tempted to add more flour. You do not want the dough to be very tight. You will add more flour to it while rolling it. Shape the dough into a ball, put it aside, cover with a clean kitchen towel and allow to rest for 10 minutes before rolling.',

        'Meanwhile, prepare the filling. In a mixing bowl combine the ground meat, onion, salt and pepper. With your hand, knead thoroughly until well blended. Set aside.',

        'Dust the surface with some flour. Transfer the dough onto that surface. Pat the dough ball slightly and sprinkle some flour on top. Now, using a rolling pin begin rolling, sprinkling the dough with flour and spreading it with your hands with every other rolling. Flip the dough over from time to time and sprinkling the surface with flour to prevent sticking. Once the dough has somewhat flattened, wrap the near edge of the dough around the rolling pin, and begin rolling the dough away from you, pressing down with the rolling pin to ensure thinning.',

        'Once you reach the other end, unroll the dough. As you roll back and forth, gently slide your hands away from the center towards the edges of the rolling pin, thinning out the dough. With each roll, rotate the dough one-quarter turn to keep it in an even circle. Sprinkle the dough with a little flour and spread with your hands, before each rolling. This will prevent the dough from sticking to the rolling pin and make it roll easier. Continue rolling until you obtain a 1/16 inch (1.6 mm) thick circle,  about 22 inches (55 cm) in diameter.',

        'Using a sharp knife, cut the dough into small 3/4-inch (1.9 cm) squares, by first cutting it into parallel strips, then cutting the strips across. Work as fast as you can from this point onto prevent the dough from drying out. Using your fingers, place a pinch of filling into the middle of each square.',

        'Now, seal the edges using either of the following methods: 1) Bring two opposite corners of a square together and seal the edges to make a triangle. Bring the two ends of the longest side of the triangle together and press them together to seal. 2) Fold the square into a rectangle and seal the edges. Bring the two ends of the longer sealed side of the rectangle together and seal. Arrange the dumplings on the floured tray, apart from each other to prevent them from sticking together. Leave aside while you prepare the broth',

        'Bring the water to a boil in a medium saucepan. Add the turmeric and salt to taste. Maintain a gentle simmer before adding the dumplings.',

        'Gently drop the dumplings into the simmering broth in small batches. Gently stir once to separate them and cook, uncovered, for about 7-10 minutes or until the dumplings surface to the top. Take one out and taste. The dough must be tender. Cook longer if needed, taking care not to overcook or the dumplings will be sticky mushy. Adjust seasoning to taste. Remove from the heat.',

        'Ladle the dumplings and the broth into individual serving bowls and garnish with fresh cilantro or dried mint. Serve immediately, with garlicky vinegar sauce on the side, to be added to dushbara to taste.',
      ],
    },
    {
      image: './images/piti.jpg',
      name: 'Piti (Hot Meat Soup)',
      description:
        'Piti soup is the unchallenged favorite at the table. The etymology of the name is derived from the Turkic word bitdi, which means the end of need to eat more food. This delicious full flavored soup is the distinguished dish of Shaki - beautiful mountain city located 370 km away from Baku. It is traditionally a worker`s dish, local people say. They believe that one portion of piti is enough for a worker to live through the whole day. Piti contains a lot of calories and very filling ingredients. The secret to real piti flavor lies in the pots in which it’s cooked. The dish is cooked in ceramic clay pots called “dopu”. Dopu come in different shapes, but the most widespread is the small pot which holds a single serving. It takes the hands of a master craftsman to shape a dopu. Peas and lamb have been considered the main ingredients of piti since ancient times. This delicious soup is traditionally made of chickpeas soaked in water overnight, lamb, onion, saffron, chestnut, dried plum and sheep tail fat.',
      time: 4,
      min: 'hours',
      serving: 4,
      difficulty: 'Difficult',
      ingredients: [
        'Lamb, preferably on bone and with fat, 1 piece per portion',

        'Potatoes, large, 1 per portion',

        'Chickpeas app. 25 gr. per portion',

        '1 medium size onion',

        'Cherry plums (optional)',

        'Some turmeric',

        'Salt and pepper',
      ],
      directions: [
        'Soak chickpeas in water over night and half-cook it in the morning.',

        'Wash the lamb, put in a pot and poor water over till it covers the meat. Add one whole onion. Cook on medium heat. Skim the foam when it appears. It is important as the soup must be clear. Season.',

        'Lamb takes long to cook, so it may take about an hour (depending on how young the animal was.). Check that lamb is cooked using a fork or a knife. When meat is cooked, remove the onion. It is used to absorb the smell of the lamb',

        'Peel and add potatoes. Add turmeric on the edge of a knife, semi-cooked chickpeas and cherry plums (optional). Leave everything to simmer until potato and chickpeas are cooked.',

        'Add half a teaspoon of tomato puree (you can also use finely chopped tomato but puree is preferable). Cook for another 5-10 minutes.',

        'Serve with lavash or bread and pickles.',
      ],
    },
    {
      image: './images/ovdukh.jpg',
      name: 'Dogramach or Ovdukh (Chilled Yogurt Soup)',
      description:
        'DOGRAMACH! It’s pretty much the same thing as Dovga, with a few exceptions, one major one being that it requires NO COOKING, just some chopping. This dish is very refreshing, it has aromatic herbs, chilled yogurt and cucumbers. You can’t get any more summery than this dish. It’s a Gazpacho of Azerbaijan cuisine 😀 The only negative about this dish is that herbs are harder to chop, especially when wet.',
      time: 30,
      min: 'min.',
      serving: 2,
      difficulty: 'Easy',
      ingredients: [
        '4 cups plain yogurt',

        '2 cups water',

        '2 cucumbers, medium sized',

        '1 bunch dill',

        '1 bunch scallions',

        'a handful of basil (to taste)',

        'a handful of mint (to taste)',

        'Salt and pepper',

        'Dried cumin',

        '2 garlic cloves',
      ],
      directions: [
        'Pour yogurt and water into a pan, mix well until combined. If you want your soup thicker = add less water, thinned out = add more.',

        'Wash all the herbs and set aside. Start chopping. It really does not matter in what order you go, it all goes into the same pan anyways, but it’s easier to get the cucumber out of the way.',

        'Peel and chop up cucumbers, add to the yogurt mixture.',

        'Chop up the scallions, mint, basil and dill.',

        'Crush two garlic cloves and add them to the soup.',

        'Add salt, pepper, cumin (to taste), mix well.',

        'Set in the refrigerator if not eating right away.',

        'Serve with bread, rye bread is your best bet!',
      ],
    },
    {
      image: './images/boughlama.jpg',
      name: 'Boughlama (Stewed lamb with vegetables)',
      description:
        'The word boughlama comes from the word "bough" (steam). The dish’s name translates from Turkic languages as “cooked in its own steam.” ',
      time: 2,
      min: 'hours',
      serving: 4,
      difficulty: 'Moderate',
      ingredients: [
        'Lamb (Hip) - 600 g',

        'Small Beans - 100 g',

        'Pumpkin - 600 g',

        'Oil - 60 g',

        'Onions - 600 g',

        'Dried Cherry Plums - 230 g',

        'Sugar - 10 g',

        'Coriander and Dill – 30 g each',

        'Cinnamon - 1 g',

        'Salt and Pepper - to taste',
      ],
      directions: [
        'For this dish the meat is cut into pieces of 30-40 grams, salted and fried.',

        'Add chopped onion, water (broth), and pre-soaked cherry-plums and let cook in its own steam.',

        'Soak the small beans separately and cook until soft. Drain the beans and add them to the meat',

        'Cut the pumpkin into pieces weighing 30-40 g, and add to the meat and beans.',

        'Sprinkle with a little sugar and cook until ready with the lid closed for 20-30 minutes.',

        'When serving, sprinkle with chopped herbs. Serve pepper and cinnamon separately.',
      ],
    },
    {
      image: './images/arishta.jpg',
      name: 'Arishta (Noodles Soup)',
      description:
        'The root arish in Turkic languages means “parallel lines.” In this case, the noodles for this dish are cut into thin parallel lines.',
      time: 1,
      min: 'hour',
      serving: 4,
      difficulty: 'Moderate',
      ingredients: [
        'Flour - 400 g',

        'Egg - 1 (for dough)',

        'Water - as Required (for dough)',

        'Salt - to taste (for dough)',

        'Chicken - 500 g',

        'Onions - 100 g',

        'Coriander and Dill - 1 beam',

        'Sirke-sarymsag Sauce (Vinegar with Garlic) - 40 g',

        'or Abgora (Juice of Unripe Grapes) - 60 g',

        'or Pomegranate Juice - 60 g',

        'Salt and Pepper - to taste',
      ],
      directions: [
        'Pour the flour in a hill and making a groove in the middle. Add the egg and water to the indent and knead the dough. Divide it into small balls and roll them out very thin (1 mm), and let slightly harden.',

        'For arishta (noodles) the dough should be cut as follows: fold the sheet of dough a few times and roll the dough thinly and cut into noodles the length of 5cm. Then, sprinkle with a little flour and let dry. These noodles can then be stored for several months.',

        'As a rule, arishta needs to be cooked in chicken broth. To make the chicken broth, cook the chicken in boiling water with a whole onion. Once cooked, strain the chicken broth.',

        'Put noodles in the broth and cook, stirring occasionally so that the noodles do not stick together. Cook for 15-20 minutes until ready.',

        'Add salt and pepper to taste.',

        'Finely chop the fresh herbs and put them in the pot just before serving.',

        'This dish is usually served with Sirke-sarymsag sauce, pomegranate juice or abgora.',
      ],
    },
  ],
  meat: [
    {
      image: './images/yarpaq-dolma.jpg',
      name: 'Yarpaq Dolma (Stuffed Grape Leaves)',
      description:
        'No Azerbaijani table is complete without stuffed grape leaves, dolma, or yarpag dolmasi. They are little morsels of deliciousness, in which tender grape leaves (fresh or canned) are wrapped around a flavorful filling made with ground meat, onion, rice, herbs, and a dash of seasoning.Many variations of dolma are made in some countries around the world, too, including Turkey, Lebanon, Iran, Greece, and others. “What makes is different from the rest?” you may ask. First and foremost,  the difference is in the size and shape.Azerbaijani dolma is much smaller and has a round shape (except, in the Azerbaijani city of Ganja, the dolma is slightly oval and is a bit bigger), unlike its foreign cousins that usually have a long, tube-like shape. In Azerbaijan, the smaller the dolma bundles, the better. Tiny bite size. The second distinct feature is the use of copies amounts of fresh herbs in the filling, including cilantro, dill, and mint.',
      time: 2,
      min: 'hours',
      serving: 5,
      difficulty: 'Difficult',
      ingredients: [
        '1 pound ground lamb or beef (or a combination)',

        '1 medium onion, passed through a meat grinder or grated',

        '½ cup medium-grain white rice, thoroughly rinsed (do not use long grain rice, such as Basmati!)',

        '½ cup finely chopped fresh cilantro',

        '½ cup finely chopped fresh dill',

        '½ cup finely chopped fresh mint',

        '1 teaspoon salt',

        '¼ teaspoon ground black pepper',

        'About 100 small-size or 50 medium-size fresh grape leaves (or frozen grape leaves, or canned leaves (about ¾ of a 16-ounce can)',

        '3 tablespoons clarified butter (ghee) or unsalted butter (add more if meat is lean), or olive oil',

        'Plain Yogurt or Garlicky yogurt sauce, to serve (recipe follows)',
      ],
      directions: [
        'First, prepare the stuffing. In a medium mixing bowl, combine the ingredients for the stuffing (add less salt if using briny canned leaves). Mix with your hand until well combined.',

        'If using fresh grape leaves, boil slightly salted water in a medium saucepan and blanch the leaves in small batches (about 10 at a time) in the boiling water for about a minute (less if the leaves are very tender). This will soften the leaves and make them easier to roll and faster to cook. Remove the leaves from the pan using a slotted spoon and drain in a colander. Cut off the stems.',

        'If using canned leaves, put batches of them in a colander, rinse well under cold water to remove the salt, and drain. If the canned leaves feel too thick, blanch them in boiling water for about a minute, then drain. Otherwise, do not blanch. Cut off the stems.',

        'Have a medium saucepan ready. If using medium-size mature leaves, cut them in half. Small, young leaves can remain whole.',

        'If there are any torn or damaged leaves, do not discard—use them to patch holes in other leaves as needed. Also, arrange some of the damaged leaves flat on the bottom of the saucepan. If you don’t have damaged leaves, line the bottom of the saucepan with unused whole leaves to cover.',

        'Now stuff the grape leaves. Hold a leaf (or half, if cut) shiny side down on the palm of your hand. Place about 1 heaping teaspoon of the filling at the stem end of the leaf. Fold the top down, then the sides over the filling and roll up tightly to shape it into a 1-inch round bundle. Arrange the stuffed leaves, seam side down, on the bottom of the pan. Continue until all the leaves and filling are used, arranging the stuffed bundles snugly together in the pan, making several layers.',

        'Dot the top with butter and pour in water to cover the dolma halfway. Place a small lid or a small ovenproof plate on top of the stuffed leaves to keep them tight and to prevent them from opening. Cover and bring to a boil.',

        'Reduce the heat to medium-low and simmer for about 1 hour 30 minutes, or until the leaves are tender, the filling is cooked, and there is little liquid left (if the liquid is completely absorbed at some point during cooking, add more water and continue to simmer).',

        'Serve immediately with bread and plain yogurt or garlicky yogurt sauce to spoon onto the dolma to taste.',

        'Garlicky Yogurt Sauce: To make garlicky yogurt sauce, in a bowl, combine 1 cup or more plain yogurt with 2-4 cloves garlic, crushed with a garlic press.',
      ],
    },
    {
      image: './images/kalam-dolma.jpg',
      name: 'Kalam Dolma (Cabbage Rolls Stuffed with Meat)',
      description:
        'Kalam dolmasi, stuffed cabbage leaves (kalam means “cabbage” in Azeri, and dolma, comes from “dolmag” a Turkic word that means “to be stuffed”), a popular dish, loved by Azerbaijanis of all ages. In this dish, the cabbage leaves are stuffed with ground meat, rice, and fresh herbs. For this particular dolma, you need a cabbage that is not very tight, with leaves easy to pull off.',
      time: 2,
      min: 'hours',
      serving: 4,
      difficulty: 'Moderate',
      ingredients: [
        '1 pound (450g) ground beef or lamb (or combination), preferably not very lean',

        '1 medium onion, peeled and finely chopped (2 cups)',

        '2 tablespoons tomato paste',

        '½ cup medium grain rice, thoroughly washed and drained',

        '½ cup chopped fresh cilantro (coriander)',

        '½ cup chopped fresh dill',

        '2-3 tablespoons unsalted butter',

        '1 teaspoon salt',

        '¼ teaspoon pepper',

        '1 large green cabbage (about 3 pounds /1kg 400 g)',

        '2 tablespoons tomato paste (when in season, you can use 1 medium ripe tomatoes, peeled and grated, with juices and 1 tablespoon tomato paste) (for cabbage)',

        '1 ½ cup hot water (for cabbage)',

        '2 tablespoons unsalted butter (for cabbage)',
      ],
      directions: [
        'First, prepare the stuffing. In a mixing bowl, combine all the ingredients for the filling. With your hand, knead thoroughly until well blended. Set aside.',

        'Meanwhile, prepare the cabbage leaves. Fill a large saucepan with water, add a generous pinch of salt and bring to a boil. With a sharp knife, cut out the core of the cabbage and carefully pull off the leaves, keeping them whole and undamaged. Plunge the leaves into the boiling water in batches of 2-3, and blanch them for 5 minutes, until they have softened a little and are pliable. Remove the leaves with a slotted spoon and drain in a colander. Repeat with the remaining leaves.',

        'Keep a medium saucepan at hand. When the leaves are cool enough to handle, place them onto a cutting board, and using a sharp knife, cut out the rough center vein in teh shape of a V from the leaves so they will be easier to roll up. You will need the cutouts veins later, so do not discard. If the leaves are too big, cut them in two along the center vein.',

        'Place about 2 heaped tablespoons of the stuffing in the middle of each leaf and shape the filling slightly like a log. Fold in the sides, then roll tightly. Arrange the reserved cut out veins on the bottom of the saucepan (you can also arrange the damaged and torn leaves, or unused leaves on the bottom too), then place cabbage rolls on top, close together and seam side down, making several layers. If using fresh tomatoes along with tomato paste, toss a little in-between the layers.',

        'Dissolve the tomato paste in 1 ½ cup hot water and pour over the top of the rolls. The water should come to a little less than half of the rolls, but not more as the rolls will release their own juice, too. If not enough, add more. Dot the top layer with butter. Place a small lid or a small ovenproof plate on top to keep the rolls tight and to prevent them from opening. Cover and bring to a boil. Reduce the heat to medium to low and simmer for about 1 hour, or until the cabbage leaves are tender, the filling is cooked, and the liquid has somewhat reduced.',

        'Place dolma on a serving platter and spoon some of the cooking liquid on top. Serve with bread on the side.',
      ],
    },
    {
      image: './images/3-baji-dolma.jpg',
      name: '3 Baji (sisters) Dolma (Stuffed Eggplants, Peppers and Tomatoes)',
      description:
        'This is probably the most popular dish prepared in Azerbaijan in summer. When vegetables and fruits are in abundance, Azerbaijani women like to stuff them 😅 They stuff eggplants, peppers, tomatoes, potatoes, onions, quince and even apples! The general name for all the stuffed yummies is Dolma, which means stuffed in Azeri. Dolma of eggplants, peppers and tomatoes is everybody’s favorite and you can`t find anyone in Azerbaijan who doesn’t like it!',
      time: 1,
      min: 'hour',
      serving: 6,
      difficulty: 'Moderate',
      ingredients: [
        '1-2 tablespoons vegetable oil or clarified butter',

        '6 small black skinned eggplants (about 12 cm long and 4 cm in diameter)',

        '6 medium green bell peppers',

        '6 large firm tomatoes',

        'salt (for shells)',

        'ground black pepper (for shells)',

        '4 tablespoons vegetable oil or clarified butter (for stuffing)',

        '1 1/2 pounds (700 g) ground beef or lamb',

        '2 medium onions, peeled and finely chopped',

        '1 medium green pepper (pointed or bell), finely chopped chopped tomato pulp (for stuffing)',

        '1 cup chopped fresh basil',

        '½ cup cooked and split chickpeas (1/4 cup dried, boiled in slightly salted water and drained), optional',

        'salt, to taste (for stuffing)',

        'ground black pepper, to taste (for stuffing)',
      ],
      directions: [
        'Prepare the shells.',

        'Eggplants: Cut off the stalk end of the eggplants. Make a lengthwise slit in each taking care not to cut right through. Fill a pan with water and bring to a boil. Gently drop the eggplants into the boiling water, and simmer for about 2 minutes, using a slotted spoon to keep them submerged. Remove and set aside. When cool enough to handle, remove the seeds from the eggplants with a spoon or by rubbing the eggplants gently between the palms of your hands to let the seeds fall out. Set aside.',

        'Peppers: Start cutting tops off the green peppers about 1/2 inches (4 cm) from the stems and stop when you obtain lids attached to the peppers. Remove the seeds and ribs and set aside.',

        'Tomatoes: Remove the stems. Start cutting tops off the tomatoes about 1/2 inches (4 cm) from the stems and stop when you obtain lids attached to the tomatoes. Scoop out the pulp, finely chop it and reserve for the stuffing*.',

        'Make the stuffing. In a frying pan, heat the oil over medium heat. Add the ground meat and cook until the released liquid has evaporated and the meat has nicely browned. Add the onions and cook for 5-10 more minutes, stirring occasionally. Add the chopped pepper and tomato pulp and cook for another 5 minutes. Remove the pan from heat. Add the fresh herbs, and if using, cooked and split chickpeas. Season with salt and pepper to taste, and mix well.',

        'Sprinkle inside of the shells with some salt and black pepper and fill them with the stuffing. Cover the top of the peppers and tomatoes with their lids. Place the vegetables side by site in a deep frying pan. ',

        'Pour 2 tablespoons vegetable oil or clarified over the top. Cover and simmer over low to medium heat for about 40 minutes, or until the vegetables are tender (but not mushy!) and the liquid has reduced to the syrupy consistency.',
      ],
    },
    {
      image: './images/doshama-plov.jpg',
      name: 'Parcha-Doshama Plov (Layered Rice Pilaff With Dried Fruit and Chestnuts)',
      description:
        'Eziz Qonaqlar, Meclisimize Ash Gelir! Ok, no panicking, it’s in Azeri, I’ll translate, word by word: Dear Guests, Pilaff is Entering Our Ceremony! This is how the Tamada, a Toastmaster always announces the appearance of a festive Pilaff at the Azerbaijani wedding ceremony. Royal treatment, you would say? Now, listen to this. Beautifully presented and mouth-watering pilaff is literally escorted to the reception area with one person at the head (a dancer in a national costume or a waiter) carrying the pilaff plate and others following with torches in their hands. This plate is placed on the bride and groom’s table. And of course, all this is accompanied by beautiful music and a happy cheering of the guests. Now, this is royal! Yes, Rice Pilaff is the king (or the queen:) of all foods in Azerbaijan. It is not prepared on a daily basis, but there is hardly any celebration, ceremony that would not have pilaff on the menu. Azerbaijani cuisine boasts countless versions of it, with every region having its own special recipe. Typically, long grain rice is steamed with saffron on top and a layer of golden crust called Gazmag (in Azeri: qazmaq) on the bottom. Traditionally, a crust is prepared from eggs, flours, butter and yogurt. Or, if you are pressed with time, simply lay peeled sliced potatoes or flat bread – lavash on the bottom, then scoop the rice on top and steam it. Usually this type of Pilaff is served with additions, known as ashgara (ashqara) or khurush, prepared separately from the rice. Meat, dried fruits, fresh herbs, fish, vegetables and aromatic spices are cooked in many different ways to make the addition, which, when ready, is piled on top of the cooked saffron rice on individual serving plates.',
      time: 2,
      min: 'hours',
      serving: 5,
      difficulty: 'Moderate',
      ingredients: [
        '3 cups long-grain white Basmati rice (you can also use long-grain American rice)',

        '4 tablespoons butter, melted',

        '1 cup peeled chestnuts*',

        '½ cup pitted dried apricots (you can half them, too, if they are too big)',

        '1 cup dried sour plums, pitted',

        '½ cup pitted dates',

        '½ cup golden raisins',

        '1 ½ (700g) pounds skinless, boneless chicken cut into 2-inch (5cm) cubes',

        '1 medium onion, peeled, cut in half lengthwise, then thinly sliced in half-circles',

        '1/3 teaspoon ground saffron threads*, dissolved in 3 tablespoons hot water',

        'Salt and ground black pepper',

        'NOTE: VARIATION 1: You can also use lamb in this recipe instead of chicken. Boil the lamb it in a pan with water for about 5 minutes, skimming the froth with a slotted spoon, then drain and use as directed in the recipe. This is done to remove the unpleasant smell and to get rid of the excessive froth lamb releases. VARIATION 2: You can substitute dried sour plums with dried barberries (in Azeri: zirinc) or dried pitted sour cherries.',
      ],
      directions: [
        'Pick over the rice carefully, removing any stones or other extraneous particles. Place the rice on a fine-mesh strainer or colander and wash thoroughly under lukewarm water until the water runs clear (as close to clear as possible). The rinsing process removes the starch so that the rice grains will remain separate after cooking.',

        'Soak the rice in a large container filled with lukewarm water mixed with 1 tablespoon of salt.',

        'While the rice is soaking, prepare fruits and chestnuts. In a medium frying pan, heat 2 tablespoons butter over medium heat. Add peeled chestnuts and stir-fry for about 3 minutes. Add dried apricots, plums and dates and stir-fry for another 3 minutes. Add raisins (add them last because they brown fast and can be easily burned) and stir-fry for 1 more minute. Remove from heat.',

        'In a large non-stick saucepan, combine 10 cups of water and 2 tablespoons salt. Bring to a boil. Drain the soaked rice (do not rinse) and add it, in batches, to the pot. Boil for about 7 to 10 minutes, stirring occasionally with a wooden spoon, to prevent rice grains from sticking to the bottom. Watch the rice closely so as not to overcook. The rice is ready once it surfaces to the top. Try one grain to see if it’s ready – it must be barely done – not fully cooked and not too soft (VERY IMPORTANT). Drain the rice in a large fine-mesh strainer or colander. Set aside.',

        'Rinse the pot you boiled the rice in. Melt 1 tablespoon butter over medium heat. Tilt the pan to distribute it evenly. Arrange meat in one l layer at the bottom of the pan. Sprinkle with ½ teaspoon salt and pepper, to taste. Follow with the layer of sliced onions. Simmer over medium heat uncovered, without stirring, for about 3 minutes to let the flavors develop.',

        'Place half of the rice in the pot over the onion. Arrange the dried fruits and chestnuts in one layer on top of the rice. Pile the rest of the rice on top of the fruits, mounding the rice nicely in the shape of a pyramid. Pour 1 tablespoon melted butter over rice.',

        'Place a clean dishtowel or 2 layers of paper towel over the pot and cover firmly with a lid to absorb the steam. Lift the corners of the towel over the lid.',

        'Reduce the heat to low and cook for 30 minutes. Then open the lid and sprinkle the saffron water on top of the rice.',

        'Cover again and simmer for another 30 minutes. When ready, meat should be cooked and lightly golden on the bottom. The onion will almost melt into the meat and will not be that visible. Rice grains should be separate and fluffy, and not sticky.',

        'When ready to serve, gently take 1 spatula full of rice, fruits and meat at a time, placing it on the large serving platter. This Pilaff is delicious served with pickles, vegetable salad or fresh herbs.',
      ],
    },
    {
      image: './images/balig-lavangi.jpg',
      name: 'Balig Lavangi (Baked Fish Stuffed with Walnuts)',
      description:
        'The king of Azerbaijani fish recipes – baked fish stuffed with walnuts. On joyful occasions such as the celebration of Spring Holiday – Novruz, the Azerbaijani table overflows with food. But there is always room for baked fish Lavangi, a traditional walnut filling originating from the beautiful city of Lenkeran in the southeast of the country. The best fish to stuff is KUTUM, also known as Caspian White Fish or Caspian Roach. If you can’t find white fish, you can substitute it with sea bass, red snapper, or red mullet. Typically, broiled, baked, or fried fish is served with thick pomegranate paste called Narsharab, which is actually pomegranate juice simmered on slow heat until it is thick and dark (sold in bottles). Fish flakes are dipped into this tart syrup. If you can’t find it, no worries, freshly squeezed lemon juice over your fish would do just as well. Lavangi filling calls for three main ingredients: Walnuts, Onion and Sour Paste. Sour paste is a sort of chutney-like puree made of sour plums. you can use dried sour plums or fresh pomegranate seeds instead of the sour paste to add some tartness to the filling. I didn’t have sour paste.',
      time: 1,
      min: 'hour',
      serving: 6,
      difficulty: 'Moderate',
      ingredients: [
        '1 large white fish (3-5 pounds), scaled and cleaned (keep the head on)',

        '1 large onion, finely grated or ground',

        '1 ½ cups walnuts, ground',

        '1 tablespoon sour paste* or 5-6 large dried sour plums, pitted and chopped, or 1/3 cup fresh pomegranate seeds',

        '1 teaspoon salt (for stuffing)',

        '¼ teaspoon ground pepper (for stuffing)',

        '1 teaspoon salt (for rubbing and baste)',

        '¼ teaspoon ground pepper (for rubbing and baste)',

        'fresh juice of ½ lemon (2-3 tablespoons)(for rubbing and baste)',

        'NOTE: VARIATION: VARIATION: If the fish has a roe (in Azeri – kuru, in Russian – ikra), do not discard it when cleaning the fish. Add it raw to the walnut mixture, reducing the amount of walnuts accordingly. Stuffing with fish roe is very delicious.',
      ],
      directions: [
        'Rinse the fish under cold water and pat dry with paper towel. Rub inside and out with salt and pepper.',

        'Prepare the filling. Place the onion on a fine sieve and press to remove the juices. In a mixing bowl, combine onion, walnuts, sour paste or dried sour plums, or pomegranate seeds, and salt and pepper. Mix well. Adjust seasoning to taste.',

        'Preheat the oven to 350F (180C).',

        'Using a spoon, fill the cavity of the fish with the walnut stuffing. Make sure you pack the mixture tightly inside.',

        'Pin the cavity shut with wooden barbecue skewers or cocktail sticks. Or, if available, sew it up tightly with kitchen twine. Place the fish on a baking sheet and pour the lemon juice over it. If you sewed the cavity, place the fish on a baking sheet in an upright position, seam side down.',

        'Bake in the oven for about 45 minutes, or until the fish is browned and flakes easily with a fork.',

        'Arrange the fish on a serving platter and discard the pins or twine. Garnish with lemon slices, pomegranate seeds and serve with rice pilaff or bread and pomegranate paste (Narsharab) on the side. When serving, slice the fish into pieces making sure each one has some filling inside.',
      ],
    },
    {
      image: './images/jyz-byz.jpg',
      name: 'Jyz-byz (fried liver, heart and kidneys)',
      description:
        'The dish "Jyzbyz" comes from the word emulating the sound of frying sheep’s tail fat: the verb "jyzlamag," which means "to hiss from frying." It is an Azerbaijani dish that is traditionally made with fried sheep liver, kidney, lung, heart, and intestines. Each of the components have to be cooked in a specific order and preparing them requires the use of some very special techniques. This recipe, however, is a simpler form of Jyz-Byz that only incorporates lamb or cow liver. This isn’t exactly the healthiest dish in Azerbaijani cuisine (beware if your cholesterol is high!), but it is nutritional, delicious, and easy to prepare if you’re short on ingredients, money, or time.',
      time: 1,
      min: 'hour',
      serving: 2,
      difficulty: 'Moderate',
      ingredients: [
        '1 lb (450 g) lamb or cow liver',

        '1 large onion',

        '4 potatoes',

        '4 tablespoons clarified butter',

        'Salt and pepper to taste',
      ],
      directions: [
        'Peel the onion, cut it in half, and slice it into thin half-rings',

        'Melt two tablespoons of clarified butter in a skillet over medium heat and sauté the onion until lightly brown.',

        'Cut the liver into pieces (about 1″ cubes) and add them to the skillet. Fry and stir the contents of the skillet over medium heat until the liver chunks become golden brown on all sites. Add salt and pepper just before it’s done cooking.',

        'Peel, wash, and dry the potatoes. Then, chop them into small chunks (the same size as liver cubes).',

        'Melt two tablespoons of clarified butter in a separate skillet over medium heat and fry and stir the potatoes until they’re golden brown. Add salt at the end of the cooking.',

        'Move the cooked potatoes into the skillet containing the liver and onion and mix.',

        'Serve Jiz-Biz while it’s still hot.',
      ],
    },
    {
      image: './images/yarpag-khangal.jpg',
      name: 'Yarpag Khangal',
      description:
        'There is a suggestion that the word khangal is derived from two words: gan, meaning “to be filled”, “feeling good” and gal – “to be left.” Accordingly, the name of this dish translates as the act of being satisfied after a hearty and tasty meal. It is made out of a thinly rolled sheet (sheet in Azerbaijani languages is yarpag) of dough.',
      time: 2,
      min: 'hours',
      serving: 4,
      difficulty: 'Difficult',
      ingredients: [
        'Flour - 400 g',

        'Egg - 1 (for dough)',

        'Water - as Required (for dough)',

        'Salt - to taste (for dough)',

        '1 pound (450g) ground lamb (or beef)',

        'Onions - 250 g',

        'Butter - 100 g',

        'Sarimsagli Gatig Sauce (Yogurt with Garlic)',

        'Salt and Pepper - to taste (for topping)',
      ],
      directions: [
        'Pour the flour in a hill and making a groove in the middle. Add the egg and water to the indent and knead the dough. Divide it into small balls and roll them out very thin (1 mm), and let slightly harden.',

        'Roll out the dough to a thickness of 2 mm and cut diamonds approximately 5-6 cm in size',

        'Pour 2 liters of water into a pot and bring to a boil. Then, add salt to the water and throw in the dough pieces. Cook for 8-10 minutes and strain.',

        'After straining the khangal quickly lay them out on plates and pore over with hot butter so they do not stick together',

        'Cook the ground meat on a skillet over medium heat. Stir continuously until it is well done. Add some butter if the meat is too lean. After the meat is done cooking, add salt and pepper to taste.',

        'It is also recommended to pore over with sarimsagli gatig sauce (yogurt with crushed garlic). You can also sprinkle the dish with pomegranate seeds. Azerbaijani.',
      ],
    },
    {
      image: './images/gyurza.jpg',
      name: 'Gyurza',
      description:
        'Experts have suggested that the name of this dish comes from the word gyurz (gyurza), which translates as “oval”. One of the elements of architecture is called gyurz and implies an oval shape',
      time: 1,
      min: 'hour',
      serving: 4,
      difficulty: 'Moderate',
      ingredients: [
        'Flour - 400 g',

        'Egg - 1 (for dough)',

        'Water - as Required (for dough)',

        'Salt - to taste (for dough)',

        'Lamb or Beef (Boneless) - 500 g',

        'Onions - 200 g',

        'Sheep’s Tail Fat - 100 g (For Those Who Want It)',

        'Dill - 1 bunch',

        'Sarimsagli Gatig Sauce (Yogurt with Chopped Garlic) - to taste',

        'Salt and Pepper - to taste',
      ],
      directions: [
        'Pour the flour in a hill and making a groove in the middle. Add the egg and water to the indent and knead the dough. Divide it into small balls and roll them out very thin (1 mm), and let slightly harden.',

        'Make minced meat with onions and sheep’s tail fat. Add salt and pepper to taste, and fry well together',

        'Use moist dough, roll the dough and, using a glass cup, cut it into small circles and use them immediately without letting them dry.',

        'On each circle place some of your cooked beef and close it up from both sides by making seams in the shape of a snake. Leave a small hole at one end of the seam.',

        'Next, cook the Gyurza in broth or salted water for 5-10 minutes (until the dumplings start to float to the surface of the water) and using a slotted spoon place them on a plate.',

        'Drizzle with sarimsagli gatig sauce or tomato sauce and sprinkle with dill.',

        'Alternatively, the gyurza can be placed into a bowl with 1-2 tablespoons of broth or melted butter. You can also fry the gyurza.',
      ],
    },
    {
      image: './images/nar-govurma.jpg',
      name: 'Nar Govurma (Roasted Meat with Pomegranate Seeds)',
      description:
        'The dish hails from the region of Goychay in Azerbaijan, the pomegranate capital of Azerbaijan. There dozens of pomegranate varieties grow in each and every front and back yard and vast orchards across the region. Juicy pomegranates with flavors that run from tart and tangy to sweet,  with seeds that are burgundy, red and even white, with skins that can be red, pink, or white – Goychay is a blissful paradise for pomegranate enthusiasts. Because of the fruit’s abundance, cooking with pomegranates is a common practice in the region and numerous dishes, both sweet and savory, are prepared with their ruby seeds. Nar Govurmasi is one such dish.  In this dish, the meat (traditionally, lamb is used, but veal is a great substitute) is first fried with the onions. A little broth on top and a dash of saffron, and the dish is simmered until the meat is fully cooked. Pomegranates are added at the very last stage and a great care is taken not to overcook them – they should remain fresh and never lose their crunchiness. Sometimes, the pomegranates seeds are not cooked at all: instead, they are added to individual serving plates, to taste.',
      time: 1,
      min: 'hour',
      serving: 4,
      difficulty: 'Moderate',
      ingredients: [
        'Lamb (Boneless) - 600 g',

        'Melted Butter - 40 g',

        'Onions - 100 g',

        'Pomegranate juice or Pomegranate Seeds - 150 gr',

        'Coriander - 50 g',

        'Saffron - 0.2 g',

        'Salt and Pepper - to taste',
      ],
      directions: [
        'First, add the saffron to half a glass of boiled water, infusing it for 15-20 minutes.',

        'Wash the meat and cut into small pieces.',

        'In a deep frying pan, melt the butter. Fry the mutton until it browns.',

        'Chop the onion into half rings and add them to the meat, reducing the heat.',

        'Next, pour the saffron infusion (for 1 gram of saffron use 3 tablespoons of boiling water).',

        'Add salt and pepper to taste',

        'If necessary, add water, cover the pan and simmer for 15 minutes. Pour in the pomegranate juice or add the pomegranate seeds into the pan and simmer for another 5 minutes, then remove from heat.',

        'Wash and finely chop the coriander and sprinkle onto the finished dish.',
      ],
    },
    {
      image: './images/saj-ichi.jpg',
      name: 'Saj ichi',
      description:
        'The word saj indicates a domed, universal shield-shaped and often portable iron cookware. Meat and offal are usually roasted in the deep end of the saj while the other, domed, side is used to make gutaby, kyata and other various breads (lavash, yuxa, etc). Saj ichi is a dish that is made on the deep side of the saj.',
      time: 45,
      min: 'min.',
      serving: 4,
      difficulty: 'Moderate',
      ingredients: [
        'Lamb offal (Lungs, Liver, Heart, Kidney) - 250 g',

        'Onions - 150 g',

        'Sheep’s Tail Fat - 50 g',

        'Pomegranate Seeds - 30 g',

        'Potatoes - 300 g',

        'Eggplant - 300 g',

        'Sweet Pepper - 70 g',

        'Tomatoes - 150 g',

        'Thin Lavash (Pita Bread) - 3-4 pieces',

        'Salt and Pepper - to taste',
      ],
      directions: [
        'Start by washing the offal, drying it, and removing the film.',

        'Cut everything into small pieces. Then peel the onion and cut it into half rings.',

        'In a large skillet or a kazan (pot) heat part of the sheep’s tail fat, then put in the meat and fry over high heat until brown (about 5-7 minutes).',

        'Reduce the heat; add the onion, salt and pepper to taste, and fry for another 20 minutes.',

        'Next sprinkle the meat with pomegranate seeds.',

        'Peel the potatoes and eggplant, and chop into big pieces.',

        'Wash the peppers and remove the seeds and partitions, cutting them into 8 pieces.',

        'Now wash the tomatoes and cut them into circles.',

        'In a separate skillet heat up the remaining sheep’s tail fat, and fry the potatoes, eggplants, peppers and tomatoes one by one until they are cooked.',

        'When serving, place the meat in the middle of the saj with the vegetables surrounding it on the sides.',

        'Divide the lavash (pita bread) into 4 pieces and put on top of the saj. Saj ichi can also be cooked from poultry.',
      ],
    },
  ],
  vegetarian: [
    {
      image: './images/pomidor-yumurta.jpg',
      name: 'Pomidor Yumurta Chigirtmasi (Azerbaijani-Style Eggs with Tomatoes)',
      description:
        'The literal translation of the word chighirtma is "screaming." The dish carries this name because of the hissing, or “screaming,” sound the meat makes while cooking in hot oil or butter. In Turkey, it is menemen, in North Africa and Middle East, it is shakshuka, and in Azerbaijan, it is pomidor chighirtmasi, also known as pomidor-yumurta (literally, “tomato-egg”). What do these dishes have in common? In them, tomatoes and eggs prove to be a match made in heaven, or rather a skillet. Although in many cases, in shakshuka and menemen, besides tomatoes, other vegetables such as onions and peppers are also used before they are topped with eggs, pomidor chighirtmasi is made with only 2 main ingredients – tomatoes and eggs. Yet, the resulting dish is absolutely amazing. Sometimes the simplest of dishes are the ones that impress our palates the most. Don’t you agree? This delicious meal can be served for breakfast, brunch, lunch, and even as a light dinner. Simple yet bursting with flavor. Traditionally, the dish is served with Azerbaijani tandir (tandoori) bread.',
      time: 15,
      min: 'min.',
      serving: 4,
      difficulty: 'Easy',
      ingredients: [
        '5 medium juicy tomatoes, coarsely chopped (no need to peel the skin)',

        '3 tablespoons clarified unsalted butter (ghee) or regular unsalted butter',

        '3 eggs',

        'Salt and Ground black pepper',
      ],
      directions: [
        'In a 12-inch frying pan (or, large enough to hold the tomato pieces in one dense layer), melt the butter over medium heat.',

        'Add the tomatoes and cook, uncovered, until the tomatoes break down and lots of juices have released, about 10 minutes. The tomatoes have to be tender at this point, with bigger chunks reduced in size. During the cooking, stir with a wooden spoon from time to time to prevent the juices from burning.',

        'Break the eggs into a bowl and stir to mix with a fork (not vigorously). Pour the eggs evenly over the tomatoes. Season with salt and pepper to taste. Cook, uncovered, until the eggs set, about 5 minutes. (You may need to make small holes in the dish, to let the eggs slide in and cook.) Do not stir the dish.',

        'Serve immediately, right in the pan or transferred onto a serving plate, with chunks of freshly baked bread on the side.',
      ],
    },
    {
      image: './images/badimjan-sirdaghi.jpg',
      name: 'Badimjan Sirdaghi (Garlicky Eggplant with Tomatoes)',
      description:
        'Sirdagh means "fried garlic". It comes from the southeast of Azerbaijan, and is especially popular in the region of Lenkeran, where in fact, it is believed to have originated. You only need 3 ingredients to make the dish—eggplant, tomatoes, and garlic. A tad bit o water to help seal the flavors together in one pot and voila! It is good beyond words. Eggplant lovers will rejoice while eggplant haters will rejoice, too.',
      time: 45,
      min: 'min.',
      serving: 4,
      difficulty: 'Easy',
      ingredients: [
        '8-9 medium dark-skinned eggplants, such as Japanese (about 2 ½ pounds / 1 kg 200 g)',

        '½ cup olive oil or more as needed, for frying',

        '5 medium ripe but firm tomatoes, cut into thick circles',

        '4 cloves garlic, finely chopped',

        '1/3 cup water',

        'Salt and Ground black pepper',
      ],
      directions: [
        'First, prepare the eggplant. Using a sharp knife it lengthwise into slices, about 1/4-inch (6-mm) thick.',

        'Extract the bitterness from the eggplant using either of the methods below: Method 1: Put a colander in the sink. Arrange the eggplant slices in the colander; sprinkle generously (about 2 tablespoons) with salt. Place a weight, such a plate with jars on top or a heavy lid, on top, to apply pressure. Leave for 20 minutes, to allow the bitter dark juices to drain. Rinse and thoroughly pat dry with paper towels. Method 2: Place the eggplant slices in a bowl filled with cold water and sprinkle with salt on top (about 2 tablespoons). Place a weight, such a plate or lid, on top and leave for 20 minutes. Rinse and thoroughly pat dry with paper towels.',

        'In a medium frying pan (11-12 inch / 28-30 cm), heat the oil over medium heat until it is sizzling hot (eggplant will absorb all of the oil if it is not hot enough). Fry the eggplant slices on both sides until golden brown, 3 to 5 minutes per side. Add more oil if necessary, heating it before adding a new batch of eggplant. Remove the slices from the pan and drain on paper towels.',

        'If there is still some oil left in the frying pan, arrange the tomato slices in it, and cook about half a minute on each side (if the pan has dark bits from the eggplant, wipe with paper towels, add some oil and heat before cooking the tomatoes). Remove from the heat and place on a separate plate.',

        'Wipe off the pan and arrange the eggplants in three to four layers on the bottom. Place a layer of tomatoes on top.',

        'Sprinkle with garlic. Season with salt and pepper to taste. Pour in the water, cover the pan, and simmer over medium-low heat, without stirring, for 15 minutes. Serve immediately with bread on the side.',
      ],
    },
    {
      image: './images/kyuku.jpg',
      name: 'Kükü (Eggs with fresh herbs)',
      description:
        'In Azerbaijan, kükü (read: kyukyu) is the general name given to dishes in which main ingredients—vegetables, herbs, meat or fish—are bound with eggs, then browned on both sides on a stovetop. It is not to be confused with omelet, as the featured ingredients in kükü are used in far greater amounts than eggs. By its appearance and texture, kükü can be likened to a Persian kookoo, Middle Eastern eggah, Spanish tortilla or Italian frittata. Simplicity in itself, fresh herb kükü is by far the most popular and the most frequently made kükü of all in the versatile kükü repertoire. In this light summer dish, fresh herbs are mixed with eggs, then the mixture is leveled in a frying pan and cooked in butter on both sides to yield a tender, flavorful interior laced with a golden surface.',
      time: 30,
      min: 'min.',
      serving: 4,
      difficulty: 'Easy',
      ingredients: [
        '2 packed cups chopped fresh cilantro',

        '1 packed cup chopped fresh dill',

        '½ cup fresh green onions',

        '5 eggs',

        '½ teaspoon salt',

        'Ground black pepper to taste',

        '¼ cup unsalted butter or clarified butter (can substitute olive oil)',

        'Garlicky yogurt sauce (mix 1 cup plain yogurt with crushed garlic to taste) or plain yogurt, to serve',
      ],
      directions: [
        'In a large mixing bowl, combine the chopped fresh herbs and eggs. Season with salt and pepper, then stir with a spoon to mix well.',

        'Melt the butter or oil over medium heat in a 10-inch non-stick frying pan. Pour the herb-egg mixture into the pan to fill it completely, leveling it with the back of a spoon. Cook until golden brown on the bottom, 5 to 8 minutes.',

        'Using a knife, carefully cut the kuku into 4 wedges (or 8 if you wish). Gently turn the wedges over to brown the other side. If you need to, add more butter or oil to the pan.',

        'Remove the cooked kuku from the heat and transfer it onto a serving platter. Serve with bread or as accompaniment to rice pilaf.',

        'Separately serve a bowl with garlicky yogurt sauce or plain yogurt, to spoon onto kuku to taste.',
      ],
    },
    {
      image: './images/lobya-chighirtmasi.jpg',
      name: 'Lobya Chighirtmasi (Green Beans with Eggs )',
      description:
        'Green beans are some of the most frequently used and Azerbaijanis cook them in a variety of ways. Here’s one way to cook them – with eggs. Traditionally, this dish, called lobya chighirtmasi, is prepared with Romano green beans or dragon-tongue beans that turn green when cooked. Both of these bean varieties are sweeter and more flavorful than French beans. It is highly recommended that you use these varieties for this dish. Look for them in Middle Eastern/Persian/Turkish stores. If not available, substitute with regular green beans. Green beans and eggs work great together in this dish.  You will be pleasantly surprised by the varied taste their combination offers. Especially try it with garlicky yoghurt, it`s delicious',
      time: 45,
      min: 'min.',
      serving: 4,
      difficulty: 'Easy',
      ingredients: [
        '2 pounds fresh green beans, trimmed and chopped at a slight angle into 2 –inch pieces',

        '6 tablespoons unsalted butter or vegetable oil',

        '2 medium onions, peeled and finely chopped (2 cups)',

        '2 medium ripe tomatoes, peeled and finely chopped (2 cups)',

        '1 cup chopped fresh basil (preferably purple basil)',

        'Salt and Ground black pepper, to taste',

        '4 eggs',
      ],
      directions: [
        'Fill a medium saucepan with about 10 cups of water. Add the beans and bring to a boil. Cook for about 25 minutes (may take shorter or longer depending on the bean variety), or until they are almost tender but not completely cooked.',

        'Drain on a colander. At this point, you can leave the beans as is, or press them in the colander with the bottom of a mug or a glass, until the beans are somewhat smashed and softened (this method is indigenous to the northwest where it is believed that slightly smashing the beans ensures the release of maximum flavor from them). Set the beans aside.',

        'Meanwhile, in a medium sauté pan, heat the butter or oil over medium heat.',

        'Add the onions and cook, stirring frequently, until lightly browned, about 10 minutes.',

        'Add the tomatoes and basil and cook for another 5 minutes.',

        'Toss in the drained beans. Season with salt and pepper, to taste. Stir to mix. Cover and cook over medium heat, stirring occasionally, about 15 minutes, until the beans are tender and there is little liquid left.',

        'Break the eggs in a small bowl and stir to mix. Pour the eggs evenly over the green beans. Cover and cook until the eggs are set, about 5 minutes. Serve immediately with bread and garlicky yoghurt.',
      ],
    },
    {
      image: './images/gutab-herb.jpg',
      name: 'Gutab with Herbs',
      description:
        'The word gutab comes from the word gatlamag, which means “to fold”. Gutab is the general name given to half-moon shaped stuffed flatbread, popular all over the country. The stuffing can be made with fresh herbs, butternut squash, ground lamb of beef, or farmer cheese – you name it. The process goes like this – you make the dough, roll it out,  stuff it, fold it, and cook it (typically on a saj) then butter its top while still hot.',
      time: 45,
      min: 'min.',
      serving: 4,
      difficulty: 'Moderate',
      ingredients: [
        'Flour - 400 g',

        'Egg - 1 (for dough)',

        'Water - as Required (for dough)',

        'Salt - to taste (for dough)',

        'Fresh Herbs: Cilantro, Dill, Mint, Spinach, Green Onions, Parsley - 1 Beam Each',

        'Onions - 120 g',

        'Lavashana (Cherry-plum Paste) - 40 g',

        'Butter - 100 g',

        'Gatig (Plain Yogurt)',

        'Salt and Pepper - to taste',
      ],
      directions: [
        'Pour the flour in a hill and making a groove in the middle. Add the egg and water to the indent and knead the dough. Divide it into small balls and roll them out very thin (1 mm), and let slightly harden.',

        'Knead the dough and cover with a towel for a while (20 min.)',

        'For the filling: wash all the herbs, chop them and sauté with finely chopped onions.',

        'Then, add chopped lavashana, salt and pepper to taste and mix everything well.',

        'Divide the dough into balls with a diameter of a fist. Then, roll them out thinly and cut out circles the size of a dessert plate',

        'Put a thin layer of the stuffing from greens on one half of the circle (a hemisphere). Fold over the half (hemisphere) without the stuffing and firmly close the sides.',

        'You can fry the gutab on both sides with or without butter, on an extremely hot pan or inverted saj.',

        'It is eaten hot. When serving, sprinkle with oil and separately serve the gatig (plain yogurt).',
      ],
    },
    {
      image: './images/gutab-pumpkin.jpg',
      name: 'Gutab with Pumpkin',
      description:
        'The word gutab comes from the word gatlamag, which means “to fold”. Gutab is the general name given to half-moon shaped stuffed flatbread, popular all over the country. The stuffing can be made with fresh herbs, butternut squash, ground lamb of beef, or farmer cheese – you name it. The process goes like this – you make the dough, roll it out,  stuff it, fold it, and cook it (typically on a saj) then butter its top while still hot.',
      time: 45,
      min: 'min.',
      serving: 4,
      difficulty: 'Moderate',
      ingredients: [
        'Flour - 400 g',

        'Egg - 1 (for dough)',

        'Water - as Required (for dough)',

        'Salt - to taste (for dough)',

        'Pumpkin - 500 g',

        'Onions - 80 g',

        'Seeds from 1 Whole Pomegranate',

        'Butter - 100 g',

        'Salt - to taste',
      ],
      directions: [
        'Pour the flour in a hill and making a groove in the middle. Add the egg and water to the indent and knead the dough. Divide it into small balls and roll them out very thin (1 mm), and let slightly harden.',

        'Knead the dough and cover with a towel for a while (20 min.)',

        'Boil the pumpkin and mash it, adding salt and pepper to taste.',

        'Fry some onion rings and mix them in with the pumpkin. Divide the dough into balls with a diameter of a fist. Then, roll them out thinly and cut out circles the size of a dessert plate',

        'Put a thin layer of the pumpkin stuffing on one half of the circle (a hemisphere). Fold over the half (hemisphere) without the stuffing and firmly close the sides',

        'You can fry the gutab on both sides with or without butter, on an extremely hot pan or inverted saj.',

        'When serving sprinkle with sumac or pomegranate seeds.',
      ],
    },
    {
      image: './images/eggplant-potato.jpg',
      name: 'Eggplant dish with potatoes',
      description:
        'Easy and very tasty vegetable dish. Optionally, you can sprinkle finely chopped greens on top of the finished dish.',
      time: 45,
      min: 'min.',
      serving: 4,
      difficulty: 'Easy',
      ingredients: [
        '5 eggplants',

        '1 large onion',

        '3-4 cloves garlic',

        '1 green pepper ( optional )',

        '2-3 potatoes',

        '3 tomatoes',

        '1 teaspoon tomato paste',

        '5 tablespoons of butter',

        'Salt, pepper',

        'Half a cup of boiling water',
      ],
      directions: [
        'Peel the eggplants, grate and cut it into large cubes. Soak in salted water for 20 minutes to remove the bitterness, strain and squeeze.',

        'Finely chop the onion, garlic, pepper, potatoes and tomatoes.',

        'Melt the oil in a saucepan. Add the onion and garlic, stirring occasionally, and cook until the onion is soft and browned.',

        'Add pepper and potatoes and cook for a minute or two.',

        'Add tomatoes and tomato paste and cook for a minute or two.',

        'Add eggplants and mix. Put salt and pepper.',

        'After a couple of minutes, add water, cover the pot and cook for 15-20 minutes on medium heat. When the potatoes are cooked, the meal is ready. Do not stir often during cooking to avoid crushing the eggplant.',
      ],
    },
    {
      image: './images/shah-plov.jpg',
      name: 'Shah Plov (crown pilaf)',
      description:
        'Pilaf is the signature dish of Azerbaijani cuisine. It served on special occasions and known in Azerbaijan as Ash or Plov. Azerbaijani cuisine has dozens of different types of pilaf, one of which is “Shah Plov” (Crown Pilaf) – the King of Azerbaijani pilafs. The creator of “Shah Plov” is a well-known Azerbaijani chef, winner of the culinary competitions, Shahguseyn Kerimov. Shah Plov is usually served on special occasions, and accompanied by a different qovurma (garnishes). Qovurma can be made of meat, chicken, fish, or sweet dried fruits and nuts, to compliment the rice. The recipe below is Shah Plov with sweet fruits and nuts.',
      time: 2,
      min: 'hours',
      serving: 4,
      difficulty: 'Difficult',
      ingredients: [
        '2 cups long-grain (Basmati) rice (cup size 250 ml)',

        '1 quart (1 litre) water + 1 tbsp salt for soaking rice',

        '3 quarts (3 litre) water + 3 tbsp salt for cooking rice',

        '8 oz (225 g) clarified unsalted butter',

        '½ tsp saffron threads',

        '5-6 medium size round flour tortillas (or thick lavash)',

        '1 cup dried apricots',

        '1 cup golden raisins',

        '1 cup walnuts (or cooked chestnuts)',
      ],
      directions: [
        'Preparing the saffron infusion: Place saffron threads into a shot glass. Then, pour about two tablespoons of boiling water and let it sit. The water will turn an opulent yellow color immediately, deepening over the next few minutes until it becomes a clear, bright orange.',

        'Rinse the rice thoroughly in cold water several times until the water stays clear, to remove excess starch. Then, soak the rice overnight in salty water at room temperature (or at least 1 hour in very hot salty water)&nbsp;for a truly great, fluffy, and evenly cooked rice. Before cooking the rice, pour out the water straining the rice with a colander.',

        'Fill a pot (or saucepan) with water, add salt, and bring it to a boil. Place the rice into the boiling water. Stir, lower the heat to medium, and let it cook for 5-10 minutes (depending on the quality of your rice). Cooked rice should be soft on the outside and hard inside (not raw.)',

        'Strain the rice using a colander, and rinse with a hot water to wash out an extra salt.',

        'Melt two tablespoons of butter in a saucepan and grease the pan thoroughly. Spread butter evenly on bottom and sides of the pan using fingers. Grease each lavash with melted butter. Place one round tick lavash (flour tortilla) on the bottom of the pan. Arrange remaining lavash (tortillas) around the sides of the pan, overlapping each other. Do not leave any open spaces, the bottom and sides of your pan must be fully covered with lavash.',

        'Place a layer of the rice (approximately quarter) and pour 2-3 tablespoons of melted butter on this layer. Next, put in the walnuts, dried apricots and raisins and place another layer of rice on top and follow up with more butter. Repeat the procedure with all your rice dried fruits. On the last layer, pour your saffron infusion along with more butter.',

        'Cover the rice with lavash (tortilla) and grease it with melted butter.',

        'Put the pilaf in the pre-heated to 350F (180C) oven for about an hour. Cook until lavash is golden-brown. Then, remove the pilaf from the oven and leave it for about five minutes to rest.',

        'Turn the pan upside down on a serving plate. Remove the pan from the pilaf. Cut the crust into portions, and serve.',
      ],
    },
    {
      image: './images/marjimakli-plov.jpg',
      name: 'Marjimakli Plov (pilaf with green lentils)',
      description:
        'Pilaf is the signature dish of Azerbaijani cuisine. It served on special occasions and known in Azerbaijan as Ash or Plov. Azerbaijani cuisine has dozens of different types of pilaf, one of which is Marjimakli Plov',
      time: 1,
      min: 'hour',
      serving: 4,
      difficulty: 'Moderate',
      ingredients: [
        '3 cups of rice',

        '1.5 cups of green lentils',

        '200 g. of butter',

        'Turmeric',

        'Salt and Pepper to taste',
      ],
      directions: [
        'First, the green lentils are cleaned, washed, boiled and rice is soaked.',

        'Boil salted water in a pot. After the water boils, the soaked rice is poured and boiled.',

        'Do not overcook the rice, is it softens then drain it.',

        'Add cooked lentils into drained rice.',

        'Add oil to the bottom of the pot to melt.',

        'Add pilaf into pot in portions, at each layer add turmeric',

        'Wrap the cover of the pot with tea towel, let it brew for 30 min.',
      ],
    },
    {
      image: './images/syuzma-plov.jpg',
      name: 'Syuzma Plov (Strained Rice)',
      description:
        'Pilaf is the signature dish of Azerbaijani cuisine. It served on special occasions and known in Azerbaijan as Ash or Plov. Azerbaijani cuisine has dozens of different types of pilaf, one of which is Syuzma Plov. The name syuzma comes from the word for "strained." This is the primary method used for the preparation of the rice. For the preparation of almost all the variations of plov you would traditionally need a kazan (a large trapezoidal cauldron which becomes narrow towards the top), a medium-sized saucepan for the garnish (size also depends on the kind of plov being prepared), a small pot for heating oil/butter and other purposes, and a basin-shaped strainer for the rice.',
      time: 1,
      min: 'hour',
      serving: 6,
      difficulty: 'Moderate',
      ingredients: [
        'Rice (Arborio) - 600 g',

        'Melted Butter - 50-100 g',

        'Saffron - 0.2 g',

        'Cumin - 2 g',

        'Salt - to taste',
      ],
      directions: [
        'First, the saffron must be infused in a cup with one tablespoon of boiling water.',

        'The rice should be soaked in salted water the evening before you start cooking. Make sure you rinse it with cold water prior to beginning the cooking process.',

        'To cook the rice, put it in boiling salted water and cook for 5-7 minutes until soft. Next, you need to strain the rice to make sure it doesn’t stick together.',

        'When cooking plov you will need to make sure the rice does not burn on the bottom. To do this you will need to make something called gazmag (a type of crispy crust),which will cover the bottom of the kazan (pot) you will cook your plov in. Gazmag is very delicious and simultaneously prevents the rice from burning.',

        'There are two methods for making gazmag: 1. After adding half a tablespoon of oil to the bottom of the kazan, knead the dough as you usually would (using flour, water, an egg, and some salt), roll it out so it is about 3 mm thick and place it on the bottom of the pot. 2. Clean several medium-sized potatoes and slice them into circles 0.5 cm in thickness. In the kazan, add oil/butter and put on heat. Now form a layer of sliced potatoes on the bottom of the pot, making sure to add salt to taste beforehand.',

        'Next, gently slide the rice into the kazan, taking care not to shake it or ram it into the sides. Sprinkle the rice with the saffron infusion (for 1 gram of saffron use 3 tablespoons of boiling water) and cumin, and cover tightly with a lid wrapped in a cotton cloth.',

        'Place a frying pan or iron baking sheet under the pot and simmer over low heat for 40 minutes. The rice is ready when it begins to separate and develops an amazing aroma.',

        'Next, pore the rice over with melted butter and let it sit on the heat for another 10-15 minutes. When ready, slide the plov onto an oval dish (in Azerbaijan this special dish is called a bulud) and take the gazmag out from the bottom of the pan. You can place it on a separate plate, or serve it on or around the rice.',
      ],
    },
    {
      image: './images/shirin-plov.jpg',
      name: 'Shirin (sweet) Plov',
      description:
        'Pilaf is the signature dish of Azerbaijani cuisine. It served on special occasions and known in Azerbaijan as Ash or Plov. Azerbaijani cuisine has dozens of different types of pilaf, one of which is Shirin Plov. For the preparation of almost all the variations of plov you would traditionally need a kazan (a large trapezoidal cauldron which becomes narrow towards the top), a medium-sized saucepan for the garnish (size also depends on the kind of plov being prepared), a small pot for heating oil/butter and other purposes, and a basin-shaped strainer for the rice.',
      time: 1,
      min: 'hour',
      serving: 6,
      difficulty: 'Moderate',
      ingredients: [
        'Rice (Arborio) - 600 g',

        'Melted Butter - 50-100 g',

        'Raisins - 120 g',

        'Dried Apricots - 120 g',

        'Prunes - 120 g',

        'Sugar - 150 g',

        'Wheat Flour - 40 g',

        'Salt and pepper - to taste',
      ],
      directions: [
        'Braise the raisins, dried apricots and prunes in a pan with oil and sugar.',

        'The rice should be soaked in salted water the evening before you start cooking. Make sure you rinse it with cold water prior to beginning the cooking process.',

        'Boil the rice until soft and strain.',

        'Put a layer of lavash (thin pita bread) on the bottom of a pot.',

        'Then, fill it with rice and the cooked dried fruit in alternating layers. Cover the pot and cook on medium heat until ready.',

        'Serve by heaping the cooked rice on a flat plate. Put the lavash, raisins, dried apricots on the side, and top with albuharu (dried yellow plum).',

        'Drizzle with melted butter.',
      ],
    },
    {
      image: './images/arishta-plov.jpg',
      name: 'Arishta (noodles) Plov',
      description:
        'Pilaf is the signature dish of Azerbaijani cuisine. It served on special occasions and known in Azerbaijan as Ash or Plov. Azerbaijani cuisine has dozens of different types of pilaf, one of which is Arishta Plov. For the preparation of almost all the variations of plov you would traditionally need a kazan (a large trapezoidal cauldron which becomes narrow towards the top), a medium-sized saucepan for the garnish (size also depends on the kind of plov being prepared), a small pot for heating oil/butter and other purposes, and a basin-shaped strainer for the rice.',
      time: 1,
      min: 'hour',
      serving: 6,
      difficulty: 'Moderate',
      ingredients: [
        'Rice (Arborio) - 600 g',

        'Melted Butter - 50-100 g',

        'Wheat Flour - 350 g',

        'Egg - 1 pc.',

        'Mash (Mung Beans) - 100 g',

        'Saffron - 0.2 g',

        'Salt and pepper - to taste',
      ],
      directions: [
        'Knead some dough by adding an egg, water and salt to the flour. Wait 20 minutes.',

        'Roll the dough out to a thickness of 1-2 mm. Dry slightly in a hot pan and cut with a length of 3-4 cm and a width of 2 mm to make arishta (noodles). You can further dry the arishta by slightly frying it in a pan.',

        'Next, you will need to prepare the saffron infusion (for 1 gram of saffron use 3 tablespoons of boiling water).',

        'On the eve before cooking, soak the rice in water. On the day of cooking, rinse the pre-soaked rice and add it to boiling salted water with the arishta. You can also add pre-cooked mung beans to taste. Cook for 5-7 minutes until the rice is soft, and strain it.',

        'To make gazmag for this dish, pour 1 tablespoon of butter on the bottom of the pot, and cover with lavash (thin pita bread).',

        'Next, add the rice with noodles and pour in the saffron infusion. Tightly cover with a lid wrapped in a cotton towel, and cook on low heat',

        'When serving, heap the plov in a bowl and pore over with oil.',

        'Serve with pickled vegetables, fresh vegetables and salad greens.',
      ],
    },
    {
      image: './images/borani-plov.jpg',
      name: 'Borani (pumpkin) Plov',
      description:
        'Pilaf is the signature dish of Azerbaijani cuisine. It served on special occasions and known in Azerbaijan as Ash or Plov. Azerbaijani cuisine has dozens of different types of pilaf, one of which is Borani Plov. Plov borani is a dish widespread in the southern regions of Azerbaijan, where the type of pumpkin used in its making is called bora. For the preparation of almost all the variations of plov you would traditionally need a kazan (a large trapezoidal cauldron which becomes narrow towards the top), a medium-sized saucepan for the garnish (size also depends on the kind of plov being prepared), a small pot for heating oil/butter and other purposes, and a basin-shaped strainer for the rice.',
      time: 1,
      min: 'hour',
      serving: 6,
      difficulty: 'Moderate',
      ingredients: [
        'Rice (Arborio) - 600 g',

        'Pumpkin - 250 g',

        'Onions - 160 g',

        'Butter - 200 g',

        'Water - 1 litre',

        'Salt and pepper - to taste',
      ],
      directions: [
        'Start by washing the pumpkin, removing the skin and seeds, and cutting it into cubes (about 2x2 cm).',

        'Next, peel the onion, slice it into small cubes and fry in a kazan (pot) in butter for 3 minutes. Then add in the pumpkin cubes and fry for another 3-4 minutes.',

        'Wash the rice, strain it and put it on top of the pumpkin. Add water, cover with a lid and put on low heat. Cook until ready.',
      ],
    },
  ],
  dessert: [
    {
      image: './images/mutakka.jpg',
      name: 'Mutakka (Cardamom-Walnut Cookies)',
      description:
        'These tender Cardamom-Walnut Cookies hailing from Azerbaijan are especially popular on spring holiday Novruz, when they often adorn the khoncha, a holiday tray, along with other festive savory and sweet bakes, including the three indispensables – shorgoghal, baklava, and shakarbura. The roll-ups are called mutakka, taking their name from the traditional tube-shaped pillow, mutakka, used to lean on at leisure. The mutakka are filled with ground walnuts, slightly sweetened with sugar and generously perfumed with aromatic cardamom, crushed in a hevengdeste, or mortar and pestle. Instead of walnuts, almonds or hazelnuts are often used as well. But walnuts are better for their richer flavor. Coarsely chopped walnuts work better – they add a nice, pleasant crunch to every bite that complements the tender shell of the cookies. So much better!',
      time: 30,
      min: 'min.',
      serving: 24,
      difficulty: 'Easy',
      ingredients: [
        '2¾ cups all-purpose flour',

        '4 ounces cold unsalted butter, cut into chunks (for dough)',

        '1 cup sour cream (for dough)',

        '2 large egg yolks (for dough)',

        '¾ - 1 cup walnuts, coarsely ground',

        '¼ cup granulated sugar (increase to taste, up to ½ cup)',

        '½ teaspoon ground cardamom (or to taste)',

        '¼ cup powdered sugar, for coating',
      ],
      directions: [
        'First, prepare the dough. Put the flour and butter in a large mixing bowl. Rub them together between your fingers until you obtain fine crumbs and no lumps remain. Add the sour cream and egg yolks. Stir with your hands until you obtain a loose dough. Knead until the dough comes together nicely and is tender, 5 to 7 minutes. Divide the dough into 3 parts and shape each into a ball. Wrap the balls in plastic wrap and refrigerate for 30 minutes.',

        'Prepare the filling. In a medium mixing bowl, combine the ground nuts with sugar and cardamom. Stir to mix. Set aside.',

        'Preheat the oven to 380˚F. Line 2 baking sheets with parchment paper (or 1 large baking sheet to fit all the cookies).',

        'Work with one ball at a time and keep the rest covered with a kitchen towel. Using a rolling pin, roll the ball into a thin 11-inch circle. Using a sharp knife, cut the circle into quarters, then cut each quarter into 2 wedges, making 8 wedges total.',

        'Sprinkle about 1 teaspoon of the filling on each wedge, leaving a ¼-inch border along the edges. Roll the wedges up toward the pointed end. Continue with the remaining dough balls in the same manner. Place the roll-ups on the baking sheets, pointy side down, spacing them about 1 inch apart.',

        'Bake on the middle rack of the oven for 20 minutes, or until the roll-ups are light golden around the edges. Remove from the oven.',

        'Allow to cool completely, then dust with powdered sugar.',
      ],
    },
    {
      image: './images/shakarbura.jpg',
      name: 'Shakarbura',
      description:
        'If Samani is a green symbol of Novruz, two desserts, Pakhlava (baklava) and Shakarbura, are the spring holiday’s sweet symbols. No Novruz table is complete without these delicious nut filled delights. Shakarbura is a sweet pastry filled with ground nuts and sugar. In Azerbaijan, making shakarbura usually involves a team-work. Relatives and neighbors get together at somebody’s house and all contribute to the making of this and other Novruz treats. Baked shakarbura is put on the table on a khoncha, a special holiday tray, filled with Novruz desserts, nuts, dried fruits and colored eggs. Shakarbura consists of 3 major elements: the dough, the filling and the pattern. THE DOUGH: The dough for shakarbura can be prepared in several ways: with yeast that makes the dough rise, without yeast, with whole eggs or with egg yolks only, with milk or with water added and so on.  In Azerbaijan, every family has its own special recipe. For this recipe, no requirement for waiting for the dough to rise (a small amount of yeast is added for softness), or refrigerating it overnight. THE FILLING: Shakarbura filling is made by mixing ground nuts (hazelnuts, or almonds, or walnuts) with granulated sugar and powdered cardamom. Hazelnuts and almonds are preferred over walnuts for their light color and subtle taste. But Walnuts are recommended for their rich taste. THE PATTERN: What makes shakarbura really special is the patter that is made on them with a special type of decoration tweezers, called maggash. The most traditional decoration called jinaghi – a V-shaped pine tree or herringone pattern. However, simple patterns, such as trees, flowers, and even names and initials can be made with these tweezers too. If you don’t have a maggash, leave the top of your pastries plain – once they are baked, coat them with powdered sugar.',
      time: 2,
      min: 'hours',
      serving: 36,
      difficulty: 'Difficult',
      ingredients: [
        '1 kg / 2.2 pounds  first grade wheat flour (white only) + 1 tablespoon',

        '400 g / 14 oz unsalted butter, cut into large chunks',

        '5 egg yolks',

        '250 g / 9 oz sour cream (for dough)',

        '1/4 teaspoon salt (for dough)',

        '1/2 teaspoon vanilla powder (optional)',

        '1/2 teaspoon dry yeast',

        '1 tablespoon sugar (for dough)',

        '1/2 cup / 125 ml lukewarm milk (for dough)',

        '700 g / 1.5 pounds skinned hazelnuts, or almonds or walnuts (See recipe for how to skin if readily skinned nuts are not available)',

        '700 g / 1.5 pounds granulated sugar (for filling)',

        '2 teaspoon, or to taste, ground cardamom (for filling)',

        'You’ll also need: mixing bowls, baking sheets, and a maggash (tweezers)',
      ],
      directions: [
        'Prepare the dough.  Put the flour and the butter in a large mixing bowl. Using your hands, rub them together until you obtain fine crumbs. Make sure there are no large crumbs left.',

        'In a small bowl, using  a spoon, mix the eggs yolks, sour cream, salt and vanilla powder.',

        'In another small bowl, put the yeast, 1 tablespoon flour, 1 tablespoon sugar. Fill it with 1/4 cup of  lukewarm milk. Let stand for about 2 minutes.',

        'Add the egg-sour cream mixture (#2), the yeast mixture (#3), to the flour-butter mixture (#1).',

        'Using your hands, mix the ingredients until fully incorporated and a rough and inconsistent dough is obtained. Transfer the dough to your work surface. Put the remaining 1/4 cup of lukewarm milk in a separate bowl. Constantly wetting your hands with milk, knead the dough for a few minutes to make it smooth.',

        'Shape the dough into a ball. Put it back in the bowl, cover with plastic wrap and leave aside to rest for about 30 minutes.',

        'Allow to cool completely, then dust with powdered sugar.',

        'In the meantime, prepare the filling. If you are using already skinned nuts, grind them finely in a food processor. In a mixing bowl, combing the ground nuts with sugar. Add the ground cardamom and vanilla powder. Mix until fully incorporated. To skin hazelnuts and walnuts at home: Place raw hazelnuts in a large frying pan, and roast over medium heat, stirring frequently, until the skins crack and begin to flake off, about 10 minutes. Take care not to burn the nuts. Working with small batches of nuts at a time, place them them on a kitchen cloth and rub with it to remove the skins. Most of the skins will come off although some will still cling to the nut (especially on walnuts).  Do not worry, a little skin will not be that visible in the filling. To skin almonds at home: Put the almonds in a pot and pour boiling water over them to barely cover their tops. Let the almonds sit in the water for about 2 minutes (do not keep them there for too long, or they will lose their crispiness and will be too soft). Drain off the water, pat dry the nuts and slip the skins off by squeezing the almonds between your thumb and fingers.',

        'Divide the dough into 36 balls, each weighing 50 g',

        'Work with one ball at a time, and cover the rest. Roll each ball into a 4 inch (10 cm) circle.',

        'Place the circle in the palm of your hand, slightly folded, and put 2 tablespoons of the filling in the center.',

        'Starting at one end, begin sealing the left and right edges towards the center to obtain a half-moon shape. Sealed shakarbura must be somewhat chubby from the filling and never flat.',

        'Using your thumb and index finger, start pinching and twisting the dough along the seal to decorate the edges.',

        'Arrange the pastry on a baking sheet, lined with parchment (baking) paper. Continue working with the rest of the dough balls, arranging them on the baking sheet as you are finished decorating their edges.',

        'Now decorate the tops. Holding a pastry in one hand,  and a maggash (tweezers) in the other, pinch the dough with the maggash at an angle and slightly lift it upward. Continue until you obtain a row of pattern. Create similar rows, each at an angle to the next one, until the entire surface is decorated.',

        'Bake on the middle rack of the oven preheated to 175C (350F) for 15-20 minutes, or until the edges just begin to change their color and the bottom is light brown. Take care not to overbake the pastries – their tops should be light color when baked. If you did not decorate your pastries with the tweezers, coat them with powdered sugar once they cool off.',
      ],
    },
    {
      image: './images/pakhlava.jpg',
      name: 'Pakhlava',
      description:
        'The title of this pastry comes from its appearance - a diamond, the symbol of fire, which is referred to as a pakhla in Azerbaijani carpet designs. This is one of the holiday sweets that are baked on Novruz Bayram (the festival which celebrates the arrival of Spring), in honor of the stars in the sky. There is also a theory that the word pakhlava comes from the word bakala (baglama), which means “to bind” or “to layer,” i.e. layers of sweet dough that are bound to each other.',
      time: 2,
      min: 'hours',
      serving: 24,
      difficulty: 'Difficult',
      ingredients: [
        '3 cups all-purpose flour',

        '8 ounces unsalted butter, cut into small pieces',

        '1 cup sour cream (for dough)',

        '1 teaspoon baking soda (bicarbonate of soda) (for dough)',

        '1/4 teaspoon salt (for dough)',

        '2 egg yolks (for dough)',

        '2 cups sugar (for filling)',

        '1 tablespoon sugar (for dough)',

        '2 egg whites (for filling)',

        '3 cups (10 ounces) walnuts, ground (they should be somewhat crunchy in the pie, so do not grind finely)',

        '1 egg yolk, to glaze',

        'Handful of walnut halves, to decorate',
      ],
      directions: [
        'Prepare the dough. In a large bowl, combine the flour and butter. Using a pastry blender or a knife or a fork, cut in the butter until coarse meal (pea size crumbs) forms.',

        'In a small bowl combine the sour cream and baking soda and add to the butter mixture. Add the eggs yolks. Toss with your hands until the mixture comes together in a rough mass then knead briefly until you obtain smooth and gentle dough.',

        'Divide the dough into 3 equal parts, forming each one into a thick disk. Wrap each disk in a plastic wrap and chill in the refrigerator for 1 hour.',

        'Prepare the filling. In a mixing bowl, combine the sugar and egg whites. Using an electric mixer, beat until until well blended, 3 minutes. Add the walnuts and stir with a spoon to combine.',

        'Butter the bottom and the sides of a 8 x 12-inch baking pan. Preheat the oven to 350F.',

        'Remove the dough from the refrigerator. Lightly dust your work surface with flour. Using a rolling pin, press firmly to roll out the dough into a rectangle the size to fit the pan. Carefully transfer the rectangle to the prepared pan, gently pressing the dough against the bottom and the sides of the pan. (Also, slightly stretching the dough to the sides and sealing the edges will keep the releasing juices inside.) Repair any tears in the dough.',

        'Spread half of the filling over the dough layer. Roll the second disk in the same way and place on top of the walnut filling. Spread the remaining filling over this layer. Roll the third dough disk and cover the walnut filling with it. Press slightly on top.',

        'Brush with the egg yolk. Using a sharp knife, carefully cut the baklava in cross-hatching diagonals to make diamond shapes (first cut 4 parallel lines lengthwise, then several across and at an angle) , cutting through the filling all the way to the bottom. If you wish, you can also cut the baklava into squares. Pace half a walnut into the middle of each baklava piece and press slightly to adhere to the dough.',

        'Bake on the middle rack of the oven until golden on top, 35 to 45 minutes. Remove from the oven. The baklava will will appear puffed up – this is normal; as it cools off it will settle. Allow to cool completely (Important!) in the pan, then carefully lift out the baklava pieces from the pan. Store in a covered container.',
      ],
    },
    {
      image: './images/badambura.jpg',
      name: 'Badambura',
      description:
        'Badambura is a popular, sweet, multilayered Azerbaijani pastry with a filling made of peeled almonds (badam), sugar, and aromatic spices. Badambura is usually prepared for the spring holiday Novruz along with other pastries such as Pakhlava, Shekerbura, and Shor-Gogal, but can be enjoyed all throughout the year. The name “Badambura” means “almond pie.”',
      time: 2,
      min: 'hours',
      serving: 25,
      difficulty: 'Difficult',
      ingredients: [
        '1 tsp dry yeast',

        '1 tbsp granulated sugar (for yeast mixture)',

        '1 tbsp flour (for yeast mixture)',

        '1/3 cup warm water (for yeast mixture)',

        '1 egg (room temperature) (for dough)',

        '1 yolk (for dough)',

        'pinch of salt (for dough)',

        '1 tbsp vanilla sugar (for dough)',

        '1 cup (½ lb) warm melted unsalted butter (for dough)',

        '1 cup warm milk (for dough)',

        '5 cups all purpose flour',

        '1 lb (450 g) peeled almonds',

        '1 lb (450 g) granulated white sugar (for filling)',

        '1 tsp ground cardamom (for filling)',

        '1 tbsp vanilla sugar (for filling)',

        '1 cup melted clarified butter (for brushing the layers)',

        '1 tbsp powdered sugar (for decoration)',
      ],
      directions: [
        'In a large cup, mix the dry ingredients together (yeast, flour, and sugar). Add 1/3 cup of warm water, mix into a smooth mass, and leave it in a warm place to rise.',

        'While it’s rising, melt the butter over low heat, and lightly warm the milk.',

        'In a large bowl, mix the egg, egg yolk, salt, vanilla sugar, and yeast mixture. Then, add warm milk and warm melted butter and mix it all together.',

        'Begin kneading the dough while slowly adding flour. (The quality of flour can vary, so keep in mind that you may have to add more or less than the amount listed in the ingredients.) Remember to save some flour for dusting the layers.',

        'Continue kneading the dough until it is smooth, soft, and does not stick to your hands.',

        'Move the dough into another clean bowl or pot, cover with plastic wrap and let the dough rise for 1 hour in a warm place. To make the dough rise more quickly, turn on the oven to at least 200°F (93°C) and place the bowl on top of the stove.',

        'Preparing the filling. Blend skinned almonds (not too finely) using a blender or food processor. You can buy peeled almonds, or you can peel them yourself in advance. Simply place almonds in a bowl and cover them with bowling water. Allow them to sit in the water for about a minute, but not much longer or they will become soggy. Immediately drain the almonds using a colander.',

        'The almonds are easiest to peel while still warm. Skin them by squeezing each individual almond between your thumb and forefinger—it should pop right out of its skin. Before blending, they must be completely dried off.',

        'Mix the blended almonds with the sugar, ground cardamom, and vanilla sugar. Your filling is now ready to use!',

        'Preparing the Badambura. Divide the dough into six equal balls.',

        'Cover them to prevent them from drying. Roll out the first ball into a very thin layer (until it’s see-through) and gently brush with warm, melted, clarified butter.',

        'Roll out the second ball of pastry, place it on top of the first layer, and brush with melted butter again. Repeat until all the layers are used.',

        'Roll all your layers together into a tight roulade.',

        'Cut the roulade into equal pieces approximately ½ inch (1.5 cm) thick. Gently open the center of each piece to form a pocket for the stuffing. Put one full tablespoon of stuffing inside and bring the edges of the pocket together to close it. Pinch the edges tightly, and then twist them as you would twist the edges of a Shakarbura or a Cornish pasty.',

        'Then, turn the Badambura down on the twisted edge and place it on a baking sheet.',

        'Pre-heat the oven to 350°F (180°C), and bake the Badambura for approximately 20 minutes (until the bottom is slightly golden-brown and the top is light).',

        'Before serving, let them to cool and dust with powdered sugar (dust only right before serving because the sugar will eventually dissolve).',

        'Serve with tea. Enjoy!',
      ],
    },
    {
      image: './images/tel-halva.jpg',
      name: 'Tel Halva',
      description:
        'The word tel is translated as "wire" or "hair". This is precisely where the dish gets its name from.',
      time: 45,
      min: 'min.',
      serving: 4,
      difficulty: 'Moderate',
      ingredients: [
        'Melted Butter - 250 g',

        'Rice Flour - 300 g',

        'Water - 500 ml',

        'Saffron Infusion - 50 ml',

        'Rose Petal Infusion - 70 ml or Crushed Ginger - 15 g or Cinnamon - 2 g',

        'Sugar - 500 g',
      ],
      directions: [
        'In a large skillet, first melt the butter. Then add in the flour while stirring continuously until it has absorbed all the butter',

        'Now fry the mixture, continuing to stir to avoid lumps, until golden brown.',

        'To prepare the syrup, pour the sugar, saffron infusion (0.2 g of saffron per 40 ml of boiling water), and rose petal infusion (gyulab) into the water and bring to a boil.',

        'Now pour the boiling syrup onto the toasted flour and stir, making sure there are no lumps. Serve on dessert plates. If you don’t have rose petal infusion, sprinkle the top with powdered ginger or cinnamon.',
      ],
    },
    {
      image: './images/kyata.jpg',
      name: 'Kyata (sweet pie)',
      description:
        'The etymology of this word is connected with the word gat, which means "layer" or "layered". There another type of dish called kyata (gutab with greens), but the meaning of these words is essentially the same. However, in this case, the dish signifies a type of sweet bread.',
      time: 2,
      min: 'hours',
      serving: 10,
      difficulty: 'Moderate',
      ingredients: [
        'Flour - 800 g',

        'Sugar - 130 g (for dough)',

        'Vegetable Oil - 100 g (for dough)',

        'Water - 300 ml',

        'Eggs - 2',

        'Salt - 1 pinch (for dough)',

        'Powdered Sugar - 80 g (for filling)',

        'Melted Butter - 300 g (for filling)',

        'Flour - 500 g (for filling)',

        'Vanilla - 5 g (for filling)',

        'Salt - to taste (for filling)',
      ],
      directions: [
        'Start by diluting the yeast and pour in 2 cups of flower. Add a pinch of salt, mix well, and leave in a warm place for half an hour.',

        'Next, pour the mixture into a large bowl, and add butter, sugar, eggs, vanilla, and a pinch of salt. Mix everything well. Then, pour in the flour and knead until you have smooth, pleasant to the touch, dough. Let the dough rest for 1 hour, so that it rises.',

        'For the filling: beat the chilled butter with powdered sugar, and then add vanilla and flour.',

        'After the dough rises, make 10 balls the sizes of a fist and roll them out into round circles with a diameter of 7 to 8 cm.',

        'In the middle of each circle place the filling. Now gather the edges of the dough and flip it, rolling it into a flat cake. Use a fork to pierce the surface.',

        'Coat the top with the beaten eggs and bake the cakes at 200-220 ° C for approximately 20 minutes.',
      ],
    },
    {
      image: './images/firni.jpg',
      name: 'Firni',
      description:
        'Firni is a dessert made from rice flour, which has a light texture and bland flavor, making it much lighter than British and North American baked rice puddings.',
      time: 30,
      min: 'min.',
      serving: 4,
      difficulty: 'Easy',
      ingredients: [
        'Rice Flour or Wheat Starch - 150 g',

        'Milk - 1 litre',

        'Sugar - 100 g',

        'Gyulab (Rose Petal Infusion) - 100 g',

        'Cinnamon - 40 g',

        'Saffron - 0.1 g',

        'Salt - to taste',
      ],
      directions: [
        'Mix the flour (or starch) and milk, and add sugar and salt.',

        'Now boil it over low heat, stirring constantly until thick (to the consistency of cream of wheat) making sure there are no lumps.',

        'Next, pour in the rose petal infusion and sprinkle with cinnamon.',

        'After its ready, spread out the mixture on a dessert plate, and drip the infusion of saffron in the middle. To make the saffron tincture, cover the stamens with 2 tablespoons of boiling water and let sit, covered, for 10 to 15 minutes.',

        'In the middle of each circle place the filling. Now gather the edges of the dough and flip it, rolling it into a flat cake. Use a fork to pierce the surface.',

        'You can serve this either in its hot or cold form, as well for dessert.',
      ],
    },
    {
      image: './images/guymag.jpg',
      name: 'Guymag',
      description:
        'The word "guy" means "belonging to the woman of the household." Usually guymag is prepare for women who have just given birth, in order to strengthen the body, as the dish is very nourishing, not very heavy, and is easily digested. However, because this dish has such a pleasant taste, it is consumed by everyone, especially in the winter months, as it also has warming characteristics.',
      time: 45,
      min: 'min.',
      serving: 4,
      difficulty: 'Easy',
      ingredients: [
        'Wheat Flour - 200 g',

        'Melted Butter - 140 g',

        'Granulated Sugar or Bekmez (Doshab, Thick Juice of Different Kinds of Berries, Most Often Mulberry)- 120 g',

        'Water - 200 ml',

        'Salt - to taste',
      ],
      directions: [
        'Start by mixing the flour and butter in a small saucepan and, while stirring, fry until it takes on a light brown color.',

        'Then, mix thoroughly with water so the consistency is the same as that of sour cream or pancake batter.',

        'Now put the mixture back on low heat and cook until a crust forms. The oil should come to the surface.',

        'Plate with the crust, and in the middle of each serving, make a groove to add sugar or bekmez to. Enjoy hot.',

        'In domestic environments you can add a mixture of different spices, such as ginger, turmeric, coriander seeds, cinnamon, etc to the guymag.',

        'The look of this dish is similar to jelly, but has a more watery consistency. Based on the fat content and the swaying way in which the dish is prepared, guymag resembles guyrug (sheep’s tail fat). On this very basis, the name of guymag is often associated with the word guyrug.',
      ],
    },
    {
      image: './images/fasali.jpg',
      name: 'Fasali',
      description:
        'It is a type of layered bread. Dough is kneaded, thinly rolled with a rolling pin, the surface is brushed with either melted butter or spicy butter , then rolled, twisted, rolled on both sides, flattened again and baked.',
      time: 2,
      min: 'hours.',
      serving: 4,
      difficulty: 'Moderate',
      ingredients: [
        'Sheep’s Tail Fat - 200 g or Melted Butter - 100 g',

        'Flour - 800 g',

        'Sugar - 60 g',

        'Spices (Cardamom, Cinnamon and Ginger) - 2-3 g',

        'Egg Yolk - 1',

        'Salt - to taste',
      ],
      directions: [
        'Knead dough out of the flour, with the addition of yeast, water and salt. After about 1 hour, when the dough is suitable, divide it into pieces of 100 g each and roll to a thickness of 0.5 mm.',

        'Add the mixture of crushed spices to the melted butter and rub it on the top of the rolled out dough. Fold to make 5 to 6 layers and cut into rectangles.',

        'Now roll them up into roulettes and flip them into a vertical position. Press the dough so that it makes a round cake with a diameter of 10 to 12 cm and a thickness of about 1.5 to 2 cm.',

        'Bake in the oven at 180˚C until golden brown.',

        'When serving fasali, sprinkle with powdered sugar. You can also separately serve honey.',
      ],
    },
    {
      image: './images/samani-halva.jpg',
      name: 'Samani Halva',
      description:
        'Samani halva, made from malted wheat, can best be described as a spicy, gooey, chewy treat. Also known as Suhan or Isfahan halva, samani halva is believed to have a range of health benefits, including improving circulation and enhancing mood. One samani halva tradition in Azerbaijan is to make halva communally, using flour from seven different homes. The finished halva is distributed amongst the neighborhood. The name halva covers a range of traditional sweets, popular in Azerbaijan and throughout the Middle East. There are many variations on two basic types of halva: one is a moist, near-liquid sweet made from butter, sugar and flour while the other is harder and is based on nuts or seeds. “Saying halva won’t make your mouth sweet” is a popular Azerbaijani proverb. It means that it’s not enough to talk about something, you have to take action too.',
      time: 2,
      min: 'days',
      serving: 10,
      difficulty: 'Difficult',
      ingredients: [
        '100 g/4 oz wheat',

        '500 g/1 lb 4 oz wheat flour',

        '100 g/4 oz butter',

        '200 g/8 oz doshab (mulberry or grape syrup)',

        '100 g/4 oz crushed walnuts (optional)',

        '100 g/4 oz nutmeg',

        'Pinch of anise, pepper, cinnamon, ground fennel seeds',
      ],
      directions: [
        'Wash the whole wheat grains and rinse. Steep the grains in tepid water and cover with a clean cloth. After 12 hours, drain and rinse thoroughly. Place in a dry container in a dark place or cover with a paper bag to keep the light out. The grains will continue to sprout. Rinse the grains every 8 to 12 hours for 1 day. When the grains have started to sprout roots, they are ready for use. Don’t allow them to sprout for two long or they will start to grow grass.',

        'Rinse and drain the sprouting grains one last time. Squeeze the sprouting grains through gauze or a fine sieve, collecting all the nutritious juice. Discard the chaff.',

        'Make the dough for the halva by mixing the liquid from the grains and the flour in a heavy pan. A cast-iron or copper-bottomed pan is traditional.',

        'Add a chunk of the butter to the pan and start to cook the halva over a low to medium heat, stirring continuously with a spatula (known in Azerbaijani as an arsin). Add more butter to the bottom underneath the dough at regular intervals. When all the butter has been added, leave the samani halva to cook for 4 to 8 hours over a low flame. Stir frequently.',

        'When the dough is cooked, add the doshab (mulberry or grape syrup), crushed walnuts (if using) and spices and stir well.',

        'Shape the halva into rounds, some 12 cm/4.5″ in diameter.',

        'Decorate with walnut halves on top and leave to cool.',
      ],
    },
    {
      image: './images/shaki-halva.jpg',
      name: 'Shaki Halva',
      description:
        'Shaki halva or pakhlava (Azerbaijani: Şəki halvası və ya Şəki paxlavası) is a type of dessert specific to Shaki region of Azerbaijan. Although Shaki halva has its own recipe and characteristics, this type of halva is thought to have originated in ancient Mesopotamia. There are some stories known in Shaki regarding Shaki halva`s origins. According to one, it was prepared by cooks of the Shaki khan who loved sweet desserts and ordered to make something very sweet. As a result, the cooks prepared Shaki halva and it became very popular in this region. Another story assumes that the origins of this halva came from Tabriz as Mashadi Huseyn, a merchant from Tabriz, came to Shaki and informed local merchants about the recipe of halva',
      time: 3,
      min: 'hours',
      serving: 10,
      difficulty: 'Difficult',
      ingredients: [
        'Rice flour - 280 g',

        'Sugar - 420 g',

        'Hazelnuts - 140 g',

        'Citric acid - 1 g',

        'Coriander seeds - 2 g',

        'Cardamom (hil) - 0.5 g',

        'Saffron - 0.2 g',
      ],
      directions: [
        'Liquid dough is made by adding 120 ml of water to rice flour.',

        'The dough is made into a net-shaped ring by pouring it from a special funnel with 11 eyes into a heated bowl.',

        'Hazelnut kernels are ground, mixed with crushed coriander seeds and cardamom.',

        'Miss tray is greased, 8 pieces are placed on top of each other and poured inside. It is placed in a circle with 5 ties.',

        'The surface of Pakhlava is square with saffron. Cook both faces over charcoal fire for 15-20 minutes.',

        'The pakhlava/halva is soaked in hot syrup made from sugar, citric acid and 100 ml of water. It is stored for 8-10 hours so that the syrup soaks into the halva.',
      ],
    },
  ],
};
