import Link from "next/link";
import React from "react";

export const Nav = () => {
  return (
    <div className="flex justify-between">
      <h1 className="text-cyan-600 p-14 font-semibold">LoanGuru</h1>
      <div className="flex">
        <Link href={"/"}>
          <div className="p-14">Home</div>
        </Link>
        <Link href={"/#card"}>
          <div className="p-14">Loans</div>
        </Link>
        <Link href={"/#emi"}>
          <div className="p-14">Emi Calculator</div>
        </Link>
      </div>
      
    </div>
  );
};
