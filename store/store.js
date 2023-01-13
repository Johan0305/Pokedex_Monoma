import { configureStore } from "@reduxjs/toolkit";
import pokemonsReducer from "./reducers/pokemons.reducer";

export const store = configureStore({
  reducer: {
    pokemons: pokemonsReducer,
  },
});
