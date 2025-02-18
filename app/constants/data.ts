// Define Type for Recipe Data
export interface TrendingRecipe {
  id: string;
  name: string;
  Ratings: number;
  Reviews: number;
  Shares: number;
}

// Trending Recipes Data
export const trendingRecipesData: TrendingRecipe[] = [
  {
    id: "1",
    name: "Egg Benedict",
    Ratings: 5,
    Reviews: 48,
    Shares: 42,
  },
  {
    id: "2",
    name: "Avocado Toast",
    Ratings: 4.8,
    Reviews: 120,
    Shares: 90,
  },
  {
    id: "3",
    name: "Blueberry Pancakes",
    Ratings: 4.5,
    Reviews: 85,
    Shares: 70,
  },
  {
    id: "4",
    name: "Caesar Salad",
    Ratings: 4.7,
    Reviews: 67,
    Shares: 50,
  },
  {
    id: "5",
    name: "Grilled Chicken Wrap",
    Ratings: 4.6,
    Reviews: 92,
    Shares: 78,
  },
];
