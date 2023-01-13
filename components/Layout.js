import { Menu, Modal } from "@mantine/core";
import Cookies from "js-cookie";
import localStorage from "localstorage-slim";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePokemons } from "../store/reducers/pokemons.reducer";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [opened, setOpened] = useState(false);

  const logout = () => {
    localStorage.clear("token");
    dispatch(deletePokemons());
    router.push("/");
  };

  return (
    <>
      <Modal opened={opened} onClose={() => setOpened(false)} centered>
        <div>
          <div className="flex relative flex-col">
            <div className={`ash h-64 w-full flex justify-center flex-col`}>
              <div className="text-center">
                <p className="text-white pt-2 font-bold uppercase text-2xl">
                  Ash Ketchum
                </p>
              </div>
              <div className="w-full flex justify-end h-full pr-4 pt-5">
                <div className="flex flex-col">
                  <p className="text-center text-white">Years Experience</p>
                  <div className="avatar justify-center">
                    <div className="w-16 rounded-full flex items-center justify-center bg-neutral-content">
                      <p className="font-bold">24</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <figure className="absolute m-auto inset-0">
              <img
                src={"/assets/ash.png"}
                alt="Shoes"
                className="w-36 inset-0 m-auto bottom-60 absolute z-10"
              />
            </figure>
            <div className="min-h-full w-full infoWhite pt-10 flex flex-col gap-5 ">
              <div className="flex flex-col w-full justify-center gap-6">
                <div className="w-full text-center">
                  <p className="font-bold">Name:</p>
                  <p>Ash Ketchum</p>
                </div>
                <div className="w-full text-center">
                  <p className="font-bold">Email:</p>
                  <p>ashketchum@pokedex.com</p>
                </div>
                <div className="w-full text-center">
                  <p className="font-bold">Profession:</p>
                  <p>Pokemon Master</p>
                </div>
                <div className="w-full text-center">
                  <p className="font-bold">Description:</p>
                  <p>I wanna be the very best...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <div className="containerGlobal">
        <div className="globalContent bg-neutral-content h-full ">
          {children}
        </div>
        <div className="navbar">
          <figure onClick={() => router.push("/dashboard")}>
            <img src="/assets/logo.png" alt="logo" />
          </figure>
          <div className="userDrop">
            <div className="user">
              <Menu trigger="hover" openDelay={100} closeDelay={400}>
                <Menu.Target>
                  <div className="userPreMenu">
                    <figure className="userPok">
                      <img src={"/assets/user.png"}></img>
                    </figure>
                  </div>
                </Menu.Target>

                <Menu.Dropdown>
                  <Menu.Item>
                    <div
                      className="buttonLayoutDropdown"
                      onClick={() => setOpened(true)}
                    >
                      <button> View Profile</button>
                    </div>
                  </Menu.Item>
                  <Menu.Item>
                    <div
                      className="buttonLayoutDropdown"
                      onClick={() => logout()}
                    >
                      <button>Log Out</button>
                    </div>
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
