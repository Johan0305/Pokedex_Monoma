import { configureStore } from "@reduxjs/toolkit";
import { pokemonsActions } from "./reducers/pokemons.reducer";

export const store = configureStore({
  reducer: {
    pokemons: pokemonsActions,
  },
});
