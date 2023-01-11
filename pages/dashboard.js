import React from "react";

import ContainerContent from "../components/containerContent";
import PokemonCard from "../components/pokemonCard";

const dashboard = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <ContainerContent pageTitle={"Dashboard"}>
      <div className="gap-10 flex flex-col h-full">
        <div className="flex flex-col gap-5">
          <div className="flex gap-2">
            <h1 className="font-bold text-3xl text-success-content">
              ¡BIENVENIDO A TU POKEDEX!
            </h1>
            <figure>
              <img src={"/assets/pokedex.png"} width={40} />
            </figure>
          </div>

          <h2 className="font-bold text-2xl text-accent-focus">Ash Ketchup</h2>
        </div>
        <div className="grid grid-cols-3 gap-10">
          {arr.map(() => (
            <div className="card w-96 bg-neutral-content shadow-xl justify-self-center ">
              <figure>
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Shoes!
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ContainerContent>
  );
};

export async function getStaticProps(context) {
  return {
    props: {
      protected: true,
      userTypes: ["adminML", "lider", "vendedor"],
    },
  };
}

export default dashboard;
