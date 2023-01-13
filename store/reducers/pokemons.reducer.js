import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  pokemons: [],
  loading: false,
  page: 0,
};

export const pokemonsActions = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    loadingPokemons: (state, action) => {
      return { ...state, loading: action.payload };
    },

    getPokemons: (state, action) => {
      return { ...state, pokemons: [...state.pokemons, action.payload] };
    },
    deletePokemons: (state, action) => {
      return { ...state, ...initialState };
    },
    changePage: (state, action) => {
      return { ...state, page: action.payload };
    },
  },
});

export const { getPokemons, loadingPokemons, deletePokemons, changePage } =
  pokemonsActions.actions;

export default pokemonsActions.reducer;

export const getAllPokemons = (page) => async (dispatch) => {
  try {
    dispatch(loadingPokemons(true));

    axios
      .get(`https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=10`)
      .then((res) => {
        res.data.results.map(async (e) => {
          axios
            .get(e.url)
            .then((res) => dispatch(getPokemons({ ...e, ...res.data })));
        });
      });

    dispatch(loadingPokemons(false));
  } catch (err) {
    console.log(err);
  }
};

export const getFromPagination = (page) => async (dispatch) => {
  try {
    dispatch(loadingPokemons(true));

    axios
      .get(`https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=10`)
      .then((res) => {
        res.data.results.map(async (e) => {
          axios
            .get(e.url)
            .then((res) => dispatch(getPokemons({ ...e, ...res.data })));
        });
      });

    dispatch(loadingPokemons(false));
  } catch (err) {
    console.log(err);
  }
};
