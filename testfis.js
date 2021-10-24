var fis = require('frequent-itemset')

var data = [
    [
        "chocolate"
    ],
    [
        "sausage",
        "rolls/buns",
        "soda",
        "chocolate"
    ],
    [
        "hamburger meat",
        "other vegetables",
        "rolls/buns",
        "spices",
        "bottled water",
        "hygiene articles",
        "napkins"
    ],
    [
        "sausage",
        "beef",
        "whole milk"
    ],
    [
        "red/blush wine"
    ],
    [
        "beef",
        "citrus fruit",
        "berries",
        "root vegetables",
        "brown bread",
        "detergent"
    ],
    [
        "hamburger meat",
        "other vegetables",
        "whole milk",
        "frozen vegetables",
        "domestic eggs",
        "soda",
        "dishes"
    ],
    [
        "frankfurter",
        "sausage",
        "long life bakery product",
        "waffles"
    ],
    [
        "curd",
        "dessert",
        "soda",
        "salty snack",
        "waffles",
        "cake bar",
        "chocolate",
        "shopping bags"
    ],
    [
        "pork",
        "root vegetables",
        "other vegetables",
        "whole milk",
        "dishes"
    ],
    [
        "frankfurter",
        "meat",
        "tropical fruit",
        "onions",
        "oil",
        "baking powder",
        "tea",
        "cling film/bags"
    ],
    [
        "citrus fruit",
        "other vegetables",
        "rolls/buns",
        "salty snack",
        "shopping bags"
    ],
    [
        "other vegetables",
        "yogurt",
        "brown bread",
        "instant coffee"
    ],
    [
        "berries",
        "root vegetables",
        "other vegetables",
        "curd",
        "butter milk",
        "cream cheese ",
        "roll products ",
        "margarine",
        "misc. beverages",
        "specialty chocolate",
        "detergent"
    ],
    [
        "sausage",
        "tropical fruit",
        "condensed milk",
        "rolls/buns"
    ],
    [
        "hamburger meat"
    ],
    [
        "domestic eggs",
        "rolls/buns",
        "dish cleaner",
        "hygiene articles"
    ],
    [
        "specialty chocolate"
    ],
    [
        "sausage",
        "whole milk",
        "yogurt",
        "brown bread",
        "cereals",
        "bottled water",
        "soda"
    ],
    [
        "citrus fruit",
        "tropical fruit",
        "grapes",
        "other vegetables",
        "frozen vegetables",
        "pickled vegetables",
        "fruit/vegetable juice",
        "liquor",
        "rum",
        "liquor (appetizer)",
        "candy",
        "cling film/bags"
    ],
    [
        "canned beer"
    ],
    [
        "chicken",
        "pork",
        "hamburger meat",
        "pip fruit",
        "nuts/prunes",
        "root vegetables",
        "other vegetables",
        "whole milk",
        "spread cheese",
        "frozen potato products",
        "brown bread",
        "Instant food products",
        "soda",
        "fruit/vegetable juice",
        "shopping bags"
    ],
    [
        "pork",
        "berries",
        "whipped/sour cream",
        "beverages",
        "flour",
        "oil",
        "soda",
        "chocolate",
        "newspapers"
    ],
    [
        "beverages",
        "rolls/buns",
        "soda",
        "misc. beverages",
        "liqueur",
        "cake bar"
    ],
    [
        "berries",
        "root vegetables",
        "whole milk",
        "beverages",
        "sugar",
        "soups",
        "coffee",
        "shopping bags"
    ],
    [
        "tropical fruit",
        "root vegetables",
        "other vegetables",
        "domestic eggs",
        "white bread",
        "brown bread",
        "canned vegetables",
        "soda",
        "fruit/vegetable juice",
        "rum"
    ],
    [
        "chocolate"
    ],
    [
        "pork",
        "whole milk",
        "curd",
        "yogurt",
        "whipped/sour cream",
        "cream cheese ",
        "domestic eggs",
        "white bread",
        "sugar",
        "baking powder",
        "coffee",
        "cocoa drinks",
        "salty snack",
        "waffles",
        "candy",
        "napkins"
    ],
    [
        "turkey",
        "tropical fruit",
        "pip fruit",
        "root vegetables",
        "other vegetables",
        "curd",
        "butter milk",
        "yogurt",
        "curd cheese",
        "rice",
        "vinegar",
        "margarine"
    ],
    [
        "onions"
    ],
    [
        "bottled beer",
        "liquor"
    ],
    [
        "other vegetables",
        "yogurt",
        "oil",
        "dental care"
    ],
    [
        "citrus fruit",
        "cake bar",
        "baby cosmetics",
        "shopping bags"
    ],
    [
        "frankfurter",
        "beef",
        "tropical fruit",
        "pip fruit",
        "butter",
        "yogurt",
        "dog food",
        "long life bakery product",
        "cookware",
        "newspapers"
    ],
    [
        "soda",
        "softener"
    ],
    [
        "frankfurter",
        "bottled beer"
    ],
    [
        "canned beer"
    ],
    [
        "sausage",
        "whole milk",
        "brown bread",
        "soda"
    ],
    [
        "citrus fruit",
        "tropical fruit",
        "whole milk",
        "rolls/buns",
        "bottled water",
        "long life bakery product",
        "decalcifier",
        "newspapers"
    ],
    [
        "pastry",
        "soda"
    ],
    [
        "sliced cheese",
        "rolls/buns",
        "margarine",
        "soda",
        "shopping bags"
    ],
    [
        "other vegetables",
        "rolls/buns"
    ],
    [
        "canned beer"
    ],
    [
        "sausage",
        "meat",
        "pip fruit",
        "other vegetables",
        "yogurt",
        "rolls/buns",
        "brown bread",
        "bottled water",
        "soda",
        "fruit/vegetable juice",
        "newspapers"
    ],
    [
        "tropical fruit",
        "pip fruit",
        "root vegetables",
        "whole milk",
        "yogurt",
        "rolls/buns",
        "sweet spreads",
        "cat food",
        "pet care",
        "hygiene articles",
        "shopping bags"
    ],
    [
        "whole milk"
    ],
    [
        "tropical fruit",
        "yogurt",
        "processed cheese",
        "rolls/buns",
        "bottled water",
        "soda",
        "misc. beverages",
        "female sanitary products"
    ],
    [
        "whole milk",
        "margarine",
        "pot plants"
    ],
    [
        "domestic eggs"
    ],
    [
        "bottled beer",
        "shopping bags"
    ],
    [
        "pork",
        "berries",
        "whole milk",
        "dessert",
        "whipped/sour cream",
        "fruit/vegetable juice",
        "candy"
    ],
    [
        "other vegetables",
        "whole milk",
        "butter",
        "yogurt",
        "cream cheese ",
        "vinegar",
        "pet care",
        "fruit/vegetable juice",
        "cling film/bags"
    ],
    [
        "chicken",
        "canned beer",
        "shopping bags"
    ],
    [
        "sausage",
        "chicken",
        "other vegetables",
        "whole milk",
        "yogurt",
        "cream cheese ",
        "brown bread",
        "soda"
    ],
    [
        "rolls/buns",
        "sugar",
        "sweet spreads",
        "chewing gum",
        "newspapers"
    ],
    [
        "other vegetables",
        "whole milk",
        "soda",
        "chocolate"
    ],
    [
        "soda",
        "bottled beer"
    ],
    [
        "tropical fruit",
        "grapes",
        "other vegetables",
        "bottled beer",
        "popcorn"
    ],
    [
        "pip fruit",
        "nuts/prunes",
        "curd",
        "frozen dessert",
        "sweet spreads",
        "light bulbs"
    ],
    [
        "pip fruit",
        "pastry"
    ],
    [
        "onions",
        "yogurt",
        "frozen vegetables"
    ],
    [
        "yogurt",
        "pastry"
    ],
    [
        "hard cheese",
        "soda"
    ],
    [
        "other vegetables",
        "yogurt",
        "whipped/sour cream",
        "newspapers"
    ],
    [
        "whole milk",
        "cat food",
        "bottled water",
        "napkins"
    ],
    [
        "UHT-milk",
        "margarine",
        "bottled water",
        "soda"
    ],
    [
        "processed cheese"
    ],
    [
        "whole milk",
        "yogurt",
        "frozen potato products",
        "brown bread",
        "napkins"
    ],
    [
        "tropical fruit",
        "cat food",
        "bottled water",
        "soda",
        "bottled beer",
        "white wine",
        "hygiene articles"
    ],
    [
        "frankfurter",
        "photo/film"
    ],
    [
        "herbs"
    ],
    [
        "sausage",
        "beef",
        "hamburger meat",
        "yogurt",
        "soft cheese",
        "cream cheese ",
        "domestic eggs",
        "rolls/buns",
        "pastry",
        "instant coffee"
    ],
    [
        "UHT-milk",
        "domestic eggs",
        "sugar",
        "fruit/vegetable juice",
        "newspapers"
    ],
    [
        "whole milk",
        "curd",
        "dessert",
        "shopping bags"
    ],
    [
        "chicken",
        "citrus fruit",
        "tropical fruit",
        "other vegetables",
        "whole milk",
        "whipped/sour cream",
        "rolls/buns",
        "pastry",
        "flour",
        "specialty chocolate"
    ],
    [
        "citrus fruit",
        "root vegetables",
        "other vegetables",
        "whipped/sour cream",
        "processed cheese",
        "rolls/buns",
        "newspapers"
    ],
    [
        "whole milk",
        "frozen dessert",
        "margarine",
        "snack products"
    ],
    [
        "other vegetables",
        "specialty cheese"
    ],
    [
        "frozen meals",
        "soda",
        "shopping bags"
    ],
    [
        "rolls/buns",
        "brown bread"
    ],
    [
        "waffles"
    ],
    [
        "whole milk",
        "beverages"
    ],
    [
        "canned beer"
    ],
    [
        "other vegetables",
        "dessert",
        "candy",
        "abrasive cleaner",
        "dishes",
        "cling film/bags",
        "candles"
    ],
    [
        "beef",
        "root vegetables",
        "herbs",
        "packaged fruit/vegetables",
        "whipped/sour cream",
        "cream cheese ",
        "vinegar",
        "oil",
        "margarine",
        "soups",
        "pickled vegetables",
        "meat spreads",
        "canned fish",
        "fruit/vegetable juice",
        "candles"
    ],
    [
        "rolls/buns",
        "soda",
        "canned beer"
    ],
    [
        "ham",
        "root vegetables",
        "other vegetables",
        "dessert",
        "brown bread",
        "pasta",
        "margarine",
        "bottled water",
        "fruit/vegetable juice",
        "red/blush wine"
    ],
    [
        "frankfurter",
        "sausage",
        "pork",
        "sliced cheese",
        "pastry",
        "margarine",
        "newspapers"
    ],
    [
        "bottled water"
    ],
    [
        "specialty chocolate"
    ],
    [
        "packaged fruit/vegetables"
    ],
    [
        "photo/film"
    ],
    [
        "coffee"
    ],
    [
        "candles"
    ],
    [
        "condensed milk",
        "soda"
    ],
    [
        "dessert",
        "UHT-milk",
        "cream cheese ",
        "domestic eggs",
        "brown bread",
        "coffee",
        "bottled water",
        "soda",
        "shopping bags"
    ],
    [
        "root vegetables",
        "shopping bags"
    ],
    [
        "white wine"
    ],
    [
        "rolls/buns"
    ],
    [
        "tropical fruit",
        "pip fruit",
        "UHT-milk",
        "sugar",
        "cat food",
        "coffee",
        "long life bakery product",
        "chocolate",
        "hygiene articles"
    ],
    [
        "frankfurter",
        "other vegetables",
        "frozen vegetables",
        "waffles",
        "cake bar"
    ],
    [
        "frozen meals"
    ],
    [
        "canned beer"
    ],
    [
        "frozen meals",
        "rolls/buns",
        "brown bread"
    ],
    [
        "pip fruit",
        "rolls/buns",
        "pet care",
        "soda",
        "waffles",
        "chocolate marshmallow",
        "napkins"
    ],
    [
        "misc. beverages",
        "fruit/vegetable juice"
    ],
    [
        "berries"
    ],
    [
        "frankfurter",
        "other vegetables",
        "red/blush wine",
        "shopping bags"
    ],
    [
        "other vegetables"
    ],
    [
        "meat",
        "chicken",
        "hamburger meat",
        "citrus fruit",
        "whole milk",
        "butter",
        "butter milk",
        "yogurt",
        "soft cheese",
        "frozen vegetables",
        "domestic eggs",
        "rolls/buns",
        "fruit/vegetable juice",
        "seasonal products"
    ],
    [
        "turkey",
        "tropical fruit",
        "root vegetables",
        "other vegetables",
        "curd",
        "whipped/sour cream",
        "liquor (appetizer)"
    ],
    [
        "citrus fruit",
        "root vegetables",
        "onions",
        "other vegetables",
        "domestic eggs",
        "white bread",
        "cake bar"
    ],
    [
        "other vegetables",
        "whole milk",
        "rolls/buns",
        "brown bread",
        "soda",
        "hygiene articles",
        "newspapers"
    ],
    [
        "butter milk",
        "domestic eggs",
        "rolls/buns",
        "soda",
        "specialty chocolate"
    ],
    [
        "beef"
    ],
    [
        "sausage",
        "meat",
        "other vegetables",
        "yogurt",
        "whipped/sour cream",
        "domestic eggs",
        "semi-finished bread",
        "instant coffee",
        "bottled water",
        "soda",
        "bottled beer",
        "newspapers",
        "shopping bags"
    ],
    [
        "whole milk",
        "beverages",
        "frozen vegetables",
        "margarine",
        "liquor (appetizer)",
        "newspapers"
    ],
    [
        "curd",
        "whipped/sour cream",
        "pudding powder",
        "coffee",
        "long life bakery product"
    ],
    [
        "finished products",
        "bottled water",
        "specialty bar",
        "newspapers"
    ],
    [
        "grapes",
        "butter",
        "soft cheese",
        "canned beer"
    ],
    [
        "salty snack"
    ],
    [
        "tropical fruit",
        "dessert",
        "yogurt",
        "syrup",
        "hygiene articles"
    ],
    [
        "pork",
        "rolls/buns",
        "liquor",
        "salty snack",
        "popcorn"
    ],
    [
        "whole milk",
        "whipped/sour cream"
    ],
    [
        "canned beer"
    ],
    [
        "pip fruit",
        "root vegetables",
        "other vegetables",
        "whole milk",
        "rolls/buns",
        "brown bread",
        "canned beer",
        "newspapers",
        "pot plants"
    ],
    [
        "other vegetables",
        "curd"
    ],
    [
        "sausage",
        "beef",
        "tropical fruit",
        "other vegetables",
        "butter",
        "yogurt",
        "UHT-milk",
        "condensed milk",
        "sliced cheese",
        "salt",
        "soups",
        "sweet spreads",
        "newspapers"
    ],
    [
        "meat",
        "curd",
        "yogurt",
        "ice cream",
        "oil",
        "canned fish",
        "soda",
        "fruit/vegetable juice",
        "seasonal products"
    ],
    [
        "canned beer"
    ],
    [
        "tropical fruit",
        "berries",
        "root vegetables",
        "other vegetables",
        "yogurt",
        "cream cheese ",
        "rolls/buns",
        "soda",
        "shopping bags"
    ],
    [
        "yogurt",
        "bottled water"
    ],
    [
        "UHT-milk",
        "condensed milk",
        "coffee",
        "cling film/bags"
    ],
    [
        "frankfurter",
        "sausage",
        "tropical fruit",
        "root vegetables",
        "whole milk",
        "sliced cheese",
        "frozen vegetables",
        "mustard",
        "pickled vegetables",
        "salty snack"
    ],
    [
        "skin care",
        "napkins"
    ],
    [
        "pip fruit",
        "whole milk",
        "ready soups",
        "canned fish",
        "soda"
    ],
    [
        "soda",
        "long life bakery product"
    ],
    [
        "dessert"
    ],
    [
        "pork",
        "tropical fruit"
    ],
    [
        "pastry"
    ],
    [
        "whole milk",
        "dessert",
        "coffee",
        "bottled water"
    ],
    [
        "other vegetables",
        "rolls/buns",
        "hair spray"
    ],
    [
        "domestic eggs"
    ],
    [
        "citrus fruit",
        "pip fruit",
        "root vegetables",
        "UHT-milk",
        "coffee",
        "candles"
    ],
    [
        "frankfurter",
        "whole milk",
        "rolls/buns",
        "newspapers"
    ],
    [
        "frozen fruits",
        "soda",
        "specialty bar"
    ],
    [
        "frankfurter",
        "chicken",
        "hamburger meat",
        "other vegetables",
        "dessert",
        "UHT-milk",
        "oil",
        "canned vegetables",
        "cake bar"
    ],
    [
        "beef"
    ],
    [
        "other vegetables",
        "curd",
        "pastry",
        "pasta",
        "hygiene articles",
        "flower (seeds)"
    ],
    [
        "tropical fruit",
        "dessert",
        "yogurt",
        "sliced cheese",
        "cream cheese ",
        "rolls/buns",
        "brown bread",
        "canned vegetables",
        "fruit/vegetable juice"
    ],
    [
        "zwieback"
    ],
    [
        "beef",
        "whole milk",
        "curd",
        "white bread",
        "napkins"
    ],
    [
        "sausage",
        "chicken",
        "hamburger meat",
        "other vegetables",
        "whole milk",
        "butter milk",
        "whipped/sour cream",
        "white bread"
    ],
    [
        "pip fruit",
        "other vegetables",
        "whole milk",
        "butter",
        "whipped/sour cream",
        "sliced cheese",
        "pastry",
        "hygiene articles",
        "napkins"
    ],
    [
        "sausage",
        "bottled water"
    ],
    [
        "beef",
        "rolls/buns"
    ],
    [
        "pip fruit",
        "root vegetables",
        "frozen vegetables",
        "rolls/buns",
        "semi-finished bread",
        "soda",
        "white wine",
        "newspapers"
    ],
    [
        "turkey",
        "tropical fruit",
        "root vegetables",
        "other vegetables",
        "butter",
        "whipped/sour cream",
        "hard cheese",
        "ketchup",
        "fruit/vegetable juice",
        "candy",
        "napkins"
    ],
    [
        "citrus fruit",
        "pip fruit",
        "other vegetables",
        "whole milk",
        "frozen vegetables",
        "bottled water"
    ],
    [
        "dessert"
    ],
    [
        "other vegetables"
    ],
    [
        "turkey",
        "root vegetables",
        "other vegetables",
        "whole milk",
        "butter milk",
        "UHT-milk",
        "brown bread",
        "bottled water"
    ],
    [
        "pork"
    ],
    [
        "pastry",
        "canned beer",
        "male cosmetics",
        "newspapers"
    ],
    [
        "pastry",
        "soda",
        "canned beer",
        "white wine",
        "newspapers"
    ],
    [
        "sausage",
        "yogurt",
        "rolls/buns"
    ],
    [
        "beverages",
        "specialty bar"
    ],
    [
        "onions"
    ],
    [
        "ham"
    ],
    [
        "soda"
    ],
    [
        "tropical fruit",
        "dessert",
        "soft cheese",
        "brown bread",
        "shopping bags"
    ],
    [
        "sausage",
        "whole milk",
        "canned beer"
    ],
    [
        "bottled water"
    ],
    [
        "soda",
        "snack products",
        "detergent"
    ],
    [
        "beef",
        "citrus fruit",
        "pip fruit",
        "yogurt",
        "condensed milk",
        "cream cheese ",
        "white bread",
        "dish cleaner",
        "hygiene articles",
        "dishes",
        "shopping bags"
    ],
    [
        "soda"
    ],
    [
        "chicken",
        "citrus fruit",
        "tropical fruit",
        "pip fruit",
        "whole milk",
        "white bread"
    ],
    [
        "rolls/buns",
        "soda"
    ],
    [
        "bottled beer",
        "canned beer"
    ],
    [
        "yogurt",
        "pastry",
        "soups",
        "detergent",
        "flower (seeds)"
    ],
    [
        "frozen fish",
        "chocolate marshmallow",
        "candy",
        "male cosmetics"
    ],
    [
        "citrus fruit",
        "tropical fruit",
        "rolls/buns",
        "oil",
        "mustard",
        "soups",
        "sweet spreads",
        "soda",
        "syrup",
        "canned beer",
        "waffles",
        "chocolate",
        "specialty bar",
        "dish cleaner",
        "baby cosmetics",
        "cookware"
    ],
    [
        "other vegetables",
        "whole milk",
        "pet care",
        "soda",
        "canned beer",
        "salty snack"
    ],
    [
        "dessert",
        "rolls/buns",
        "waffles"
    ],
    [
        "other vegetables",
        "brown bread"
    ],
    [
        "tropical fruit",
        "whole milk",
        "long life bakery product",
        "chocolate"
    ],
    [
        "tropical fruit",
        "root vegetables",
        "whole milk",
        "condensed milk",
        "rolls/buns",
        "bottled beer",
        "waffles"
    ],
    [
        "frankfurter",
        "hygiene articles"
    ],
    [
        "frankfurter",
        "rolls/buns"
    ],
    [
        "whole milk",
        "oil",
        "candles"
    ],
    [
        "canned beer"
    ],
    [
        "citrus fruit",
        "brown bread",
        "pastry",
        "white wine",
        "chocolate",
        "shopping bags"
    ],
    [
        "coffee",
        "fruit/vegetable juice"
    ],
    [
        "frozen meals",
        "frozen potato products",
        "coffee"
    ],
    [
        "hamburger meat",
        "cream cheese ",
        "sweet spreads",
        "coffee",
        "canned beer",
        "cling film/bags",
        "shopping bags"
    ],
    [
        "sausage",
        "other vegetables",
        "whipped/sour cream",
        "ice cream",
        "domestic eggs",
        "rolls/buns",
        "coffee",
        "bottled water",
        "newspapers"
    ],
    [
        "bottled beer"
    ],
    [
        "bottled water",
        "soda"
    ],
    [
        "root vegetables",
        "other vegetables",
        "whole milk",
        "butter milk",
        "frozen meals"
    ],
    [
        "citrus fruit",
        "pastry"
    ],
    [
        "frankfurter",
        "sausage",
        "chicken",
        "citrus fruit",
        "root vegetables",
        "herbs",
        "packaged fruit/vegetables",
        "whole milk",
        "salt",
        "sugar",
        "bottled beer",
        "napkins"
    ],
    [
        "whole milk"
    ],
    [
        "other vegetables",
        "whole milk",
        "dessert",
        "cream cheese ",
        "sugar",
        "dishes"
    ],
    [
        "sausage",
        "soda"
    ],
    [
        "rolls/buns",
        "soda"
    ],
    [
        "berries",
        "whole milk",
        "curd",
        "yogurt",
        "rolls/buns",
        "pastry",
        "honey",
        "chocolate"
    ],
    [
        "bottled water"
    ],
    [
        "whole milk",
        "curd",
        "rolls/buns",
        "bottled water",
        "fruit/vegetable juice",
        "soap"
    ],
    [
        "rolls/buns"
    ],
    [
        "hamburger meat",
        "soda",
        "rum",
        "pot plants"
    ],
    [
        "dessert",
        "canned beer"
    ],
    [
        "pip fruit",
        "UHT-milk",
        "semi-finished bread",
        "margarine",
        "bottled water",
        "cake bar",
        "shopping bags"
    ],
    [
        "canned beer"
    ],
    [
        "meat",
        "root vegetables",
        "onions",
        "herbs",
        "other vegetables",
        "whole milk",
        "flour",
        "soda",
        "seasonal products"
    ],
    [
        "butter",
        "UHT-milk",
        "domestic eggs",
        "waffles"
    ],
    [
        "meat",
        "beef",
        "other vegetables",
        "butter",
        "frozen fish",
        "bottled water",
        "napkins"
    ],
    [
        "ice cream",
        "bottled water",
        "soda"
    ],
    [
        "chicken",
        "pork",
        "beef",
        "other vegetables",
        "whole milk",
        "butter",
        "whipped/sour cream",
        "soft cheese",
        "cream cheese ",
        "processed cheese",
        "frozen vegetables",
        "frozen fruits",
        "pastry",
        "sugar",
        "soda",
        "long life bakery product",
        "waffles",
        "chocolate marshmallow",
        "candy"
    ],
    [
        "beef",
        "yogurt",
        "white bread",
        "flour",
        "soda",
        "fruit/vegetable juice",
        "bottled beer",
        "brandy",
        "cooking chocolate"
    ],
    [
        "pork",
        "tropical fruit",
        "pip fruit",
        "nuts/prunes",
        "other vegetables",
        "frozen meals",
        "margarine",
        "newspapers"
    ],
    [
        "frankfurter",
        "whole milk",
        "yogurt",
        "napkins"
    ],
    [
        "ham",
        "pork",
        "shopping bags"
    ],
    [
        "sausage",
        "pip fruit",
        "UHT-milk",
        "soups",
        "sauces",
        "cat food",
        "newspapers"
    ],
    [
        "citrus fruit",
        "whipped/sour cream",
        "pastry"
    ],
    [
        "sugar",
        "bottled water",
        "soda",
        "fruit/vegetable juice",
        "salty snack",
        "popcorn"
    ],
    [
        "UHT-milk",
        "pastry",
        "margarine"
    ],
    [
        "citrus fruit",
        "whole milk",
        "pastry"
    ],
    [
        "bottled beer",
        "brandy",
        "specialty chocolate"
    ],
    [
        "hamburger meat",
        "brown bread",
        "semi-finished bread"
    ],
    [
        "white wine"
    ],
    [
        "rolls/buns",
        "margarine"
    ],
    [
        "bottled water",
        "soda",
        "napkins"
    ],
    [
        "bottled water"
    ],
    [
        "pork"
    ],
    [
        "whole milk",
        "yogurt"
    ],
    [
        "finished products",
        "other vegetables",
        "butter",
        "cream cheese ",
        "processed cheese",
        "domestic eggs",
        "rolls/buns",
        "pastry",
        "long life bakery product",
        "candy"
    ],
    [
        "sausage",
        "butter",
        "pastry",
        "vinegar",
        "margarine"
    ],
    [
        "frankfurter",
        "tropical fruit",
        "whole milk",
        "brown bread",
        "mustard",
        "baking powder",
        "meat spreads",
        "fruit/vegetable juice",
        "shopping bags"
    ],
    [
        "other vegetables"
    ],
    [
        "beef",
        "whole milk",
        "yogurt",
        "pastry"
    ],
    [
        "whole milk",
        "butter",
        "curd",
        "processed cheese",
        "rolls/buns",
        "brown bread",
        "misc. beverages",
        "long life bakery product"
    ],
    [
        "tropical fruit",
        "dessert",
        "tidbits",
        "pastry",
        "waffles",
        "cleaner"
    ],
    [
        "tropical fruit",
        "canned vegetables",
        "bottled beer",
        "specialty chocolate"
    ],
    [
        "hamburger meat",
        "other vegetables",
        "yogurt",
        "brown bread",
        "pastry",
        "cat food",
        "abrasive cleaner",
        "dishes"
    ],
    [
        "soda",
        "canned beer"
    ],
    [
        "sausage",
        "rolls/buns",
        "soda",
        "chocolate"
    ],
    [
        "hamburger meat",
        "other vegetables",
        "rolls/buns",
        "spices",
        "bottled water",
        "hygiene articles",
        "napkins"
    ],
    [
        "sausage",
        "beef",
        "whole milk"
    ],
    [
        "red/blush wine"
    ],
    [
        "beef",
        "citrus fruit",
        "berries",
        "root vegetables",
        "brown bread",
        "detergent"
    ],
    [
        "hamburger meat",
        "other vegetables",
        "whole milk",
        "frozen vegetables",
        "domestic eggs",
        "soda",
        "dishes"
    ],
    [
        "frankfurter",
        "sausage",
        "long life bakery product",
        "waffles"
    ],
    [
        "curd",
        "dessert",
        "soda",
        "salty snack",
        "waffles",
        "cake bar",
        "chocolate",
        "shopping bags"
    ],
    [
        "pork",
        "root vegetables",
        "other vegetables",
        "whole milk",
        "dishes"
    ],
    [
        "frankfurter",
        "meat",
        "tropical fruit",
        "onions",
        "oil",
        "baking powder",
        "tea",
        "cling film/bags"
    ],
    [
        "citrus fruit",
        "other vegetables",
        "rolls/buns",
        "salty snack",
        "shopping bags"
    ],
    [
        "other vegetables",
        "yogurt",
        "brown bread",
        "instant coffee"
    ],
    [
        "berries",
        "root vegetables",
        "other vegetables",
        "curd",
        "butter milk",
        "cream cheese ",
        "roll products ",
        "margarine",
        "misc. beverages",
        "specialty chocolate",
        "detergent"
    ],
    [
        "sausage",
        "tropical fruit",
        "condensed milk",
        "rolls/buns"
    ],
    [
        "hamburger meat"
    ],
    [
        "domestic eggs",
        "rolls/buns",
        "dish cleaner",
        "hygiene articles"
    ],
    [
        "specialty chocolate"
    ],
    [
        "sausage",
        "whole milk",
        "yogurt",
        "brown bread",
        "cereals",
        "bottled water",
        "soda"
    ],
    [
        "citrus fruit",
        "tropical fruit",
        "grapes",
        "other vegetables",
        "frozen vegetables",
        "pickled vegetables",
        "fruit/vegetable juice",
        "liquor",
        "rum",
        "liquor (appetizer)",
        "candy",
        "cling film/bags"
    ],
    [
        "canned beer"
    ],
    [
        "chicken",
        "pork",
        "hamburger meat",
        "pip fruit",
        "nuts/prunes",
        "root vegetables",
        "other vegetables",
        "whole milk",
        "spread cheese",
        "frozen potato products",
        "brown bread",
        "Instant food products",
        "soda",
        "fruit/vegetable juice",
        "shopping bags"
    ],
    [
        "pork",
        "berries",
        "whipped/sour cream",
        "beverages",
        "flour",
        "oil",
        "soda",
        "chocolate",
        "newspapers"
    ],
    [
        "beverages",
        "rolls/buns",
        "soda",
        "misc. beverages",
        "liqueur",
        "cake bar"
    ],
    [
        "berries",
        "root vegetables",
        "whole milk",
        "beverages",
        "sugar",
        "soups",
        "coffee",
        "shopping bags"
    ],
    [
        "tropical fruit",
        "root vegetables",
        "other vegetables",
        "domestic eggs",
        "white bread",
        "brown bread",
        "canned vegetables",
        "soda",
        "fruit/vegetable juice",
        "rum"
    ],
    [
        "chocolate"
    ],
    [
        "pork",
        "whole milk",
        "curd",
        "yogurt",
        "whipped/sour cream",
        "cream cheese ",
        "domestic eggs",
        "white bread",
        "sugar",
        "baking powder",
        "coffee",
        "cocoa drinks",
        "salty snack",
        "waffles",
        "candy",
        "napkins"
    ],
    [
        "turkey",
        "tropical fruit",
        "pip fruit",
        "root vegetables",
        "other vegetables",
        "curd",
        "butter milk",
        "yogurt",
        "curd cheese",
        "rice",
        "vinegar",
        "margarine"
    ],
    [
        "onions"
    ],
    [
        "bottled beer",
        "liquor"
    ],
    [
        "other vegetables",
        "yogurt",
        "oil",
        "dental care"
    ],
    [
        "citrus fruit",
        "cake bar",
        "baby cosmetics",
        "shopping bags"
    ],
    [
        "frankfurter",
        "beef",
        "tropical fruit",
        "pip fruit",
        "butter",
        "yogurt",
        "dog food",
        "long life bakery product",
        "cookware",
        "newspapers"
    ],
    [
        "soda",
        "softener"
    ],
    [
        "frankfurter",
        "bottled beer"
    ],
    [
        "canned beer"
    ],
    [
        "sausage",
        "whole milk",
        "brown bread",
        "soda"
    ],
    [
        "citrus fruit",
        "tropical fruit",
        "whole milk",
        "rolls/buns",
        "bottled water",
        "long life bakery product",
        "decalcifier",
        "newspapers"
    ],
    [
        "pastry",
        "soda"
    ],
    [
        "sliced cheese",
        "rolls/buns",
        "margarine",
        "soda",
        "shopping bags"
    ],
    [
        "other vegetables",
        "rolls/buns"
    ],
    [
        "canned beer"
    ],
    [
        "sausage",
        "meat",
        "pip fruit",
        "other vegetables",
        "yogurt",
        "rolls/buns",
        "brown bread",
        "bottled water",
        "soda",
        "fruit/vegetable juice",
        "newspapers"
    ],
    [
        "tropical fruit",
        "pip fruit",
        "root vegetables",
        "whole milk",
        "yogurt",
        "rolls/buns",
        "sweet spreads",
        "cat food",
        "pet care",
        "hygiene articles",
        "shopping bags"
    ],
    [
        "whole milk"
    ],
    [
        "tropical fruit",
        "yogurt",
        "processed cheese",
        "rolls/buns",
        "bottled water",
        "soda",
        "misc. beverages",
        "female sanitary products"
    ],
    [
        "whole milk",
        "margarine",
        "pot plants"
    ],
    [
        "domestic eggs"
    ],
    [
        "bottled beer",
        "shopping bags"
    ],
    [
        "pork",
        "berries",
        "whole milk",
        "dessert",
        "whipped/sour cream",
        "fruit/vegetable juice",
        "candy"
    ],
    [
        "other vegetables",
        "whole milk",
        "butter",
        "yogurt",
        "cream cheese ",
        "vinegar",
        "pet care",
        "fruit/vegetable juice",
        "cling film/bags"
    ],
    [
        "chicken",
        "canned beer",
        "shopping bags"
    ],
    [
        "sausage",
        "chicken",
        "other vegetables",
        "whole milk",
        "yogurt",
        "cream cheese ",
        "brown bread",
        "soda"
    ],
    [
        "rolls/buns",
        "sugar",
        "sweet spreads",
        "chewing gum",
        "newspapers"
    ],
    [
        "other vegetables",
        "whole milk",
        "soda",
        "chocolate"
    ],
    [
        "soda",
        "bottled beer"
    ],
    [
        "tropical fruit",
        "grapes",
        "other vegetables",
        "bottled beer",
        "popcorn"
    ],
    [
        "pip fruit",
        "nuts/prunes",
        "curd",
        "frozen dessert",
        "sweet spreads",
        "light bulbs"
    ],
    [
        "pip fruit",
        "pastry"
    ],
    [
        "onions",
        "yogurt",
        "frozen vegetables"
    ],
    [
        "yogurt",
        "pastry"
    ],
    [
        "hard cheese",
        "soda"
    ],
    [
        "other vegetables",
        "yogurt",
        "whipped/sour cream",
        "newspapers"
    ],
    [
        "whole milk",
        "cat food",
        "bottled water",
        "napkins"
    ],
    [
        "UHT-milk",
        "margarine",
        "bottled water",
        "soda"
    ],
    [
        "processed cheese"
    ],
    [
        "whole milk",
        "yogurt",
        "frozen potato products",
        "brown bread",
        "napkins"
    ],
    [
        "tropical fruit",
        "cat food",
        "bottled water",
        "soda",
        "bottled beer",
        "white wine",
        "hygiene articles"
    ],
    [
        "frankfurter",
        "photo/film"
    ],
    [
        "herbs"
    ],
    [
        "sausage",
        "beef",
        "hamburger meat",
        "yogurt",
        "soft cheese",
        "cream cheese ",
        "domestic eggs",
        "rolls/buns",
        "pastry",
        "instant coffee"
    ],
    [
        "UHT-milk",
        "domestic eggs",
        "sugar",
        "fruit/vegetable juice",
        "newspapers"
    ],
    [
        "whole milk",
        "curd",
        "dessert",
        "shopping bags"
    ],
    [
        "chicken",
        "citrus fruit",
        "tropical fruit",
        "other vegetables",
        "whole milk",
        "whipped/sour cream",
        "rolls/buns",
        "pastry",
        "flour",
        "specialty chocolate"
    ],
    [
        "citrus fruit",
        "root vegetables",
        "other vegetables",
        "whipped/sour cream",
        "processed cheese",
        "rolls/buns",
        "newspapers"
    ],
    [
        "whole milk",
        "frozen dessert",
        "margarine",
        "snack products"
    ],
    [
        "other vegetables",
        "specialty cheese"
    ],
    [
        "frozen meals",
        "soda",
        "shopping bags"
    ],
    [
        "rolls/buns",
        "brown bread"
    ],
    [
        "waffles"
    ],
    [
        "whole milk",
        "beverages"
    ],
    [
        "canned beer"
    ],
    [
        "other vegetables",
        "dessert",
        "candy",
        "abrasive cleaner",
        "dishes",
        "cling film/bags",
        "candles"
    ],
    [
        "beef",
        "root vegetables",
        "herbs",
        "packaged fruit/vegetables",
        "whipped/sour cream",
        "cream cheese ",
        "vinegar",
        "oil",
        "margarine",
        "soups",
        "pickled vegetables",
        "meat spreads",
        "canned fish",
        "fruit/vegetable juice",
        "candles"
    ],
    [
        "rolls/buns",
        "soda",
        "canned beer"
    ],
    [
        "ham",
        "root vegetables",
        "other vegetables",
        "dessert",
        "brown bread",
        "pasta",
        "margarine",
        "bottled water",
        "fruit/vegetable juice",
        "red/blush wine"
    ],
    [
        "frankfurter",
        "sausage",
        "pork",
        "sliced cheese",
        "pastry",
        "margarine",
        "newspapers"
    ],
    [
        "bottled water"
    ],
    [
        "specialty chocolate"
    ],
    [
        "packaged fruit/vegetables"
    ],
    [
        "photo/film"
    ],
    [
        "coffee"
    ],
    [
        "candles"
    ],
    [
        "condensed milk",
        "soda"
    ],
    [
        "dessert",
        "UHT-milk",
        "cream cheese ",
        "domestic eggs",
        "brown bread",
        "coffee",
        "bottled water",
        "soda",
        "shopping bags"
    ],
    [
        "root vegetables",
        "shopping bags"
    ],
    [
        "white wine"
    ],
    [
        "rolls/buns"
    ],
    [
        "tropical fruit",
        "pip fruit",
        "UHT-milk",
        "sugar",
        "cat food",
        "coffee",
        "long life bakery product",
        "chocolate",
        "hygiene articles"
    ]
]
fis.
console.log(fis(data, 0.015, true))