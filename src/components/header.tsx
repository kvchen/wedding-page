import React from "react";

export default function Header() {
  return (
    <div
      className={`flex flex-row items-center p-4 fixed z-10 w-full font-light text-lg`}
    >
      kevin<span className="text-primary">+</span>lena
    </div>
  );
}
