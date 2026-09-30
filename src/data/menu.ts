import { L, type LocalizedString } from "@/lib/i18n";

export type MenuItem = {
  id: string;
  name: LocalizedString;
  description: LocalizedString;
  price: string;
  currency: string;
  image: string;
  featured: boolean;
  available: boolean;
  order: number;
};

export type MenuCategory = {
  id: string;
  name: LocalizedString;
  order: number;
  items: MenuItem[];
};

const TRY = "TRY";
const empty = L("", "", "");

function item(
  id: string,
  en: string,
  fi: string,
  tr: string,
  price: string,
  order: number,
  opts?: {
    description?: LocalizedString;
    featured?: boolean;
    image?: string;
  },
): MenuItem {
  return {
    id,
    name: L(en, fi, tr),
    description: opts?.description ?? empty,
    price,
    currency: TRY,
    image: opts?.image ?? "",
    featured: opts?.featured ?? false,
    available: true,
    order,
  };
}

/**
 * EDIT THIS FILE to manage the restaurant & bar menu.
 * Source: Blue Heaven Restaurant & Bar printed menu (prices in ₺).
 */
export const menuCategories: MenuCategory[] = [
  {
    id: "omelettes",
    name: L("Omelettes", "Munakkaat", "Omletler"),
    order: 13,
    items: [
      item("menemen", "Menemen", "Turkkilainen Munakas", "Menemen", "400", 1, {
        featured: true,
      }),
      item("omelette", "Omelette", "Munakas", "Omlet", "280", 2),
      item(
        "mixed-omelette",
        "Mixed Omelette",
        "Munakas Eri Täytteillä",
        "Karışık Omlet",
        "380",
        3,
      ),
      item(
        "cheese-omelette",
        "Cheese Omelette",
        "Juusto Munakas",
        "Peynirli Omlet",
        "320",
        4,
      ),
      item(
        "mushroom-omelette",
        "Mushroom Omelette",
        "Sieni Munakas",
        "Mantarlı Omlet",
        "340",
        5,
      ),
    ],
  },
  {
    id: "salads",
    name: L("Salads", "Salaatit", "Salatalar"),
    order: 3,
    items: [
      item("caesar-salad", "Caesar Salad", "Caesar-Salaatti", "Sezar Salata", "470", 1, {
        featured: true,
      }),
      item(
        "grilled-chicken-salad",
        "Grilled Chicken Salad",
        "Grillattu Kanasalaatti",
        "Izgara Tavuk Salata",
        "450",
        2,
      ),
      item(
        "tuna-salad",
        "Tuna Fish Salad",
        "Tonnikala Salaatti",
        "Ton Balıklı Salata",
        "450",
        3,
      ),
    ],
  },
  {
    id: "starters",
    name: L("Starters", "Alkuruuat", "Başlangıçlar"),
    order: 1,
    items: [
      item("garlic-bread", "Garlic Bread", "Valkosipulileipä", "Sarımsaklı Ekmek", "280", 1),
      item(
        "turkish-spring-rolls",
        "Turkish Spring Rolls",
        "Turkkilaiset Kevätrullat",
        "Türk Bahar Rulosu",
        "280",
        2,
      ),
    ],
  },
  {
    id: "soups",
    name: L("Soups", "Keitot", "Çorbalar"),
    order: 2,
    items: [
      item("lentil-soup", "Lentil Soup", "Linssikeitto", "Mercimek Çorbası", "250", 1),
      item("tomato-soup", "Tomato Soup", "Tomaattikeitto", "Domates Çorbası", "250", 2),
      item("mushroom-soup", "Mushroom Soup", "Sienikeitto", "Mantar Çorbası", "250", 3),
      item("chicken-soup", "Chicken Soup", "Kanakeitto", "Tavuk Çorbası", "250", 4),
    ],
  },
  {
    id: "pizza",
    name: L("Pizza", "Pizza", "Pizza"),
    order: 10,
    items: [
      item("pizza-margherita", "Pizza Margherita", "Pizza Margherita", "Margarita Pizza", "460", 1, {
        featured: true,
      }),
      item("pizza-salami", "Pizza Salami", "Pizza Salami", "Salamlı Pizza", "500", 2),
      item("pizza-tuna", "Pizza Tunafish", "Tonnikala Pizza", "Ton Balıklı Pizza", "520", 3),
      item("pizza-hawaii", "Pizza Hawaii", "Pizza Hawaii", "Hawaii Pizza", "550", 4),
      item("pizza-pepperoni", "Pizza Pepperoni", "Pizza Pepperoni", "Pepperoni Pizza", "550", 5),
    ],
  },
  {
    id: "pastas",
    name: L("Pastas", "Pastat", "Makarnalar"),
    order: 9,
    items: [
      item(
        "spaghetti-napolitan",
        "Spaghetti Napolitan",
        "Spaghetti Napolitan",
        "Napoliten Spagetti",
        "400",
        1,
      ),
      item(
        "spaghetti-bolognese",
        "Spaghetti Bolognese",
        "Spaghetti Bolognese",
        "Bolonez Spagetti",
        "450",
        2,
      ),
    ],
  },
  {
    id: "steaks",
    name: L("Steaks", "Pihvit", "Biftekler"),
    order: 7,
    items: [
      item("pepper-steak", "Pepper Steak", "Pippuripihvi", "Biberli Biftek", "990", 1, {
        featured: true,
      }),
      item(
        "mexican-steak",
        "Mexican Steak",
        "Meksikolainen Pihvi",
        "Meksika Biftek",
        "1050",
        2,
      ),
    ],
  },
  {
    id: "chicken",
    name: L("Chicken Dishes", "Kanaruoat", "Tavuk Yemekleri"),
    order: 6,
    items: [
      item("grilled-chicken", "Grilled Chicken", "Grillattua Kana", "Izgara Tavuk", "530", 1, {
        featured: true,
      }),
      item("chicken-skewers", "Chicken Skewers", "Kana Varras", "Tavuk Şiş", "530", 2),
      item(
        "chicken-curry",
        "Chicken — Curry Sauce",
        "Kana Currykastikkeella",
        "Köri Soslu Tavuk",
        "550",
        3,
      ),
      item(
        "butter-chicken-rolls",
        "Butter Chicken Rolls",
        "Voikana Rulla",
        "Tereyağlı Tavuk Rulo",
        "590",
        4,
      ),
      item("chicken-schnitzel", "Chicken Schnitzel", "Kanaleike", "Tavuk Şinitzel", "570", 5),
      item("chicken-casserole", "Chicken Casserole", "Kanapata", "Tavuk Güveç", "570", 6),
      item(
        "chicken-mushroom",
        "Chicken — Mushroom Sauce",
        "Kanaa herkkusienikastikkeella",
        "Mantar Soslu Tavuk",
        "570",
        7,
      ),
    ],
  },
  {
    id: "seafood",
    name: L("Seafood", "Äyriäiset & kala", "Deniz Ürünleri"),
    order: 8,
    items: [
      item("fried-sea-bass", "Fried Sea Bass", "Paistettua Meribassin", "Kızarmış Levrek", "730", 1),
      item(
        "fried-sea-bream",
        "Fried Sea Bream",
        "Paistettua Merilahnaa",
        "Kızarmış Çipura",
        "730",
        2,
      ),
      item("garlic-shrimp", "Garlic Shrimp", "Valkosipuli Katkarapu", "Sarımsaklı Karides", "610", 3),
      item("fried-kalamaris", "Fried Kalamaris", "Paistettu Kalamaris", "Kızarmış Kalamar", "610", 4),
      item("shrimp-stew", "Shrimp Stew", "Katkarapupata", "Karides Güveç", "740", 5),
    ],
  },
  {
    id: "turkish",
    name: L("Turkish Cuisine", "Turkkilainen keittiö", "Türk Mutfağı"),
    order: 5,
    items: [
      item("lamb-shish", "Lamb Shish", "Lammasvartaat", "Kuzu Şiş", "830", 1, { featured: true }),
      item(
        "osmanish-kebab",
        "Osmanish Kebab",
        "Osmanilainen Kebab",
        "Osmanlı Kebabı",
        "830",
        2,
      ),
      item(
        "grilled-meatballs",
        "Grilled Meatballs",
        "Grillatut Lihapullat",
        "Izgara Köfte",
        "700",
        3,
      ),
      item("doner-meat", "Doner Kebab — Meat", "Döner — Liha", "Et Döner", "590", 4),
      item("doner-chicken", "Doner Kebab — Chicken", "Döner — Kana", "Tavuk Döner", "550", 5),
      item(
        "iskender",
        "Iskender Kebab",
        "Kebab Jogurtin Kanssa",
        "İskender Kebab",
        "610",
        6,
      ),
      item(
        "sauteed-lamb",
        "Traditional Sautéed Lamb",
        "Perinteistä Paistettua Lammasta",
        "Geleneksel Kuzu Sote",
        "890",
        7,
      ),
    ],
  },
  {
    id: "tex-mex",
    name: L("Tex Mex", "Tex Mex", "Tex Mex"),
    order: 11,
    items: [
      item("beef-fajita", "Beef Fajita", "Fajita Lihan Kanssa", "Et Fajita", "830", 1),
      item("chicken-fajita", "Chicken Fajita", "Fajita Kanan Kanssa", "Tavuk Fajita", "590", 2),
      item("chicken-tacos", "Chicken Tacos", "Broileri Tacos", "Tavuk Taco", "380", 3),
    ],
  },
  {
    id: "vegetarian",
    name: L("Vegetarian Meals", "Kasvisruoat", "Vejetaryen"),
    order: 12,
    items: [
      item(
        "vegetarian-pizza",
        "Vegetarian Pizza",
        "Kasvispizza",
        "Vejetaryen Pizza",
        "480",
        1,
      ),
      item(
        "vegetarian-osmanish",
        "Vegetarian Osmanish",
        "Kasvis Osmanilainen",
        "Vejetaryen Osmanlı",
        "500",
        2,
      ),
    ],
  },
  {
    id: "kids",
    name: L("Kids Menu", "Lasten menu", "Çocuk Menüsü"),
    order: 14,
    items: [
      item("kids-nugget", "Chicken Nugget", "Kana Nugetti", "Tavuk Nugget", "320", 1),
      item(
        "kids-chicken-spaghetti",
        "Chicken & Spaghetti",
        "Kana & Spaghetti",
        "Tavuk & Spagetti",
        "350",
        2,
      ),
      item(
        "kids-meatballs-rice",
        "Meatballs & Rice",
        "Lihapulla & Riisi",
        "Köfte & Pirinç",
        "390",
        3,
      ),
      item(
        "kids-sausage-chips",
        "Fried Sausage & Chips",
        "Makkara & Ranskanperunat",
        "Sosis & Patates",
        "320",
        4,
      ),
      item(
        "kids-bolognese",
        "Spaghetti Bolognese",
        "Spaghetti Bolognese",
        "Bolonez Spagetti",
        "350",
        5,
      ),
    ],
  },
  {
    id: "fast-food",
    name: L("Fast Food", "Pikaruoka", "Fast Food"),
    order: 4,
    items: [
      item("hamburger", "Hamburger", "Hampurilainen", "Hamburger", "420", 1),
      item(
        "double-hamburger",
        "Double Hamburger",
        "Tupla Hampurilainen",
        "Double Hamburger",
        "530",
        2,
      ),
      item("cheeseburger", "Cheeseburger", "Juustohampurilainen", "Cheeseburger", "470", 3),
      item(
        "double-cheeseburger",
        "Double Cheeseburger",
        "Tupla Juustohampurilainen",
        "Double Cheeseburger",
        "580",
        4,
      ),
      item(
        "chicken-burger",
        "Chicken Burger",
        "Kanahampurilainen",
        "Tavuk Burger",
        "400",
        5,
      ),
      item(
        "double-chicken-burger",
        "Double Chicken Burger",
        "Tupla Kanahampurilainen",
        "Double Tavuk Burger",
        "490",
        6,
      ),
      item("chips", "Chips", "Ranskanperunat", "Patates Kızartması", "180", 7),
      item("double-chips", "Double Chips", "Tupla Ranskanperunat", "Double Patates", "290", 8),
      item("onion-rings", "Onion Rings", "Sipulirenkaita", "Soğan Halkası", "290", 9),
      item(
        "tuna-sandwich",
        "Tuna Fish Sandwich",
        "Tonnikala Voileipä",
        "Ton Balıklı Sandviç",
        "330",
        10,
      ),
      item("club-sandwich", "Club Sandwich", "Talon Leipä", "Club Sandviç", "390", 11),
      item(
        "cheese-sandwich",
        "Cheese Sandwich",
        "Juustovoileipä",
        "Peynirli Sandviç",
        "300",
        12,
      ),
      item(
        "mixed-sandwich",
        "Mixed Sandwich",
        "Voileipä Täytteillä",
        "Karışık Sandviç",
        "350",
        13,
      ),
      item("cheese-toast", "Cheese Toast", "Juusto Paahtoleipä", "Peynirli Tost", "310", 14),
      item("mixed-toast", "Mixed Toast", "Voileipä Täytteillä", "Karışık Tost", "380", 15),
      item(
        "chicken-doner-wrap",
        "Chicken Doner Wrap",
        "Kana Döner Kääre",
        "Tavuk Döner Dürüm",
        "410",
        16,
      ),
      item(
        "meat-doner-wrap",
        "Meat Doner Wrap",
        "Liha Döner Kääre",
        "Et Döner Dürüm",
        "450",
        17,
      ),
      item(
        "finnish-street-food",
        "Finnish Street Food",
        "Makkaraperunat",
        "Makkaraperunat",
        "350",
        18,
      ),
    ],
  },
  {
    id: "desserts",
    name: L("Desserts", "Jälkiruoat", "Tatlılar"),
    order: 14.5,
    items: [
      item("fruit-salad", "Fruit Salad", "Hedelmäsalaatti", "Meyve Salatası", "270", 1),
      item("fruit-plate", "Fruit Plate", "Hedelmälautanen", "Meyve Tabağı", "270", 2),
      item("cake-ice-cream", "Cake & Ice Cream", "Kakku & jäätelö", "Kek & Dondurma", "240", 3),
      item("milkshake", "Milkshake", "Pirtelö", "Milkshake", "240", 4),
      item("banana-split", "Banana Split", "Banaanisplit", "Banana Split", "260", 5),
    ],
  },
  {
    id: "hot-drinks",
    name: L("Hot Drinks", "Kuumat juomat", "Sıcak İçecekler"),
    order: 15,
    items: [
      item("tea", "Tea", "Tee", "Çay", "40", 1),
      item("double-tea", "Double Tea", "Tupla Tee", "Çift Çay", "60", 2),
      item("coffee", "Coffee", "Kahvi", "Kahve", "80", 3),
      item("turkish-coffee", "Turkish Coffee", "Turkkilainen Kahvi", "Türk Kahvesi", "100", 4),
      item("irish-coffee", "Irish Coffee", "Irlantilainen Kahvi", "Irish Coffee", "350", 5),
      item("baileys-coffee", "Baileys Coffee", "Baileys-kahvi", "Baileys Coffee", "310", 6),
    ],
  },
  {
    id: "soft-drinks",
    name: L("Soft Drinks", "Virvoitusjuomat", "Meşrubatlar"),
    order: 16,
    items: [
      item("coke", "Coke", "Coca-Cola", "Kola", "110", 1),
      item("coke-zero", "Coke Zero", "Coca-Cola Zero", "Kola Zero", "110", 2),
      item("fanta", "Fanta", "Fanta", "Fanta", "110", 3),
      item("sprite", "Sprite", "Sprite", "Sprite", "110", 4),
      item("ice-tea", "Ice Tea", "Jäätee", "Ice Tea", "110", 5),
      item("ice-coffee", "Ice Coffee", "Jääkahvi", "Ice Coffee", "240", 6),
      item(
        "fresh-orange",
        "Fresh Orange Juice",
        "Tuore Appelsiinimehu",
        "Taze Portakal Suyu",
        "170",
        7,
      ),
      item("mineral-water", "Mineral Water", "Kivennäisvesi", "Maden Suyu", "40", 8),
      item("water-05", "Water (0.5)", "Vesi (0.5)", "Su (0.5)", "40", 9),
      item("water-15", "Water (1.5)", "Vesi (1.5)", "Su (1.5)", "60", 10),
      item("milkshake", "Milk Shake", "Milkshake", "Milkshake", "240", 11),
      item("redbull", "Redbull", "Red Bull", "Red Bull", "130", 12),
      item("tonic", "Tonic", "Tonic", "Tonic", "130", 13),
      item("ayran", "Ayran", "Ayran", "Ayran", "120", 14),
    ],
  },
  {
    id: "beers",
    name: L("Beers", "Oluet", "Biralar"),
    order: 17,
    items: [
      item("efes", "Efes", "Efes", "Efes", "240", 1),
      item("efes-malt", "Efes Malt", "Efes Malt", "Efes Malt", "260", 2),
      item(
        "alcohol-free-beer",
        "Alcohol-Free Beer",
        "Alkoholiton olut",
        "Alkolsüz Bira",
        "250",
        3,
      ),
      item(
        "gluten-free-beer",
        "Gluten-Free Beer",
        "Gluteeniton olut",
        "Glutensiz Bira",
        "250",
        4,
      ),
      item("corona", "Corona", "Corona", "Corona", "280", 5),
      item("miller", "Miller", "Miller", "Miller", "280", 6),
    ],
  },
  {
    id: "alcohol-free-cocktails",
    name: L("Alcohol-Free Cocktails", "Alkoholittomat cocktailit", "Alkolsüz Kokteyller"),
    order: 18,
    items: [
      item("cinderella", "Cinderella", "Cinderella", "Cinderella", "260", 1),
      item("superman", "Superman", "Superman", "Superman", "260", 2),
      item("road-runner", "Road Runner", "Road Runner", "Road Runner", "260", 3),
    ],
  },
  {
    id: "local-spirits",
    name: L("Local Spirits", "Paikalliset juomat", "Yerel İçkiler"),
    order: 19,
    items: [
      item("glass-wine", "Glass of Wine", "Lasillinen viiniä", "Kadeh Şarap", "260", 1),
      item("bottle-wine", "Bottle of Wine", "Pullo viiniä", "Şişe Şarap", "950", 2),
      item("raki", "Rakı", "Rakı", "Rakı", "290", 3),
      item("vodka", "Vodka", "Vodka", "Vodka", "290", 4),
      item("gin", "Gin", "Gin", "Gin", "290", 5),
    ],
  },
  {
    id: "import-spirits",
    name: L("Import Spirits", "Tuontijuomat", "İthal İçkiler"),
    order: 20,
    items: [
      item("jagermeister", "Jägermeister", "Jägermeister", "Jägermeister", "310", 1),
      item("johnnie-walker", "Johnnie Walker", "Johnnie Walker", "Johnnie Walker", "370", 2),
      item("jack-daniels", "Jack Daniels", "Jack Daniels", "Jack Daniels", "390", 3),
      item("chivas-regal", "Chivas Regal", "Chivas Regal", "Chivas Regal", "410", 4),
      item("cognac", "Cognac", "Konjakki", "Konyak", "360", 5),
      item("tequila", "Tequila", "Tequila", "Tekila", "310", 6),
      item("malibu", "Malibu", "Malibu", "Malibu", "310", 7),
      item("baileys", "Baileys", "Baileys", "Baileys", "310", 8),
    ],
  },
  {
    id: "cooler",
    name: L("Cooler", "Siiderit", "Cooler"),
    order: 21,
    items: [
      item("apple-cider", "Apple Cider", "Omenasiideri", "Elma Cider", "370", 1),
      item(
        "strawberry-cider",
        "Strawberry Cider",
        "Mansikkasiideri",
        "Çilek Cider",
        "370",
        2,
      ),
    ],
  },
  {
    id: "cocktails",
    name: L("Cocktails", "Cocktailit", "Kokteyller"),
    order: 22,
    items: [
      item("mojito", "Mojito", "Mojito", "Mojito", "550", 1, {
        featured: true,
        description: L(
          "Rum, brown sugar, mint, lime, mineral water",
          "Rommi, ruskea sokeri, minttu, lime, kivennäisvesi",
          "Rom, esmer şeker, nane, lime, maden suyu",
        ),
      }),
      item("aperol-spritz", "Aperol Spritz", "Aperol Spritz", "Aperol Spritz", "550", 2, {
        description: L(
          "Aperol, champagne, mineral water",
          "Aperol, champagne, kivennäisvesi",
          "Aperol, şampanya, maden suyu",
        ),
      }),
      item("long-island", "Long Island Ice Tea", "Long Island Ice Tea", "Long Island Ice Tea", "650", 3, {
        description: L(
          "Tequila, rum, gin, vodka, Cointreau, lime, Coke",
          "Tequila, rommi, gin, vodka, Cointreau, lime, Coke",
          "Tekila, rom, cin, votka, Cointreau, lime, Kola",
        ),
      }),
      item("cuba-libre", "Cuba Libre", "Cuba Libre", "Cuba Libre", "550", 4, {
        description: L("Rum, lime, Coke", "Rommi, lime, Coke", "Rom, lime, Kola"),
      }),
      item("tequila-sunrise", "Tequila Sunrise", "Tequila Sunrise", "Tequila Sunrise", "550", 5, {
        description: L(
          "Tequila, orange juice, grenadine",
          "Tequila, appelsiinimehu, grenadine",
          "Tekila, portakal suyu, grenadine",
        ),
      }),
      item("pina-colada", "Pina Colada", "Pina Colada", "Piña Colada", "550", 6, {
        description: L(
          "Rum, Malibu, coconut, pineapple, milk",
          "Rommi, Malibu, kookos, ananas, maito",
          "Rom, Malibu, hindistan cevizi, ananas, süt",
        ),
      }),
      item("blue-lagoon", "Blue Lagoon", "Blue Lagoon", "Blue Lagoon", "550", 7, {
        description: L(
          "Vodka, lime, Curacao Blue, Sprite",
          "Vodka, lime, Curacao Blue, Sprite",
          "Votka, lime, Curacao Blue, Sprite",
        ),
      }),
      item("sex-on-the-beach", "Sex on the Beach", "Sex on the Beach", "Sex on the Beach", "550", 8, {
        description: L(
          "Vodka, tequila, peach liquor, orange juice, grenadine",
          "Vodka, tequila, persikkalikööri, appelsiinimehu, grenadine",
          "Votka, tekila, şeftali likörü, portakal suyu, grenadine",
        ),
      }),
      item(
        "strawberry-daiquiri",
        "Strawberry Daiquiri",
        "Strawberry Daiquiri",
        "Strawberry Daiquiri",
        "550",
        9,
        {
          description: L(
            "Rum, brown sugar, lime, fresh strawberry",
            "Rommi, ruskea sokeri, lime, tuore mansikka",
            "Rom, esmer şeker, lime, taze çilek",
          ),
        },
      ),
      item("margarita", "Margarita", "Margarita", "Margarita", "550", 10, {
        description: L(
          "Tequila, orange liquor, lime",
          "Tequila, appelsiinilikööri, lime",
          "Tekila, portakal likörü, lime",
        ),
      }),
      item("malibu-sunset", "Malibu Sunset", "Malibu Sunset", "Malibu Sunset", "550", 11, {
        description: L(
          "Malibu, grenadine, orange juice",
          "Malibu, grenadine, appelsiinimehu",
          "Malibu, grenadine, portakal suyu",
        ),
      }),
    ],
  },
];

export function getVisibleMenuCategories() {
  return menuCategories
    .sort((a, b) => a.order - b.order)
    .map((category) => ({
      ...category,
      items: category.items
        .filter((item) => item.available)
        .sort((a, b) => a.order - b.order),
    }))
    .filter((category) => category.items.length > 0);
}

export function formatMenuPrice(price: string, currency: string) {
  if (!price || price === "PRICE" || price.includes("[")) {
    return "PRICE";
  }
  if (currency === "EUR") return `€${price}`;
  if (currency === "TRY") return `₺${price}`;
  return `${price} ${currency}`;
}

const DRINK_CATEGORY_IDS = new Set([
  "hot-drinks",
  "soft-drinks",
  "beers",
  "alcohol-free-cocktails",
  "local-spirits",
  "import-spirits",
  "cooler",
  "cocktails",
]);

export function isDrinkCategory(categoryId: string) {
  return DRINK_CATEGORY_IDS.has(categoryId);
}

export function isDessertCategory(categoryId: string) {
  return categoryId === "desserts";
}
