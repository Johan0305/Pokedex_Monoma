import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemons: [],
};

export const pokemonsActions = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    getPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
  },
});

export const { getPokemons } = pokemonsActions.actions;

export default pokemonsActions.reducer;

export const userLoginData = (email, password) => async (dispatch) => {
  try {
  } catch (err) {
    console.log(err);
  }
};
