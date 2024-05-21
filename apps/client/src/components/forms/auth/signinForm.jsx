"use client";

import React from "react";
import { Button } from "../../ui/button";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { FormProvider, useForm } from "react-hook-form";

// // import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "../../ui/form";
// import { Input } from "../../ui/input";
// import { Button } from "radix-ui";
// import { z } from "zod";

// const formSchema = z.object({
//   username: z.string().min(2).max(50),
// });

export default function SigninForm() {
  return (
    <div className="">
      <form>
        <h1 className="mb-5">signin page</h1>
        <h1>enter your email</h1>
        <input
          className="border border-bg-gray-800 w-full mb-5"
          type="email"
          placeholder="mail@example.com"
        ></input>

        <h1>password</h1>
        <input
          className="border border-bg-gray-800 w-full mb-5"
          type="password"
          placeholder="password"
        ></input>

        <Button className="w-full">submit</Button>
      </form>
    </div>
  );
}
