"use client";

import React from "react";
import { Button } from "../../ui/button";
import { register } from "@app/client/data/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import useMutation from "@app/client/hooks/use-mutation";

export default function SignupForm() {
  const { isMutating, startMutation } = useMutation();
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  function onChange(e) {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    startMutation(async () => {
      const res = await register(formState);
      if (res.error) {
        alert(JSON.stringify(res.error));
        return;
      }
    });
  }

  return (
    <div className="signupformcontainer h-screen flex justify-center items-center ">
      <div className="container max-w-fit h-auto flex  items-center gap-16 border-2 pt-10 pb-10 bg-white">
        <div className="w-full ">
          <div>
            <h1 className="text-2xl font-black text-[#22577A] mb-6">Sign Up</h1>
            <p className="w-5/6 mb-10 text-[#6C7278]">
              Fill your information below or register using your social account.
            </p>
          </div>
          <form onSubmit={onSubmit} className="w-full">
            <div className="mb-5 flex justify-between gap-6">
              <div>
                <label
                  htmlFor="first-name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  onChange={onChange}
                  name="firstName"
                  type="text"
                  id="first-name"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  placeholder="Enter first name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  onChange={onChange}
                  name="lastName"
                  type="text"
                  id="last-name"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  placeholder="Enter last name"
                  required
                />
              </div>
            </div>
            <div className="mb-5">
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
                placeholder="name@flowbite.com"
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
              Sign Up
            </button>
            <Link href={"/signin"}>
              <label className="text-center cursor-pointer">
                <p className="mt-10">
                  Already have an account?{" "}
                  <span className="text-[#00ABCD] font-black underline">
                    Sign In
                  </span>
                </p>
              </label>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
