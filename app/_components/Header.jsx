"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

function Header() {
  const path = usePathname();
  useEffect(() => {}, []);
  return (
    <div className="p-6 px-10 flex justify-between shadow-sm fixed top-0 z-10 bg-white w-full">
      <div className="flex gap-10 items-center">
        <Image src={"./logo.svg"} width={120} height={120} alt="logo" />
        <ul className="hidden md:flex gap-10">
          <Link href={"/"}>
            <li
              className={`hover:text-primary font-medium text-sm cursor-pointer ${
                path == "/" && "text-primary"
              }`}
            >
              For Sale
            </li>
          </Link>
          <li
            className={`hover:text-primary font-medium text-sm cursor-pointer ${
              path == "/about" && "text-primary"
            }`}
          >
            For Rent
          </li>
          <li
            className={`hover:text-primary font-medium text-sm cursor-pointer ${
              path == "/agent-finder" && "text-primary"
            }`}
          >
            Agent Finder
          </li>
        </ul>
      </div>
      <div className="flex gap-2">
        <Button className="flex gap-2">
          <Plus className="size-5" /> Post Your Ad
        </Button>
        <Button variant="outline">Login</Button>
      </div>
    </div>
  );
}

export default Header;
