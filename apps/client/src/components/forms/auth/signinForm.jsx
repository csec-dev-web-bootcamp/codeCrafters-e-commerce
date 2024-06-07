"use client";

import { login } from "@app/client/data/auth";
import useMutation from "@app/client/hooks/use-mutation";
import React from "react";
import { useState } from "react";

export default function SigninForm() {
  const { isMutating, startMutation } = useMutation();
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  function onChange(e) {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    startMutation(async () => {
      const res = await login(formState);
      if (res.error) {
        alert(JSON.stringify(res.error));
        return;
      }
    });
  }

  return (
    <div className="signupformcontainer h-full flex justify-center items-center bg-[#E5E5E5]">
      <div className="container max-w-fit h-auto flex justify-center items-center gap-16 border-2 pt-10 pb-10 bg-white">
        <div className="">
          <div className="">
            <a href="/">
              {/* <img src="/moneymaster.png" className="mb-14" /> */}
            </a>
            <h1 className="text-2xl font-black text-[#22577A] mb-6">Sign In</h1>
            <p className="w-5/6 mb-10 text-[#6C7278]">
              Fill your information below or register using your social account.
            </p>
          </div>

          <form onSubmit={onSubmit} className="w-full">
            <div className="mb-16">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email <span className="text-red-500">*</span>
              </label>
              <input
                onChange={onChange}
                name="email"
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Enter email"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password <span className="text-red-500">*</span>
              </label>
              <input
                onChange={onChange}
                name="password"
                type="password"
                id="password"
                placeholder="Enter password"
                className="shadow-sm bg-gray-50 border mb-14 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isMutating}
              className="text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 bg-[#00ABCD] font-bold border-2 h-12 w-full rounded-full"
            >
              Sign In
            </button>
            <a href={"/signup"}>
              <label className="text-center cursor-pointer">
                <p className="mt-10">
                  Don’t have an account?{" "}
                  <span className="text-[#00ABCD] font-black underline">
                    Sign Up
                  </span>
                </p>
              </label>
            </a>
          </form>
        </div>
        <div className="welcome-img">
          {/* <img src={"images/login.png"} /> */}
        </div>
      </div>
    </div>
  );
}
