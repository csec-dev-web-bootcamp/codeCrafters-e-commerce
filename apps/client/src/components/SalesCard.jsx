/* eslint-disable @next/next/no-img-element */
/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */

/** @format */

import Image from "next/image";
import React from "react";

export default function SalesCard(props) {
  return (
    <div className="  flex flex-wrap justify-between gap-3 ">
      <section className="flex justify-between gap-3 ">
        <div className=" h-12 w-12 rounded-full bg-gray-100 p-1">
          <img
            className=""
            width={300}
            height={300}
            src={`https://st3.depositphotos.com/13159112/17145/v/380/depositphotos_171453724-stock-illustration-default-avatar-profile-icon-grey.jpg`}
            alt="avatar"
          />
        </div>
        <div className="text-sm">
          <p>{props.firstName}</p>
          <div className="text-ellipsis overflow-hidden whitespace-nowrap w-[120px]  sm:w-auto  text-gray-400">
            {props.email}
          </div>
        </div>
      </section>
      <p>{props.saleAmount}</p>
    </div>
  );
}
