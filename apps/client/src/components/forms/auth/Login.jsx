"use client";
import Image from "next/image";
import Link from "next/link";

import useMutation from "@app/client/hooks/use-mutation";
import { useState } from "react";
import { login } from "@app/client/data/auth";
import { Button } from "../../ui/button";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";

export function Login() {
  const { isMutating, startMutation } = useMutation();
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  console.log(formState);

  function onChange(e) {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    startMutation(async () => {
      const res = await login(formState);
      if (res.error) {
        throw new Error(res.error.message);
      }
    });
  }
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <form className="grid gap-4" onSubmit={onSubmit}>
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
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={isMutating}>
              Login
            </Button>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href={"/signup"} className="underline">
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
