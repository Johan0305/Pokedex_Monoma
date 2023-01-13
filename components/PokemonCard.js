import { Modal } from "@mantine/core";
import React, { useState } from "react";

const PokemonCard = ({ pokeData }) => {
  const [opened, setOpened] = useState(false);
  const today = Date.now();
  const time = new Date(today);

  return (
    <>
      <Modal opened={opened} onClose={() => setOpened(false)} centered>
        <div>
          <div className="flex relative flex-col">
            <div
              className={`${pokeData.types[0].type.name} h-64 w-full flex justify-center flex-col`}
            >
              <div className="text-center">
                <p className="text-white pt-2 font-bold uppercase text-2xl">
                  {pokeData.name}
                </p>
              </div>
              <div className="w-full flex justify-end h-full pr-4 pt-5">
                <div className="flex flex-col">
                  <p className="text-center text-white">
                    Base <br /> Experience
                  </p>
                  <div className="avatar justify-center">
                    <div className="w-16 rounded-full flex items-center justify-center bg-neutral-content">
                      <p className="font-bold">{pokeData.base_experience}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <figure className="absolute m-auto inset-0">
              <img
                src={
                  pokeData.sprites.other.dream_world.front_default !== null
                    ? pokeData.sprites.other.dream_world.front_default
                    : "/assets/pokeball.png"
                }
                alt="Shoes"
                className="w-36 inset-0 m-auto bottom-60 absolute z-10"
              />
            </figure>
            <div className="min-h-full w-full infoWhite pt-10 flex flex-col gap-5 ">
              <div className="flex justify-center w-full gap-2">
                {pokeData.types.map(({ type }) => {
                  return (
                    <div
                      className={`badge badge-lg ${pokeData.types[0].type.name} min-w-[96px]`}
                    >
                      <p className="uppercase">{type.name}</p>
                    </div>
                  );
                })}
              </div>
              <div className="flex w-full justify-center gap-20">
                <div className="text-center">
                  <p className="text-2xl">{pokeData.weight}</p>
                  <p className="text-xs">Weight</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl">{pokeData.height}</p>
                  <p className="text-xs">Height</p>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="w-full text-center">
                  <p className="font-bold">STATS</p>
                </div>
                <div className="flex justify-center py-3">
                  <div>
                    {pokeData.stats.map(({ base_stat, stat }) => {
                      return (
                        <div className="flex items-center progressStats">
                          <p className="min-w-[150px] uppercase text-sm font-bold">
                            {stat.name}
                          </p>
                          <progress
                            className="progress w-56 progress-error"
                            value={base_stat}
                            max="150"
                          ></progress>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <div
        className="card w-96 shadow-xl justify-self-center hover:scale-110 cursor-pointer"
        onClick={() => setOpened(true)}
      >
        <div
          className={`${pokeData.types[0].type.name} rounded-t-2xl border-amber-400 border-2`}
        >
          <figure>
            <img
              src={
                pokeData.sprites.other.dream_world.front_default !== null
                  ? pokeData.sprites.other.dream_world.front_default
                  : "/assets/pokeball.png"
              }
              alt="Shoes"
              className="w-36 p-5"
            />
          </figure>
          <div className="flex w-full justify-between px-5 pb-7">
            <div className="text-white font-bold">{time.toDateString()}</div>
            <div className="btn btn-xs">
              <p>Weight: {pokeData.weight}</p>
            </div>
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title uppercase pb-5">{pokeData.name}</h2>

          <div className="card-actions justify-end">
            {pokeData.abilities.map(({ ability }) => (
              <div className="badge badge-outline">#{ability.name}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonCard;
