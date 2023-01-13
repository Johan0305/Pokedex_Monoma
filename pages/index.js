import React, { useEffect, useMemo, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import localStorage from "localstorage-slim";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import axios from "axios";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [viewPassword, setViewPassword] = useState("password");

  const route = useRouter();

  useEffect(() => {
    if (localStorage.get("token") !== null) {
      route.push("/dashboard");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.post("/api/auth/login", {
      email: email,
      password: password,
    });

    if (!data.error) {
      localStorage.set("token", data.token);
    }

    setLoading(true);

    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    setTimeout(() => {
      if (localStorage.get("token") !== null) {
        Toast.fire({
          icon: "success",
          title: "Signed in successfully",
        });
        setLoading(false);
        route.push("/dashboard");
      }

      if (localStorage.get("token") === null) {
        Toast.fire({
          icon: "error",
          title: "An error has occurred, verify your username and password",
        });
        setLoading(false);
      }
    }, 1000);
  };

  if (loading) {
    return (
      <div className="loadingIndex w-full h-screen bg-neutral flex justify-center items-center">
        <div>
          <figure className="max-w-full flex justify-center">
            <img src={"/assets/pokeball.png"} />
          </figure>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title title="true">Pokemon Masters</title>
      </Head>
      <main className="mainIndex bg-primary fixed w-full z-10">
        <div className="container flex flex-col justify-center items-center h-screen w-full max-w-full">
          <div className="card w-1/4 max-sm:w-full text-primary-content bg-success-content">
            <div className="card-body items-center flex px-20 gap-5">
              <div className="w-full flex justify-center">
                <div className="flex gap-16">
                  <figure>
                    <img src="/assets/logo.png" data-cy="PokeImg-login"></img>
                  </figure>
                </div>
              </div>
              <div className="w-full gap-10 flex flex-col">
                <form
                  className="form-control w-full flex items-center gap-10"
                  onSubmit={handleSubmit}
                >
                  <div className="w-full">
                    <label className="label flex flex-col w-full items-start">
                      <input
                        required
                        type="email"
                        placeholder="Email"
                        className="input input-bordered input-warning w-full max-w-xs text-white"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        data-cy="email-login"
                      />
                    </label>
                    <label className="label flex flex-col w-full items-start">
                      <input
                        type={viewPassword}
                        placeholder="Password"
                        className="input input-bordered input-warning w-full max-w-xs text-white"
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        data-cy="password-login"
                      />
                    </label>
                  </div>
                  <div className="flex justify-center items-center gap-5">
                    <figure
                      onClick={() => {
                        viewPassword === "password"
                          ? setViewPassword("text")
                          : setViewPassword("password");
                      }}
                    >
                      <img
                        src={
                          viewPassword === "password"
                            ? "/assets/hiddenPassword.png"
                            : "/assets/showPassword.png"
                        }
                        className={"w-10"}
                      />
                    </figure>
                    <p className="text-white min-w-[150px]">
                      {viewPassword === "password"
                        ? "See Password"
                        : "Hide Password"}
                    </p>
                  </div>

                  <button
                    className="btn btn-outline btn-warning w-full"
                    type="submit"
                    data-cy="button-login"
                  >
                    Log In
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
