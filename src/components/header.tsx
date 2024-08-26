import React from "react";
import { Link } from "gatsby";

export default function Header() {
  return (
    <div className="bg-header-pattern bg-[4px 4px] fixed z-10 flex w-full flex-row items-center p-4 text-lg font-light backdrop-blur-sm">
      <Link to="/">
        kevin<span className="text-primary">+</span>lena
      </Link>
    </div>
  );
}
