import Main from "./pages/MainPage";
import NotFound from "./pages/NotFoundPage";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/auth/register",
    name: "register",
    component: () => import("./pages/RegisterPage"),
  },
  {
    path: "/auth/login",
    name: "login",
    component: () => import("./pages/LoginPage"),
  },
  {
    path: "/user/favorites",
    name: "favorites",
    component: () => import("./pages/FavoritesPage"),
  },
  {
  path: "/user/myrecipes",
  name: "myrecipes",
  component: () => import("./pages/MyRecipesPage"),
  },
  {
    path: "/user/familyrecipes",
    name: "familyrecipes",
    component: () => import("./pages/FamilyRecipesPage"),
    },
  {
    path: "/search",
    name: "search",
    component: () => import("./pages/SearchPage"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("./pages/AboutPage"),
  },
  {
    path: "/addRecipe",
    name: "addRecipe",
    component: () => import("./pages/AddRecipeModal"),
  },
  {
    path: "/recipe/:recipeId",
    name: "recipe",
    component: () => import("./pages/RecipeViewPage"),
  },
  {
    path: "*",
    name: "notFound",
    component: NotFound,
  },
];

export default routes;