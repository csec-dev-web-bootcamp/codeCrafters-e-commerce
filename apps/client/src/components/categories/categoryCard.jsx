import * as React from "react";

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "../../ui/select";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default async function CategoryCard() {
  return (
    <div className="mb-10 flex items-center justify-center gap-4">
      <Card className="w-[200px]">
        <CardHeader>
          <CardTitle className="text-lg">Mobile</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
      </Card>
      <Card className="w-[200px]">
        <CardHeader>
          <CardTitle className="text-lg">Laptops</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
      </Card>
      <Card className="w-[200px]">
        <CardHeader>
          <CardTitle className="text-lg">Accessories</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
      </Card>
      <Card className="w-[200px]">
        <CardHeader>
          <CardTitle className="text-lg">Mobile</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
      </Card>
      {/* <div className="w-[350px] h-[100px] border border-slate-500 rounded-md">
        <div className="card  ">Skate shop</div>
      </div> */}
    </div>
  );
}
