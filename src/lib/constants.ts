import type { Goal, Flavor, Diet } from '@/types/smoothie';

export const SITE_NAME = 'smoothiebar.cards';
export const SITE_URL = 'https://smoothiebar.cards';
export const SITE_DESCRIPTION =
  'Curated smoothie and juice recipes with full ingredient lists, nutrition info, and step-by-step blending instructions.';
export const ITEMS_PER_PAGE = 24;

export const ALL_GOALS: Goal[] = [
  'energy', 'protein', 'detox', 'immunity',
  'weight-loss', 'recovery', 'beauty', 'calm',
];

export const ALL_FLAVORS: Flavor[] = [
  'green', 'berry', 'tropical', 'citrus',
  'chocolate', 'nutty', 'creamy', 'refreshing',
];

export const ALL_DIETS: Diet[] = [
  'vegan', 'keto', 'high-protein', 'low-sugar',
  'dairy-free', 'nut-free', 'paleo', 'whole30',
];

export const goalLabels: Record<Goal, string> = {
  energy: 'Energy',
  protein: 'Protein',
  detox: 'Detox',
  immunity: 'Immunity',
  'weight-loss': 'Weight Loss',
  recovery: 'Recovery',
  beauty: 'Beauty',
  calm: 'Calm',
};

export const flavorLabels: Record<Flavor, string> = {
  green: 'Green',
  berry: 'Berry',
  tropical: 'Tropical',
  citrus: 'Citrus',
  chocolate: 'Chocolate',
  nutty: 'Nutty',
  creamy: 'Creamy',
  refreshing: 'Refreshing',
};

export const dietLabels: Record<Diet, string> = {
  vegan: 'Vegan',
  keto: 'Keto',
  'high-protein': 'High Protein',
  'low-sugar': 'Low Sugar',
  'dairy-free': 'Dairy Free',
  'nut-free': 'Nut Free',
  paleo: 'Paleo',
  whole30: 'Whole30',
};

export const goalIcons: Record<Goal, string> = {
  energy: 'zap',
  protein: 'dumbbell',
  detox: 'leaf',
  immunity: 'shield',
  'weight-loss': 'flame',
  recovery: 'heart',
  beauty: 'sparkles',
  calm: 'moon',
};

export const flavorIcons: Record<Flavor, string> = {
  green: 'leaf',
  berry: 'cherry',
  tropical: 'sun',
  citrus: 'citrus',
  chocolate: 'cookie',
  nutty: 'nut',
  creamy: 'milk',
  refreshing: 'droplets',
};

// SEO page titles
export const goalPageTitles: Record<Goal, string> = {
  energy: 'Energy Smoothie Recipes to Power Your Day',
  protein: 'High-Protein Smoothie Recipes for Muscle & Recovery',
  detox: 'Detox Smoothie Recipes — Clean Green Blends',
  immunity: 'Immunity-Boosting Smoothie Recipes',
  'weight-loss': 'Weight Loss Smoothie Recipes That Actually Taste Good',
  recovery: 'Post-Workout Recovery Smoothie Recipes',
  beauty: 'Beauty Smoothie Recipes for Glowing Skin & Hair',
  calm: 'Calming Smoothie Recipes for Stress Relief',
};

export const flavorPageTitles: Record<Flavor, string> = {
  green: 'Green Smoothie Recipes — Leafy & Delicious',
  berry: 'Berry Smoothie Recipes — Sweet & Antioxidant-Rich',
  tropical: 'Tropical Smoothie Recipes — Island Vibes in a Glass',
  citrus: 'Citrus Smoothie Recipes — Bright & Zesty Blends',
  chocolate: 'Chocolate Smoothie Recipes — Guilt-Free Indulgence',
  nutty: 'Nutty Smoothie Recipes — Rich & Satisfying',
  creamy: 'Creamy Smoothie Recipes — Thick & Velvety Blends',
  refreshing: 'Refreshing Smoothie Recipes — Light & Hydrating',
};

export const dietPageTitles: Record<Diet, string> = {
  vegan: 'Vegan Smoothie Recipes — 100% Plant-Based Blends',
  keto: 'Keto Smoothie Recipes — Low-Carb & High-Fat',
  'high-protein': 'High-Protein Smoothie Recipes for Every Goal',
  'low-sugar': 'Low-Sugar Smoothie Recipes That Still Taste Amazing',
  'dairy-free': 'Dairy-Free Smoothie Recipes — No Milk, No Problem',
  'nut-free': 'Nut-Free Smoothie Recipes — Allergy-Friendly Blends',
  paleo: 'Paleo Smoothie Recipes — Whole Foods Only',
  whole30: 'Whole30 Smoothie Recipes — Compliant & Delicious',
};

// SEO intro paragraphs
export const goalIntros: Record<Goal, string> = {
  energy:
    "Ditch the second coffee and reach for a blender instead. These energy smoothie recipes are packed with natural fuel — bananas, oats, matcha, maca, and more — designed to give you sustained energy without the crash. Perfect for mornings, pre-workouts, or that 3pm slump.",
  protein:
    "Whether you're building muscle, recovering from a workout, or just trying to hit your macros — these high-protein smoothie recipes deliver. Packed with protein powder, Greek yogurt, nut butters, and seeds, each recipe is a meal in a glass.",
  detox:
    "Give your body a reset. These detox smoothie recipes are loaded with leafy greens, ginger, lemon, and other cleansing ingredients that support digestion and make you feel lighter. No juice cleanse required — just a blender and fresh ingredients.",
  immunity:
    "Build your defenses one sip at a time. These immunity-boosting smoothie recipes are packed with vitamin C, zinc, turmeric, and antioxidant-rich fruits that help your body fight back. Perfect during cold season or any time you need a health boost.",
  'weight-loss':
    "Smoothies that help you stay full without the calorie overload. These weight loss smoothie recipes are high in fiber, protein, and nutrients while keeping calories in check. They actually taste good — no sad diet food here.",
  recovery:
    "Your muscles worked hard — now feed them right. These recovery smoothie recipes combine fast-absorbing protein, anti-inflammatory ingredients, and natural electrolytes to help you bounce back faster after any workout.",
  beauty:
    "Glow from the inside out. These beauty smoothie recipes are loaded with collagen-supporting vitamin C, biotin-rich ingredients, healthy fats, and antioxidants that nourish your skin, hair, and nails from within.",
  calm:
    "Wind down and de-stress with these calming smoothie recipes. Featuring ingredients like chamomile, ashwagandha, tart cherry, magnesium-rich cacao, and banana — they're the perfect evening ritual or midday reset.",
};

export const flavorIntros: Record<Flavor, string> = {
  green:
    "Don't let the color fool you — these green smoothie recipes are surprisingly delicious. Packed with spinach, kale, avocado, and other nutrient-dense greens, each recipe balances health with flavor. Your gateway to drinking your vegetables.",
  berry:
    "Berries are nature's candy — and these berry smoothie recipes make the most of them. Blueberries, strawberries, raspberries, and blackberries deliver massive antioxidant power in every sip. Sweet, vibrant, and endlessly satisfying.",
  tropical:
    "Transport yourself to the beach with these tropical smoothie recipes. Mango, pineapple, coconut, and passion fruit blend into sunshine-in-a-glass that makes every morning feel like vacation.",
  citrus:
    "Bright, zesty, and refreshing — these citrus smoothie recipes wake up your taste buds with orange, lemon, lime, and grapefruit. High in vitamin C and perfect for immune support or just a tangy pick-me-up.",
  chocolate:
    "Yes, chocolate smoothies can be healthy. These recipes use raw cacao, dark cocoa powder, and naturally sweet ingredients to create rich, indulgent blends that satisfy your sweet tooth while delivering real nutrition.",
  nutty:
    "Rich, satisfying, and packed with healthy fats — these nutty smoothie recipes feature almond butter, peanut butter, cashews, and walnuts. They're filling enough to replace a meal and taste like a dessert.",
  creamy:
    "Thick, velvety, and absolutely luscious. These creamy smoothie recipes use avocado, banana, yogurt, and coconut cream to create that perfect milkshake-like texture without the guilt. Pure comfort in a glass.",
  refreshing:
    "Light, hydrating, and perfect for warm days. These refreshing smoothie recipes feature cucumber, mint, watermelon, coconut water, and other cooling ingredients that quench your thirst and leave you feeling revitalized.",
};

export const dietIntros: Record<Diet, string> = {
  vegan:
    "100% plant-based and 100% delicious. These vegan smoothie recipes skip the dairy and animal products entirely, using plant milks, nut butters, seeds, and fruits to create creamy, nutrient-dense blends that everyone can enjoy.",
  keto:
    "Low-carb smoothies that actually taste good. These keto smoothie recipes keep net carbs low while loading up on healthy fats from avocado, coconut oil, MCT oil, and nut butters. Perfect for maintaining ketosis without missing out.",
  'high-protein':
    "Hit your protein goals with every sip. These high-protein smoothie recipes pack 20g+ of protein per serving using protein powder, Greek yogurt, cottage cheese, and other protein-rich ingredients. Ideal for athletes and anyone building lean muscle.",
  'low-sugar':
    "All the flavor, fraction of the sugar. These low-sugar smoothie recipes use smart ingredient swaps — berries over bananas, greens over fruit juice, stevia over honey — to keep blood sugar stable while tasting amazing.",
  'dairy-free':
    "No milk, no yogurt, no problem. These dairy-free smoothie recipes use oat milk, coconut milk, almond milk, and other plant-based alternatives to create smooth, creamy blends that are gentle on your stomach.",
  'nut-free':
    "Allergy-friendly smoothies that don't compromise on taste. These nut-free smoothie recipes use seeds, coconut, oat milk, and other safe alternatives to deliver creamy, delicious blends without any tree nuts or peanuts.",
  paleo:
    "Whole foods, no grains, no dairy — just real ingredients. These paleo smoothie recipes stick to the ancestral playbook with fruits, vegetables, coconut products, and collagen. Clean fuel for a clean lifestyle.",
  whole30:
    "Compliant and delicious — these Whole30 smoothie recipes follow the program rules with no added sugar, dairy, grains, or legumes. Just whole, unprocessed ingredients blended into something you'll actually crave.",
};
