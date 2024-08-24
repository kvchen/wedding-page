import React from "react";
import { Link } from "gatsby";

export default function Header() {
  return (
    <div
      className={`flex flex-row items-center p-4 fixed z-10 w-full font-light text-lg`}
    >
      <Link to="/">
        kevin<span className="text-primary">+</span>lena
      </Link>
    </div>
  );
}
