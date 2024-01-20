import { create_button } from "@/assets";
import Image from "next/image";
import React from "react";

const page = () => {
    return (
        <div className="w-screen h-screen">
            page
            <div className="absolute flex flex-row justify-center items-center bottom-0 w-full h-[20vh]">
                <Image src={create_button} width={75} height={75} alt={"bruh this is jsut a test chill"} className="hover:scale-125 scale-100 transition duratoin-200 ease-in-out" />
            </div>
        </div>
    );
};

export default page;
