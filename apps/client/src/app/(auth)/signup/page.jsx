import SignupForm from "@app/client/components/forms/auth/signupForm";
import React from "react";

export default function page() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="w-3/12 h-fit px-3 py-4">
        <SignupForm />
      </div>
    </div>
  );
}
