import { Menu } from "@mantine/core";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Layout = ({ children }) => {
  const [user, setUser] = useState({});
  const location =
    typeof window !== "undefined" ? window.location.pathname : "";

  const router = useRouter();

  const href = (page) => {
    router.push(page);
  };

  const logout = () => {
    Cookies.remove("userDt");
    router.push("/");
  };

  useEffect(() => {}, []);

  if (location === "/") {
    return <>{children}</>;
  }

  return (
    <div className="containerGlobal">
      <div className="globalContent bg-neutral-content h-full">{children}</div>
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
                    onClick={() => router.push("/user/JohnDoe")}
                  >
                    <button> Ver Perfil</button>
                  </div>
                </Menu.Item>
                <Menu.Item>
                  <div
                    className="buttonLayoutDropdown"
                    onClick={() => logout()}
                  >
                    <button>Salir</button>
                  </div>
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
