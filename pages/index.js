import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const route = useRouter();

  useEffect(() => {
    if (Cookies.get("userDt")) {
      route.push("/dashboard");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    route.push("/dashboard");
  };

  return (
    <>
      <Head>
        <title title="true">¿Quién es ese pokemon?</title>
      </Head>
      <main className="mainIndex bg-primary fixed w-full z-10">
        <div className="container flex flex-col justify-center items-center h-screen w-full max-w-full">
          <div className="card w-1/4 max-sm:w-full text-primary-content bg-success-content">
            <div className="card-body items-center flex px-20 gap-5">
              <div className="w-full flex justify-center">
                <div className="flex gap-16">
                  <figure>
                    <img src="/assets/logo.png"></img>
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
                      />
                    </label>
                    <label className="label flex flex-col w-full items-start">
                      <input
                        type="password"
                        placeholder="Password"
                        className="input input-bordered input-warning w-full max-w-xs text-white"
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </label>
                  </div>

                  <button
                    className="btn btn-outline btn-warning w-full"
                    type="submit"
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
