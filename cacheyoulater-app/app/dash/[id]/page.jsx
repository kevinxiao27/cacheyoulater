"use client";

import {
  logo,
  create_button,
  Create_Cache,
  back,
  gold,
  profile,
} from "@/assets";
import Image from "next/image";
import React, { useCallback, useEffect, useState, useInterval } from "react";
import Box from "../tools/Box";
import CreateCache from "../tools/CreateCache";
import ViewCache from "../tools/ViewCache";
import Congratulations from "../tools/Congratuations";
import Prize from "../tools/Prize";
import { usePathname } from "next/navigation";

// async function getCache(userId) {
//   const res = await fetch(`http://localhost:8080/user/friends/${userId}`, {
//     next: { revalidate: 10 },
//   });
//   const data = await res.json();
//   return data?.items;
// }

const page = () => {
  const [ButtonScaled, setButtonScaled] = useState(false);
  const [View_Cache, setViewCache] = useState(false);

  const [isVisible, setIsVisible] = useState(true);

  const [RSelected, setRSelected] = useState({
    date: "000-00-00",
    description: "---not-found---",
    file: { type: "Buffer", data: Array(6) },
    gps: "---not-found---",
    owner: "---not-found---",
    title: "Test ---not-found--- changed name!",
    unlockedUsers: ["---not-found---"],
  });

  const [Bruh, setBruh] = useState(true);
  const [caches, setCaches] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const path = usePathname();
        const userid = path.split("/")[2];
        //   console.log(userid);
        const response = await fetch(
          `http://localhost:8080/user/friends/${userid}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        setCaches(data.caches);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle the error
      }
    };
    fetchData(); // Call the fetchData function when the component mounts
  }, []);

  const handleScroll = () => {
    const scroll = window.scrollY;
    console.log(scroll, isVisible);

    const shouldBeVisible = scroll <= 40;
    if (shouldBeVisible === isVisible) return;
    setIsVisible(shouldBeVisible);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    setBruh(!Bruh);
    console.log(window.scrollY);
  }, []);

  return (
    <div className="relative w-screen h-screen z-20">
      <div className="fixed z-10 pointer-events-none">
        <div className="absolute flex flex-row justify-left items-center top-0 w-full h-[20vh]">
          <div
            className={`${
              View_Cache
                ? "-translate-y-[15vh] opacity-20"
                : "translate-y-[0vh] opacity-100"
            } w-full mx-4 transition duration-900 ease-in-out flex flex-row justify-items-center bg-white bg-opacity-100 rounded-full pt-8 -mt-12 outline outline-black`}
          >
            <Image
              src={logo}
              width={200}
              height={200}
              alt={"bruh this is jsut a test chill"}
              className={`ml-2 -mt-8 z-10 visible transition-transform duration-300 transform ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            />
            <Image
              src={profile}
              width={60}
              height={10}
              alt={"bruh this is jsut a test chill"}
              className={`ml-[12vh] -mt-8 z-10 visible transition-transform duration-300 transform ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </div>
        <div className="w-screen h-screen overflow-hidden relative pointer-events-none">
          <div className="absolute bg-blur-2xl flex flex-row justify-center items-center bottom-0 w-full h-[20vh]">
            <Image
              src={create_button}
              width={75}
              height={75}
              alt={"(+)"}
              className={`${
                ButtonScaled || View_Cache
                  ? "scale-125 opacity-0 pointer-events-none"
                  : "scale-100 opacity-100 pointer-events-auto"
              }  transition duration-200 ease-in-out hover:cursor-pointer z-30`}
              onMouseDown={() => setButtonScaled(true)}
            />
          </div>

          {/* ------ BUTTON SCALED ------- */}
          <div
            className={`${
              ButtonScaled ? "translate-y-[0vh]" : "translate-y-[100vh]"
            } transition duration-500 ease-in-out`}
          >
            {/* <CreateCache buttonscaled={setButtonScaled} /> */}
            <Congratulations />
          </div>

          {/* ------ VIEWCACHE ------- */}
          <div
            className={`${
              View_Cache ? "-translate-y-[15vh]" : "translate-y-[120vh]"
            } transition duration-500 ease-in-out`}
          >
            <ViewCache buttonscaled={setViewCache} jsoninfo={RSelected} />
          </div>
        </div>
      </div>

      {/* ------ BOXES ------- */}

      <div className="bg-white w-screen flex flex-col justify-center items-center gap-5">
        {/* BOXES */}
        <div className="w-screen h-[10vh] overflow-visible" />

        {caches.map((cache) => (
          <div
            key={cache._id}
            className="mb-2"
            onClick={() => setViewCache(true)}
          >
            <Box jsoninfo={setRSelected}>{cache}</Box>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
