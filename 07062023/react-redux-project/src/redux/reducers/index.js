import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategoryReducer";
import categoriesReducer from "./categoriesReducer";
import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
changeCategoryReducer,
categoriesReducer,
productsReducer,
cartReducer
});

export default rootReducer;