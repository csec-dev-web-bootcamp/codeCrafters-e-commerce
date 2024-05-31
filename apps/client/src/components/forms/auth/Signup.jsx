"use client";
import Image from "next/image";
import Link from "next/link";

import useMutation from "@app/client/hooks/use-mutation";
import { useState } from "react";
import { register } from "@app/client/data/auth";
import { Button } from "../../ui/button";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";

export function SignUp() {
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
    <div className="w-full lg:grid lg:min-h-[600px] lg:max-h-screen lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Sign Up</h1>
            <p className="text-balance text-muted-foreground">
              Enter your personal info
            </p>
          </div>
          <form className="grid gap-4" onSubmit={onSubmit}>
            <div className="grid gap-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                onChange={onChange}
                name="firstName"
                type="firstName"
                id="firstName"
                placeholder="Your First Name"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                onChange={onChange}
                name="lastName"
                type="lastName"
                id="lastName"
                placeholder="Your Last Name"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                onChange={onChange}
                name="email"
                type="email"
                id="email"
                placeholder="mail@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input
                onChange={onChange}
                name="password"
                id="password"
                type="password"
                placeholder="Password"
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={isMutating}>
              Sign Up
            </Button>
            <div className="mt-4 text-center text-sm">
              Already Have an account{" "}
              <Link href={"/signin"} className="underline">
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/images/electronicShop.jpg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
