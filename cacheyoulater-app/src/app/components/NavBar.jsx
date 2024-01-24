"use client"

import React, { useState } from "react"

const NavBar = () => {
  const [nav, setNav] = useState(false)
  return (
    <>
      <div
        className={`absolute bottom-[25px] w-full grid grid-cols-3 px-auto opacity-0 ${
          nav
            ? "transition duration-700 block opacity-100"
            : "invisible opacity-0"
        } ease-in-out`}
      >
        <div className="mx-auto cols-start-2 col-end-3 grid grid-cols-2 gap-[50px]">
          <button className="border-2 border-white px-8 rounded-md grid place-content-center text-sm">
            Create Cache
          </button>
          <button className="border-2 border-white px-8 rounded-md grid place-content-center text-sm">
            View Mission Caches
          </button>
          <button className="border-2 border-white px-8 rounded-md grid place-content-center text-sm">
            Profile
          </button>
          <button className="border-2 border-white px-8 rounded-md grid place-content-center text-sm">
            Past Caches
          </button>
        </div>
      </div>
      <div className="absolute bottom-[70px] w-full z-[40]">
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
