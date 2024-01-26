"use client"

import React, { useState } from "react"

const NavBar = () => {
  const [nav, setNav] = useState(true)
  return (
    <>
      <div
        className={`absolute bottom-[25px] w-full grid grid-cols-4 px-auto opacity-0 ${
          nav
            ? "transition duration-700 block opacity-100"
            : "invisible opacity-0"
        } ease-in-out`}
      >
        <div></div>
        <div className="mx-auto col-span-2 grid grid-cols-2 gap-[50px]">
          <button className="w-16 h-16 border-2 border-white px-3 rounded-md grid place-content-center text-sm">
            Create Cache
          </button>
          <button className="w-16 h-16 border-2 border-white px-3 rounded-md grid place-content-center text-sm">
            View Mission Caches
          </button>
          <button className="w-16 h-16 border-2 border-white px-3 rounded-md grid place-content-center text-sm">
            Profile
          </button>
          <button className="w-16 h-16 border-2 border-white px-3 rounded-md grid place-content-center text-sm">
            Past Caches
          </button>
        </div>
      </div>
      <div className="absolute bottom-[93px] w-full z-[40]">
        <div className="flex justify-center">
          <button
            className="border-white border-2 h-10 px-3 rounded-md grid place-content-center text-sm"
            onClick={() => {
              setNav(!nav)
            }}
          >
            x
          </button>
        </div>
      </div>
    </>
  )
}

export default NavBar
