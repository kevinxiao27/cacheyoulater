"use client";

import { logo, create_button } from "@/assets";
import Image from "next/image";
import React, { useState } from "react";
import Create_cache from "./Create_cache";

const page = () => {
    const [ButtonScaled, setButtonScaled] = useState(false);
    return (
        <div className="w-screen h-screen">
            <div className="absolute flex flex-row justify-left items-center top-0 w-full h-[20vh]">
                <Image
                    src={logo}
                    width={200}
                    height={200}
                    alt={"bruh this is jsut a test chill"}
                    className={`ml-2 -mt-24 z-10`}
                />
            </div>
            <div className="absolute bg-blur-2xl flex flex-row justify-center items-center bottom-0 w-full h-[20vh]">
                <Image
                    src={create_button}
                    width={75}
                    height={75}
                    alt={"bruh this is jsut a test chill"}
                    className={`${
                        ButtonScaled ? "scale-125" : "scale-100"
                    } transition duration-200 ease-in-out`}
                    onMouseEnter={() => setButtonScaled(true)}
                    onMouseLeave={() => setButtonScaled(false)}
                    onMouse
                />
            </div>
            <div className="bg-white h-screen w-screen">

            </div>
            <Create_cache />
        </div>
    );
};

export default page;
