'use client';

import { logo,create_button } from "@/assets";
import Image from "next/image";
import React, { useState } from "react";

const page = () => {
    const [ButtonScaled, setButtonScaled] = useState(false);
    return (
        <div className="w-screen h-screen">
            page
            <div className="absolute flex flex-row justify-center items-center bottom-0 w-full h-[20vh]">
                <Image
                    src={create_button}
                    width={75}
                    height={75}
                    alt={"bruh this is jsut a test chill"}
                    className={`${ButtonScaled ? "scale-125" : "scale-100"} transition duration-200 ease-in-out`}
                    onMouseEnter={()=>setButtonScaled(true)}
                    onMouseLeave={()=>setButtonScaled(false)}
                    onMouse
                />
            </div>
        </div>
    );
};

export default page;
