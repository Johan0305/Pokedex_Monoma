import localStorage from "localstorage-slim";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContainerContent from "../components/containerContent";
import Layout from "../components/Layout";
import Pagination from "../components/Pagination";
import PokemonCard from "../components/PokemonCard";
import { getAllPokemons } from "../store/reducers/pokemons.reducer";

const dashboard = () => {
  const pokemons = useSelector((state) => state.pokemons);
  const page = useSelector((state) => state.page);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(localStorage.get("token"));
    if (localStorage.get("token") === null) {
      route.push("/");
    }
    dispatch(getAllPokemons(page));
  }, []);

  return (
    <Layout>
      <ContainerContent pageTitle={"Dashboard"}>
        <div className="gap-10 flex flex-col h-full">
          <div className="flex flex-col gap-5">
            <div className="flex gap-2">
              <h1 className="font-bold text-3xl text-success-content">
                ¡WELCOME TO YOUR POKEDEX!
              </h1>
              <figure>
                <img src={"/assets/pokedex.png"} width={40} />
              </figure>
            </div>

            <h2 className="font-bold text-2xl text-accent-focus">
              Ash Ketchum
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-10">
            {pokemons.pokemons.map((data) => (
              <PokemonCard key={data.id} pokeData={data} />
            ))}
          </div>
          <div className="w-full h-full flex justify-center items-center py-5">
            <div className="h-full w-2/4 flex gap-5 ">
              <Pagination itemsPerPage={10} />
            </div>
          </div>
        </div>
      </ContainerContent>
    </Layout>
  );
};

export default dashboard;
